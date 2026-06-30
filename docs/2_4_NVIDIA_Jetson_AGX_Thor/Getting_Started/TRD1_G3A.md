---
sidebar_position: 2
---

# TRD1 G3A

## Overview

<div className="row">
  <div className="col col--12">
    TRD1 G3A extends the official NVIDIA Jetson AGX Thor Developer Kit with GMSL3 connectivity, enabling rapid integration of high-resolution GMSL3 camera streams on the Thor platform.
  </div>
</div>

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A.png?x-oss-process=image/format,webp" alt="TRD1 G3A" style={{maxWidth: '50%', height: 'auto'}} />
</div>
<br />

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    - Support NVIDIA JETSON THOR Platform<br/>
    - Supported Camera Resolutions : Max 5140*3840<br/>
    - Supported Camera Output Formats : RAW/YUV422<br/>
    - Dimensions: L:243.12mm x W:112.4mm x H:56.88mm<br/>
    - Compatible Camera Types : GMSL3/C-PHY<br/>
    - Maximum Supported Cameras : 8*GMSL3<br/>
    - SOC: NVIDIA Jetson T5000 Module<br/>
    - AI Performance: 2070 TFLOPS<br/>
    - Memory: 128 GB 256-bit LPDDR5X
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    - Robotics<br/>
    - Industrial<br/>
    - Medical<br/>
    - Inspection
  </div>
</div>

## Getting Started

### Hardware Overview

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 G3A Hardware Overview" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### Block Diagram

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G3A/TRD1_G3A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 G3A Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

:::note
- TRD1 G3A uses the **MAX96726 GMSL3 deserializer** design for GMSL3 camera input.
:::

### Supported Camera Combinations

:::note Camera Compatibility
You may choose the following camera combinations to connect to the TRD1 G3A.
:::

| Camera Combination | Number of Supported Cameras | Remark |
| --- | --- | --- |
| Comb. 1 | 8*8MP/30FPS | / |
| Comb. 2 | 4*12MP/30FPS | / |
| Comb. 3 | 2*17MP/30FPS | / |

:::note JetPack Version
TRD1 G3A currently supports **JetPack 7.0 / L4T R38.2.0** on NVIDIA Jetson AGX Thor.

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Hardware Preparation

#### Parts List

| Serial Number | Product Model | Quantity | Remark |
| --- | --- | ---: | --- |
| 1 | 945-14070-0080-000-MIPI | 1 | up to 8 cameras at most |
| 2 | T4JC-JC-ZZZZ-0500L (Female to Female 0.5m) | 2 | Standard configuration |
| 3 | Trigger Cable | 1 | Standard configuration |
| 4 | Power Conversion Cable | 1 | Standard configuration |
| 5 | Power adapter | 1 | Standard configuration |
| 6 | Multi-functional conversion socket | 1 | Standard configuration |

#### Kit Contents

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 G3A Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### Installation Steps

:::note Quick Setup
1. Connect the GMSL3 camera to the TRD1 G3A CAM ports using coaxial cables.
2. Connect the 12V power supply to the adapter board.
3. Power on the Jetson AGX Thor system.
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 G3A Camera Connection" style={{maxWidth: '90%', height: 'auto'}} />
</div>

The correspondence between CAM ports and device nodes is as follows:

| Port | Device Tree Node | Device Node |
| --- | --- | --- |
| CAM0 | cam_0 | /dev/video0 |
| CAM1 | cam_1 | /dev/video1 |
| CAM2 | cam_2 | /dev/video2 |
| CAM3 | cam_3 | /dev/video3 |
| CAM4 | cam_4 | /dev/video4 |
| CAM5 | cam_5 | /dev/video5 |
| CAM6 | cam_6 | /dev/video6 |
| CAM7 | cam_7 | /dev/video7 |

### Software Preparation

#### SDK Download

:::note Driver Package
Use the TRD1 G3A driver package for Jetson AGX Thor, JetPack 7.0, and L4T R38.2.0.
:::

| Camera Type | JetPack Version | SDK Download Link |
| --- | --- | --- |
| GMSL3 Camera (RAW) | JP7.0 / L4T R38.2.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G3A/TRD1_G3A_AGX_THOR_IMX715_IMX735_IMX577_AR2020C_JP7.0_L4TR38.2) |

:::tip Download Method
Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download.
:::



<!-- For details, please click [here](../../../FAQ/FAQ_jetson) -->
