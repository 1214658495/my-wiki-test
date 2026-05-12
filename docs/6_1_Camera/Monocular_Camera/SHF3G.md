---
sidebar_position: 7
title: SHF3G（3MP Global）
---

# SHF3G (3MP Global)-HFOV 173°

## Overview

<div className="row">
  <div className="col col--12">
    The SHF3G camera is specially designed for physical intelligence applications.It features a 3MP Global Shutter sensor, the GMSL2 high-reliability interface, and a 25×25mm compact wide-angle lens. For application scenarios like robot perception and recognition, it can be installed on humanoid robots in positions such as the head or trunk.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF3G/SHF3G.png?x-oss-process=image/format,webp" alt="SHF3G" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-295.html?recommendFromPid=0&fromMid=1544" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->
## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Output RAW data<br/>
    • Global Shutter<br/>
    • Low latency<br/>
    • Support external trigger<br/>
    • Multi-camera synchronization
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Humanoid Robots<br/>
    • Data collection
  </div>
</div>

## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | 3MP Global Shutter |
| Image Size        | 1/3.1 inch CMOS        |
| Output Pixels     | 2064 (H) × 1552 (V) |
| Pixel Size        | 2.25um*2.25um             |
| Frame Rate        | MAX 125fps |
| Shutter           | Global Shutter          |
| Output data       | RAW@12bit/10bit/8bit    |
| Serializer        | MAXIM MAX96717         |
| Camera Interface  | GMSL2                   |
| Power Supply      | 9~16V POC               |
| Current           | Less than 200mA@12VDC   |
| Connector         | Amphenol Fakra (Z Code) |
| Operating temp. range | -40~+85℃            |
| Dimensions        | W: 25mm, L:25mm, H:31.82mm |
| Weight            | Less than 50g              |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF3G/SHF3G_Dimensions.png?x-oss-process=image/format,webp" alt="SHF3G_Dimensions" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF3G/SHF3G_BlockDiagram.png?x-oss-process=image/format,webp" alt="SHF3G_BlockDiagram" 
    style={{maxWidth: '90%', height:'auto'}} />
</div>

#### Frame Sync usage requirements

<div style={{display: 'flex', justifyContent: 'center'}}>

|  | Requires two trigger input signals | PWM trigger signal requirements | Within the Camera Serializer GPIO ---> Sensor GPIO | Notes | 
|------|------|------|-----|----------------|
| 1 | XVS signal| Frequency: 30 Hz, Duty cycle: 10% | MFP7 ---> XVS | If multiple cameras are used for synchronized triggering (i.e., slave mode), both XVS and XHS trigger signals must be input simultaneously and meet the corresponding requirements in order to achieve synchronized triggering. | 
| 2 | XHS signal| Frequency: 83 kHz, Duty cycle: ≥ 90% | MFP3 ---> XHS | | 
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
      <td rowspan="5"><strong>Sensor</strong></td>
      <td>Model</td>
      <td>RGGB</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x6C (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by MAX96717 MFP7 and MFP3</td>
    </tr>
    <tr>
      <td>Master/Slave Control</td>
      <td>Controlled by MAX96717 MFP5 (Low:Master, High:Slave-default)</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by MAX96717 MFP0</td>
    </tr>
  </tbody>
</table>

</div>


### Lens Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| HFOV | VFOV | F.No  | Depth of Field | Water-proof | Lens Mount |
|------|------|------|----------------|-------------|------------|
| 173° | 134° | 2.0  | 0.2m - INF@Focus at 0.4M | IP67 | AA |

</div>


## Employing Camera
### 1. Adaptation to NVIDIA® Jetson™ platform
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/S56/S56_Application.jpg?x-oss-process=image/format,webp" alt="SHF5G_Application" 
    style={{maxWidth: '60%', height:'auto'}} />
    <p>SHF3G Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

#### **Step 1**: Installation Steps

:::note Quick Setup
1. Connect the SHF3G camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
3. SHF3G camera Connect the power supply
4. SG10A-AGON-G2M-A1 board Connect the power supply
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
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO. | JetPack Version | Camera | NVIDIA Jetson Devices | Adapter Board | Download Link |
|-------------|-----------------|-------------|---------------|---------------|---------------|
| 1 | JP6.2 | SHF3G |Jetson AGX Orin Developer Kit | [SG10A-AGON-G2M-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHW3Gx6_JP6.2_L4TR36.4.3) |


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
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SHF3G/SHF3G_Fsync.png?x-oss-process=image/format,webp" alt="SHF3G_Fsync" style={{width: 730, height:'auto'}} />
</div>

The diagram illustrates the communication architecture between a camera and controller system. It shows how data flows from the Sensor/ISP through the Serializer on the Camera side, across to the Deserializer and SOC on the Controller side. The system utilizes Fsync signals for synchronization and MFP7 and MFP3 interfaces for control. This architecture is essential for proper integration of SENSING cameras with customer-developed platforms.

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
    fmt.fmt.pix.height = 1536;
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
