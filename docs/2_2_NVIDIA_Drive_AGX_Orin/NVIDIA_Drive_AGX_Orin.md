---
sidebar_position: 5
---

# NVIDIA® DRIVE AGX Orin Camera

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_2_NVIDIA_Drive_AGX_Orin/NVIDIA_Drive_AGX_Orin.png" alt="NVIDIA_Drive_AGX_Orin" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Product Overview

<div className="row">
  <div className="col col--12">
    SENSING has conducted in-depth development based on NVIDIA DRIVE AGX Orin and released a multi-channel GMSL2 camera development kit based on DRIVE AGX Orin. This kit is mainly designed to provide AI practitioners, development enthusiasts, and ecological partners in the intelligent driving industry with a development platform for quickly building GMSL2 cameras. With the security and openness of the DRIVE AGX Orin development kit, everyone can easily develop various suitable applications for learning and research.
    
    SENSING is a leading provider of high-quality cameras, supporting the DRIVE AGX Orin platform. We provide innovative camera solutions, such as high-resolution SerDes cameras, ultra-low light cameras, IR cameras, HDR cameras, as well as ADAS cameras. Our GMSL2 cameras for NVIDIA DRIVE AGX Orin are applied to Automotive, ADAS, and Autonomous Driving.
    
    We have the ability to develop imaging solutions, using DRIVE AGX Orin camera toolchain to meet the needs of various camera systems. We are especially good at low latency transmission, high image quality, and strong anti-interference solutions. Currently, our solution supports GMSL2 interface cameras. We also provide Linux drivers and sample applications for fast and smooth integration.
  </div>
  <!-- <div className="col col--4">
    :::note NVIDIA Elite Partner
    Certified expertise in NVIDIA Jetson platform development and integration
    :::
  </div> -->
</div>

## Product Specifications

<div className="row">
  <div className="col col--12">
    :::note Product Specifications
    - Support Platform: NVIDIA DRIVE AGX Orin
    - ISP: Support for proprietary ISP algorithms
    - Output Format: YUV422
    - Camera Input: Camera×16(GMSL2)
    - Support for multi-camera synchronization
    - Operating System: DRIVE OS Linux with Security Extension (Ubuntu) | QNX for Security
    :::
  </div>
</div>

## Camera for NVIDIA DRIVE AGX Orin Platform
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_2_NVIDIA_Drive_AGX_Orin/Support_for_Camera.png" alt="Support_for_Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>

| **Product** | **Sensor** | **Resolution** | **Output** | **HFOV** | **Drive OS SDK** | **Camera Driver** | **ISP file(.nito)** | **ISP** |
|------------|----------|----------|-----------|------------|--------------|--------------|--------------|--------------|
| SG2-AR0233C-GMSL2-Hxxx | AR0233 | 1920x1080 | RAW | 60°/100°/118°/196° | 6051 | Yes | Yes | No |
| SG2-AR0233C-5200-G2A-Hxxx | AR0233 | 1920x1080 | YUV422 | 30°/60°/90°/120°/190° | 6040/6051/6060 | Yes | Not required | Yes |
| SG2-IMX390C-GMSL2-Hxxx | IMX390 | 1920x1080 | RAW | 30°/60°/90°/120°/190° | 6040/6051 | Yes | Yes | No |
| SG3S-ISX031C-GMSL2F-Hxxx | ISX031 | 1920x1536 | YUV422 | 30°/60°/100°/118°/196° | 6040/6051 | Yes | Not required | Yes |
| SG3S-IMX623C-G2F-Hxxx | IMX623 | 1920x1536 | RAW | 60°/100°/190° | 6051 | Yes | Yes | No |
| SG8-OX08BC-5300-GMSL2-Hxxx | OX08B40 | 3840x2160 | YUV422 | 30°/60°/90°/120° | 6040/6051 | Yes | Not required | Yes |
| SG8-AR0820C-G2A-Hxxx | AR0820 | 3840x2160 | RAW | 120° | 6040/6051 | Yes | Yes | No |
| SG8S-AR0820C-5300-G2A-Hxxx | AR0820 | 3840x2160 | YUV422 | 59.7°/99°/196° | 6040/6051/6060 | Yes | Not required | Yes |

## Cameras for NVIDIA DRIVE AGX Orin Developer Kit

<div className="row">
  <div className="col col--6">
    :::note [YUV]GMSL2 Multi-Camera for Developer Kit
    - Support Platform: NVIDIA DRIVE AGX Orin
    - ISP: Support for proprietary ISP algorithms
    - Output Format: YUV422
    - Camera Input: Camera×16(GMSL2)
    :::
  </div>
  <div className="col col--6">
    :::note [RAW]GMSL2 Multi-Camera for Developer Kit
    - Support Platform: NVIDIA DRIVE AGX Orin
    - ISP: Support for proprietary ISP algorithms
    - Output Format: RAW
    - Camera Input: Camera×16(GMSL2)
    :::
  </div>
</div>


<!-- ## Our Expertise

<div className="row">
  <div className="col col--4">
    :::note Camera Types
    - High-resolution SerDes cameras
    - Ultra-low light cameras
    - IR cameras
    - HDR cameras
    - ADAS cameras
    :::
  </div>
  <div className="col col--4">
    :::note Interfaces
    - GMSL2
    - MIPI CSI-2
    - USB
    - FPDLINK
    :::
  </div>
  <div className="col col--4">
    :::note Applications
    - Autonomous Driving
    - Industrial Detection
    - Robotics
    - Edge Computing
    - Vehicle-Road Collaboration
    :::
  </div>
</div> -->

### NVIDIA DRIVE AGX Orin Camera Solutions
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_2_NVIDIA_Drive_AGX_Orin/GMSL2_Multi-Camera_for_Developer_Kit1.png" alt="GMSL2_Multi-Camera_for_Developer_Kit1" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>


<div className="row">
  <div className="col col--6">
    :::note Key Features
    - High-performance image processing
    - Low-latency transmission
    - Multiple interface support
    - Linux drivers and samples
    - Custom development capabilities
    - Support for multi-camera synchronization
    :::
  </div>
  <div className="col col--6">
    :::note Application Areas
    - Autonomous vehicles
    - Industrial inspection
    - Robotics
    - Edge computing
    - AI vision systems
    - Unmanned Ground Vehicles (UGV)
    :::
  </div>
</div>

## Product Configuration Notes

<div className="row">
  <div className="col col--12">
    :::note Default Configuration
    - The default shipping status of this product is with **FIXED** lenses. Users do not need to adjust the focus, nor can they replace the lens. If it is necessary to change the lens independently, it is required to make a note when placing an order. After changing the lens, the image quality is not within the scope of service.
    - By default, this product does not calibrate the camera's internal parameters. If you need to calibrate the camera's internal parameters and write them to the camera, you need to make a note when placing an order.
    :::
  </div>
</div>

## Technical Support and Inquiries

For more details, please contact the sales staff at Sales@sensing-world.com.