---
sidebar_position: 1
---

# TRD1 G2A


## Overview

<div className="row">
  <div className="col col--12">
    TRD1 G2A extends the official NVIDIA Jetson AGX THOR Developer Kit with GMSL connectivity, enabling rapid integration of GMSL camera streams on the THOR platform. Supports up to eight GMSL cameras.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A.png?x-oss-process=image/format,webp" alt="TRD1_G2A"
    style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Support NVIDIA JETSON THOR Platform <br/>
    • Supported Camera Resolutions ：Max 3840*2160 <br/>
    • Supported Camera Output Formats : RAW / YUV422 <br/>
    • Dimensions：L:243.12mm x W:112.4mm x H:56.88mm <br/>
    • Compatible Camera Types ：GMSL / GMSL2 <br/>
    • Maximum Supported Cameras ：8 *GMSL <br/>
    • SOC：NVIDlA Jetson T5000 Module <br/>
    • Al Perfommance：2070 TFLOPS <br/>
    • Memory：128 GB 256-bit LPDDR5X
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Robotics <br/>
    • Industrial <br/>
    • Medical<br/>
    • Inspection
  </div>
</div>

## Getting Started

<!-- ### Specification

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
</div> -->

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 G2A Hardware Overview" style={{maxWidth: '80%', height: 'auto'}} />
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

### Block Diagram

<!-- :::caution Attention
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 G2A Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>
:::note
- The TRD1 G2A uses **2 MAX96712 deserializers**, each supporting up to 4 camera ports.
:::

### Supported Camera List
:::note Camera Compatibility
You may choose the following camera combinations to connect to the TRD1 G2A.
:::

| Camera Combination  | Number of Supported Cameras  | Jetpack 7.0 |
|--------|-------------|---------------|
| Comb. 1 | 4*8MP/30FPS | - |
| Comb. 2 | 8*3MP/30FPS | - |
| Comb. 3 | 6*5MP/30FPS | - |
| Comb. 4 | 2 *8MP/30FPS+4 *3MP/30FPS | - |
| Comb. 5 | 3 *5MP/30FPS+4 *3MP/30FPS | - |
| Comb. 6 | 2 *8MP/30FPS+3 *5MP/30FPS | - |

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0 / 7.1 / 7.2</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra).
- 39.2: L4T R39.2 (Jetpack 7.2)
- 38.4: L4T R38.4 (Jetpack 7.1)
- 38.2: L4T R38.2 (Jetpack 7.0)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Parts List


| Serial number | Product model | Quantity | Remark |
|---|---|---:|---|
| 1 | 945-14070-0080-000-MIPI | 1 | up to 8 cameras at most |
| 2 | T4JC-JC-ZZZZ-0500L (Female to Female 0.5m) | 2 | Standard configuration |
| 3 | Trigger Cable | 1 | Standard configuration |
| 4 | Power Conversion Cable | 1 | Standard configuration |
| 5 | Power adapter | 1 | Standard configuration |
| 6 | Multi-functional conversion socket | 1 | optional configuration |


#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 G2A Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL camera to the TRD1 G2A using the coaxial cable(up to 8 cameras at most)
2. Connect the power supply(DC 9-16V)
3. Power on the system(Jetson Thor)
:::

<!-- <div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
    <iframe
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        src="//player.bilibili.com/player.html?bvid=BV1XxNWznEkV&page=1&high_quality=1&danmaku=0"
        scrolling="no"
        border="0"
        frameBorder="no"
        framespacing="0"
        allowFullScreen="true">
    </iframe>
</div> -->
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 G2A Camera Connection" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### Software Preparation

#### SDK Download

:::note Driver Packages
Select the appropriate driver package based on your camera type and JetPack version:
:::

| JetPack Version | Framework | Driver Package | Supported Cameras | Download Link |
|-----------------|-----------|----------------|-------------------|---------------|
| JP7.2 | SIPL | `TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2` | SG8-OX08DC-G2G, SG3-OX03H10C-G2F, SHW3G ×8, SHW5G ×8, Astra S56C/S56 ×4, SGX YUV series; (S56C ×1 + SHW5G ×2) ×2, (S56C ×1 + SHF3L ×2) ×2; external trigger sync | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) |
| JP7.2 | V4L2 | `TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2` | GMSL2 x8 general package: SGX YUV series (incl. SHW3H / SHF3L / SG8-ISX028C / SG8-OX08DC / SG2-ISX021C / SG3S11AFLK), Astra S36, Astra S56, Astra S56C, SHW5G, SHW3G, SG8-IMX728C, SDV11NM1 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2) |
| JP7.1 | V4L2 | `TRD1_G2A_AGX_THOR_GMSL2x8_JP7.1_L4TR38.4` | GMSL2 x8 general package: SGX YUV series, SG8-OX08DC, SG8-IMX728C, SG8-ISX028C, SG3-OX03H10C, SHW3G, SHW5G, SDV11NM1, Astra S56, Astra S36 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.1/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.1_L4TR38.4) |
| JP7.0 | V4L2 | `TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2` | GMSL2 x8 general package (heterogeneous connection supported): SG8-OX08DC, SHW3G, SHW5G, SGX YUV series, Astra S36, Astra S56, Astra S56C, SDV11NM1 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2) |
| JP7.0 | V4L2 | `TRD1_G2A_YUV_JP7.0_L4TR38.2` | GMSL2 YUV cameras (SG2 / SG3S / SG5 / SG8S series, SHF3L, SHF3H) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_YUV_JP7.0_L4TR38.2) |


:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

:::tip Driver package notes
- **SIPL** packages are based on the NVIDIA SIPL camera framework supported since JetPack 7.2; **V4L2** packages use the standard V4L2 / Argus camera path.
- Each driver package contains its own `Readme.md` (bring-up steps) and `Version.md` (change log). Please follow the Readme of the package you download. 
:::
