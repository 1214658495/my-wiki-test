---
sidebar_position: 3
---

# SG10A-AGON-G2M-A1

## Overview

<div className="row">
  <div className="col col--8">
    SG10A-AGON-G2M-A1 adapter board, which allows up to 10 cameras to be connected to the Jetson AGX Orin module,
    is fully compatible with the NVIDIA Jetson AGX Orin Development Kit.
    As there are many different types of GMSL cameras available, the adapter board can be adaptively operated at different frequencies i.e.
    it is compatible with both GMSL and GMSL2 protocol interfaces through software configuration.
    The GMSL camera is powered by PoC (Power over Coax), so all data, control signals and power are sent over a 50 Ohm coaxial cable,
    making the camera's cable routing flexible and easy to install in automotive applications.
  </div>
  <div className="col col--4">
    :::note Key Features
    - 10 camera support
    - GMSL/GMSL2 compatible
    - PoC power supply
    - Easy installation
    :::
  </div>
</div>


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1.png" alt="SG10A-AGON-G2M-A1"
    style={{maxWidth: '45%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/SG10A-AGON-G2M-A1.html?fromMid=898#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
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
    - Model: SG10A-AGON-G2M-A1
    - Dimension: 88mm*120mm
    - Weight: 50g
    - Connector: 1x120Pin High-density connectors
    - Camera input: Camera*10(GMSL2/GMSL)
    - Trigger In: 4Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX9296A *3
                    MAXIM(ADI) MAX96712A *1
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
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Hardware_Overview.png" alt="SG10A-AGON-G2M-A1-overview" style={{maxWidth: '70%', height: 'auto'}} />
</div>

### Block Diagram

:::caution Attention
（1）The I2C bus number is the hardware location (matching the connector). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Block_Diagram.png" alt="SG10A-AGON-G2M-A1-Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### J19 Pin Define

<div style={{marginBottom: '2rem'}}>
  <table>
    <thead>
      <tr>
        <th colSpan="3">J19</th>
      </tr>
      <tr>
        <th>Pin NO</th>
        <th>NAME</th>
        <th>Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>GND</td>
        <td>/</td>
      </tr>
      <tr>
        <td>2</td>
        <td>SYNC1</td>
        <td>Trigger pins for U19 and U4</td>
      </tr>
      <tr>
        <td>3</td>
        <td>GND</td>
        <td>/</td>
      </tr>
      <tr>
        <td>4</td>
        <td>SYNC2</td>
        <td>Trigger pins for U13 and U3</td>
      </tr>
    </tbody>
  </table>
</div>

### Supported Camera List

:::note Camera Compatibility
JetPack 6.0 and JetPack 6.2 are supported. See [SDK Download](#sdk-download) for the camera combinations supported by each driver package. The camera list and mapping below apply to the JetPack 6.0 `SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H&SHF3L` package.
:::

#### Camera Version Support

* Gemini 335Lg
* SHW3H(3MP/H120UA)
* SHF3L(3MP/H190XA)

#### Camera Mapping

| FAKRA | Video | Camera |
|-------|-------|--------|
| J21 | video0 | SHW3H |
| J22 | video1 | SHW3H |
| J27 | video2 | SHW3H |
| J28 | video3 | SHW3H |
| J29 | video4 | SHW3H |
| J30 | video5 | SHW3H |
| J25 | video6~video13 | Gemini 335Lg |
| J22 | video14~video21 | Gemini 335Lg |
| J22 | video22~video29 | Gemini 335Lg |
| J22 | video30~video37 | Gemini 335Lg |

<!-- | Camera | Output Data | Jetpack 5.1.2 | Jetpack 6.2 |
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
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - | -->

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.2</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra).
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Kit_Contents.png" alt="SG10A-AGON-G2M-A1-Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Parts List

<div style={{marginBottom: '2rem'}}>
  <table>
    <thead>
      <tr>
        <th colSpan="4">Parts list</th>
      </tr>
      <tr>
        <th>Serial number</th>
        <th>Product model</th>
        <th>quantity</th>
        <th>remark</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Power adapter</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Power switching harness</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>3</td>
        <td>SG10A-AGON-G2M-A1 adapter board</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>4</td>
        <td>copper column, M2.5*12+5</td>
        <td>3</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>5</td>
        <td>screw, M2.5-F</td>
        <td>3</td>
        <td>Standard configuration</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Jetson AGX Orin DK</td>
        <td>1</td>
        <td>optional configuration</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Trigger line</td>
        <td>1</td>
        <td>Standard configuration</td>
      </tr>
    </tbody>
  </table>
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
3. Connect the power supply
4. Power on the system
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

### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| JetPack Version | Framework | Driver Package | Supported Cameras | Download Link |
|-----------------|-----------|----------------|-------------------|---------------|
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56Cx1_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S56C ×1 (with IMU) + SHF3L/SHF3H ×6 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56Cx1_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S56 ×1 (with IMU) + SHF3L/SHF3H ×6 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHW3Gx6_JP6.2_L4TR36.4.3` | Astra S56 ×1 + SHW3G/SHF3G ×6 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHW3Gx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_AR0234x5_JP6.2_L4TR36.4.3` | Astra S56 ×1 + AR0234 ×5 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_AR0234x5_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56&SHW5G_JP6.2_L4TR36.4.3` | SHW5G ×9; Astra S56 ×4; Astra S56 ×2 + SHW5G ×5 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56%26SHW5G_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_60fps_JP6.2_L4TR36.4.3` | SHW5G 60fps ×8 (max 2 per MAX96712) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_60fps_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_JP6.2_L4TR36.4.3` | SHW5G ×9 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Hx6_SHW5Gx4_JP6.2_L4TR36.4.3` | SHW3H ×6 + SHW5G ×3 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Hx6_SHW5Gx4_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Gx9_JP6.2_L4TR36.4.3` | SHW3G/SHF3G ×9 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Gx9_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A-AGON-G2M-A1-AGX_ORIN_SHW3H&SHF3L_JP6.2_L4TR36.4.3` | SHW3H ×8 / SHF3L ×10 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A-AGON-G2M-A1-AGX_ORIN_SHW3H%26SHF3L_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S36x2_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S36 ×2 + SHF3L ×6 (or SHW3H ×4) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S36x2_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S36x1_AR0233x7_JP6.2_L4TR36.4.3` | Astra S36 ×1 + SG2-AR0233C (60fps) ×7 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S36x1_AR0233x7_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_N1B60_SHW3Hx6_AR0233x4_JP6.2_L4TR36.4.3` | SH2-N1B60-G2A ×6 or SHW3H ×6, + SG2-AR0233C ×4 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_N1B60_SHW3Hx6_AR0233x4_JP6.2_L4TR36.4.3) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

:::tip Driver package notes
- **SIPL** packages are based on the NVIDIA SIPL camera framework supported since JetPack 7.2; **V4L2** packages use the standard V4L2 / Argus camera path.
- Each driver package contains its own `Readme.md` (bring-up steps) and `Version.md` (change log). Please follow the Readme of the package you download.
:::
