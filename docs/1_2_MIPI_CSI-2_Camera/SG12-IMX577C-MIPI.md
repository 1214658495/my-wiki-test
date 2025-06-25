---
sidebar_position: 4
---

# SG12-IMX577C-MIPI Camera

## Overview

<div className="row">
  <div className="col col--12">
    The SG12-IMX577C-MIPI camera module features Sony's high-performance 12MP IMX577 CMOS image sensor. This compact camera delivers exceptional image quality with high resolution and supports various system-on-chip (SOC) platforms, making it ideal for a wide range of industrial and embedded vision applications.
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031.png" alt="SG12-IMX577C-MIPI" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-41.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Technical Specifications

### Key Features

| Parameter         | Value                      |
|-------------------|----------------------------|
| Sensor            | Sony 12MP IMX577 RGGB      |
| ISP               | /                          |
| Chip size         | 7.564 mm (H) × 5.476 mm (V)|
| Image Size        | 1/2.3 inch CMOS            |
| Output Pixels     | 4056 (H) × 3040 (V)        |
| Frame rate        | • Full resolution raw10 @60fps<br/>• Full resolution raw12 @40fps<br/>• Up to 240fps (raw10, 1080P) |
| Pixel Size        | 1.55μm × 1.55μm            |
| HDR Support       | Yes                        |
| Output data       | MIPI/RAW@10bit/12bit       |
| Power Supply      | 3.3V                       |
| Current           | < 300mA @3.3VDC            |
| Camera interface  | FPC                        |
| Connector         | FH67-30S-0.5SV             |
| Operating temp.   | -20°C to +75°C             |
| Performance temp. | -20°C to +60°C             |
| Dimensions        | W: 20mm, L: 35mm, H: 25mm  |
| Weight            | < 50g                      |

### Physical Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG12-IMX577C-MIPI/SG12-IMX577C-MIPI_Dimensions.png" alt="SG12-IMX577C-MIPI Dimensions" 
    style={{maxWidth: '90%', height:'auto'}} />
</div>

## Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model                   | HFOV | VFOV | F.No | EFL     | Max Optical Distortion | Lens Mount |
|-------------------------|------|------|------|---------|------------------------|------------|
| SG12-IMX577C-MIPI-H60K  | 61°  | 45°  | F2.1 | 6mm     | -19.5%                 | M12*P0.5   |
| SG12-IMX577C-MIPI-H90J  | 89°  | 72°  | F2.6 | 3.25mm  | -3%                    | M12        |

</div>

## Hardware Integration

### System Architecture

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG12-IMX577C-MIPI/SG12-IMX577C-MIPI_Block_Diagram.png" alt="SG12-IMX577C-MIPI Block Diagram" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C Address Configuration

<div style={{display: 'flex', justifyContent: 'center'}}>

| Component | I2C Address |
|-----------|-------------|
| EEPROM    | 0xA0 (8-bit address) |
| Sensor    | 0x34 (8-bit address) |

</div>

### Connector Pin Definitions

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO | Pin Name       | Type           | Description                                                     |
|----|----------------|-----------------|-----------------------------------------------------------------|
| 1  | E2PPROM-WP    | INPUT:3.3V     | Write protection for E2PROM<br/>L: to disable writing; H: indicates |
| 2  | FSTROBE       | OUTPUT:1.8V    | Trigger output                                                  |
| 3  | /             |                |                                                                 |
| 4  | GND           | POWER          |                                                                 |
| 5  | GPO           | OUTPUT:1.8V    | Reserved output                                                 |
| 6  | XVS           | I/O:1.8V       | Used as a vertical synchronization signal in dual sensor applications |
| 7  | GND           | POWER          |                                                                 |
| 8  | D1_N          | OUTPUT         | MIPI                                                            |
| 9  | D1_P          | OUTPUT         | MIPI                                                            |
| 10 | GND           | POWER          |                                                                 |
| 11 | D2_N          | OUTPUT         | MIPI                                                            |
| 12 | D2_P          | OUTPUT         | MIPI                                                            |
| 13 | GND           | POWER          |                                                                 |
| 14 | CLK_N         | OUTPUT         | MIPI                                                            |
| 15 | CLK_P         | OUTPUT         | MIPI                                                            |
| 16 | GND           | POWER          |                                                                 |
| 17 | D3_N          | OUTPUT         | MIPI                                                            |
| 18 | D3_P          | OUTPUT         | MIPI                                                            |
| 19 | GND           | POWER          |                                                                 |
| 20 | D4_N          | OUTPUT         | MIPI                                                            |
| 21 | D4_P          | OUTPUT         | MIPI                                                            |
| 22 | GND           | POWER          |                                                                 |
| 23 | SENSOR-RESETn | INPUT:1.8V     | Sensor reset signal                                             |
| 24 | CAM-CLK       | Clock signal   | Clock signal input (module default built-in crystal oscillator) |
| 25 | GND           | POWER          |                                                                 |
| 26 | CAM-SCL       | I/O:3.3V       | Pull up 10K (address: 7'HA or 0X1A)                            |
| 27 | CAM-SDA       | I/O:3.3V       | Pull up 10K (address: 7'HA or 0X1A)                            |
| 28 | GND           | POWER          |                                                                 |
| 29 | VCC-3.3V      | POWER          |                                                                 |
| 30 | VCC-3.3V      | POWER          |                                                                 |

</div>

### Power-Up Sequence

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_power_sequence.png" alt="Power Sequence Diagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info Power-Up Requirements
The SG12-IMX577C-MIPI camera has minimal power-up sequence requirements. Simply ensure that the RESET signal is asserted after power supplies are stable.
:::

## Installation Guide

### Quick Setup Procedure

:::note Installation Steps
1. Connect the FPC cable to the camera module
2. Mount the camera onto the Jetson Orin Nano/NX Developer Kit
3. Power on the system and configure software drivers
:::

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Camera Installation on Jetson" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>

## Software & Driver Support

### Driver Repository

Access the latest camera drivers from our GitHub repository:

<div style={{marginBottom: '1rem'}}>
    <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
        <span style={{fontWeight: 'bold'}}>SENSING-Technology Camera Drivers</span>
    </a>
</div>

### Development Kits

<div style={{display: 'flex', justifyContent: 'center'}}>

| Name | Compatible Developer Kit | Max Camera Inputs |
|------|--------------------------|-------------------|
| [NVIDIA MIPI CSI-2 Camera Developer Kit](https://sensing-world.com/en/h-pd-88.html) | NVIDIA Jetson Orin Nano/Orin NX Developer Kit | 2 |

</div>

### Driver Downloads

:::info Driver Installation
1. Select the appropriate driver package based on your JetPack version
2. Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download the package
3. Follow the installation instructions included in the package
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack Version | Download Link |
|---|-----------------|---------------|
| 1 | JP5.1.2 (L4T R35.4.1) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack5.1.2/Jetson-Orin-Nano-DK_IMX662_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.1 (L4T R36.4) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX662_JP6.1_L4TR36.4.2) |

</div>

:::note JetPack Information
NVIDIA JetPack is the official SDK for Jetson development boards, including OS, drivers, CUDA, cuDNN, TensorRT, and development tools. JetPack versions correspond to specific L4T (Linux for Tegra) releases:

- JetPack 6.2: L4T R36.4.3
- JetPack 6.1: L4T R36.4
- JetPack 6.0: L4T R36.3
- JetPack 5.1.2: L4T R35.4.1

For more information, visit [NVIDIA's Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive).
:::

## Accessories

### FPC Cable Options

The SG12-IMX577C-MIPI supports two FPC cable types for different connection requirements:

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="FPC Cable Options" 
    style={{maxWidth: '70%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| Cable Type | Part Number | Specification |
|------------|-------------|---------------|
| 22-Pin FPC | 339901-0010 | 0.5mm Pitch |
| 15-Pin FPC | 339901-0011 | 1.0mm Pitch |

</div>
