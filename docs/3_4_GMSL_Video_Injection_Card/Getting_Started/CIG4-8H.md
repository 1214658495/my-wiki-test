---
sidebar_position: 2
title: Getting Started with CIG4-8H
---

# Getting Started with CIG4-8H

## Overview
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="CyberCobra" style={{maxWidth: '45%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    <strong>CIG4-8H</strong> GMSL Video Injection Card（Hereinafter referred to as video injection card）is an high-speed image product based on FPGA ,and it independently developed by SZ sensing tech co., Ltd. (for short as SENSING ), a series of SENSING Image Solution.The video injection card adopts PCIe Gen3 technology, which can realize 8-channel video/image injection, and adopts high-precision multi-channel time synchronization technology to ensure that multi-channel data can be synchronized output, and the product is widely used in the hardware-in-the-loop HIL simulation system, digital acquisition and reinjection system, and video playback system and other scenarios.
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/h-col-151.html" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>Learn More</span>
    </a>
  </div>
</div>


## Key Features and Advantages

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Hardware:</strong><br/>
    • Base board in PCI Express form<br/>
    • Support up to PCIe Gen3x8<br/>
    • PCIe sustainable bandwidth up to 4800 MB/s<br/>
    • Zynq™ UltraScale+™ ZU7EV MPSoC
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Video Support:</strong><br/>
    • Output resolution: up to 8 channels 3840×2160@30fps<br/>
    • Output formats: YUV422, RAW10/12/14<br/>
    • High-performance DMA engine for data transfers<br/>
    • Real-time processing of large amounts of data
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>SerDes Support:</strong><br/>
    • Serializers: MAX9295A, MAX96717F, MAX96717, etc.<br/>
    • Deserializers: MAX9296A, MAX96712, MAX96716, MAX96718, etc.<br/>
    • Simulates I2C messages between ECU and camera<br/>
    • OS: Linux supported
  </div>
</div>

## Specification parameters

| **Video Injection Card parameters** | **Value** |
|---|---|
| **Host Interface** | PCIe Gen3 x8 |
| **Bandwidth** | Bandwidth continuous up to 4800 MB/s |
| **Carrier Board Internal Storage** | DDR4 |
| **Network Interface** | Gigabit ethernet |
| **I/O Interface** | TTL trigger signal |
| **Weight** | 300 g |
| **Power supply consumption** | When power supply is 12 V， Current is around 1 A |
| **Working Temperature** | -20°-70°C |
| **Storage Temperature** | -40°C-80°C |
| **Relative Humidity** | 5%-90% Non condensing (operating)， 0%-95% (Storage) |
| **MTBF** | 5 years |
| **Serializer** | MAX9295A/MAX96717F/MAX96717... |
| **Deserializer Support** | MAX9296A/MAX96712/MAX96716/<br/>MAX96718/MAX96722... |
| **Coax Cable Model** | Amphenol Min-fakra Dual<br/>MFK2252AW-001-TL30G-50 |
| **Cable Length** | Amphenol 250mm<br/>MKA2FZ-302LL-FKMZ1-21-01 |
| **Number of Output Videos** | CIG4-8H: 8 channel video output |
| **Video Resolution** | 1-8Mega pixel |
| **Video Format** | 8 bit (YUV422), 10/12/14 bit (RAW) |
| **Data Bandwidth** | Every channel supports 6 Gbps |

### Advanced Capabilities
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
• Support for ECU external trigger signal control for simultaneous output of all channels<br/>
• Support for timestamp-based playback of RAW video data<br/>
• Synchronization of multiple base boards<br/>
• Support for user injection of video data<br/>
• Support for video data rendered by GPU graphics card emulation<br/>
• Support for gPTP/PTP synchronization
</div>


## Hardware Preparation
### Block Diagram
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Diagram.png" alt="CyberCobra Application Diagram" style={{maxWidth: '90%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
</div>

#### Parts List
| No. | Product model                 | Quantity | Remark                |
|-----|-------------------------------|----------|-----------------------|
| 1   | Power connection wire         | 1        | Standard configuration|
| 2   | CIG4-8H video injection card          | 1        | Standard configuration|
| 3   | Fakra one-divided-two switching line | 4 | Standard configuration|
| 4   | Aviation plug turn to network cable | 1 | Standard configuration|
| 5   | GPS connection wire           | 1        | Standard configuration|

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
After collecting data with autonomous vehicles, algorithm validation and optimization are required, which demands a data injection system. The autonomous driving IPC transmits collected video data from hard disks to the video injection card through the PCIe interface. The card then synchronously outputs 8 channels of video based on timestamps, simulating the camera time sequence and transmitting it to the domain control through the GMSL interface. The CyberCobra card supports gPTP/PTP synchronization, achieving time synchronization through switches, IPC and ACU, ensuring all devices in the system are on the same timeline.
</div>

<!-- #### Follow the steps below to install the product:

1. Connect the GMSL camera to the CCG3-8H using the coaxial cable
2. Insert the CCG3-8H into the PCIe slot of the host computer
3. Connect the power supply to the CCG3-8H
4. Power on the system

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
</div> -->

:::note Complete Solution
SENSING can provide a complete solution including Camera + GMSL Video Injection Card + IPC + Coaxial cable for your hardware-in-the-loop testing needs.
:::




## Software Framework and Usage Instructions

### Software Framework Diagram
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    Software Framework Architecture
  </div>
</div>

### SDK Download

:::note SDK Packages
Select the appropriate SDK package based on your operating system and CIG4-8H hardware version:
:::

| Operating System | Hardware Version | SDK Version | Download Link | Download Tool |
|------------------|------------------|-------------|---------------|---------------|
| Ubuntu 18.04 LTS <br/> Ubuntu 20.04 LTS | CIG4-8H v1.0 | SDK v2.1.0 | [Download](https://github.com/SENSING-Technology/CIG4-8H) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip Download Tool Usage
**DownGit** allows you to download specific folders or files from GitHub repositories without cloning the entire repository:
1. Copy the GitHub repository URL from the "Download Link" column
2. Open [DownGit](https://minhaskamal.github.io/DownGit/#/home) in your browser
3. Paste the repository URL into the input field
4. Click "Download" to get a ZIP file containing the SDK
5. Extract the ZIP file to your desired location

This method is particularly useful when you only need the SDK files without the full Git history.
:::

### SDK Package Contents

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <strong>SDK Directory Structure:</strong><br/>
  📁 <strong>CIG4-8H-SDK/</strong><br/>
  ├── 📁 <strong>bash/</strong> - Control scripts and utilities<br/>
  ├── 📁 <strong>include/</strong> - Header files and API definitions<br/>
  ├── 📁 <strong>xdma/</strong> - PCIe driver source code<br/>
  ├── 📁 <strong>tools/</strong> - Development and debugging tools<br/>
  ├── 📁 <strong>examples/</strong> - Sample applications and demos<br/>
  ├── 📁 <strong>docs/</strong> - API documentation and user guides<br/>
  ├── 📄 <strong>Makefile</strong> - Build configuration<br/>
  ├── 📄 <strong>README.md</strong> - Quick start guide<br/>
  └── 📄 <strong>LICENSE</strong> - Software license terms
</div>

:::tip Download Assistance
If you encounter any issues downloading the SDK or need access to older versions, please contact our technical support team at [support@sensing-world.com](mailto:support@sensing-world.com) or visit our [GitHub repository](https://github.com/SENSING-Technology/CIG4-8H) for the latest releases.
:::

## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information and frequently asked questions, please contact our technical support team or visit our <a href="https://sensing-world.com/en/h-col-151.html" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>official website</a>.
</div>
