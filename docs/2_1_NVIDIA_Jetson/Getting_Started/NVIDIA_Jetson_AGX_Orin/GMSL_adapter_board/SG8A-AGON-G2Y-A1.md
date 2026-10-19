---
sidebar_position: 2
---

# SG8A-AGON-G2Y-A1

## Overview

<div className="row">
  <div className="col col--8">
    SG8A-AGON-G2Y-A1 adapter board, which allows up to 8 cameras to be connected to the Jetson AGX Orin module,
    is fully compatible with the NVIDIA Jetson AGX Orin Development Kit.
    As there are many different types of GMSL cameras available, the adapter board can be adaptively operated at different frequencies i.e.
    it is compatible with both GMSL and GMSL2 protocol interfaces through software configuration.
    The GMSL camera is powered by PoC (Power over Coax), so all data, control signals and power are sent over a 50 Ohm coaxial cable,
    making the camera's cable routing flexible and easy to install in automotive applications.
  </div>
  <div className="col col--4">
    :::note Key Features
    - 8 camera support
    - GMSL/GMSL2 compatible
    - PoC power supply
    - Easy installation
    :::
  </div>
</div>


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1.png" alt="SG8A-ORIN-GMSL"
    style={{maxWidth: '45%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-269.html?recommendFromPid=0&fromMid=898" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>coming soon</strong>
    </span>
</div> -->

## Getting Started

### Specification

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG8A-AGON-G2Y-A1
    - Dimension: 86.9mm * 55mm * 21.8mm
    - Weight: 50g
    - Connector: 1x120Pin High-density
    - Camera input: Camera*8(GMSL2/GMSL)
    - Trigger In: 6Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX96712*2
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 9-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +70°C
    - Adaptation kit: Jetson AGX Orin
    :::
  </div>
</div>

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview.png" alt="SG8A-AGON-G2Y-A1-overview" style={{maxWidth: '70%', height: 'auto'}} />
</div>
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div>

### Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector J2 pin). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Block_Diagram.png" alt="SG8A-AGON-G2Y-A1-Block Diagram" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### Supported Camera List

:::note Camera Compatibility
The following cameras are supported with different JetPack versions:
:::

| Camera | Output Data | Jetpack 5.1.2 | Jetpack 6.2 |
|--------|-------------|---------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | - | - |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| DMSBBFAN | YUV422 | - | - |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong>, <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.2 / 6.2.1</strong>, <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.2.1</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra).
- 39.2.1: L4T R39.2.1 (Jetpack 7.2.1)
- 36.4.4: L4T R36.4.4 (Jetpack 6.2.1)
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
    - Four-in-one wire harness (2 pcs)
    - Power switching harness
    - Trigger wiring harness
    - SG8A-AGON-G2Y-A1 adapter board
    - Copper column, M2.5*10 (3 pcs)
    - Screw, M2.5-F (3 pcs)
    - Power adapter
    :::
  </div>
  <div className="col col--4">
    :::note Optional Configuration
    - Jetson AGX Orin DK
    :::
  </div>
</div>

#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Kit_Contents.png" alt="SG8A-AGON-G2Y-A1-Kit Contents" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG8A-AGON-G2Y-A1 board using the coaxial cable
2. Mount the SG8A-AGON-G2Y-A1 board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1XxNWznEkV&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div>

### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| JetPack Version | Framework | Driver Package | Supported Cameras | Download Link |
|-----------------|-----------|----------------|-------------------|---------------|
| JP7.2.1 | SIPL | `SG8A_AGON_G2Y_A1_AGX_ORIN_S56C_SHW5G_SHF3L_SIPL_JP7.2.1_L4TR39.2.1` | Astra S56C ×1 + SHF3L ×2; SHW5G ×2 + SHF3L ×2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2.1/SG8A_AGON_G2Y_A1_AGX_ORIN_S56C_SHW5G_SHF3L_SIPL_JP7.2.1_L4TR39.2.1) |
| JP6.2.1 | V4L2 | `SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4` | GMSL2 x8 general package: SG2-AR0233C / SG2-IMX390C / SG2-OX03CC / SG3S-ISX031C / SG3S-OX03JC / SG3S11AFxK / SG5-IMX490C / SG8S-AR0820C / SG8-ISX028C / SG8-OX08BC / SG8-OX08DC / SG8-IMX728C / OMSBDAAN / DMSBBFAN | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2.1/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4) |
| JP6.2 | V4L2 | `SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3` | GMSL2 x8 general package (YUV / RAW, heterogeneous connection supported): SGX YUV series, RedFox-D3GN, SH3-S11A60, SG8-ISX028C, SG8-OX08DC, SG3S11AFxK, SHW3G, SDV11NM1, etc. | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3) |
| JP5.1.2 | V4L2 | `SG8A_AGON_G2Y_A1_AGX_Orin_YUVx8_JP5.1.2_L4TR35.4.1` | GMSL2 YUV cameras (SG2 / SG3 / SG5 / SG8 series, OMSBDAAN-AA) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack5.1.2/SG8A_AGON_G2Y_A1_AGX_Orin_YUVx8_JP5.1.2_L4TR35.4.1) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

:::tip Driver package notes
- **SIPL** packages are based on the NVIDIA SIPL camera framework supported since JetPack 7.2; **V4L2** packages use the standard V4L2 / Argus camera path.
- Each driver package contains its own `Readme.md` (bring-up steps) and `Version.md` (change log). Please follow the Readme of the package you download. 
:::
