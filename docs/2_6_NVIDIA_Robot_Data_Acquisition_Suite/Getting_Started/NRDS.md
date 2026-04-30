---
sidebar_position: 1
---

# NVIDIA Robot Data Acquisition Suite

## Overview

<div className="row">
  <div className="col col--12">
    NVIDIA Robot Data Acquisition Suite (NRDS) is a complete development kit for multi-camera robot data acquisition,
    combining <strong>NVIDIA Jetson AGX Orin</strong> with <strong>SENSING SG10A-AGON-G2M-A1 GMSL Adapter Board</strong>.
    SENSING has developed optimized camera drivers to enable seamless integration of GMSL cameras with the Jetson platform.
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_Robot_Data_Acquisition_Suite/NRDS/NRDS_Application.jpg?x-oss-process=image/format,webp" alt="NRDS_Application.jpg"   
    style={{maxWidth: '55%', height:'auto'}} />
</div>
<br />
<div style={{textAlign: 'center'}}>

:::note Product Components
<table style={{margin: '0 auto'}}>
| Component | Provider | Description |
|-----------|----------|-------------|
| Jetson AGX Orin | NVIDIA (Official) | Official development kit |
| SG10A-AGON-G2M-A1 | SENSING| GMSL adapter board, supports up to 10 cameras |
| Driver Package | SENSING | Based on JetPack 6.2, supports Astra S56 & SHF3L/SHF3H cameras |
</table>
:::

</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/SG10A-AGON-G2M-A1.html?fromMid=898#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->

## System Architecture

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Hardware_Overview.png?x-oss-process=image/format,webp" alt="NRDS Architecture" style={{maxWidth: '70%', height: 'auto'}} />
    <p>SG10A-AGON-G2M-A1 Hardware Overview</p>
</div>

## Component Specifications

### Jetson AGX Orin (NVIDIA Official)

:::note Official Development Kit
- **Module**: NVIDIA AGX Orin (32GB/64GB options)
- **Processor**: NVIDIA Arm® Cortex®-A78AE CPU + NVIDIA Ampere GPU
- **Software**: JetPack 6.2 (L4T R36.4.3)
- **Interface**: CSI-2, PCIe, USB, Ethernet, etc.
:::

For more details, visit [NVIDIA Jetson AGX Orin](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/).

### SG10A-AGON-G2M-A1 (SENSING)

<div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG10A-AGON-G2M-A1
    - Dimension: 88mm × 120mm
    - Weight: 50g
    - Connector: 1×120Pin High-density connectors
    - Camera input: 10× GMSL2/GMSL cameras
    - Trigger In: 4Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX9296A ×3
                    MAXIM(ADI) MAX96712A ×1
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 9-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +70°C
    :::
  </div>
</div>

:::note Key Features
- Up to 10 cameras support (GMSL/GMSL2 mixed)
- Power over Coax (PoC) - data, control and power over single coaxial cable
- Compatible with NVIDIA Jetson AGX Orin and Jetson AGX Thor
- Flexible cable routing for automotive applications
:::
For more details, visit [SENSING SG10A-AGON-G2M-A1 GMSL Adapter Board](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1).

### SG10A-AGON-G2M-A1 Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.

（3）**Important**: Connect pins 2 and 4 of J19 on the adapter board together to enable camera synchronization.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Block_Diagram.png" alt="Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### J19 Pin Definition

<div style={{display: 'flex', justifyContent: 'center'}}>
| Pin NO | NAME | Remarks |
|--------|------|---------|
| 1 | GND | Ground |
| 2 | SYNC1 | Trigger pins for U19 and U4 |
| 3 | GND | Ground |
| 4 | SYNC2 | Trigger pins for U13 and U3 |

</div>

:::note SYNC1 and SYNC2 Jumper
When using trigger mode, **SYNC1 (Pin 2) and SYNC2 (Pin 4) must be jumpered** for the cameras to trigger properly.
:::

## Supported Cameras

:::note JetPack 6.2 (L4T R36.4.3) Driver Package
The latest driver package supports **Astra S56** and **SHF3L/SHF3H** cameras.
:::


<div style={{display: 'flex', justifyContent: 'center'}}>
| Model | Type | Resolution | Shutter | Data Format | FOV (H) | Role / Position | Max Quantity | Port | Docs |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |:--- |
| **Astra S56** | Stereo | 2 * 5MP | Global | RAW | 120° | **Head**: Depth & VLA | 1 | J27/J29 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Binocular_Camera/S56) |
| **SHF3L** | Monocular | 3MP | Rolling | YUV | 190° | **Hands**: HDR 30fps Monocular Camera | 6 | J21-J26 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHF3L) |
| **SHW3H** （Optional）| Monocular | 3MP | Rolling | YUV | 120° | **Head**: HDR 60fps Monocular Camera | 6 | J21-J26 | [View Specs](https://wiki.sensing-world.com/docs/1_10_Humanoid_Robotic_Camera/Monocular_Camera/SHW3H) |

</div>


### Camera to Device Node Mapping (JetPack 6.2)

<div style={{display: 'flex', justifyContent: 'center'}}>
| PORT | DEV NODE | Camera |
|------|----------|--------|
| J27 | /dev/video0, /dev/video1 | S56 |
| J29 | /dev/video2, /dev/video3 |  |
| J25 | /dev/video4 | SHF3L/SHF3H |
| J26 | /dev/video5 | SHF3L/SHF3H |
| J23 | /dev/video6 | SHF3L/SHF3H |
| J24 | /dev/video7 | SHF3L/SHF3H |
| J21 | /dev/video8 | SHF3L/SHF3H |
| J22 | /dev/video9 | SHF3L/SHF3H |

</div>

## Hardware Preparation

### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Kit_Contents.png" alt="Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### Parts List

<div style={{display: 'flex', justifyContent: 'center'}}>
| Serial number | Product model | Quantity | Remark |
|---|---|---:|---|
| 1 | Power adapter | 1 | Standard |
| 2 | Power switching harness | 1 | Standard |
| 3 | SG10A-AGON-G2M-A1 adapter board | 1 | Standard |
| 4 | Copper column, M2.5×12+5 | 3 | Standard |
| 5 | Screw, M2.5-F | 3 | Standard |
| 6 | Jetson AGX Orin DK | 1 | Optional |
| 7 | Trigger line | 1 | Standard |

</div>

### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. **Important**: Connect pins 2 and 4 of J19 together to enable camera synchronization
3. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
4. Connect the power supply
5. Power on the system
:::
<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV15SN4zaEc6&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div>

## Software Preparation

### Driver Package Download

<div style={{textAlign: 'center'}}>

<table style={{margin: '0 auto'}}>
| Camera Type | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| Astra S56 + SHF3L/SHF3H | JP6.2 (L4TR36.4.3) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3) |
</table>

</div>

:::tip Download Method
Use [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download specific folders from GitHub:
1. Copy the GitHub repository URL
2. Paste into DownGit
3. Click Download
:::
