---
sidebar_position: 1
---

# Getting Started with OMSBDAAN

## Overview

<div className="row">
  <div className="col col--12">
    OMSBDAAN camera module is equipped with OmniVision CMOS image sensor OX05B1S and Maxim GMSL serializer MAX9295A. It has an automotive-grade sensor with a well tuned Image Signal Processor (ISP) that produces exceptional image quality, It is also equipped with an M12 automotive grade lens that supports visible light and 940nm infrared light recognition.
  </div>
</div>



<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN.png" alt="OMSBDAAN" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-46.html?recommendFromPid=0&fromMid=1593" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | OmniVision 5MP OX05B1S RGB-IR |
| ISP               | OAX4000                |
| Image Size        | 1/2.53 inch CMOS        |
| Output Pixels     | AA mode: 2592H *1944V / AB mode: 2592H *1800V  |
| Frame rate        | AA mode: 2592H *1944V@30fps / AB mode: 2592H *1800V@60fps  |
| Pixel Size        | 2.2um*2.2um            |
| HDR Support       | /                    |
| Output data       | YUV422-8bit        |
| Serializer       | MAXIM MAX9295A       |
| IR Filte       | Visible+940nm band pass       |
| Camera Interface       | GMSL2       |
| Power Supply      | POC: 9~16V  /  LED: 9 ~16V DC |
| Current           | POC Less than 350mA@12VDC / LED Less than 400mA@12VDC |
| Connector         | Amphenol Fakra(Z Code)+Molex  |
| Operating temp.   | -40 to +85°C            |
| Dimensions        | W: 28.8mm, L:44.2mm, H:20mm|
| Weight            | Less than 50g           |


### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN_dimensions.png" alt="OMSBDAAN" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN_Block Diagram.png" alt="OMSBDAAN" 
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
      <td>OAX4000</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x48 (8bit address)</td>
    </tr>
    <tr>
      <td>Reset</td>
      <td>Controlled by Max9295A MFP0</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Sensor</strong></td>
      <td>Model</td>
      <td>OX05B1S</td>
    </tr>
    <tr>
      <td>I2C Address</td>
      <td>0x6C (8bit address)</td>
    </tr>
    <tr>
      <td>Frame Sync</td>
      <td>Controlled by Max9295A MFP7</td>
    </tr>
    <tr>
      <td>ERROR</td>
      <td>Controlled by Max9295A MFP3</td>
    </tr>
  </tbody>
</table>

</div>



#### LED Connector Pin Definition
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN_LED_Connect.png" alt="OMSBDAAN_LED_Connect" 
    style={{maxWidth: '40%', height:'auto'}} />
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
      <td>Video+</td>
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


<!-- #### Sensor power-up sequence

:::info Power-up Sequence
The SG3-ISX031C-MIPI camera has no specific power-up sequence requirements, only requiring RESET to be asserted after the three power supplies are stable.
:::

#### Power Sequence Diagram -->



### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Water-proof | Lens Mount |
|-------|------|------|------|-----|------------------------|-------------|------------|
| OMSBDAAN | 130° | 98°@1944V | 2.0 | 2.18mm | -39.2%@HFOV | IP5X | M12 |

</div>


### Parts List

<div className="row">
  <div className="col col--12">
    :::note Standard Configuration
    - OMSBDAAN
    - Power Supply Cable
    :::
  </div>
  <!-- <div className="col col--4">
    :::note Optional Configuration
    - Jetson Orin Nano/NX Devkit
    :::
  </div> -->
</div>

### Adaptation to NVIDIA® Jetson™ platform
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN_ConnectNvidia.png" alt="OMSBDAAN_ConnectNvidia" 
    style={{maxWidth: '70%', height:'auto'}} />
    <p>OMSBDAAN Camera Connect to Nvidia Jetson AGX Orin</p>
</div>

<!-- ### Installation Steps

:::note Quick Setup
1. Connect the FPC to the camera
2. Mount the camera onto the Jetson Orin Nano/NX Devkit
3. Power on the system
:::

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div> -->

### Software Preparation

#### SDK Download

:::info Driver Packages
-Select the appropriate driver package based on your camera type and JetPack version:

-Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO. | JetPack Version | Download Link |
|-------------|-----------------|---------------|
| 1 | JP5.1.2 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack5.1.2/Jetson-Orin-Nano-DK_ISX031_YUV_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.1 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_ISX031_YUV_JP6.1_L4TR36.4.2) |

</div>

:::note JetPack Versions
NVIDIA JetPack (<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> or <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> ) is the official software development kit (SDK) for the Jetson series of development boards. It includes the operating system, drivers, CUDA, cuDNN, TensorRT, and other development tools and libraries. Each JetPack version typically corresponds to a specific Jetson Linux version (formerly known as L4T - Linux for Tegra). 
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

For more information, visit [NVIDIA's official Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### Attachment
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="mipi_csi_camera_FPC" 
    style={{maxWidth: '70%', height:'auto'}} />
</div>

