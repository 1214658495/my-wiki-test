---
sidebar_position: 2
---

# Platform Compatibility Matrix

:::note Overview
This compatibility matrix provides information about all SENSING GMSL camera and their compatible platforms with corresponding system version requirements.
:::

<div style={{ 
  marginBottom: '1rem', 
  color: 'var(--ifm-color-primary)', 
  fontSize: '0.9rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}}>
  <span style={{fontSize: '1.2rem'}}>💡</span>
  <span>Use the search box to filter cameras or double-click the table for better viewing</span>
</div>

<div style={{ marginBottom: '1rem' }}>
  <input 
    id="cameraSearch"
    type="text" 
    placeholder="Search for camera..." 
    style={{
      padding: '8px 12px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      width: '100%',
      maxWidth: '400px'
    }}
    onKeyUp={() => {
      const input = document.getElementById('cameraSearch');
      const filter = input.value.toUpperCase();
      const table = document.querySelector('table');
      const rows = table.getElementsByTagName('tr');
      
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.getElementsByTagName('td');
        if (cells.length > 0) {
          const model = cells[1].textContent || cells[1].innerText;
          if (model.toUpperCase().indexOf(filter) > -1) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        }
      }
    }}
  />
</div>



<div 
  id="tableContainer"
  style={{ 
    overflowX: 'auto', 
    overflowY: 'auto', 
    maxHeight: '800px', 
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
  onDoubleClick={(e) => {
    const div = e.currentTarget;
    if (div.style.position === 'fixed') {
      div.style.position = 'relative';
      div.style.top = 'auto';
      div.style.left = 'auto';
      div.style.width = '100%';
      div.style.maxHeight = '800px';
      div.style.zIndex = 'auto';
      div.style.backgroundColor = 'transparent';
    } else {
      div.style.position = 'fixed';
      div.style.top = '0';
      div.style.left = '0';
      div.style.width = '100vw';
      div.style.maxHeight = '100vh';
      div.style.zIndex = '9999';
      div.style.backgroundColor = 'white';
    }
  }}
>
<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<thead>
<tr>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>No.</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'left',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>Camera</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>Resolution</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>Output Format</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson AGX Orin</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898">SG8A-ORIN-GMSL2</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson AGX Orin</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}}>SG8A-AGON-G2Y-A1</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson AGX Orin</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}}>SG10A-AGON-G2M-A1</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson Orin Nano/NX</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-168.html?recommendFromPid=0&fromMid=962">SG4A-NONX-G2Y-A1</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson Orin Nano/NX</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-80.html?recommendFromPid=0&fromMid=962">SG6C-ORNX-G2-F</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Jetson Orin Nano/NX</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-79.html?recommendFromPid=0&fromMid=962">SG2A-G3-I4L-F</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Data Collection</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}}>CCG3-8H</a></div>
</th>
<th style={{ 
  padding: '12px', 
  border: '1px solid #ddd', 
  backgroundColor: 'var(--ifm-color-primary-darker)', 
  color: 'white', 
  whiteSpace: 'nowrap', 
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 2
}}>
  <div>Data Collection</div>
  <div style={{fontSize: '0.8em'}}><a style={{color:'white',textDecoration:'underline'}}>CCG3-8M</a></div>
</th>
</tr>
</thead>
<tbody>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG1-OX01F10C-GMSL-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1280×720</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG1S-OX01F10C-G1G-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1280×960</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG2-AR0231C-0202-GMSL-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1080</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>4</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG2-AR0233C-5200-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1080</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>5</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG2-IMX390C-5200-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1080</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>6</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG2S-OX03CC-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1080</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>7</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG3S-ISX031C-GMSL2-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1536</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>8</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG3S-ISX031C-GMSL2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1536</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>9</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG3S-OX03JC-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1536</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>10</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG3S-IMX623C-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920×1536</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>11</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG5-IMX490C-5300-GMSL2-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>2880×1860</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG8S-AR0820C-5300-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840×2160</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>✓</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>13</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG8-IMX728C-G2G-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840×2160</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>14</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', whiteSpace: 'nowrap', fontWeight: 500 }}>SG8S-AR0820C-5300-G3A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840×2160</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2<br/>JP 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>JP 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>—</td>
</tr>
</tbody>
</table>
</div>

<br />
## JetPack Version Reference

<div style={{ 
  backgroundColor: '#f8f9fa', 
  borderRadius: '8px', 
  padding: '16px', 
  marginBottom: '24px',
  border: '1px solid #e9ecef'
}}>
  <h3 style={{ marginTop: 0, fontSize: '1.2rem' }}>NVIDIA JetPack SDK Versions</h3>
  
  <p>NVIDIA JetPack is the official software development kit for the Jetson platform, providing the OS, drivers, libraries, and development tools.</p>
  
  <div style={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '12px', 
    marginTop: '16px' 
  }}>
    <div style={{ 
      flex: '1 1 200px',
      padding: '12px',
      backgroundColor: 'white',
      borderRadius: '6px',
      border: '1px solid #ddd',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontWeight: 'bold' }}>JetPack 6.2</div>
      <div>L4T R36.4.3</div>
    </div>
    
    <div style={{ 
      flex: '1 1 200px',
      padding: '12px',
      backgroundColor: 'white',
      borderRadius: '6px',
      border: '1px solid #ddd',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontWeight: 'bold' }}>JetPack 6.1</div>
      <div>L4T R36.4</div>
    </div>
    
    <div style={{ 
      flex: '1 1 200px',
      padding: '12px',
      backgroundColor: 'white',
      borderRadius: '6px',
      border: '1px solid #ddd',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontWeight: 'bold' }}>JetPack 6.0</div>
      <div>L4T R36.3</div>
    </div>
    
    <div style={{ 
      flex: '1 1 200px',
      padding: '12px',
      backgroundColor: 'white',
      borderRadius: '6px',
      border: '1px solid #ddd',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontWeight: 'bold' }}>JetPack 5.1.2</div>
      <div>L4T R35.4.1</div>
    </div>
  </div>
  
  <div style={{ marginTop: '16px' }}>
    <a href="https://developer.nvidia.com/embedded/jetpack-archive" target="_blank" rel="noopener noreferrer">
      Visit NVIDIA Jetson Download Center
    </a>
  </div>
</div>
