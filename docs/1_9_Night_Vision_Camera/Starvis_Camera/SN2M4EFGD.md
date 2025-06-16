---
sidebar_position: 1
---

# SN2M4EFGD

## Overview

<div className="row">
  <div className="col col--12">
    SN2M4EFGD is equipped with a 2M dim light dedicated image sensor, a 2M high-performance lSP image processing chip, and a Maxim GMSL2 serializer. lt is designed and positioned as a dim light camera. After professional image debugging, it has high-quality image effects both in day and night, which comes with an IP67-rated enclosure-is supplied with an M16 lens that is focused and glued in our factory. 
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_9_Night_Vision_Camera/Starvis_Camera/SN2M4EFGD/SN2M4EFGD.png" alt="SN2M4EFGD" 
    style={{maxWidth: '25%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-165.html?recommendFromPid=0&fromMid=3430" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | 2MP RGGB                |
| ISP               | Yes                     |
| Image Size        | 1/1.8 inch CMOS         |
| Output Pixels     | 1920H*1080V             |
| Pixel Size        | 4.0um*4.0um             |
| Frame Rate        | 1920*1080@30fps         |
| HDR Support       | /                       |
| LFM               | /                       |
| Output data       | YUV422@8bit             |
| Serializer        | MAXIM MAX96717F         |
| Camera Interface  | GMSL2                   |
| Power Supply      | 9~16V POC               |
| Current           | Less than 250mA@12VDC            |
| Connector         | Amphenol Fakra (Z Code) |
| Operating temp. range | -40~+85℃            |
| Dimensions        | W: 30mm, L:30mm, H:22.5mm |
| Weight            | Less than 50g           |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_9_Night_Vision_Camera/Starvis_Camera/SN2M4EFGD/SN2M4EFGD_Dimensions.png" alt="SN2M4EFGD" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_9_Night_Vision_Camera/Starvis_Camera/SN2M4EFGD/SN2M4EFGD_BlockDiagram.png" alt="SN2M4EFGD" 
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
      <td>MAX96717F</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x80 (8bit address)</td>
    </tr>
    <tr>
      <td>GMSL Rate</td>
      <td>GMSL2 (3G bps)</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>ISP</strong></td>
      <td>I2C Address</td>
      <td>0x40 (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by MAX96717F MFP7</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by MAX96717F MFP0</td>
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

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Water-proof | Lens Mount |
|-------|------|------|------|-----|------------------------|-------------|------------|
| SN2M4EFGD | 70° | 40° | 1.6 | 6.35mm | -21.8% | IP67 | M16 |

</div>


## Employing Camera
### 1. Adaptation to NVIDIA® Jetson™ platform
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_9_Night_Vision_Camera/Starvis_Camera/SN2M4EFGD/SN2M4EFGD_ConnectNvidia.png" alt="SN2M4EFGD_ConnectNvidia" 
    style={{maxWidth: '40%', height:'auto'}} />
    <p>SN2M4EFGD Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

#### **Step 1**: Installation Steps

:::note Quick Setup
1. Connect the SN2M4EFGD camera to the SG4A_ORIN_GMSL2 board using the coaxial cable
2. Mount the SG4A_ORIN_GMSL2 board onto the Jetson AGX Orin module
3. SN2M4EFGD camera Connect the power supply
4. SG4A_ORIN_GMSL2 board Connect the power supply
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
| 1 | JP6.2 | SN2M4EFGD |Jetson AGX Orin Developer Kit | [SG4A_ORIN_GMSL2](https://sensing-world.com/en/h-pd-64.html?recommendFromPid=0&fromMid=898) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG4A-ORIN-GMSL2/JetPack6.2/SG4A_ORIN_GMSL2_AGX_Orin_YUVx4_JP6.2_L4TR36.4.3) |


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
#### Software Development Demo

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
    // Configure link settings for GMSL2 (3Gbps)
    i2c_write(MAX9296_I2C_ADDR, 0x0001, 0x01);

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
/* Example code for SN2M4EFGD initialization */

#define MAX96717F_I2C_ADDR 0x80 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();
    
    // Reset ISP through MAX96717F
    i2c_write(MAX96717F_I2C_ADDR, 0x02BE, 0x10); // MFP0 high
    // 
    i2c_write(MAX96717F_I2C_ADDR, 0x0057, 0x12); 
    i2c_write(MAX96717F_I2C_ADDR, 0x005B, 0x11); 
    //  Configure datatype  YUV422 8bit
    i2c_write(MAX96717F_I2C_ADDR, 0x0318, 0x5E); 

    //  camera trigger  MFP7  low to  high
    i2c_write(MAX96717F_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX96717F_I2C_ADDR, 0x02D3, 0x10); // MFP7 high

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


