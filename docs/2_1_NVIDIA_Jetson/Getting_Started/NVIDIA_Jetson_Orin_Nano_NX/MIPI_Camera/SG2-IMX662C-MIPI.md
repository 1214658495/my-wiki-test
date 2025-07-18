---
sidebar_position: 1
---

# SG2-IMX662C-MIPI Camera

## Overview

<div className="row">
  <div className="col col--12">
    SG2-IMX662C-MIPI-HXXX camera features the SONY IMX662 CMOS image sensor (2.13MP), pre-focused with an M12 lens, compatible with various SOC platforms. This high-performance camera delivers 1080p resolution at up to 60fps with HDR support.
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031.png" alt="SG2-IMX662C-MIPI" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-38.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Technical Specifications

### Key Features

| Parameter         | Value                   |
|-------------------|-------------------------|
| Model             | SG2-IMX662C-MIPI-HXXX   |
| Sensor            | SONY 2.13MP IMX662 RGGB |
| ISP               | N/A                     |
| Sensor Type       | Rolling Shutter         |
| Image Size        | 1/2.8 inch CMOS         |
| Output Resolution | 1920H×1080V             |
| Frame Rate        | Up to 60 fps            |
| Pixel Size        | 2.9μm                   |
| HDR Support       | Yes                     |
| Output Format     | MIPI/RAW@10bit/12bit    |
| Power Supply      | 3.3V                    |
| Current           | < 300mA @3.3VDC         |
| Interface         | FPC                     |
| Connector         | FH67-30S-0.5SV          |
| Operating Temp.   | -30°C ~ +85°C           |
| Dimensions        | W: 20mm, L: 35mm, H: 25mm |
| Weight            | < 50g                   |

### Physical Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG2-IMX662C-MIPI/SG2-IMX662C-MIPI_Dimensions.png" alt="SG2-IMX662C-MIPI Dimensions" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

## Hardware Integration

### System Architecture

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG2-IMX662C-MIPI/SG2-IMX662C-MIPI_Block_Diagram.png" alt="SG2-IMX662C-MIPI Block Diagram" 
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

| Pin | Name | Type | Description |
|-----|------|------|-------------|
| 1 | E2PROM-WP | INPUT: 3.3V/1.8V | Write protection for E2PROM<br/>L: Disable writing; H: Enable writing |
| 2 | / | N/C | Not Connected |
| 3 | / | N/C | Not Connected |
| 4 | GND | POWER | Ground |
| 5 | XHS | I/O: 1.8V | Horizontal sync generator |
| 6 | XVS | I/O: 1.8V | Vertical sync generator |
| 7 | GND | POWER | Ground |
| 8 | D1_N | OUTPUT | MIPI Data Lane 1 (Negative) |
| 9 | D1_P | OUTPUT | MIPI Data Lane 1 (Positive) |
| 10 | GND | POWER | Ground |
| 11 | D2_N | OUTPUT | MIPI Data Lane 2 (Negative) |
| 12 | D2_P | OUTPUT | MIPI Data Lane 2 (Positive) |
| 13 | GND | POWER | Ground |
| 14 | CLK_N | OUTPUT | MIPI Clock (Negative) |
| 15 | CLK_P | OUTPUT | MIPI Clock (Positive) |
| 16 | GND | POWER | Ground |
| 17 | D3_N | OUTPUT | MIPI Data Lane 3 (Negative) |
| 18 | D3_P | OUTPUT | MIPI Data Lane 3 (Positive) |
| 19 | GND | POWER | Ground |
| 20 | D4_N | OUTPUT | MIPI Data Lane 4 (Negative) |
| 21 | D4_P | OUTPUT | MIPI Data Lane 4 (Positive) |
| 22 | GND | POWER | Ground |
| 23 | SENSOR-RESET | INPUT: 1.8V | Sensor reset signal |
| 24 | CAM-CLK | INPUT | Clock signal input (24MHz)<br/>Module has built-in crystal oscillator |
| 25 | GND | POWER | Ground |
| 26 | CAM-SCL | I/O: 3.3V | I2C Clock (Pull up 10K) |
| 27 | CAM-SDA | I/O: 3.3V | I2C Data (Pull up 10K) |
| 28 | GND | POWER | Ground |
| 29 | VCC-3.3V | POWER | 3.3V Power Supply |
| 30 | VCC-3.3V | POWER | 3.3V Power Supply |

</div>

### Power-Up Sequence

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_power_sequence.png" alt="Power Sequence Diagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info Power-Up Requirements
The SG2-IMX662C-MIPI camera has minimal power-up sequence requirements. Simply ensure that the RESET signal is asserted after power supplies are stable.
:::

## Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Lens Mount |
|-------|------|------|------|-----|------------------------|------------|
| SG2-IMX662C-MIPI-H30X | 29° | 16° | 1.6 | 10.96mm | -2% | M12 |
| SG2-IMX662C-MIPI-H60F | 58° | 31° | 1.6 | 5.8mm | -20% | M12 |
| SG2-IMX662C-MIPI-H100F1 | 96° | 52° | 1.6 | 3.55mm | -41% | M12 |
| SG2-IMX662C-MIPI-H120L | 121° | 66° | 2.8 | 2.8mm | -61% | M12 |

</div>

## Documentation & Resources

:::info Technical Documentation
Download the complete [SG2-IMX662C-MIPI-HXXX Camera Datasheet](https://sensing-world.com/en/h-pd-38.html?recommendFromPid=0&fromMid=1563#) for detailed specifications and integration guidelines.
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

The SG2-IMX662C-MIPI supports two FPC cable types for different connection requirements:

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
