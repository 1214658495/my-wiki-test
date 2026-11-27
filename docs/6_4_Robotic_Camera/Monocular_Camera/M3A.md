---
sidebar_position: 2
sidebar_label: M3A (3MP Mini HDR 30fps)
title: M3A (3MP Mini HDR 30fps)
---

# M3A (3MP Mini HDR 30fps)-HFOV 200°

## Overview

<div className="row">
  <div className="col col--12">
    The M3A is purpose-built for embodied intelligence applications. Its ultra-compact, ultra-lightweight design measures only 17mm × 17mm and uses a 3MP high dynamic range, high frame rate sensor. It can be mounted on the head, torso and other positions of humanoid robots for robot perception, recognition and data acquisition, with professionally tuned imaging for real application scenarios.
  </div>
</div>

<figure style={{margin: 0, textAlign: 'center'}}>
  <div className="monocular-overview-photo">
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/M3A/M3A.png?x-oss-process=image/format,webp&v=5d354e16cb85" alt="M3A monocular camera with the revised cable harness" style={{width: '85.5%', translate: '2%'}} />
  </div>
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>M3A with revised cable harness</figcaption>
</figure>

> **Note**　Specifications, the system diagram and the dimension drawing follow the M3A datasheet (Oct. 2026, Rev1). The Jetson driver and integration steps below are carried over from the original M3A; verify them on your target platform.

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-293.html?recommendFromPid=0&fromMid=1544" target="_blank" rel="noopener noreferrer"
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div> -->

## Key Features and Application

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Output uncompressed YUV data<br/>
    • High Dynamic Range (HDR)<br/>
    • Low latency<br/>
    • Support external trigger<br/>
    • Multi-camera synchronization<br/>
    • High frame rate
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Application:</strong><br/>
    • Embodied intelligence<br/>
    • Humanoid robots<br/>
    • Data collection
  </div>
</div>


## Getting Started

### Specification

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter | Value |
|---|---|
| Sensor | 2.95MP 3µm RGB sensor |
| ISP | Built-in |
| Output pixels | 1920(H) × 1536(V) |
| Frame rate | 1920(H) × 1536(V) @ 30fps (max 60fps) |
| HDR | Up to 140dB |
| Output data | YUV422 8bit |
| Serializer | MAX96717 |
| Camera interface | GMSL2, 6Gbps |
| Power supply | 9–16V PoC |
| Current | &lt;200mA @ 12VDC |
| Connector | Amphenol Z-code Fakra / SS-mini01 (M3A_A) |
| Operating temp. | -40 to +85°C |
| Storage temp. | -40 to +95°C |
| Dimensions | W: 17mm, L: 17mm, H: 31.89mm |
| Weight | &lt;50g |

</div>

{/* 尺寸图待修正后恢复 / hidden until the drawing is fixed
### Dimensions

<img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/M3A/M3A_New_Harness_Dimensions.png?x-oss-process=image/format,webp&v=a9e6f1941687" alt="M3A with revised cable harness: mechanical dimensions" style={{width: '100%', maxWidth: 900, height: 'auto'}} />

> **Drawing note**　Units are mm. The icon at the top left indicates the positive imaging direction. The cable length is 230mm (REF); the SS-mini01 connector is available as M3A_A.
*/}

### Hardware Overview
#### System Diagram

<img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/M3A/M3A_System_Diagram.png?x-oss-process=image/format,webp&v=4d006256e4a3" alt="M3A system diagram" style={{width: '100%', maxWidth: 900, height: 'auto'}} />

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
      <td rowspan="3"><strong>Sensor</strong></td>
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
  </tbody>
</table>

</div>


### Lens  Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| HFOV | VFOV | F.No | EFL | Focus Distance | Depth of Field | IP Rating | Lens Mount |
|------|------|------|-----|----------------|----------------|-------------|------------|
| 200° | 155° | 2.0 | 1.51mm | 0.4m | 0.15m - INF | Front side IP67; complete assembly IP54 | AA |

</div>

### Optional Configurations

| Model | Connector | Remark |
|---|---|---|
| M3A | Amphenol Z-code Fakra | Default |
| M3A_A | SS-mini01 | — |


## Employing Camera
### 1. Adaptation to NVIDIA® Jetson™ platform
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/S36/S36_Application.jpg?x-oss-process=image/format,webp" alt="SH3-S11A60-G2A_ConnectNvidia"
    style={{maxWidth: '60%', height:'auto'}} />
    <p>M3A Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

#### **Step 1**: Installation Steps

:::note Quick Setup
1. Connect the M3A camera to the SG10A-AGON-G2M-A1 board using the coaxial cable
2. Mount the SG10A-AGON-G2M-A1 board onto the Jetson AGX Orin module
3. M3A camera Connect the power supply
4. SG10A-AGON-G2M-A1 board Connect the power supply
5. Power on the system
:::

<!-- <div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera"
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
| 1 | JP6.2 | M3A |Jetson AGX Orin Developer Kit | [SG10A-AGON-G2M-A1](/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A-AGON-G2M-A1-AGX_ORIN_SHW3H%26SHF3L_JP6.2_L4TR36.4.3) |


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
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_SOC_connect.png?x-oss-process=image/format,webp" alt="SG8A-ORIN-GMSL2-complete" style={{width: 730, height:'auto'}} />
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

#define MAX96717_I2C_ADDR 0x80 // 8-bit address

int camera_init() {
    // Initialize deserializer first
    max9296_init();

    // Reset ISP through MAX96717
    i2c_write(MAX96717_I2C_ADDR, 0x02BE, 0x10); // MFP0 high
    //
    i2c_write(MAX96717_I2C_ADDR, 0x12);
    i2c_write(MAX96717_I2C_ADDR, 0x005B, 0x11);
    //  Configure datatype  YUV422 8bit
    i2c_write(MAX96717_I2C_ADDR, 0x0318, 0x5E);

    //  camera trigger  MFP7  low to  high
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x00); // MFP7 low
    delay_ms(300);
    i2c_write(MAX96717_I2C_ADDR, 0x02D3, 0x10); // MFP7 high

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
