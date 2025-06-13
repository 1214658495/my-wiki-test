---
sidebar_position: 1
---

# Getting Started with DMSBBFAN

## Overview

<div className="row">
  <div className="col col--12">
    DMSBBFAN camera module is equipped with OmniVision CMOS image sensor OV02311 and Maxim GMSL serializer MAX96717F. It has an automotive-grade sensor with a well-tuned Image Signal Processor (ISP) that produces exceptional image quality, It is also equipped with an infrared automotive grade lens that supports 940nm infrared light recognition.
  </div>
</div>


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN.png" alt="DMSBBFAN" 
    style={{maxWidth: '25%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://www.sensing-world.com/h-pd-44.html?recommendFromPid=0&fromMid=735" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>


## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor | OV 2.08MP OV02311 Monochrome |
| ISP | GW5200 |
| Image Size | 1/2.9 inch CMOS |
| Output Pixels | 1600H*1300V |
| Pixel Size | 3um*3um |
| Frame Rate | 1600H*1300V@30fps |
| Output data | YUV422@8bit |
| Serializer | MAXIM MAX96717F |
| IR Filter | 940nm band pass |
| Camera Interface | GMSL2 |
| Power Supply | POC: 9~16V , LED: 9 ~16V DC |
| Current | POC: Less than 250mA@12VDC, LED: Less than 400mA@12VDC |
| Connector | Amphenol Fakra (Z Code) + Molex |
| Operating temp. range | -40~+85℃ |
| Dimensions | W: 35.3mm, L:43.6mm, H:24.8mm |
| Weight | Less than 50g |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_Dimension.png" alt="DMSBBFAN" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_BlockDiagram.png" alt="DMSBBFAN" 
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
      <td>Max96717F</td>
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
      <td>Controlled by Max96717F MFP0</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Sensor</strong></td>
      <td>Model</td>
      <td>OV02311</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0xC0 (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by Max96717F MFP7</td>
    </tr>
    <tr>
      <td>ERROR</td>
      <td>Controlled by Max96717F MFP3</td>
    </tr>
  </tbody>
</table>

</div>


#### LED Connector Pin Definition
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_LED_Connector.png" alt="DMSBBFAN_LED_Connector" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{display: 'flex', justifyContent: 'center'}}>
<table>
  <thead>
    <tr>
      <th colSpan="2">Pin Definition</th>
      <th colSpan="2">Operating Voltage Range</th>
      <th>Steady State Current</th>
      <th rowSpan="2">Interface Type</th>
    </tr>
    <tr>
      <th>PIN</th>
      <th>Description</th>
      <th>Max(V)</th>
      <th>Min(V)</th>
      <th>(mA)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>VCC+</td>
      <td>16</td>
      <td>9</td>
      <td>&lt;400mA@12V</td>
      <td rowSpan="2">Molex<br/>(5600200220)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>GND</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>


### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Water-proof | Lens Mount |
|-------|------|------|------|-----|------------------------|-------------|------------|
| DMSBBFAN | 55° | 44.4° | 2.2 | 5.1mm | -0.09%@HFOV | IP5X | M9 |

</div>


### Parts List

<div className="row">
  <div className="col col--12">
    :::note Standard Configuration
    - DMSBBFAN
    - Power Supply Cable
    :::
  </div>
  <!-- <div className="col col--4">
    :::note Optional Configuration
    - Jetson Orin Nano/NX Devkit
    :::
  </div> -->
</div>

## Employing Camera
### 1. Adaptation to NVIDIA® Jetson™ platform
<!-- <div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN_ConnectNvidia.png" alt="OMSBDAAN_ConnectNvidia" 
    style={{maxWidth: '50%', height:'auto'}} />
    <p>OMSBDAAN Camera Connect to Nvidia Jetson AGX Orin</p>
</div> -->

#### **Step 1**: Installation Steps

:::note Quick Setup
1. Connect the DMSBBFAN camera to the SG8A-ORIN-GMSL2 board using the coaxial cable
2. Mount the SG8A-ORIN-GMSL2 board onto the Jetson AGX Orin module
3. DMSBBFAN camera Connect the power supply
4. SG8A-ORIN-GMSL2 board Connect the power supply
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

<!-- ### Attachment
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="mipi_csi_camera_FPC" 
    style={{maxWidth: '70%', height:'auto'}} />
</div> -->


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
/* Example code for OMSBDAAN  initialization */

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
    fmt.fmt.pix.width = 1600;
    fmt.fmt.pix.height = 1300;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_YUYV;
    
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
  - Clock synchronization
- **Image Processing**
  - Raw/YUV data parsing
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