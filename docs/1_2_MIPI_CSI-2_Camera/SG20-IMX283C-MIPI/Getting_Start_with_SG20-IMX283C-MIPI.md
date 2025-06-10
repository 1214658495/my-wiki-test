---
sidebar_position: 1
---

# Getting Start with SG20-IMX283C-MIPI

## Overview

<div className="row">
  <div className="col col--12">
    SG3-ISX031C-MIPI-Hxxx camera is equipped with SONY CMOS image sensor ISX031. It has an automotive-grade sensor with a well tuned Image Signal Processor (ISP) that produces exceptional image quality, can be adapted to difference SOC platforms.
  </div>
</div>



<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031.png" alt="SG3-ISX031C-MIPI" 
    style={{maxWidth: '20%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-114.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Getting Started

### Specification

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | SONY 2.95MP ISX031 RGGB |
| ISP               | Built-in                |
| Image Size        | 1/2.42 inch CMOS        |
| Output Pixels     | 1920H*1536V             |
| Frame rate        | max 60fps               |
| Pixel Size        | 3.0um*3.0um             |
| HDR Support       | Yes                     |
| Output data       | MIPI/YUV422-8bit        |
| Power Supply      | 3.3V                    |
| Current           | Less than 500mA @3.3VDC |
| Camera interface  | FPC                     |
| Connector         | FH67-30S-0.5SV          |
| Operating temp.   | -20 to +75°C            |
| Performance temp. | -20 to +60°C            |
| Dimensions        | W: 20mm, L:35mm, H:16.2mm|
| Weight            | Less than 50g           |


<!-- <div className="row">
  <div className="col col--6">
    :::note Basic Info
    - Model: SG8A-ORIN-GMSL2
    - Dimension: 104mm*74mm
    - Weight: 50g
    - Connector: 1x120Pin High-density
    - Camera input: Camera*8(GMSL2/GMSL)
    - Trigger In: 12Pin Sync In
    :::
  </div>
  <div className="col col--6">
    :::note Technical Specs
    - Deserializer: MAXIM(ADI) MAX9296A*4
    - Camera Connector: Fakra Z Code
    - POC Power Supply: DC 8-16V
    - DC Power Supply: DC 12V
    - Operating Conditions: -20°C to +85°C
    - Adaptation kit: Jetson AGX Orin/Xavier
    :::
  </div>
</div> -->

### Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_Hardware.png" alt="Embedded Camera" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>


### Hardware Overview
#### Block Diagram
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_diagram.png" alt="Embedded Camera" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />

#### I2C Address Information

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO. | Component | I2C Address |
|-----------|-----------|-------|
| 1 | EEPROM | 0xA0(8bit address) |
| 2 | Sensor(ISX031) | 0x34(8bit address) |

</div>

#### Pin Definition

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO. | Pin Name | Type | Description |
|----|----------|------|-------------|
| 1 | E2PPROM-WP | INPUT:3.3V/1.8V | E2PROM<br/>L:Write disable; H:writable |
| 2 | BOOT-CTL | INPUT:3.3V/1.8V | H: Not Load NOR FLASH<br/>L: Load NOR FLASH<br/>Default: L |
| 3 | ERROR | OUTPUT: | Fault check signal output pin<br/>H:OK<br/>L:ERROR |
| 4 | GND | POWER | |
| 5 | FRSYNC | I/O:1.8V | Frame synchronization signal |
| 6 | GPIO3 | I/O:1.8V | reserve |
| 7 | GND | POWER | |
| 8 | D0_N | OUTPUT | MIPI |
| 9 | D0_P | OUTPUT | MIPI |
| 10 | GND | POWER | |
| 11 | D1_N | OUTPUT | MIPI |
| 12 | D1_P | OUTPUT | MIPI |
| 13 | GND | POWER | |
| 14 | CLK_N | OUTPUT | MIPI |
| 15 | CLK_P | OUTPUT | MIPI |
| 16 | GND | POWER | |
| 17 | D2_N | OUTPUT | MIPI |
| 18 | D2_P | OUTPUT | MIPI |
| 19 | GND | POWER | |
| 20 | D3_N | OUTPUT | MIPI |
| 21 | D3_P | OUTPUT | MIPI |
| 22 | GND | POWER | |
| 23 | POW_RES | INPUT:3.3V/1.8V | On-camera electrical signal |
| 24 | SENSOR-CLK | INPUT: 24MHZ(1.8V) | Clock signal input<br/>(Modules use an internal 24MHz clock) |
| 25 | GND | POWER | |
| 26 | CAM-SCL | I/O:3.3V | UP 10K(FRSYNC:L I2C Address 7'H1A or 0X1A)<br/>(FRSYNC:H I2C Address in Flash) |
| 27 | CAM-SDA | I/O:3.3V | UP 10K(FRSYNC:L I2C Address 7'H1A or 0X1A)<br/>(FRSYNC:H I2C Address in Flash) |
| 28 | GND | POWER | |
| 29 | VCC-3.3V | POWER | |
| 30 | VCC-3.3V | POWER | |

</div>



<!-- :::caution Attention
（1）The I2C bus number is the hardware location (matching the connector J2 pin). The bus number does not necessarily correspond to what is listed in the software.

（2）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->


#### Sensor power-up sequence

:::info Power-up Sequence
The SG3-ISX031C-MIPI camera has no specific power-up sequence requirements, only requiring RESET to be asserted after the three power supplies are stable.
:::


### Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Lens Mount |
|-------|------|------|------|-----|------------------------|------------|
| SG3-ISX031C-MIPI-H30X | 30° | 24° | F1.6 | 10.96mm | -2.5% | M12 |
| SG3-ISX031C-MIPI-H60F | 60.35° | 47° | F1.6 | 5.8mm | -11.5% | M12 |
| SG3-ISX031C-MIPI-H100F1 | 100.4° | 78° | F1.6 | 3.55mm | -49% | M12 |
| SG3-ISX031C-MIPI-H190X | 196° | 154.5° | F2.0 | 1.51mm | -154.2% | M12 |

</div>


### Parts List

<div className="row">
  <div className="col col--6">
    :::note Standard Configuration
    - SG3-ISX031C-MIPI-Hxxx camera
    - FPC
    :::
  </div>
  <div className="col col--4">
    :::note Optional Configuration
    - Jetson Orin Nano/NX Devkit
    :::
  </div>
</div>

<!-- #### Kit Contents -->


<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-complete2.png" alt="SG8A-ORIN-GMSL2-complete" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->

### Installation Steps

:::note Quick Setup
1. Connect the FPC to the camera
2. Mount the camera onto the Jetson Orin Nano/NX Devkit
3. Power on the system
:::

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Embedded Camera" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>

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