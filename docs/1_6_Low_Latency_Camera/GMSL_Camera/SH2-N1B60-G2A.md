---
sidebar_position: 2
title: SH2-N1B60-G2A（60fps）
---

# SH2-N1B60-G2A（60fps）

## Overview

<div className="row">
  <div className="col col--12">
    SH2-N1B60-G2A-Hxxx camera is equipped with On-semi CMOS image sensor AR0233 and Maxim GMSL2. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, which comes with an IP67-rated enclosure – is supplied with an AA lens that is focused and glued in our factor.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH2-N1B60-G2A/SH2-N1B60-G2A.png" alt="SH2-N1B60-G2A" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-182.html?recommendFromPid=0&fromMid=3596" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | ONSEMI 2.6MP AR0233 RGGB |
| ISP               | GEO GW5200              |
| Image Size        | 1/2.5 inch CMOS        |
| Output Pixels     | 1920H*1080V             |
| Pixel Size        | 3.0um*3.0um             |
| Frame Rate        | 1920*1080@60fps         |
| HDR Support       | Yes                     |
| LFM               | Yes                     |
| Output data       | YUV422@8bit             |
| Serializer        | MAXIM MAX9295A          |
| Camera Interface  | GMSL2                   |
| Power Supply      | 9~16V POC               |
| Current           | Less than150mA@12VDC            |
| Connector         | Amphenol Fakra (Z Code) |
| Operating temp. range | -40~+85℃            |
| Dimensions        | W: 30mm, L:30mm, H:22.5mm |
| Weight            | Less than 50g                    |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH2-N1B60-G2A/SH2-N1B60-G2A_Dimensions.png" alt="SH2-N1B60-G2A" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH2-N1B60-G2A/SH2-N1B60-G2A_BlockDiagram.png" alt="SH2-N1B60-G2A" 
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
      <td>Max9295A</td>
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
      <td rowspan="3"><strong>ISP</strong></td>
      <td>Model</td>
      <td>GW5200</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0xDA (8bit address)</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by Max9295A MFP0</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>Sensor</strong></td>
      <td>Model</td>
      <td>AR0233</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x20 (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by Max9295A MFP7</td>
    </tr>
  </tbody>
</table>

</div>


### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Water-proof | Lens Mount |
|-------|------|------|------|-----|------------------------|-------------|------------|
| SH2-N1B60-G2A-H60FA | 60° | 32° | 1.6 | 5.8mm | -21.5% | IP67 | AA |
| SH2-N1B60-G2A-H100F1A | 100° | 53° | 1.6 | 3.55mm | -45% | IP67 | AA |
| SH2-N1B60-G2A-H120UA | 118.4° | 62.6° | 2.0 | 3.04mm | -62% | IP67 | AA |
| SH2-N1B60-G2A-H190XA | 196° | 112° | 2.0 | 1.51mm | -155% | IP67 | AA |

</div>


## Employing Camera
### 1. Adaptation to NVIDIA® Jetson™ platform
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_6_Low_Latency_Camera/GMSL_Camera/SH2-N1B60-G2A/SH2-N1B60-G2A_ConnectNvidia.png" alt="SH2-N1B60-G2A_ConnectNvidia" 
    style={{maxWidth: '60%', height:'auto'}} />
    <p>SH2-N1B60-G2A Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

#### **Step 1**: Installation Steps

:::note Quick Setup
1. Connect the SH2-N1B60-G2A camera to the SG8A-ORIN-GMSL2-F board using the coaxial cable
2. Mount the SG8A-ORIN-GMSL2-F board onto the Jetson AGX Orin module
3. SH2-N1B60-G2A camera Connect the power supply
4. SG8A-ORIN-GMSL2-F board Connect the power supply
5. Power on the system
:::

<!-- <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div> -->

#### **Step 2**: Software Preparation

:::info SDK Download
-Select the appropriate driver package based on your camera type and JetPack version:

-Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download

**Select camera type: SG2-AR0233-5200-G2A-Hxxx to bring up the camera driver**
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO. | JetPack Version | NVIDIA Jetson Devices | Adapter Board | Download Link |
|-------------|-----------------|-------------|---------------|---------------|
| 1 | JP5.1.2 | Jetson AGX Orin Developer Kit | [SG8A-ORIN-GMSL2-F](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.2 | Jetson AGX Orin Developer Kit | [SG8A-ORIN-GMSL2-F](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP6.2_L4TR36.4.3) |

</div>

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### 2. Camera Integration with Customer's Self-developed Platform

For customers with their own deserializer who want to adapt our camera (serializer) to their platform, detailed technical coordination is required.
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_SOC_connect.png" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
</div>

The diagram illustrates the communication architecture between a camera and controller system. It shows how data flows from the Sensor/ISP through the Serializer on the Camera side, across to the Deserializer and SOC on the Controller side. The system utilizes Fsync signals for synchronization and MFP7 interfaces for control. This architecture is essential for proper integration of SENSING cameras with customer-developed platforms.

### Step 1: Link Register initialization
SENSING will provide:
- **Serializer and Deserializer Configuration**
   - Register configuration for the camera module-[Getting Camera Information](/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)
   - I2C communication protocol details

- **Link Status Troubleshooting Guide**
  - Link training parameters
  - Error detection settings

:::tip
Please refer to the software flow and demo code below to develop your driver code.
:::
#### Software Development

1. **Driver Development**:

```c
/* Example code for MAX9296 I2C initialization */
#define MAX9296_I2C_ADDR 0x90 // 8-bit address

int max9296_init() {
    // Initialize I2C bus
    i2c_init();
    
    // disable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x00);
    delay_ms(100);
    // Configure link settings for GMSL2 (6Gbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x02);

    // Configure linkA and linkB settings for GMSL2 selection (default value)
    i2c_write(MAX9296_I2C_ADDR, 0x0006, 0xC0);
    
    // Configure MIPI rate 1200Mbps
    i2c_write(MAX9296_I2C_ADDR, 0x0320, 0x2C); 
    
    // enable MIPI output
    i2c_write(MAX9296_I2C_ADDR, 0x0313, 0x02);
    
    return 0;
}
```

2. **Camera Configuration**:

```c
/* Example code for   initialization */

#define MAX9295_I2C_ADDR 0x80 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();
    
    // Reset ISP through MAX9295A
    i2c_write(0x80, 0x02BE, 0x10); // MFP0 high
    // 
    i2c_write(0x80, 0x0057, 0x12); 
    i2c_write(0x80, 0x005B, 0x11); 
    //  Configure datatype  YUV422 8bit
    i2c_write(0x80, 0x0318, 0x5E); 

    //  camera trigger  MFP7  low to  high
    i2c_write(0x80, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(0x80, 0x02D3, 0x10); // MFP7 high

    return 0;
}
```

#### Integration Steps

1. **BSP Integration**:
   - Modify the device tree to include the CSI interface configuration
   - Add camera driver to kernel build configuration
   - Configure media controller pipeline for the camera

2. **Application Development**:

```c
/* Example code for capturing camera frames */
#include "camera_api.h"

int main() {
    // Open camera device
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open camera device");
        return -1;
    }
    
    // Configure video capture format
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1080;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY;
    
    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set format");
        close(fd);
        return -1;
    }
    
    // Request and map buffers
    // ... (buffer setup code) ...
    
    // Start streaming
    // ... (streaming code) ...
    
    // Capture and process frames
    // ... (frame processing code) ...
    
    // Cleanup
    close(fd);
    return 0;
}
```
### Step 2: Data Processing
After receiving the module data through the MIPI CSI interface:
- **Data Reception**
  - MIPI CSI-2 protocol implementation
  - Data rate configuration
- **Image Processing**
  - YUV422 data parsing
  - Image format conversion
  - Display configuration

### Technical Support
- **Documentation**
  - Detailed register descriptions

- **Engineering Support**
  - Technical consultation
  - Debug assistance
  - Performance optimization

:::tip
SENSING Technology provides technical support for integration with most platforms. For detailed documentation, sample code, and technical assistance, please contact our support team.
:::

