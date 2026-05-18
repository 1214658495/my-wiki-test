---
sidebar_position: 1
title: 产品选型指南
---

# CIG4-8H 产品介绍
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="SENSING CIG4-8H Video Injection Card" style={{maxWidth: '40%', height:'auto', borderRadius: '8px'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    SENSING CIG4-8H GMSL 视频注入卡
  </p>
</div>

<div style={{fontSize: '1.1em', lineHeight: '1.6', color: '#495057', marginBottom: '1.5rem'}}>
    <strong>CIG4-8H</strong> 是一款专用 PCIe 硬件解决方案，可通过真实的 GMSL（Gigabit Multimedia Serial Link）接口，将预录制或仿真的视频数据直接注入车载电子控制单元（ECU）。无需实体摄像头或真实道路场景，即可对 ADAS/AD 算法进行完整测试与验证。
  </div>

<!-- ## What is the CIG4-8H GMSL Video Injection Card?

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  
  <div style={{fontSize: '1.1em', lineHeight: '1.6', color: '#495057', marginBottom: '1.5rem'}}>
    <strong>CIG4-8H</strong> 是一款专用 PCIe 硬件解决方案，可通过真实的 GMSL（Gigabit Multimedia Serial Link）接口，将预录制或仿真的视频数据直接注入车载电子控制单元（ECU）。无需实体摄像头或真实道路场景，即可对 ADAS/AD 算法进行完整测试与验证。
  </div>

  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1.5rem', border: '1px solid #bbdefb'}}>
      <h4 style={{marginBottom: '1rem', color: '#1976d2'}}>
        硬件 解决方案
      </h4>
      <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
        <li>PCIe Gen3 x8 interface card</li>
        <li>最高 8 GMSL output channels</li>
        <li>Real-time signal generation</li>
      </ul>
    </div>

    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1.5rem', border: '1px solid #e1bee7'}}>
      <h4 style={{marginBottom: '1rem', color: '#7b1fa2'}}>
        Data Sources
      </h4>
      <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
        <li>Real-world recorded camera data</li>
        <li>Simulation-generated data</li>
        <li>Custom validation datasets</li>
      </ul>
    </div>

    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1.5rem', border: '1px solid #c8e6c9'}}>
      <h4 style={{marginBottom: '1rem', color: '#388e3c'}}>
        Target Applications
      </h4>
      <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
        <li>ADAS/AD algorithm validation</li>
        <li>Simulation data for algorithm validation</li>
        <li>ISP algorithm simulation validation</li>
      </ul>
    </div>
  </div>
</div>

 -->



## 为什么选择 CIG4-8H 视频注入卡？

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H.png" alt="SENSING CIG4-8H Video Injection Card" style={{width: 400, height:'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    SENSING CIG4-8H - Professional 视频注入方案 for ADAS/AD 开发
  </p>
</div> -->

<!-- <div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h3 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    Core 值 Proposition
  </h3>
  <div style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '1rem', color: '#495057'}}>
    <strong>Precise Real-World Data Reproduction + Accelerated Algorithm Iteration + One-Time Data Collection, Repeated Algorithm Validation</strong>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
        </svg>
      </div>
      <strong>Data Replay</strong><br/>
      <span style={{fontSize: '0.9em'}}>Precise scenario reproduction</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
        </svg>
      </div>
      <strong>Fast Iteration</strong><br/>
      <span style={{fontSize: '0.9em'}}>Accelerated testing cycles</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <strong>Algorithm Focus</strong><br/>
      <span style={{fontSize: '0.9em'}}>Dedicated validation platform</span>
    </div>
  </div>
</div> -->

**CIG4-8H GMSL 视频注入卡** 专为解决本地视频注入与仿真验证难题而设计。其核心价值在于精确复现真实场景数据流，通过一次采集、多次算法验证，加速产品测试和算法迭代。


---

### 视频注入解决哪些问题？


<!-- #### Why Traditional Real-Vehicle Testing Falls Short -->

<div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem', alignItems: 'center'}}>
  <div style={{flex: 1, minWidth: 300}}>
    <div style={{background: '#ffebee', borderRadius: '8px', padding: '1.5rem', border: '2px solid #f44336'}}>
      <h4 style={{color: '#d32f2f', marginBottom: '1rem', textAlign: 'center'}}>
        <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
          <circle cx="12" cy="12" r="10"/>
          <path d="m15 9-6 6"/>
          <path d="m9 9 6 6"/>
        </svg> -->
        传统测试限制
      </h4>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
        <div style={{background: '#ffcdd2', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M2 17.5A17.5 17.5 0 0 0 0 10c0-2.5 2.5-5 5-5s5 2.5 5 5-2.5 5-5 5c-1.7 0-3-.5-4.5-1.5z"/>
            <path d="M8.5 8.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2 1.5.5 2 0 .5-1.5 0-2z"/>
            <path d="M17 13h-2l-2 3 2 3h2l2-3-2-3z"/>
          </svg> -->
          <strong>天气依赖:</strong> 测试受环境条件限制
        </div>
        <div style={{background: '#ffcdd2', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg> -->
          <strong>成本高:</strong> 车队、驾驶员、保险和燃油等费用
        </div>
        <div style={{background: '#ffcdd2', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
          </svg> -->
          <strong>安全风险:</strong> 无法安全测试危险场景
        </div>
        <div style={{background: '#ffcdd2', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
          </svg> -->
          <strong>重复性差:</strong> 难以复现完全一致的条件
        </div>
        <div style={{background: '#ffcdd2', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg> -->
          <strong>耗时长:</strong> 数据采集周期通常需要数周或数月
        </div>
      </div>
    </div>
  </div>

  <div style={{textAlign: 'center', fontSize: '2em', color: '#666'}}>
    ➡️
  </div>

  <div style={{flex: 1, minWidth: 300}}>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1.5rem', border: '2px solid #4caf50'}}>
      <h4 style={{color: '#388e3c', marginBottom: '1rem', textAlign: 'center'}}>
        <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c.5 0 .9-.4.9-.9V6.1c0-.5-.4-.9-.9-.9H3c-.5 0-.9.4-.9.9v5c0 .5.4.9.9.9h18z"/>
        </svg> -->
        视频注入方案
      </h4>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
        <div style={{background: '#c8e6c9', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg> -->
          <strong>可控环境:</strong> 基于实验室，不受天气影响
        </div>
        <div style={{background: '#c8e6c9', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg> -->
          <strong>成本可控:</strong> 一次部署，可无限次测试
        </div>
        <div style={{background: '#c8e6c9', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg> -->
          <strong>安全测试:</strong> 无风险验证危险场景
        </div>
        <div style={{background: '#c8e6c9', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg> -->
          <strong>完全可重复:</strong> 每次条件保持一致
        </div>
        <div style={{background: '#c8e6c9', borderRadius: '6px', padding: '0.8rem'}}>
          <!-- <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
          </svg> -->
          <strong>快速迭代:</strong> 算法变更后可立即测试
        </div>
      </div>
    </div>
  </div>
</div>

#### 解决的关键客户痛点

**开发效率挑战:**
- **算法迭代瓶颈:** 消除每次算法更新都需要数周采集数据的周期
- **场景覆盖缺口:** 可覆盖自然采集中难以获得的大量边缘场景和极端场景
- **测试一致性问题:** 去除影响算法验证结果的环境变量
- **资源分配问题:** 让工程团队从耗时的外场测试组织工作中释放出来

**技术验证需求:**
- **回归测试需求:** 在一致的基准场景下验证算法改进
- **多条件测试:** 不受季节限制地测试不同天气、光照和交通条件
- **安全验证:** 无实体风险地验证紧急场景（AEB、碰撞避免）
- **集成测试:** 在受控实验室环境中协调多传感器验证

---

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg> -->
    三大核心应用场景
  </h4>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10V6c0-2-2-4-4-4H4c-2 0-4 2-4 4v10c0 1.1.9 2 2 2h2"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      </div>
      <strong>ADAS/AD 开发</strong><br/>
      <span style={{fontSize: '0.9em'}}>真实摄像头数据仿真</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
          <rect width="14" height="8" x="5" y="2" rx="2"/>
          <rect width="20" height="8" x="2" y="14" rx="2"/>
          <path d="M6 18h2"/>
          <path d="M12 18h6"/>
        </svg>
      </div>
      <strong>仿真验证</strong><br/>
      <span style={{fontSize: '0.9em'}}>虚拟场景测试</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </div>
      <strong>ISP 算法 仿真验证</strong><br/>
      <span style={{fontSize: '0.9em'}}>图像处理验证</span>
    </div>
  </div>
</div>

### 应用场景 1：ADAS/AD 算法开发与验证

<!-- #### 系统架构图 -->

<div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #e9ecef', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
  <h4 style={{textAlign: 'center', marginBottom: '1.8rem', color: '#495057', fontSize: '1.1em', fontWeight: '600', letterSpacing: '0.5px'}}>
    系统架构图
  </h4>

  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem', padding: '0.5rem'}}>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #1976d2', minWidth: '100px', boxShadow: '0 3px 12px rgba(25,118,210,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #1976d2, #42a5f5)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="1" style={{marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(25,118,210,0.2))'}}>
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#1976d2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>真实道路<br/>采集数据</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>ETH/SSD</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #f3e5f5 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #7b1fa2', minWidth: '100px', boxShadow: '0 3px 12px rgba(123,31,162,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #7b1fa2, #ba68c8)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/industrial_pc.png" alt="工业计算机" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(123,31,162,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#7b1fa2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>工业计算机</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>PCIe</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e8f5e8 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #388e3c', minWidth: '100px', boxShadow: '0 3px 12px rgba(56,142,60,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #388e3c, #66bb6a)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="CIG4-8H GMSL Video Injection Card" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(56,142,60,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#388e3c', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>CIG4-8H</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#388e3c', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>GMSL</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #fff3e0 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #f57c00', minWidth: '100px', boxShadow: '0 3px 12px rgba(245,124,0,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #f57c00, #ffb74d)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/automotive_ecu.png" alt="Automotive ECU" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(245,124,0,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#f57c00', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>ECU</div>
      </div>
    </div>

  </div>

  <div style={{textAlign: 'center', marginTop: '1.5rem', padding: '0.8rem', background: 'rgba(108,117,125,0.05)', borderRadius: '8px', border: '1px solid rgba(108,117,125,0.1)'}}>
    <span style={{fontSize: '0.8em', color: '#6c757d', fontWeight: '500', fontStyle: 'italic', letterSpacing: '0.3px'}}>
      面向 ADAS/AD 算法验证的真实数据注入流程
    </span>
  </div>
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', border: '1px solid #dee2e6'}}>
    <h4 style={{marginBottom: '1.5rem', color: '#495057'}}>
      <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10V6c0-2-2-4-4-4H4c-2 0-4 2-4 4v10c0 1.1.9 2 2 2h2"/>
        <circle cx="7" cy="17" r="2"/>
        <path d="M9 17h6"/>
        <circle cx="17" cy="17" r="2"/>
      </svg> -->
      面向 ADAS/AD 测试的真实摄像头数据仿真
    </h4>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
      <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', border: '1px solid #bbdefb'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <strong>车道保持辅助（LKA）</strong><br/>
        <span style={{fontSize: '0.9em'}}>多条件道路标线验证</span>
      </div>
      <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', border: '1px solid #e1bee7'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <strong>自动紧急制动</strong><br/>
        <span style={{fontSize: '0.9em'}}>行人与车辆检测准确性</span>
      </div>
      <!-- <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', border: '1px solid #c8e6c9'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </div>
        <strong>Adaptive Cruise Control</strong><br/>
        <span style={{fontSize: '0.9em'}}>跟车距离优化</span>
      </div> -->
      <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', border: '1px solid #ffcc02'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M9 9h6v6H9z"/>
            <path d="m9 1 3 3 3-3"/>
          </svg>
        </div>
        <strong>交通标志识别</strong><br/>
        <span style={{fontSize: '0.9em'}}>多天气条件测试</span>
      </div>
    </div>
  </div>
</div>

**真实数据注入能力:**
- **多摄像头仿真:** 通过 GMSL 接口注入真实道路采集的摄像头数据流（RAW/YUV 格式），替代物理摄像头输入
- **真实场景复现:** 回放真实驾驶条件，包括不同光照、天气和交通场景
- **算法性能验证:** 在受控条件下使用具备真实复杂度的数据测试 ADAS 功能
- **回归测试:** 在一致的基准场景下验证算法改进
<!-- 
**Fault Simulation & Diagnostic Testing:**

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 240, background: '#fff3e0', borderRadius: '8px', padding: '1rem', border: '1px solid #ff9800'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center'}}>摄像头 Failure Simulation</h4>
    <p style={{margin: 0, fontSize: '0.9em', textAlign: 'center'}}>测试 ECU 故障诊断与处理能力</p>
  </div>
  <div style={{flex: 1, minWidth: 240, background: '#fce4ec', borderRadius: '8px', padding: '1rem', border: '1px solid #e91e63'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e91e63" strokeWidth="2">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center'}}>Signal Degradation</h4>
    <p style={{margin: 0, fontSize: '0.9em', textAlign: 'center'}}>仿真恶劣天气或硬件老化影响</p>
  </div>
  <div style={{flex: 1, minWidth: 240, background: '#e8f5e8', borderRadius: '8px', padding: '1rem', border: '1px solid #4caf50'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center'}}>System Recovery</h4>
    <p style={{margin: 0, fontSize: '0.9em', textAlign: 'center'}}>验证故障安全机制与冗余设计</p>
  </div>
</div> -->

### 应用场景 2：仿真数据算法验证

<!-- #### 系统架构图 -->

<div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #e9ecef', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
  <h4 style={{textAlign: 'center', marginBottom: '1.8rem', color: '#495057', fontSize: '1.1em', fontWeight: '600', letterSpacing: '0.5px'}}>
    系统架构图
  </h4>

  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem', padding: '0.5rem'}}>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #1976d2', minWidth: '100px', boxShadow: '0 3px 12px rgba(25,118,210,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #1976d2, #42a5f5)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="1" style={{marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(25,118,210,0.2))'}}>
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21l4-4 4 4"/>
          <path d="M8 3l4 4 4-4"/>
        </svg>
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#1976d2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>GPU 生成<br/>数据</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>PCIe</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #f3e5f5 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #7b1fa2', minWidth: '100px', boxShadow: '0 3px 12px rgba(123,31,162,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #7b1fa2, #ba68c8)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/industrial_pc.png" alt="工业计算机" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(123,31,162,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#7b1fa2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>工业计算机</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>PCIe</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e8f5e8 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #388e3c', minWidth: '100px', boxShadow: '0 3px 12px rgba(56,142,60,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #388e3c, #66bb6a)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="CIG4-8H GMSL Video Injection Card" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(56,142,60,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#388e3c', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>CIG4-8H</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#388e3c', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>GMSL</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #fff3e0 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #f57c00', minWidth: '100px', boxShadow: '0 3px 12px rgba(245,124,0,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #f57c00, #ffb74d)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/automotive_ecu.png" alt="Automotive ECU" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(245,124,0,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#f57c00', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>ECU</div>
      </div>
    </div>

  </div>

  <div style={{textAlign: 'center', marginTop: '1.5rem', padding: '0.8rem', background: 'rgba(108,117,125,0.05)', borderRadius: '8px', border: '1px solid rgba(108,117,125,0.1)'}}>
    <span style={{fontSize: '0.8em', color: '#6c757d', fontWeight: '500', fontStyle: 'italic', letterSpacing: '0.3px'}}>
      面向仿真算法测试的虚拟场景数据流程
    </span>
  </div>
</div>

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <rect width="14" height="8" x="5" y="2" rx="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2"/>
      <path d="M6 18h2"/>
      <path d="M12 18h6"/>
    </svg> -->
    GPU 生成的虚拟场景测试
  </h4>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>
      <strong>自定义场景</strong><br/>
      <span style={{fontSize: '0.9em'}}>用户自定义测试条件</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
        </svg>
      </div>
      <strong>虚实转换</strong><br/>
      <span style={{fontSize: '0.9em'}}>精确硬件注入</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <strong>系统可靠性</strong><br/>
      <span style={{fontSize: '0.9em'}}>全面验证</span>
    </div>
    <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #ffcc02'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
        </svg>
      </div>
      <strong>极端条件</strong><br/>
      <span style={{fontSize: '0.9em'}}>真实道路难以完成的测试</span>
    </div>
  </div>
</div>

**极端场景注入能力:**
- **行人横穿场景:** 注入突然出现行人、乱穿马路和复杂横穿模式等场景
- **目标误识别测试:** 仿真护栏误识别、阴影混淆和误报场景
- **异常交通模式:** 测试异常车辆行为、施工区域和应急车辆交互
- **环境边缘场景:** 验证隧道切换、桥梁阴影和复杂光照下的性能

<!-- **Extreme Weather Condition Testing:**

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 200, background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
        <path d="M2 17.5A17.5 17.5 0 0 0 0 10c0-2.5 2.5-5 5-5s5 2.5 5 5-2.5 5-5 5c-1.7 0-3-.5-4.5-1.5z"/>
        <path d="M8.5 8.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2 1.5.5 2 0 .5-1.5 0-2z"/>
        <path d="M17 13h-2l-2 3 2 3h2l2-3-2-3z"/>
      </svg>
    </div>
    <strong>Heavy Rain</strong><br/>
    <span style={{fontSize: '0.9em'}}>Water droplet effects</span>
  </div>
  <div style={{flex: 1, minWidth: 200, background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
        <path d="M2 17.5A17.5 17.5 0 0 0 0 10c0-2.5 2.5-5 5-5s5 2.5 5 5-2.5 5-5 5c-1.7 0-3-.5-4.5-1.5z"/>
        <path d="M8.5 8.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2 1.5.5 2 0 .5-1.5 0-2z"/>
        <path d="M17 13h-2l-2 3 2 3h2l2-3-2-3z"/>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
      </svg>
    </div>
    <strong>Snow/Ice</strong><br/>
    <span style={{fontSize: '0.9em'}}>Visibility reduction</span>
  </div>
  <div style={{flex: 1, minWidth: 200, background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
        <path d="M2 17.5A17.5 17.5 0 0 0 0 10c0-2.5 2.5-5 5-5s5 2.5 5 5-2.5 5-5 5c-1.7 0-3-.5-4.5-1.5z"/>
        <path d="M8.5 8.5c-.5-.5-1.5-.5-2 0s-.5 1.5 0 2 1.5.5 2 0 .5-1.5 0-2z"/>
        <path d="M17 13h-2l-2 3 2 3h2l2-3-2-3z"/>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/>
        <path d="M16 17.85A4 4 0 0 0 14 9h-.5A6 6 0 1 0 6 15"/>
      </svg>
    </div>
    <strong>Fog/Haze</strong><br/>
    <span style={{fontSize: '0.9em'}}>Low visibility testing</span>
  </div>
  <div style={{flex: 1, minWidth: 200, background: '#fff3e0', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #ffcc02'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2"/>
        <path d="M12 21v2"/>
        <path d="M4.22 4.22l1.42 1.42"/>
        <path d="M18.36 18.36l1.42 1.42"/>
        <path d="M1 12h2"/>
        <path d="M21 12h2"/>
        <path d="M4.22 19.78l1.42-1.42"/>
        <path d="M18.36 5.64l1.42-1.42"/>
      </svg>
    </div>
    <strong>Glare/Shadows</strong><br/>
    <span style={{fontSize: '0.9em'}}>Extreme lighting</span>
  </div>
</div> -->

### 应用场景 3：ISP 算法仿真验证


<div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #e9ecef', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
  <h4 style={{textAlign: 'center', marginBottom: '1.8rem', color: '#495057', fontSize: '1.1em', fontWeight: '600', letterSpacing: '0.5px'}}>
    系统架构图
  </h4>

  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem', padding: '0.5rem'}}>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #1976d2', minWidth: '100px', boxShadow: '0 3px 12px rgba(25,118,210,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #1976d2, #42a5f5)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="1" style={{marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(25,118,210,0.2))'}}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#1976d2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>原始图像<br/>数据</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>ETH/SSD</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #f3e5f5 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #7b1fa2', minWidth: '100px', boxShadow: '0 3px 12px rgba(123,31,162,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #7b1fa2, #ba68c8)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/industrial_pc.png" alt="工业计算机" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(123,31,162,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#7b1fa2', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>工业计算机</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#6c757d', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px'}}>PCIe</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #e8f5e8 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #388e3c', minWidth: '100px', boxShadow: '0 3px 12px rgba(56,142,60,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #388e3c, #66bb6a)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="CIG4-8H GMSL Video Injection Card" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(56,142,60,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#388e3c', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>CIG4-8H</div>
      </div>
    </div>

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#388e3c', margin: '0 0.5rem'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'}}>
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span style={{fontSize: '0.75em', marginTop: '0.3rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px'}}>GMSL</span>
    </div>

    <div style={{textAlign: 'center', transition: 'transform 0.2s ease'}}>
      <div style={{background: 'linear-gradient(135deg, #fff3e0 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.2rem 1rem', border: '2px solid #f57c00', minWidth: '100px', boxShadow: '0 3px 12px rgba(245,124,0,0.15)', position: 'relative'}}>
        <div style={{position: 'absolute', top: '-2px', left: '-2px', right: '-2px', bottom: '-2px', background: 'linear-gradient(135deg, #f57c00, #ffb74d)', borderRadius: '12px', zIndex: '-1', opacity: '0.1'}}></div>
        <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/automotive_ecu.png" alt="Automotive ECU" style={{width: '80px', height: '80px', marginBottom: '0.6rem', filter: 'drop-shadow(0 1px 2px rgba(245,124,0,0.2))', borderRadius: '4px'}} />
        <div style={{fontWeight: '700', fontSize: '0.8em', color: '#f57c00', lineHeight: '1.3', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>ECU</div>
      </div>
    </div>

  </div>

  <div style={{textAlign: 'center', marginTop: '1.5rem', padding: '0.8rem', background: 'rgba(108,117,125,0.05)', borderRadius: '8px', border: '1px solid rgba(108,117,125,0.1)'}}>
    <span style={{fontSize: '0.8em', color: '#6c757d', fontWeight: '500', fontStyle: 'italic', letterSpacing: '0.3px'}}>
      面向 ISP 算法验证的原始图像处理流程
    </span>
  </div>
</div>

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg> -->
    图像信号处理优化
  </h4>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
    <div style={{textAlign: 'center', minWidth: '200px'}}>
      <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', border: '1px solid #bbdefb'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
          </svg>
        </div>
        <strong>开环测试</strong><br/>
        <span style={{fontSize: '0.9em'}}>传感器级验证</span>
      </div>
      <div style={{fontSize: '0.9em', textAlign: 'left'}}>
        • 原始图像数据注入<br/>
        • ISP 算法验证<br/>
        • 降噪测试<br/>
        • 色彩校正验证
      </div>
    </div>
    <div style={{textAlign: 'center', minWidth: '200px'}}>
      <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', marginBottom: '1rem', border: '1px solid #e1bee7'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
            <polyline points="7.5,19.79 7.5,14.6 3,12"/>
            <polyline points="21,12 16.5,14.6 16.5,19.79"/>
          </svg>
        </div>
        <strong>闭环测试</strong><br/>
        <span style={{fontSize: '0.9em'}}>系统级集成</span>
      </div>
      <div style={{fontSize: '0.9em', textAlign: 'left'}}>
        • ISP 输出反馈<br/>
        • 感知算法测试<br/>
        • AEB 触发准确性<br/>
        • ADAS 系统可靠性
      </div>
    </div>
  </div>
</div>

**ISP 算法仿真验证能力:**
- **原始图像数据注入:** 直接注入未处理传感器数据，用于 ISP 算法仿真验证与调优
- **参数优化:** 测试降噪强度、色彩还原准确性和曝光控制算法
- **HDR 处理验证:** 在不同光照条件下评估高动态范围算法
- **多摄像头一致性:** 确保环视系统摄像头阵列中的图像处理一致

**系统集成验证:**
- **传感器融合测试:** 协调 ISP 输出与雷达、LiDAR 数据，进行完整感知验证
- **实时性能:** 验证不同负载条件下的处理延迟和计算效率
- **故障安全集成:** 测试传感器退化或故障场景下 ISP 算法行为
- **标定验证:** 确保不同环境条件下摄像头标定保持正确

---


## 如何选择合适的视频注入方案？

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H_Diagram.png" alt="CIG4-8H 框图" style={{maxWidth: '100%', height:'auto', borderRadius: '8px'}} />
  <p style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    CIG4-8H 硬件框图与系统架构
  </p>
</div>

<!-- 
<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    SENSING's Competitive Advantage in Video Injection
  </h4>

  **Market Context:** SENSING competes with established players in the video injection card market. However, SENSING's core business focus on cameras and imaging systems provides a fundamental competitive advantage.

  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem'}}>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
          <circle cx="12" cy="13" r="3"/>
        </svg>
      </div>
      <strong>Better Video Injection</strong><br/>
      <span style={{fontSize: '0.9em'}}>More accurate camera signal simulation</span>
    </div>
    <div style={{background: '#ffebee', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #ffcdd2'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <strong>Realistic Fault Testing</strong><br/>
      <span style={{fontSize: '0.9em'}}>Simulate real camera failures accurately</span>
    </div>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <strong>Safety Testing</strong><br/>
      <span style={{fontSize: '0.9em'}}>Complete automotive safety validation</span>
    </div>
  </div>
</div>

**Core Differentiator:** Unlike competitors who may treat video injection as a secondary product line, SENSING's primary expertise in camera technology translates directly into superior injection capabilities. This camera-centric approach ensures authentic reproduction of real camera behaviors, critical for accurate ECU algorithm validation where signal fidelity directly impacts testing reliability.

--- -->

<!-- ## 4 Key 亮点 -->

### 关键技术能力

**CIG4-8H** 是一款模块化系统设备，可根据客户需求灵活配置。它可在数据回放中实现毫秒级同步精度，并通过丰富的硬件接口满足多种特定场景回放需求。

<div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #e9ecef', boxShadow: '0 4px 12px rgba(0,0,0,0.08)'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>

    <div style={{background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.5rem', border: '1px solid #bbdefb', boxShadow: '0 3px 10px rgba(25,118,210,0.12)', transition: 'transform 0.2s ease, box-shadow 0.2s ease'}}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <div style={{background: '#1976d2', borderRadius: '8px', padding: '0.5rem', marginRight: '0.75rem', boxShadow: '0 2px 6px rgba(25,118,210,0.3)'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <h4 style={{color: '#1976d2', margin: 0, fontSize: '1.1em', fontWeight: '600'}}>8 通道视频输出</h4>
      </div>
      <p style={{margin: 0, fontSize: '0.9em', color: '#495057', lineHeight: '1.5'}}>
        支持 <strong>8×3840×2160@30fps</strong><br/>
        高精度 GMSL 视频数据回放
      </p>
    </div>

    <div style={{background: 'linear-gradient(135deg, #fff3e0 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.5rem', border: '1px solid #ffcc02', boxShadow: '0 3px 10px rgba(245,124,0,0.12)', transition: 'transform 0.2s ease, box-shadow 0.2s ease'}}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <div style={{background: '#f57c00', borderRadius: '8px', padding: '0.5rem', marginRight: '0.75rem', boxShadow: '0 2px 6px rgba(245,124,0,0.3)'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6"/>
            <path d="m21 12-6-3v6l6-3z"/>
          </svg>
        </div>
        <h4 style={{color: '#f57c00', margin: 0, fontSize: '1.1em', fontWeight: '600'}}>数据同步</h4>
      </div>
      <p style={{margin: 0, fontSize: '0.9em', color: '#495057', lineHeight: '1.5'}}>
        高精度同步<br/>
        系统精度在 <strong>1ms</strong> 以内
      </p>
    </div>

    <div style={{background: 'linear-gradient(135deg, #fce4ec 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.5rem', border: '1px solid #f8bbd9', boxShadow: '0 3px 10px rgba(233,30,99,0.12)', transition: 'transform 0.2s ease, box-shadow 0.2s ease'}}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <div style={{background: '#e91e63', borderRadius: '8px', padding: '0.5rem', marginRight: '0.75rem', boxShadow: '0 2px 6px rgba(233,30,99,0.3)'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <h4 style={{color: '#e91e63', margin: 0, fontSize: '1.1em', fontWeight: '600'}}>传感器故障仿真</h4>
      </div>
      <p style={{margin: 0, fontSize: '0.9em', color: '#495057', lineHeight: '1.5'}}>
        <strong>故障注入测试</strong><br/>
        全面覆盖安全测试
      </p>
    </div>

    <div style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f8f9fa 100%)', borderRadius: '10px', padding: '1.5rem', border: '1px solid #b2dfdb', boxShadow: '0 3px 10px rgba(0,150,136,0.12)', transition: 'transform 0.2s ease, box-shadow 0.2s ease'}}>
      <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
        <div style={{background: '#00796b', borderRadius: '8px', padding: '0.5rem', marginRight: '0.75rem', boxShadow: '0 2px 6px rgba(0,121,107,0.3)'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        </div>
        <h4 style={{color: '#00796b', margin: 0, fontSize: '1.1em', fontWeight: '600'}}>摄像头功能安全仿真注入</h4>
      </div>
      <p style={{margin: 0, fontSize: '0.9em', color: '#495057', lineHeight: '1.5'}}>
        摄像头功能安全仿真<br/>
        全面验证测试
      </p>
    </div>

  </div>
</div>

### CIG4-8H 核心规格
#### 硬件架构概览

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg> -->
    专业级硬件组件
  </h4>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <rect width="16" height="16" x="4" y="4" rx="2"/>
          <rect width="6" height="6" x="9" y="9" rx="1"/>
          <path d="M15 2v2"/>
          <path d="M15 20v2"/>
          <path d="M2 15h2"/>
          <path d="M20 15h2"/>
          <path d="M4.93 4.93l1.41 1.41"/>
          <path d="M17.66 17.66l1.41 1.41"/>
          <path d="M4.93 19.07l1.41-1.41"/>
          <path d="M17.66 6.34l1.41-1.41"/>
        </svg>
      </div>
      <strong>Zynq™ UltraScale+™</strong><br/>
      <span style={{fontSize: '0.9em'}}>ZU7EV MPSoC 处理器</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
        </svg>
      </div>
      <strong>PCIe Gen3 x8</strong><br/>
      <span style={{fontSize: '0.9em'}}>4,800 MB/s 带宽</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      </div>
      <strong>DDR4 内存</strong><br/>
      <span style={{fontSize: '0.9em'}}>高速存储</span>
    </div>
  </div>
</div>

**面向应用的组件优势:**
- **Zynq™ UltraScale+™ ZU7EV:** 提供实时视频注入所需的硬件加速处理能力
- **PCIe Gen3 x8 接口:** 确保 8 路高分辨率视频数据传输具备充足带宽
- **DDR4 内存:** 支持大规模视频数据集的平滑缓冲与处理
- **触发接口:** 接收来自域控制器的触发输入信号，用于同步运行

#### 视频处理能力

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem', textAlign: 'center'}}>
    <div style={{fontSize: '2em', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>8</div>
    <div style={{fontSize: '0.9em'}}>并发 GMSL 通道</div>
  </div>
  <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem', textAlign: 'center'}}>
    <div style={{fontSize: '2em', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>8MP</div>
    <div style={{fontSize: '0.9em'}}>最大分辨率 单通道</div>
  </div>
  <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem', textAlign: 'center'}}>
    <div style={{fontSize: '2em', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>30fps</div>
    <div style={{fontSize: '0.9em'}}>最高帧率</div>
  </div>
  <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem', textAlign: 'center'}}>
    <div style={{fontSize: '2em', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>< 1μs</div>
    <div style={{fontSize: '0.9em'}}>同步精度</div>
  </div>
</div>

**核心视频处理规格:**
- **通道数量:** 每张卡最高支持 8 路并发 GMSL 视频输出
- **最大分辨率:** 每通道 8MP（3840×2160）@30fps
- **已验证分辨率:** 例如 1920×1080, 1920×1536, 2880×1860, 3840×2160
- **数据带宽：** 每通道 6 Gbps 容量，可充分利用
<!-- - **同步精度:**  < 1μs inter-channel synchronization accuracy -->

#### 完整的视频格式支持

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 200, background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
        <rect width="20" height="15" x="2" y="3" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    </div>
    <strong>输出格式</strong><br/>
    <div style={{fontSize: '0.9em', marginTop: '0.5rem'}}>
      YUV422 (8-bit)<br/>
      RAW10/12/14 (10-14 bit)
    </div>
  </div>
  <div style={{flex: 1, minWidth: 200, background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    </div>
    <strong>输入文件格式</strong><br/>
    <div style={{fontSize: '0.9em', marginTop: '0.5rem'}}>
      YUV422, RAW10/12/14<br/>
      H.264/H.265 (使用 GPU 解码)
    </div>
  </div>
  <div style={{flex: 1, minWidth: 200, background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
    <div style={{marginBottom: '0.5rem'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
      </svg>
    </div>
    <strong>处理模式</strong><br/>
    <div style={{fontSize: '0.9em', marginTop: '0.5rem'}}>
      Original（未压缩）<br/>
      <!-- GPU-accelerated decode -->
    </div>
  </div>
</div>

**格式处理说明:**
- **YUV422 8-bit:** 标准车载摄像头格式，包含完整颜色信息
- **RAW10/12/14:** 用于 ISP 算法仿真验证的未处理传感器数据
- **H.264/H.265 支持:** 针对压缩数据存储和传输的 GPU 加速解码
- **格式转换:** 注入过程中在不同格式之间实时转换

#### SerDes 兼容性

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 250, background: '#e3f2fd', borderRadius: '8px', padding: '1rem', border: '1px solid #2196f3'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#1976d2'}}>
      <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg> -->
      串行器支持
    </h4>
    <div style={{fontSize: '0.9em'}}>
      <strong>默认：</strong> MAX9295A (3G/6G 模式切换)<br/>
      <strong>兼容：</strong> MAX96717F, MAX96717<br/>
      <strong>定制选项：</strong> 可按需支持
    </div>
  </div>
  <div style={{flex: 1, minWidth: 250, background: '#f3e5f5', borderRadius: '8px', padding: '1rem', border: '1px solid #9c27b0'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#7b1fa2'}}>
      <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
        <path d="M12 2v3"/>
        <path d="M12 19v3"/>
        <path d="M4.22 4.22l2.12 2.12"/>
        <path d="M17.66 17.66l2.12 2.12"/>
        <path d="M2 12h3"/>
        <path d="M19 12h3"/>
        <path d="M4.22 19.78l2.12-2.12"/>
        <path d="M17.66 6.34l2.12-2.12"/>
      </svg> -->
      解串器支持
    </h4>
    <div style={{fontSize: '0.9em'}}>
      <strong>已验证：</strong> MAX9296A, MAX96712<br/>
      <strong>扩展支持：</strong> MAX96716, MAX96718, MAX96722<br/>
      <strong>可适配：</strong> 支持定制解串器
    </div>
  </div>
</div>

**其他特性:**
- **POC 供电:** 后端域控制器同轴供电能力，用于仿真真实摄像头连接
- **I2C 通信:** 完整仿真传感器与 ECU 交互，包括寄存器读写操作
- **协议合规:** 完整实现 GMSL2 协议，包括正确握手和错误处理
- **信号完整性:** 保持真实电气特性和时序规格

#### 多卡扩展能力与高级特性

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg> -->
    面向企业级测试的可扩展架构
  </h4>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #bbdefb'}}>
      <div style={{fontSize: '2.5em', marginBottom: '0.5rem'}}>16+</div>
      <strong>通道</strong><br/>
      <span style={{fontSize: '0.9em'}}>多卡支持</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #e1bee7'}}>
      <div style={{fontSize: '2.5em', marginBottom: '0.5rem'}}>2+</div>
      <strong>板卡</strong><br/>
      <span style={{fontSize: '0.9em'}}>单工作站</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #c8e6c9'}}>
      <div style={{fontSize: '2.5em', marginBottom: '0.5rem'}}>< 1μs</div>
      <strong>同步</strong><br/>
      <span style={{fontSize: '0.9em'}}>卡间精度</span>
    </div>
    <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', textAlign: 'center', border: '1px solid #ffcc02'}}>
      <div style={{fontSize: '2.5em', marginBottom: '0.5rem'}}>∞</div>
      <strong>场景</strong><br/>
      <span style={{fontSize: '0.9em'}}>并行测试</span>
    </div>
  </div>
</div>

**多卡配置能力:**
- **双卡配置:** 支持在单台工业 PC 中安装 2 张 CIG4-8H，实现 16 通道运行
- **扩展配置:** 针对高通道数专用应用，最高支持 4 张以上板卡
- **硬件同步:** 多卡之间实现亚微秒级同步
- **负载分配:** 在可用硬件资源之间智能分配通道
<!-- 
#### 故障注入与功能安全测试

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 240, background: '#ffebee', borderRadius: '8px', padding: '1rem', border: '1px solid #f44336'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center', color: '#d32f2f'}}>Signal Degradation</h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>Programmable noise injection</li>
      <li>Bit error rate simulation</li>
      <li>Signal attenuation testing</li>
      <li>Timing jitter introduction</li>
    </ul>
  </div>
  <div style={{flex: 1, minWidth: 240, background: '#fff3e0', borderRadius: '8px', padding: '1rem', border: '1px solid #ff9800'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center', color: '#f57c00'}}>System Failures</h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>Channel dropout simulation</li>
      <li>Power supply fluctuation</li>
      <li>通信 timeouts</li>
      <li>Partial data corruption</li>
    </ul>
  </div>
  <div style={{flex: 1, minWidth: 240, background: '#e8f5e8', borderRadius: '8px', padding: '1rem', border: '1px solid #4caf50'}}>
    <div style={{marginBottom: '0.5rem', textAlign: 'center'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    </div>
    <h4 style={{marginBottom: '0.5rem', textAlign: 'center', color: '#388e3c'}}>安全验证</h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>ASIL-D compliance testing</li>
      <li>Redundancy verification</li>
      <li>Fail-safe mechanism validation</li>
      <li>Recovery time measurement</li>
    </ul>
  </div>
</div>

#### 基于时间戳的多传感器同步

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
    精确同步生态
  </h4>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
    <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '150px', border: '1px solid #bbdefb'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
          <path d="M23 7l-7 5 7 5V7z"/>
          <rect width="15" height="9" x="1" y="8" rx="2" ry="2"/>
        </svg>
      </div>
      <strong>摄像头数据</strong><br/>
      <span style={{fontSize: '0.9em'}}>视频流</span>
    </div>
    <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '150px', border: '1px solid #e1bee7'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      </div>
      <strong>网络数据</strong><br/>
      <span style={{fontSize: '0.9em'}}>以太网数据包</span>
    </div>
    <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '150px', border: '1px solid #c8e6c9'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10V6c0-2-2-4-4-4H4c-2 0-4 2-4 4v10c0 1.1.9 2 2 2h2"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      </div>
      <strong>CAN Bus</strong><br/>
      <span style={{fontSize: '0.9em'}}>车辆信号</span>
    </div>
    <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '150px', border: '1px solid #ffcc02'}}>
      <div style={{marginBottom: '0.5rem'}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
      </div>
      <strong>GPS/IMU</strong><br/>
      <span style={{fontSize: '0.9em'}}>定位数据</span>
    </div>
  </div>
</div> -->

<!-- **Synchronization Capabilities:**
- **Timestamp-Based Replay:** Software-controlled synchronization of camera data with other sensor modalities
- **Multi-Modal Coordination:** Precise timing alignment between video, network, CAN bus, and positioning data
- **Nanosecond Precision:** 硬件 timestamping with sub-microsecond accuracy across all data streams
- **Temporal Consistency:** Maintains original sensor timing relationships during replay operations

#### 外部触发与域控制器集成

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 250, background: '#e1f5fe', borderRadius: '8px', padding: '1rem'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#0277bd'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
        <circle cx="12" cy="12" r="10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
      外部触发支持
    </h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>Domain controller trigger input</li>
      <li>Fixed frame rate internal triggering</li>
      <li>Configurable trigger delays (microsecond precision)</li>
      <li>Multi-source trigger coordination</li>
    </ul>
  </div>
  <div style={{flex: 1, minWidth: 250, background: '#f3e5f5', borderRadius: '8px', padding: '1rem'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#7b1fa2'}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3v14c0 1.66-4 3-9 3s-9-1.34-9-3V5Z"/>
      </svg>
      摄像头仿真保真度
    </h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>Complete trigger behavior emulation</li>
      <li>Authentic timing characteristics</li>
      <li>Exposure control simulation</li>
      <li>帧率 adaptation</li>
    </ul>
  </div>
</div> -->

### 系统要求与集成

#### 主机系统要求
- **操作系统:** Ubuntu 18.04/20.04 LTS（其他版本可适配）
- **PCIe 插槽：** PCIe Gen3 x8 或更高
- **内存：** 最低 16GB RAM（多通道运行建议 32GB）
- **存储：** 用于视频数据缓冲的高速 SSD
- **GPU：** 建议使用 NVIDIA GPU 加速 H.264/H.265 解码

#### 物理规格
- **外形：** 标准 PCIe 板卡形态
- **重量:** 300g
- **功耗：** 典型 12V @ 1A
- **工作温度:** -20°C 至 +70°C
- **存储温度:** -40°C 至 +80°C
- **湿度：** 5%-90% 无凝露（工作），0%-95%（存储）
- **MTBF:** 5 年

#### 线缆与连接
- **同轴线缆:** Amphenol Min-fakra Dual MFK2252AW-001-TL30G-50
- **线缆长度:** 标准 250mm，可定制长度
- **连接器类型：** Fakra 车规级连接器
- **信号完整性:** 在较长距离下保持 GMSL2 信号质量

### 软件与驱动支持

#### 软件开发套件（SDK）与二次开发支持

<div style={{background: '#f8f9fa', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', border: '1px solid #dee2e6'}}>
  <h4 style={{marginBottom: '1.5rem', textAlign: 'center', color: '#495057'}}>
    <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg> -->
    完整开发生态
  </h4>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
    <div style={{textAlign: 'center'}}>
      <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', border: '1px solid #bbdefb'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
        <strong>核心 API</strong><br/>
        <span style={{fontSize: '0.9em'}}>C/C++ 接口</span>
      </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', border: '1px solid #e1bee7'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        </div>
        <strong>XDMA 驱动</strong><br/>
        <span style={{fontSize: '0.9em'}}>优化性能</span>
      </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', border: '1px solid #c8e6c9'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <strong>配置工具</strong><br/>
        <span style={{fontSize: '0.9em'}}>系统设置</span>
      </div>
    </div>
    <div style={{textAlign: 'center'}}>
      <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', border: '1px solid #ffcc02'}}>
        <div style={{marginBottom: '0.5rem'}}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        </div>
        <strong>文档</strong><br/>
        <span style={{fontSize: '0.9em'}}>完整参考</span>
      </div>
    </div>
  </div>
</div>

<!-- **核心 API Functions:**
```c
// Primary data injection interface
int send_one_frame(unsigned char* buffer);

// Register configuration interface
static int reg_rw(int addr, int write, int value);

// Multi-channel configuration
int configure_channel(int channel, video_config_t* config);

// Synchronization control
int set_trigger_mode(trigger_mode_t mode, int delay_us);
```

**SDK Package Structure:**
- **Driver Layer:** Optimized XDMA PCIe drivers with DMA engine support
- **硬件 Abstraction:** Register-level access with safety checks and validation
- **Configuration Management:** Channel setup, format selection, and timing control
- **Data Pipeline:** Efficient buffer management and transfer optimization
- **Synchronization Control:** External trigger handling and multi-card coordination

**Secondary Development Capabilities:**

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{flex: 1, minWidth: 240, background: '#e3f2fd', borderRadius: '8px', padding: '1rem', border: '1px solid #2196f3'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#1976d2'}}>
      定制应用
    </h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>Direct API integration</li>
      <li>Custom data pipelines</li>
      <li>应用-specific workflows</li>
      <li>Real-time processing integration</li>
    </ul>
  </div>
  <div style={{flex: 1, minWidth: 240, background: '#f3e5f5', borderRadius: '8px', padding: '1rem', border: '1px solid #9c27b0'}}>
    <h4 style={{marginBottom: '0.8rem', color: '#7b1fa2'}}>
      仿真集成
    </h4>
    <ul style={{margin: 0, paddingLeft: '1rem', fontSize: '0.9em'}}>
      <li>GPU virtual sensor models</li>
      <li>Real-time rendering pipelines</li>
      <li>Physics simulation coupling</li>
      <li>Closed-loop validation systems</li>
    </ul>
  </div>
</div>

**Platform 支持 and Compatibility:**
- **Operating Systems:** Ubuntu 18.04/20.04 LTS (primary), other Linux distributions adaptable
- **Kernel Compatibility:** Broad kernel version support with automatic adaptation
- **Development Environment:** GCC/Clang compiler support, CMake build system
- **Integration 支持:** Professional services available for complex custom implementations

--- -->

<!-- **Ready to Get Started?**

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
  <div style={{background: '#e3f2fd', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '200px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
    <strong>技术支持</strong><br/>
    <a href="mailto:support@sensing-world.com">support@sensing-world.com</a>
  </div>
  <div style={{background: '#f3e5f5', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '200px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <circle cx="9" cy="21" r="1"/>
      <circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
    <strong>销售咨询</strong><br/>
    <a href="mailto:sales@sensing-world.com">sales@sensing-world.com</a>
  </div>
  <div style={{background: '#e8f5e8', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '200px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#388e3c" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
    <strong>产品信息</strong><br/>
    <a href="https://sensing-world.com/en/h-col-151.html" target="_blank" rel="noopener noreferrer">sensing-world.com</a>
  </div>
  <div style={{background: '#fff3e0', borderRadius: '8px', padding: '1rem', textAlign: 'center', minWidth: '200px'}}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2" style={{verticalAlign: 'middle', marginRight: '8px'}}>
      <rect width="14" height="8" x="5" y="2" rx="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2"/>
      <path d="M6 18h2"/>
      <path d="M12 18h6"/>
    </svg>
    <strong>GitHub 仓库</strong><br/>
    <a href="https://github.com/SENSING-Technology/CIG4-8H" target="_blank" rel="noopener noreferrer">CIG4-8H SDK</a>
  </div>
</div> -->
