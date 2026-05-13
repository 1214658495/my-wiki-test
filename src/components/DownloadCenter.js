import React, { useState } from 'react';
import Papa from 'papaparse';

const OSS_INTRINSICS_BASE_URL = "https://sgword-service.oss-cn-heyuan.aliyuncs.com/intrinsics/";
const OSS_MODELS_CSV_URL = "https://sgword-service.oss-cn-heyuan.aliyuncs.com/configs/models.csv";
const LEAD_API_URL = 'https://ai-api.sensing-world.com/api/lead';

function UserRegistrationModal({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({ name: '', company: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) return;
    setSubmitting(true);
    await onSubmit(formData);
    setSubmitting(false);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff', borderRadius: '12px', padding: '2rem',
        maxWidth: '480px', width: '90%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}>
        <h3 style={{ marginTop: 0, color: 'var(--ifm-color-primary)' }}>
          📥 Download Technical Downloads
        </h3>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          Please share your details to access SENSING technical resources.   
          Registration is one-time only.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Company <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
              Work Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              placeholder="your.name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button
              type="submit"
              className="button button--primary"
              disabled={submitting}
              style={{ flex: 1 }}
            >
              {submitting ? 'Submitting...' : 'Download Now'}
            </button>
            <button
              type="button"
              className="button button--outline"
              onClick={onClose}
              style={{ flex: 0 }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function DownloadCenter() {
  const [searchType, setSearchType] = useState('model');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [snFound, setSnFound] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingDownload, setPendingDownload] = useState(null);

  const handleTabSwitch = (type) => {
    setSearchType(type);
    setKeyword('');
    setResults(null);
    setSnFound(null);
    setErrorMsg('');
  };

  const logDownloadToBackend = async (userInfo, fileName) => {
    try {
      await fetch(LEAD_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...userInfo, fileName }),
      });
    } catch (err) {
      console.warn('Failed to log download record:', err);
    }
  };

  const handleDownloadRequest = (url, fileName, directDownload = false) => {
    const registeredUser = localStorage.getItem('sensing_registered_user');

    if (registeredUser || directDownload) {
      const user = registeredUser ? JSON.parse(registeredUser) : null;
      if (user) logDownloadToBackend(user, fileName);
      if (directDownload) {
        forceDownloadTxt(url, fileName);
      } else {
        window.open(url, '_blank');
      }
    } else {
      setPendingDownload({ url, fileName, directDownload });
      setShowAuthModal(true);
    }
  };

  const handleRegisterSubmit = async (userInfo) => {
    localStorage.setItem('sensing_registered_user', JSON.stringify(userInfo));
    setShowAuthModal(false);

    if (pendingDownload) {
      await logDownloadToBackend(userInfo, pendingDownload.fileName);
      if (pendingDownload.directDownload) {
        forceDownloadTxt(pendingDownload.url, pendingDownload.fileName);
      } else {
        window.open(pendingDownload.url, '_blank');
      }
      setPendingDownload(null);
    }
  };

  const forceDownloadTxt = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = blobUrl;
      a.download = `${filename}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    } catch (err) {
      alert("Download failed. Please try again later.");
    }
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
        const timestamp = new Date().getTime();
        const res = await fetch(`${OSS_MODELS_CSV_URL}?t=${timestamp}`);

        if (!res.ok) throw new Error("Unable to load the product database.");

        const csvText = await res.text();
        const parsedData = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const models = parsedData.data;

        const matched = models.filter(item =>
          item.modelName && item.modelName.toLowerCase().includes(keyword.trim().toLowerCase())
        );

        if (matched.length > 0) {
          setResults(matched);
        } else {
          setErrorMsg("No matching product model found. Please refine your search.");
        }
      } else {
        const cleanSn = keyword.trim().toUpperCase();
        const targetUrl = `${OSS_INTRINSICS_BASE_URL}${cleanSn}.txt`;

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

  return (
    <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '12px', border: '1px solid #e0e0e0' }}>

      <ul className="tabs tabs--block" style={{ marginBottom: '1.5rem' }}>
        <li className={`tabs__item ${searchType === 'model' ? 'tabs__item--active' : ''}`}
            onClick={() => handleTabSwitch('model')} style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
          Search by Product Model
        </li>
        <li className={`tabs__item ${searchType === 'sn' ? 'tabs__item--active' : ''}`}
            onClick={() => handleTabSwitch('sn')} style={{ cursor: 'pointer', transition: 'all 0.3s' }}>
          Search by SN
        </li>
      </ul>

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

      {errorMsg && (
        <div className="alert alert--danger" role="alert" style={{ marginTop: '1.5rem' }}>
          {errorMsg}
        </div>
      )}

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
                    <button
                      className="button button--outline button--primary button--sm"
                      onClick={() => handleDownloadRequest(item.datasheetUrl, `${item.modelName}-Datasheet`)}
                    >
                      📄 Datasheet
                    </button>
                  )}
                  {item.model3dUrl && (
                    <button
                      className="button button--outline button--success button--sm"
                      onClick={() => handleDownloadRequest(item.model3dUrl, `${item.modelName}-3DModel`)}
                    >
                      📦 3D Model
                    </button>
                  )}
                  {item.registerConfigUrl && (
                    <button
                      className="button button--outline button--warning button--sm"
                      onClick={() => handleDownloadRequest(item.registerConfigUrl, `${item.modelName}-SerDesInit`)}
                    >
                      ⚙️ SerDes Init Script
                    </button>
                  )}
                  {item.imageSamplesUrl && (
                    <button
                      className="button button--outline button--info button--sm"
                      onClick={() => handleDownloadRequest(item.imageSamplesUrl, `${item.modelName}-ImageSamples`)}
                    >
                      🖼️ Image Samples
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {snFound && (
        <div className="alert alert--success" role="alert" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h3>✅ Success! Intrinsic data found.</h3>
          <p style={{ marginBottom: '0.5rem' }}><strong>Serial Number (SN):</strong> {snFound.sn}</p>
          <button
            className="button button--success button--lg"
            onClick={() => handleDownloadRequest(snFound.url, snFound.sn, true)}
            style={{ marginTop: '0.5rem', cursor: 'pointer' }}
          >
            📥 Download Intrinsic Data (.txt)
          </button>
        </div>
      )}

      {showAuthModal && (
        <UserRegistrationModal
          onSubmit={handleRegisterSubmit}
          onClose={() => {
            setShowAuthModal(false);
            setPendingDownload(null);
          }}
        />
      )}
    </div>
  );
}