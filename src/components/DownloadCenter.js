import React, { useState } from 'react';
import Papa from 'papaparse'; // 引入 CSV 解析库

// 配置阿里云 OSS 的基础路径
const OSS_INTRINSICS_BASE_URL = "https://sgword-service.oss-cn-heyuan.aliyuncs.com/intrinsics/";
// 配置文件在 OSS 中的地址
const OSS_MODELS_CSV_URL = "https://sgword-service.oss-cn-heyuan.aliyuncs.com/configs/models.csv";

export default function DownloadCenter() {
  const [searchType, setSearchType] = useState('model'); // 'model' 或 'sn'
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null); // 存型号结果
  const [snFound, setSnFound] = useState(null); // 存SN结果
  const [errorMsg, setErrorMsg] = useState('');

  // 切换选项卡时，自动清空输入框和上次的查询结果
  const handleTabSwitch = (type) => {
    setSearchType(type);
    setKeyword('');
    setResults(null);
    setSnFound(null);
    setErrorMsg('');
  };

  const handleSearch = async () => {
    if (!keyword.trim()) {
      setErrorMsg("Please enter a search keyword.");
      return;
    }
    
    setLoading(true);
    setErrorMsg('');
    setResults(null);
    setSnFound(null);

    try {
      if (searchType === 'model') {
        // ==========================================
        // 逻辑 A：按型号查询（直连 OSS 读取最新 CSV，实时解析）
        // ==========================================
        const timestamp = new Date().getTime(); // 防止浏览器缓存老文件
        const res = await fetch(`${OSS_MODELS_CSV_URL}?t=${timestamp}`);
        
        if (!res.ok) throw new Error("Unable to load the product database.");
        
        const csvText = await res.text();
        // 将 CSV 文本转成 JSON 数组 (header: true 代表把第一行作为字段名)
        const parsedData = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const models = parsedData.data;

        // 模糊匹配逻辑
        const matched = models.filter(item => 
          item.modelName && item.modelName.toLowerCase().includes(keyword.trim().toLowerCase())
        );
        
        if (matched.length > 0) {
          setResults(matched);
        } else {
          setErrorMsg("No matching product model found. Please refine your search.");
        }

      } else {
        // ==========================================
        // 逻辑 B：按 SN 查询（直连 OSS 盲查 .txt 文件）
        // ==========================================
        // 强制大写，因为 OSS 是大小写敏感的
        const cleanSn = keyword.trim().toUpperCase();
        const targetUrl = `${OSS_INTRINSICS_BASE_URL}${cleanSn}.txt`;
        
        // 发起 HEAD 请求，只探测文件存不存在，不下载文件实体，速度极快
        const response = await fetch(targetUrl, { method: 'HEAD' });
        
        if (response.ok) {
          setSnFound({ sn: cleanSn, url: targetUrl });
        } else {
          setErrorMsg(`No intrinsic data found for SN [${cleanSn}]. Please verify the SN or contact support.`);
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Network request failed. Please check your connection or contact technical support.");
    } finally {
      setLoading(false);
    }
  };

  // 辅助函数：强制下载 .txt 文件，防止浏览器直接打开成网页乱码
  const forceDownloadTxt = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = `${filename}.txt`; // 强制下载文件名为 SN码.txt
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    } catch (err) {
      alert("Download failed. Please try again later.");
    }
  };

  return (
    <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
      
      {/* 选项卡切换 */}
      <ul className="tabs tabs--block" style={{ marginBottom: '1.5rem' }}>
        <li className={`tabs__item ${searchType === 'model' ? 'tabs__item--active' : ''}`} 
            onClick={() => handleTabSwitch('model')} style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
          Search by Product Model
        </li>
        <li className={`tabs__item ${searchType === 'sn' ? 'sn' === searchType ? 'tabs__item--active' : '' : ''}`} 
            onClick={() => handleTabSwitch('sn')} style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
          Search by SN
        </li>
      </ul>

      {/* 搜索框区域 */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={searchType === 'model' ? "Enter Product Model name (e.g., SG3-ISX031C-GMSL2)" : "Enter device SN (e.g., H190S-E01220525)"}
          style={{ flex: 1, padding: '12px 16px', fontSize: '16px', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button 
          className="button button--primary button--lg" 
          onClick={handleSearch}
          disabled={loading}
          style={{ minWidth: '120px' }}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* 错误提示 */}
      {errorMsg && (
        <div className="alert alert--danger" role="alert" style={{ marginTop: '1.5rem' }}>
          {errorMsg}
        </div>
      )}

      {/* 结果展示区：按型号 */}
      {results && (
        <div style={{ marginTop: '2rem' }}>
          <h3>🔍 Matching Resources:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {results.map((item, index) => (
              <div key={index} style={{ padding: '1.5rem', background: '#fff', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                
                <strong style={{ fontSize: '1.3rem', color: 'var(--ifm-color-primary)' }}>{item.modelName}</strong>
                <p style={{ margin: '0.5rem 0 1rem 0', color: '#666', fontSize: '0.95rem' }}>{item.description}</p>
                
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                  {item.datasheetUrl && (
                    <a className="button button--outline button--primary button--sm" href={item.datasheetUrl} target="_blank" rel="noreferrer">
                      📄 Datasheet
                    </a>
                  )}
                  {item.model3dUrl && (
                    <a className="button button--outline button--success button--sm" href={item.model3dUrl} target="_blank" rel="noreferrer">
                      📦 3D CAD Model
                    </a>
                  )}
                  {item.registerConfigUrl && (
                    <a className="button button--outline button--warning button--sm" href={item.registerConfigUrl} target="_blank" rel="noreferrer">
                      ⚙️ Init Script
                    </a>
                  )}
                  {item.imageSamplesUrl && (
                    <a className="button button--outline button--info button--sm" href={item.imageSamplesUrl} target="_blank" rel="noreferrer">
                      🖼️ Image Samples
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 结果展示区：按 SN */}
      {snFound && (
        <div className="alert alert--success" role="alert" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h3>✅ Success! Intrinsic data found.</h3>
          <p style={{ marginBottom: '0.5rem' }}><strong>Serial Number (SN):</strong> {snFound.sn}</p>
          <button 
            className="button button--success button--lg" 
            onClick={() => forceDownloadTxt(snFound.url, snFound.sn)}
            style={{ marginTop: '0.5rem', cursor: 'pointer' }}
          >
            📥 Download Intrinsic Data (.txt)
          </button>
        </div>
      )}
    </div>
  );
}