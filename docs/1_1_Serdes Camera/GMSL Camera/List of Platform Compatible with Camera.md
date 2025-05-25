---
sidebar_position: 2
---

# List of Platform Compatible with Camera

<div style={{ 
  marginBottom: '10px', 
  color: '#666', 
  fontSize: '14px',
  fontStyle: 'italic'
}}>
💡 Tip: Double-click the table to maximize
</div>

<div 
  style={{ 
    overflowX: 'auto', 
    overflowY: 'auto', 
    maxHeight: '600px', 
    width: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }}
  onDoubleClick={(e) => {
    const div = e.currentTarget;
    if (div.style.position === 'fixed') {
      div.style.position = 'relative';
      div.style.top = 'auto';
      div.style.left = 'auto';
      div.style.width = '100%';
      div.style.maxHeight = '600px';
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
<table style={{ width: '200%', borderCollapse: 'collapse' }}>
<thead>
<tr>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>No.</th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Camera</th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Resolution</th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Output Data</th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson AGX Orin<br/><a style={{color:'black',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898">SG8A-ORIN-GMSL2</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson AGX Orin<br/><a style={{color:'black',textDecoration:'underline'}} >SG8A-AGON-G2Y-A1</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson AGX Orin<br/><a style={{color:'black',textDecoration:'underline'}} >SG10A-AGON-G2M-A1</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson Orin Nano/NX<br/><a style={{color:'black',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-168.html?recommendFromPid=0&fromMid=962">SG4A-NONX-G2Y-A1</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson Orin Nano/NX<br/><a style={{color:'black',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-80.html?recommendFromPid=0&fromMid=962">SG6C-ORNX-G2-F</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Jetson Orin Nano/NX<br/><a style={{color:'black',textDecoration:'underline'}} href="https://sensing-world.com/en/h-pd-79.html?recommendFromPid=0&fromMid=962">SG2A-G3-I4L-F</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Data collection product<br/><a style={{color:'black',textDecoration:'underline'}} >CCG3-8H</a></th>
<th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: 'var(--ifm-color-primary-light)', color: 'black', whiteSpace: 'nowrap' }}>Data collection product<br/><a style={{color:'black',textDecoration:'underline'}} >CCG3-8M</a></th>
</tr>
</thead>
<tbody>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG1-OX01F10C-GMSL-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1280H*720V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG1S-OX01F10C-G1G-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1280H*960V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG2-AR0231C-0202-GMSL-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1080V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>4</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG2-AR0233C-5200-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1080V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>5</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG2-IMX390C-5200-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1080V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.1</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>6</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG2S-OX03CC-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1080V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>7</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG3S-ISX031C-GMSL2-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1536V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>8</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG3S-ISX031C-GMSL2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1536V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>9</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG3S-OX03JC-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1536V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>10</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG3S-IMX623C-G2F-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>1920H*1536V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>11</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG5-IMX490C-5300-GMSL2-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>2880H*1860V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG8S-AR0820C-5300-G2A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840H*2160V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Yes</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>13</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG8-IMX728C-G2G-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840H*2160V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>MIPI / RAW 12</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
</tr>
<tr>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>14</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>SG8S-AR0820C-5300-G3A-Hxxx</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>3840H*2160V</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>YUV422@8bit</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2<br/>Jetpack 6.0</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>Jetpack 5.1.2</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
<td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center', whiteSpace: 'nowrap' }}>/</td>
</tr>
</tbody>
</table>
</div>

<br />
<div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
  <h3 style={{ marginBottom: '10px' }}>Jetpack Version Information</h3>
  <p>
    NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra).
  </p>
  <ul>
    <li>To choose the appropriate JetPack version for a specific Jetson device, you can refer to <a href="https://developer.nvidia.com/embedded/jetpack-archive">NVIDIA's official Jetson Download Center</a>.</li>

  </ul>
  <p>
    These versions provide optimized performance and compatibility for GMSL cameras on Jetson platforms, ensuring reliable camera operation and image processing capabilities.
  </p>
</div>



## What's next?

- Read the [official documentation](https://docusaurus.io/)
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config)
- Add navbar and footer items with [`themeConfig`](https://docusaurus.io/docs/api/themes/configuration)
- Add a custom [Design and Layout](https://docusaurus.io/docs/styling-layout)
- Add a [search bar](https://docusaurus.io/docs/search)
- Find inspirations in the [Docusaurus showcase](https://docusaurus.io/showcase)
- Get involved in the [Docusaurus Community](https://docusaurus.io/community/support)
