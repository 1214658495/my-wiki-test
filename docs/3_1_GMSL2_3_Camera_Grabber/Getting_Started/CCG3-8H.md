---
sidebar_position: 2
title: Getting Started with CCG3-8H
---

# Getting Started with CCG3-8H

## Overview
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H.png" alt="CCG3-8H" style={{maxWidth: '55%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    CoaxCapture II GMSL Video Capture card (hereinafter referred to as Capture Card) <strong>CCG3-8H</strong> is an image capture product that can connect GMSL cameras. It has the advantages of high frame rate, high speed, low delay, etc., and it is widely used in unmanned vehicles, automatic driving, autonomous machines, data capture and other scenes.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/Coaxcapture_Card/" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>Learn More</span>
    </a>
  </div>
</div>

## Getting Started

### Key Specifications
<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Model:</strong> CCG3-8H<br/>
    <strong>Camera Input:</strong> 8x GMSL2/GMSL<br/>
    <strong>Resolution:</strong> 1-8MP<br/>
    <strong>Bit Depth:</strong> 8/12-bit<br/>
    <strong>Data Bandwidth:</strong> 6Gbps/cable
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Processor:</strong> Xilinx ZU+<br/>
    <strong>PCIe:</strong> Gen3 x8<br/>
    <strong>OS:</strong> Linux 64-bit, Ubuntu 18.04/20.04<br/>
    <strong>SDK/API:</strong> V4L2, Documentation<br/>
    <strong>Trigger:</strong> TTL, PPS
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Operating Temp:</strong> -20°C ~ +70°C<br/>
    <strong>Storage Temp:</strong> -40°C ~ +80°C<br/>
    <strong>Power Output:</strong> 4W/9V per cable<br/>
    <strong>Connector:</strong> Min-fakra Dual<br/>
    <strong>Size:</strong> 167.64mm x 111.15mm
  </div>
</div>

### Block Diagram
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/CCG3-8H/CCG3-8H_diagram.png" alt="CCG3-8H Block Diagram" style={{maxWidth: '80%',  height:'auto', borderRadius: '8px'}} />
</div>

:::note Highlights
- 8 GMSL cameras input, up to 8MP@30fps
- PCIe Gen3 x8 lane, ultra-high bandwidth
- Supports external trigger & PTP time sync
- Low latency, high reliability
:::

### Supported Camera List

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| No. | Camera                      | Resolution | Output Data | Ubuntu18.04/20.04 |
|-----| --------------------------- | ---------- | ----------- | ------------- |
| 1   | SG1-OX01F10C-GMSL-Hxxx      | 1280H*720V | YUV422      | ✅           |
| 2   | SG1S-OX01F10C-G1G-Hxxx      | 1280H*960V | YUV422      | ✅           |
| 3   | SG2-AR0231C-0202-GMSL-Hxxx  | 1920H*1080V| YUV422      | ✅           |
| 4   | SG2-AR0233C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 5   | SG2-IMX390C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 6   | SG2-OX03CC-5200-GMSL2F-Hxxx | 1920H*1080V| YUV422      | ✅           |
| 7   | SG3S-ISX031C-GMSL2-Hxxx     | 1920H*1536V| YUV422      | ✅           |
| 8   | SG3S-ISX031C-GMSL2F-Hxxx    | 1920H*1536V| YUV422      | ✅           |
| 9   | SG3S-OX03JC-G2F-Hxxx        | 1920H*1536V| YUV422      | ✅           |
| 10  | SG5-IMX490C-5300-GMSL2-Hxxx | 2880H*1860H| YUV422      | ✅           |
| 11  | SG8S-AR0820C-5300-G2A-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 12  | SG8-OX08BC-5300-GMSL2-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 13  | SG8-IMX728C-G2G-Hxxx        | 3840H*2160V| RAW12       | ✅           |

</div>

## Hardware Preparation

#### Parts List

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| No. | Product model                 | Quantity | Remark                |
|-----|-------------------------------|----------|-----------------------|
| 1   | Power connection wire         | 1        | Standard configuration|
| 2   | CCG3-8H capture card          | 1        | Standard configuration|
| 3   | Fakra one-divided-two switching line | 4 | Standard configuration|
| 4   | Aviation plug turn to network cable | 1 | Standard configuration|
| 5   | GPS connection wire           | 1        | Standard configuration|

</div>



#### Follow the steps below to install the product:

1. Insert the CCG3-8H into the PCIe slot of the host computer
2. Connect the GMSL camera to the CCG3-8H using the coaxial cable
3. Power on the system

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '20px'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="//player.bilibili.com/player.html?bvid=BV1w6j2z8E16&page=1&high_quality=1&danmaku=0"
    scrolling="no"
    border="0"
    frameBorder="no"
    framespacing="0"
    allowFullScreen="true">
  </iframe>
</div>

---

## Software Preparation

### 1. SDK Download

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| Camera | Linux system version | Driver pkg download link | Driver pkg download method |
|------------------------------|-------------------------|---------------------------|-------------------------------|
| GMSL2 Camera (YUV Data)<br/>(e.g.: SG3S-ISX031C-GMSL2-Hxxx) | Ubuntu 18.04/20.04 | [Link](https://github.com/SENSING-Technology/CoaxCapture-CCG3/tree/main) | Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download |

</div>

## Detailed Usage Instructions

For comprehensive software setup, SDK configuration, and video transfer protocols, please refer to our detailed application guide:

**[📖 Complete Application Guide](../Application/CCG3-8H_Application)**


<br />


## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information, please refer to the <a href="../FAQ/FAQ_CCG3-8H" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>FAQ section</a>.
</div>
