---
sidebar_position: 1
title: RedFox-D3Gx
---

# RedFox-D3Gx

## Overview

<div className="row">
  <div className="col col--12">
    The camera is equipped with the SONY automotive-grade CMOS image sensor and Maxim GMSL serializer. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality. It comes with an IP67-rated enclosure and AA lens that is focused and glued in factory.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_12_Automatic_Defogging_Camera/RedFox-D3Gx.png" alt="RedFox-D3Gx" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Support multi−camera synchronization<br/>
    • Support different focal length lens<br/>
    • Support external trigger<br/>
    • RoHS
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Autonomous Driving<br/>
    • ADAS + Viewing Fusion<br/>
    • High Dynamic Range Imaging<br/>
    • Robotics
  </div>
</div>


## Getting Started

### Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| **Parameter** | **Specification** |
|---------------|-------------------|
| **Sensor** | SONY 2.95MP RGGB |
| **ISP** | Built-in |
| **Image Size** | 1/2.42 inch CMOS |
| **Output Pixels** | 1920H×1536V @30fps (default)<br/> 1920H×1536V @60fps |
| **Resolution** | Center ≥800LW/PH, Around ≥600LW/PH<br/>(RedFox-D3GF only meets center standard) |
| **Pixel Size** | 3.0μm × 3.0μm |
| **Frame Rate** | MAX 60fps |
| **HDR Support** | Yes |
| **LEM** | Yes |
| **HDR Range** | Up to 120 dB |
| **Output Data** | YUV422 |
| **Serializer** | MAXIM MAX96717 |
| **Camera Interface** | GMSL2 |
| **Power Supply** | 9~16V Camera |
| **Current** | 400mA@12V (with Heating) |
| **Connector** | Amphenol Fakra Z Code (Camera) |
| **Operating Temperature Range** | -40°~+85°C |
| **Dimensions** | W: 30mm, L: 30mm |
| **Weight** | < 100g |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_12_Automatic_Defogging_Camera/D3GF.png" alt="SN2M4EFGD" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_12_Automatic_Defogging_Camera/D3GN.png" alt="SN2M4EFGD" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_12_Automatic_Defogging_Camera/D3GW.png" alt="SN2M4EFGD" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_12_Automatic_Defogging_Camera/RedFox-D3Gx_BlockDiagram.png" alt="D3Gx_BlockDiagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

#### I2C Address Information


<div style={{display: 'flex', justifyContent: 'center'}}>

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Parameter</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><strong>Serializer</strong></td>
      <td>Model</td>
      <td>MAX96717</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x80 (8bit address)</td>
    </tr>
    <tr>
      <td>GMSL Rate</td>
      <td>GMSL2 (6G bps)</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Sensor</strong></td>
      <td>I2C Address</td>
      <td>0x34 (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by MAX96717 MFP7</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by MAX96717 MFP0</td>
    </tr>
    <tr>
      <td>Data Type</td>
      <td>YUV422 8bit</td>
    </tr>
  </tbody>
</table>

</div>


### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| **Model** | **HFOV** | **VFOV** | **F.No** | **EFL (mm)** | **DOF** | **Max Optical Distortion** | **Water Proof** | **Lens Mount** |
|-----------|----------|----------|----------|--------------|---------|----------------------------|------------------|----------------|
| **RedFox-D3GN** | 53.2° | 43.6° | 1.6 | 5.76 | 2.3~INF Focus at 6.9m | -22.4% | IP67 | AA |
| **RedFox-D3GW** | 118.4° | 91.4° | 2.0 | 3.04 | 0.51~INF Focus at 1.5m | -92% | IP67 | AA |
| **RedFox-D3GF** | 196° | 160° | 2 | 1.31 | 0.1~INF Focus at 0.4m | -84% | IP67 | AA |

</div>






<!-- ### 1.4 Advanced Features

#### 1.4.1 Automatic Defogging Technology
The RedFox-D3Gx series incorporates advanced automatic defogging algorithms that enhance image clarity in challenging weather conditions. This technology automatically adjusts image processing parameters to maintain optimal visibility during fog, mist, or hazy conditions.

#### 1.4.2 Automotive-Grade Reliability
- **Temperature Resilience**: Operates reliably from -40°C to +85°C
- **Environmental Protection**: IP67-rated enclosure ensures protection against dust and water ingress
- **Vibration Resistance**: Designed to withstand automotive vibration and shock requirements
- **Long-term Stability**: Automotive-grade components ensure consistent performance over extended operational periods -->


<!-- ## 2. Camera Integration and Deployment -->

<!-- ### 2.1 Adaptation to NVIDIA® Jetson™ Platform
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH3-S11A60-G2A_ConnectNvidia.png" alt="SH3-S11A60-G2A_ConnectNvidia" 
    style={{maxWidth: '60%', height:'auto'}} />
    <p>SHW3H Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

#### 2.1.1 Installation Steps

:::note Quick Setup
1. Connect the RedFox-D3Gx camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
3. Connect the RedFox-D3Gx camera power supply (9-16V)
4. Connect the SG10A-AGON-G2M-A1 board power supply
5. Power on the system and verify camera detection
::: -->

<!-- <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div> -->

<!-- #### 2.1.2 Software Preparation

:::info SDK Download
Select the appropriate driver package based on your RedFox-D3Gx camera model and JetPack version:

Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| **NO.** | **JetPack Version** | **Camera Model** | **NVIDIA Jetson Devices** | **Adapter Board** | **Download Link** |
|---------|---------------------|------------------|----------------------------|-------------------|-------------------|
| 1 | JP6.0 | RedFox-D3Gx Series | Jetson AGX Orin Developer Kit | [SG10A-AGON-G2M-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.0/RedFox-D3Gx_JP6.0_L4TR36.3.0) |

</div>

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
::: -->



## Camera Integration with Customer's Self-developed Platform

For customers with their own deserializer who want to adapt our camera (serializer) to their platform, detailed technical coordination is required.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_SOC_connect.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

The diagram illustrates the communication architecture between a camera and controller system. It shows how data flows from the Sensor/ISP through the Serializer on the Camera side, across to the Deserializer and SOC on the Controller side. The system utilizes Fsync signals for synchronization and MFP7 interfaces for control. This architecture is essential for proper integration of SENSING cameras with customer-developed platforms.

#### 2.2.1 Link Register Initialization
SENSING provides comprehensive technical support for RedFox-D3Gx integration:

- **Serializer and Deserializer Configuration**
   - Register configuration for the RedFox-D3Gx camera module - [Getting Camera Information](/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
   - I2C communication protocol details
   - MAX96717G serializer configuration parameters

- **Link Status Troubleshooting Guide**
  - Link training parameters for 6Gbps GMSL2 communication
  - Error detection and recovery settings
  - Signal integrity optimization

:::tip
Please refer to the software flow and demo code below to develop your driver code for RedFox-D3Gx integration.
:::

#### 2.2.2 Software Development

##### Deserializer Initialization

```c
/* Example code for MAX9296 I2C initialization for RedFox-D3Gx */
#define MAX9296_I2C_ADDR 0x90 // 8-bit address

int max9296_init_redfox() {
    // Initialize I2C bus
    i2c_init();

    // Disable MIPI output during configuration
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);

    // Configure link settings for GMSL2 (6Gbps) - RedFox-D3Gx specific
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x02);

    // Configure linkA and linkB settings for GMSL2 selection
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);

    // Configure MIPI rate 1200Mbps for RedFox-D3Gx
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C);

    // Enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);

    return 0;
}
```

##### RedFox-D3Gx Camera Configuration

```c
/* RedFox-D3Gx Camera initialization with MAX96717G serializer */

#define MAX96717_I2C_ADDR 0x80 // 8-bit address for RedFox-D3Gx

int redfox_d3gx_init() {
    // Initialize deserializer first
    max9296_init_redfox();

    // Reset sensor through MAX96717G MFP0
    i2c_write(MAX96717_I2C_ADDR, 0x02BE, 0x10); // MFP0 high - sensor enable
    delay_ms(50);

    // Configure serializer for RedFox-D3Gx
    i2c_write(MAX96717_I2C_ADDR, 0x0057, 0x12);
    i2c_write(MAX96717_I2C_ADDR, 0x005B, 0x11);

    // Configure datatype for YUV422 8bit output
    i2c_write(MAX96717_I2C_ADDR, 0x0318, 0x5E);

    // Camera trigger sequence using MFP7
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x10); // MFP7 high - start streaming

    return 0;
}
```

#### 2.2.3 Integration Steps

##### BSP Integration for RedFox-D3Gx

1. **Device Tree Configuration**:
   - Modify the device tree to include CSI interface configuration for RedFox-D3Gx
   - Configure GMSL2 link parameters for 6Gbps operation
   - Add RedFox-D3Gx camera driver to kernel build configuration
   - Configure media controller pipeline for automatic defogging camera

2. **Driver Integration**:
   - Implement RedFox-D3Gx specific sensor controls
   - Configure automatic defogging algorithm parameters
   - Set up HDR processing pipeline (up to 120 dB range)
   - Implement temperature compensation for -40°C to +85°C operation

##### Application Development for RedFox-D3Gx

```c
/* RedFox-D3Gx Camera Application Example */
#include "redfox_camera_api.h"
#include <linux/videodev2.h>

int main() {
    // Open RedFox-D3Gx camera device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open RedFox-D3Gx camera device");
        return -1;
    }

    // Configure video capture format for RedFox-D3Gx
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY; // YUV422 format

    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set RedFox-D3Gx format");
        close(fd);
        return -1;
    }

    // Configure automatic defogging parameters
    struct v4l2_control ctrl;
    ctrl.id = V4L2_CID_AUTO_DEFOG_ENABLE;
    ctrl.value = 1; // Enable automatic defogging
    ioctl(fd, VIDIOC_S_CTRL, &ctrl);

    // Set HDR mode for enhanced dynamic range
    ctrl.id = V4L2_CID_HDR_MODE;
    ctrl.value = 1; // Enable HDR processing
    ioctl(fd, VIDIOC_S_CTRL, &ctrl);

    // Request and map buffers for high-resolution capture
    // ... (buffer setup code for 1920x1536 resolution) ...

    // Start streaming with automatic defogging
    // ... (streaming code with defogging enabled) ...

    // Capture and process frames with enhanced clarity
    // ... (frame processing with defogging algorithms) ...

    // Cleanup resources
    close(fd);
    return 0;
}
```
#### 2.2.4 Data Processing Pipeline

##### MIPI CSI Interface Processing
After receiving RedFox-D3Gx data through the MIPI CSI interface:

- **Data Reception**
  - MIPI CSI-2 protocol implementation for 6Gbps GMSL2 data
  - Data rate configuration optimized for RedFox-D3Gx specifications
  - Error detection and correction for automotive-grade reliability

- **Image Processing**
  - YUV422 data parsing and validation
  - Automatic defogging algorithm application
  - HDR processing for enhanced dynamic range (up to 120 dB)
  - Image format conversion and optimization
  - Display configuration with enhanced clarity

##### Performance Optimization
- **Real-time Processing**: Optimized algorithms for 60fps operation
- **Temperature Compensation**: Automatic adjustment for -40°C to +85°C range
- **Power Management**: Efficient processing to maintain 400mA@12V consumption

### 2.3 Technical Support and Documentation

#### 2.3.1 Comprehensive Documentation Package
- **Hardware Specifications**
  - Detailed register descriptions for MAX96717G serializer
  - Sensor configuration parameters for SONY 2.95MP RGGB
  - Electrical characteristics and timing diagrams

- **Software Integration Guides**
  - Driver development templates
  - API reference documentation
  - Integration examples for popular platforms

#### 2.3.2 Professional Engineering Support
- **Technical Consultation**
  - Platform-specific integration guidance
  - Performance optimization recommendations
  - Custom configuration development

- **Debug and Troubleshooting**
  - Remote debugging assistance
  - Signal integrity analysis
  - Performance profiling and optimization

- **Ongoing Support**
  - Firmware updates and enhancements
  - Long-term technical partnership
  - Training and knowledge transfer

:::tip Professional Integration Support
SENSING Technology provides comprehensive technical support for RedFox-D3Gx integration with automotive, industrial, and embedded platforms. Our engineering team offers detailed documentation, sample code, and hands-on technical assistance to ensure successful deployment of automatic defogging camera solutions.

For technical assistance, please contact our support team with your specific platform requirements and integration objectives.
:::
