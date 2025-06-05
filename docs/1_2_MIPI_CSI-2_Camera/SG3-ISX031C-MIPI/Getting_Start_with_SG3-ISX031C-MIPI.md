---
sidebar_position: 1
---

# Getting Start with SG3-ISX031C-MIPI

## Overview

<div className="row">
  <div className="col col--12">
    SG3-ISX031C-MIPI-Hxxx camera is equipped with SONY CMOS image sensor ISX031. It has an automotive-grade sensor with a well tuned Image Signal Processor (ISP) that produces exceptional image quality, can be adapted to difference SOC platforms.
  </div>
</div>



<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031.png" alt="SG3-ISX031C-MIPI" 
    style={{maxWidth: '20%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-114.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG8A-ORIN-GMSL2
    - Dimension: 104mm*74mm
    - Weight: 50g
    - Connector: 1x120Pin High-density
    - Camera input: Camera*8(GMSL2/GMSL)
    - Trigger In: 12Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX9296A*4
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 8-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +85°C
    - Adaptation kit: Jetson AGX Orin/Xavier
    :::
  </div>
</div>

### Hardware Overview

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-overview.png" alt="SG8A-ORIN-GMSL2-overview" style={{maxWidth: '90%', height: 'auto'}} />
</div> -->

### Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector J2 pin). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-Block Diagram.png" alt="SG8A-ORIN-GMSL2-Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->

### Supported Camera List

:::note Camera Compatibility
The following cameras are supported with different JetPack versions:
:::

| Camera | Output Data | Jetpack 5.1.2 | Jetpack 6.0DP | Jetpack 6.0 | Jetpack 6.1 | Jetpack 6.2 |
|--------|-------------|---------------|---------------|-------------|-------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | ✅ | - | - | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | ✅ | - | - | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| DMSBBFAN | YUV422 | ✅ | - | - | - | ✅ |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - | - | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | ✅ | - | ✅ | - | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Parts List

<div className="row">
  <div className="col col--6">
    :::note Standard Configuration
    - Power adapter
    - Power switching harness
    - SG8A-ORIN-GMSL2 adapter board
    - Copper column, M2.5*16 (3 pcs)
    - Screw, M2.5-F (3 pcs)
    :::
  </div>
  <div className="col col--4">
    :::note Optional Configuration
    - Jetson AGX Orin DK
    :::
  </div>
</div>

#### Kit Contents

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-complete2.png" alt="SG8A-ORIN-GMSL2-complete" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG8A-ORIN-GMSL2 board using the coaxial cable
2. Mount the SG8A-ORIN-GMSL2 board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
:::

<!-- <div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1gj5TzdEAo&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div> -->

### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| GMSL Camera (YUV) | JP5.1.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1) |
| GMSL Camera (YUV) | JP6.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP6.0_L4TR36.3.0) |
| GMSL2 Camera (YUV) | JP5.1.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1) |
| GMSL2 Camera (YUV) | JP6.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP6.0_L4TR36.3.0) |
| GMSL2 Camera (RAW) | JP5.1.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP5.1.2_L4TR35.4.1) |
| GMSL2 Camera (RAW) | JP6.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP6.0_L4TR36.3.0) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

#### Quick Bring Up