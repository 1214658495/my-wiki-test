---
sidebar_position: 1
---

# SG3-AR0341C-G2F

## Overview

<div className="row">
  <div className="col col--12">
    SG3-AR0341C-G2F-Hxxx is equipped with OMNIVISION CMOS image sensor AR0341 and Maxim GMSL2 serializer MAX96717F. It has an automotive-grade sensor, which comes with an IP67-rated enclosure – is supplied with M12 lens that is focused and glued in our factory.
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Hand_RGB_Small_Size_Camera/SG3-AR0341C-G2F/SG3-AR0341C-G2F.png" alt="SG3-AR0341C-G2F" 
    style={{maxWidth: '20%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-162.html?fromMid=1544" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | ONSEMI 2.95MP AR0341 RGGB |
| ISP               | /                       |
| Startup mode      | From I2C                |
| Image Size        | 1/3.6 inch CMOS         |
| Output Pixels     | 1920H*1536V             |
| Pixel Size        | 2.1um*2.1um             |
| Frame Rate        | Max 60fps               |
| HDR Support       | Yes                     |
| LFM               | Yes                     |
| Output data       | RAW 12                  |
| Serializer        | MAXIM MAX96717F         |
| Camera Interface  | GMSL2                   |
| Power Supply      | 9~16V POC               |
| Current           | Less than 200mA@12VDC   |
| Connector         | Amphenol Fakra (Z Code) |
| Operating temp. range | -40~+85℃            |
| Dimensions        | W: 24mm, L:24mm, H:16.5mm |
| Weight            | Less than 50g           |

</div>


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Hand_RGB_Small_Size_Camera/SG3-AR0341C-G2F/SG3-AR0341C-G2F_Dimensions.png" alt="SG3-AR0341C-G2F" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_10_Humanoid_Robotic_Camera/Hand_RGB_Small_Size_Camera/SG3-AR0341C-G2F/SG3-AR0341C-G2F_BlockDiagram.png" alt="SG3-AR0341C-G2F" 
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
      <td rowspan="5"><strong>Sensor</strong></td>
      <td>Model</td>
      <td>AR0341</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x20 (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by Max96717F MFP7</td>
    </tr>
    <tr>
      <td>Error</td>
      <td>Controlled by Max96717F MFP5</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by Max96717F MFP0</td>
    </tr>
  </tbody>
</table>

</div>


### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Water-proof | Lens Mount |
|-------|------|------|------|-----|------------------------|-------------|------------|
| SG3-AR0341C-G2F-H190X | 196° | 160° | 1.7 | 1.02mm | -134% | IP67 | M12 |

</div>


## Employing Camera

### 1. Camera Integration with Customer's Self-developed Platform

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
#### Software Development demo code

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
/* Example code for SG3-AR0341C-G2F initialization */

#define MAX96717F_I2C_ADDR 0x80 // 8-bit address
#define AR0341_I2C_ADDR 0x20 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();
    
    // Reset ISP 
    i2c_write(MAX96717F_I2C_ADDR, 0x02BE, 0x10); // MFP0 high
    // 
    i2c_write(MAX96717F_I2C_ADDR, 0x0057, 0x12); 
    i2c_write(MAX96717F_I2C_ADDR, 0x005B, 0x11); 
    //  Configure datatype  RAW12
    i2c_write(MAX96717F_I2C_ADDR, 0x0318, 0x6C); 

    //  camera trigger  MFP7  low to  high
    i2c_write(MAX96717F_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX96717F_I2C_ADDR, 0x02D3, 0x10); // MFP7 high

    // Initialize sensor
    sensor_init();

    return 0;
}

int sensor_init() { 
    // Initialize sensor
    i2c_write(AR0341_I2C_ADDR, 0x0102, 0x0001);
    //...(from [Getting Camera Information] to download the sensor register configuration file) ...
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
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_SRGGB12;
    
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
  - RAW12 data parsing
  - Debayering and color correction
  - Image format conversion

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

