---
sidebar_position: 1
---

# Getting Started with GMSL2 Camera Splitter

## Overview

<div className="row">
  <div className="col col--7">
    GMSL2 Camera Splitter is designed by SENSNG Technology Co., Ltd., which can realize one GMSL input and two GMSL outputs of the same data; it is suitable for GMSL cameras.
  </div>
    <div className="col col--5">
    :::note Key Features
    - Lossless data transmission
    - GMSL/GMSL2 compatible
    - Low latency/ Microsecond level
    - Low insert los
    :::
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter.png" alt="GMSL2_Camera_Splitter" 
    style={{maxWidth: '25%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-col-152.html" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>


### Specification

<div style={{display: 'flex', justifyContent: 'left'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Transport Protocol | GMSL / GMSL2           |
| Number of Input Port | 1            |
| Number of Output Port | 2          |
| Input Interface   | 1 *GMSL / 1 *GMSL2       |
| Output Interface  | 1 *GMSL / 2 *GMSL2       |
| Data Rate Supported | 1.5Gbps, 3Gbps, 6Gbps |
| Support Resolution | Up to 3840*2160        |
| Output synchronization accuracy | Less than 10us    |
| Power Supply      | Yes                    |
| Connector         | Fakra Z Type           |
| Operating temp. range | -40~+85℃           |
| Dimensions        | L:87.5mm, W: 70.6mm, H:20mm |
| Color             | Black                  |
| Weight            | Less than 150g                  |

</div>

### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Dimensions.png" alt="GMSL2_Camera_Splitter" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Block_Diagram.png" alt="GMSL2_Camera_Splitter" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

#### I2C Address Information

<div style={{display: 'flex', justifyContent: 'center'}}>

| | I2C Address | value (8 bit) |
|---|-------------|---------------|
| 1 | Splitter: Logger | 0x80 |
| 2 | Splitter: ECU | 0x80 |
| 3 | Splitter: Camera | 0x94 |
| 4 | SENSING Camera | 0x70 |

</div>

#### Connector Pin Definition
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Connect.png" alt="GMSL2_Camera_Splitter" 
    style={{maxWidth: '40%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| Power Connector Name | Type | Brand/Note |
|-----------------|------|------------|
| Splitter End Connector | 50352-0400 | Molex |
| Cable Harness Connector | 50351-0400 | Molex |
| Power Supply | Pin3, Pin4 | 9~12V |
| GND | Pin1, Pin2 | / |

</div>


#### Cable Harness Definition
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Connector_Pin_Definition.png" alt="GMSL2_Camera_Splitter" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>

#### Product Models

<div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>

| Product Model | Input Channels | Output Channels | Resolution Support | Processor | Transfer Rate |
|---------------|---------------|-----------------|-------------------|-----------|---------------|
| SG2-BP0102-GMSL | 1CH | 2CH | Up to 1920*1080@30fps | MAX96705 | 1.5Gbps |
| SG8-BP0102-GMSL2 | 1CH | 2CH | Up to 3840*2160@30fps | MAX9295A | 6Gbps |
| SG8-BP0102-GMSL2F | 1CH | 2CH | Up to 1920*1080@30fps | MAX96717F | 3Gbps |

</div>

## Getting Started

### 1. GMSL2 Camera Splitter Integration with Customer's Self-developed Platform

Use Splitter when connecting to different domain controllers

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_B.png" alt="Splitter block diagram" 
    style={{maxWidth: '100%', height:'auto'}} />
    <p>Splitter block diagram - when connecting different domains</p>
</div>

### **Operating steps**
1. Connect the line as above.
2. Power on first.
3. The SOC end first performs normal power-on and initializes the camera, and then the SOC end performs power-on and initialization.
4. Domain control 1 and 2 (SOC) end operation normal command, light up the camera.

### **Working logic**
1. The Splitter device will configure the camera after powering on Power first.
2. Domain Control 1 (SOC) ends, just configure Splitter as a camera, and trigger it as a normal camera, then light it up and work.

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


