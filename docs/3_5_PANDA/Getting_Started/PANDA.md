---
sidebar_position: 1
title: Getting Started with PANDA serial PG2
---

# Getting Started with PANDA serial PG2

## Overview
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_5_PANDA/PANDA_Overview.png" alt="PANDA_Overview" style={{maxWidth: '45%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    <strong>PANDA serial PG2</strong> is designed by SZ SENSING TECH CO.,LTD . It can convert camera signals into USB 3.0 interface without loss,and supports SENSING cameras of the GMSL series
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://www.sensing-world.com/USB_Converter/" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>Learn More</span>
    </a>
  </div>
</div>


## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Uncompressed video acquisition<br/>
    • R/W camera register through I2C<br/>
    • Multi−Camera Synchronization Support<br/>
    • Update camera firmware
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Autonomous Driving&machine<br/>
    • Video Capture<br/>
    • Laboratory<br/>
    • USB camera
  </div>
  <!-- <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>SerDes Support:</strong><br/>
    • Serializers: MAX9295A, MAX96717F, MAX96717, etc.<br/>
    • Deserializers: MAX9296A, MAX96712, MAX96716, MAX96718, etc.<br/>
    • Simulates I2C messages between ECU and camera<br/>
    • OS: Linux supported
  </div> -->
</div>

## Specification parameters

<div style={{display: 'flex', justifyContent: 'center'}}>

| **Parameter** | **Value** |
|---|---|
| **Deserializer** | MAX9296AGTM/V+T |
| **Resolution supported** | 1920 * 1080@60fps<br/>1920 * 1536@30fps<br/>only one camera is supported |
| **Frame rate** | YUV422/RAW12 |
| **Compressed** | NO |
| **Interface of output** | USB3.0 |
| **Camera Connector** | Coaxial Connector<br/>FMK2252AW-001-TL30G-50 |
| **Trigger mode** | Support external trigger |
| **Communication** | Support R/W register<br/>(Only via SensingCaptureV3.exe) |
| **OS Supported** | Windows or Linux /Standard V4L2 |
| **Power Supply** | By USB port /Support external Power|
| **Current** | < 500mA |
| **Temperature** | -40 ~ +75°C |
| **Dimensions** | 45mm(W), 64mm(L), 23.6mm(H) |
| **Material** | Metal |
| **Color** | Black |

</div>

<!-- ### Advanced Capabilities
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
• Support for ECU external trigger signal control for simultaneous output of all channels<br/>
• Support for timestamp-based simulation  of RAW video data<br/>
• Synchronization of multiple base boards<br/>
• Support for user injection of video data<br/>
• Support for video data rendered by GPU graphics card emulation<br/>
• Support for gPTP/PTP synchronization
</div> -->


## Hardware Preparation
### Dimensions
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_5_PANDA/PANDA_Dimensions.png" alt="PANDA_Dimensions" style={{maxWidth: '100%', height:'auto'}} />
</div>

<!-- ### Block Diagram
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Diagram.png" alt="CyberCobra Application Diagram" style={{maxWidth: '100%', height:'auto'}} />
</div> -->

#### Parts List
<div style={{display: 'flex', justifyContent: 'center'}}>

| Part Number | Model | Description | Quantity |
|------------|-------|-------------|-----------|
| 169900-0834 | GH1.25-6PIN-1000mm | External Trigger Cable | 1 |
| 169900-0004 | TZJC-PC-ZZ-0250A | 0.5M 2 in 1coaxial cable | 1 |
| 161000-0001 | Coaxial Cable | SG-JS2JS2200L | 1 |
| 169900-0811 | USB3.0 A to TYPE-C 1M cable | USB cable(Video display) | 1 |
| 169900-0985 | Type-C data cable_1m_USB 2.0 | Update camera firmware cable | 1 |

</div>

<!-- <div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
After collecting data with autonomous vehicles, algorithm validation and optimization are required, which demands a data injection system. The autonomous driving IPC transmits collected video data from hard disks to the video injection card through the PCIe interface. The card then synchronously outputs 8 channels of video based on timestamps, simulating the camera time sequence and transmitting it to the domain control through the GMSL interface. The CyberCobra card supports gPTP/PTP synchronization, achieving time synchronization through switches, IPC and ACU, ensuring all devices in the system are on the same timeline.
</div> -->

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

<!-- :::note Complete Solution
SENSING can provide a complete solution including Camera + GMSL Video Injection Card + IPC + Coaxial cable for your hardware-in-the-loop testing needs.
::: -->




## Software Preparation

<!-- ### Software Framework Diagram -->
<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    Software Framework Architecture
  </div>
</div> -->

### SDK Download

<!-- :::note SDK Packages
Select the appropriate SDK package based on your operating system and CIG4-8H hardware version:
::: -->

| Operating System | Hardware Version | Software Tool | Download Link |
|------------------|------------------|-------------|---------------|
| windows | v3.0 | SensingCaptureV3 | [Download](https://github.com/SENSING-Technology/SensingCaptureV3) |

<!-- :::tip Download Tool Usage
**DownGit** allows you to download specific folders or files from GitHub repositories without cloning the entire repository:
1. Copy the GitHub repository URL from the "Download Link" column
2. Open [DownGit](https://minhaskamal.github.io/DownGit/#/home) in your browser
3. Paste the repository URL into the input field
4. Click "Download" to get a ZIP file containing the SDK
5. Extract the ZIP file to your desired location

This method is particularly useful when you only need the SDK files without the full Git history.
::: -->

<!-- ### SDK Package Contents

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
</div> -->

:::tip Download Assistance
If you encounter any issues downloading the SDK or need access to older versions, please contact our technical support team at [support@sensing-world.com](mailto:support@sensing-world.com) or visit our [GitHub repository](https://github.com/SENSING-Technology/CIG4-8H) for the latest releases.
:::

---

## Detailed Usage Instructions

For comprehensive software setup, please refer to our detailed application guide:

**[📖 Complete Application Guide](../Application/PANDA_Application)**

<!-- ## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information and frequently asked questions, please contact our technical support team or visit our <a href="https://sensing-world.com/en/h-col-151.html" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>official website</a>.
</div> -->
