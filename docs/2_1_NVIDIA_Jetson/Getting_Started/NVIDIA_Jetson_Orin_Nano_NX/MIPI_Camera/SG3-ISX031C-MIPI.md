---
sidebar_position: 2
---

# SG3-ISX031C-MIPI Camera

## Overview

<div className="row">
  <div className="col col--12">
    The SG3-ISX031C-MIPI-Hxxx camera features the SONY ISX031 CMOS image sensor (2.95MP) with a built-in automotive-grade Image Signal Processor (ISP). This camera delivers exceptional image quality with YUV422 output and is compatible with various SOC platforms.
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031.png" alt="SG3-ISX031C-MIPI" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-114.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Technical Specifications

### Key Features

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | SONY 2.95MP ISX031 RGGB |
| ISP               | Built-in                |
| Image Size        | 1/2.42 inch CMOS        |
| Output Resolution | 1920×1536 pixels        |
| Frame Rate        | Up to 60fps             |
| Pixel Size        | 3.0μm × 3.0μm           |
| HDR Support       | Yes                     |
| Output Format     | MIPI/YUV422-8bit        |
| Power Supply      | 3.3V                    |
| Current           | < 500mA @3.3VDC         |
| Interface         | FPC                     |
| Connector         | FH67-30S-0.5SV          |
| Operating Temp.   | -20°C to +75°C          |
| Performance Temp. | -20°C to +60°C          |
| Dimensions        | W: 20mm, L: 35mm, H: 16.2mm |
| Weight            | < 50g                   |

### Physical Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_Hardware.png" alt="SG3-ISX031C-MIPI Dimensions" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

## Hardware Integration

### System Architecture

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_diagram.png" alt="SG3-ISX031C-MIPI Block Diagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />

### I2C Address Configuration

<div style={{display: 'flex', justifyContent: 'center'}}>

| Component | I2C Address |
|-----------|-------------|
| EEPROM    | 0xA0 (8-bit address) |
| Sensor (ISX031) | 0x34 (8-bit address) |

</div>

### Connector Pin Definitions

<div style={{display: 'flex', justifyContent: 'center'}}>

| Pin | Name | Type | Description |
|-----|------|------|-------------|
| 1 | E2PROM-WP | INPUT: 3.3V/1.8V | E2PROM Write Protection<br/>L: Write disabled; H: Writable |
| 2 | BOOT-CTL | INPUT: 3.3V/1.8V | Boot Control<br/>H: Do not load NOR FLASH<br/>L: Load NOR FLASH (Default) |
| 3 | ERROR | OUTPUT | Fault check signal<br/>H: OK<br/>L: ERROR |
| 4 | GND | POWER | Ground |
| 5 | FRSYNC | I/O: 1.8V | Frame synchronization signal |
| 6 | GPIO3 | I/O: 1.8V | Reserved |
| 7 | GND | POWER | Ground |
| 8 | D0_N | OUTPUT | MIPI Data Lane 0 (Negative) |
| 9 | D0_P | OUTPUT | MIPI Data Lane 0 (Positive) |
| 10 | GND | POWER | Ground |
| 11 | D1_N | OUTPUT | MIPI Data Lane 1 (Negative) |
| 12 | D1_P | OUTPUT | MIPI Data Lane 1 (Positive) |
| 13 | GND | POWER | Ground |
| 14 | CLK_N | OUTPUT | MIPI Clock (Negative) |
| 15 | CLK_P | OUTPUT | MIPI Clock (Positive) |
| 16 | GND | POWER | Ground |
| 17 | D2_N | OUTPUT | MIPI Data Lane 2 (Negative) |
| 18 | D2_P | OUTPUT | MIPI Data Lane 2 (Positive) |
| 19 | GND | POWER | Ground |
| 20 | D3_N | OUTPUT | MIPI Data Lane 3 (Negative) |
| 21 | D3_P | OUTPUT | MIPI Data Lane 3 (Positive) |
| 22 | GND | POWER | Ground |
| 23 | POW_RES | INPUT: 3.3V/1.8V | Power reset signal |
| 24 | SENSOR-CLK | INPUT: 24MHz (1.8V) | Clock signal input<br/>(Module has built-in 24MHz clock) |
| 25 | GND | POWER | Ground |
| 26 | CAM-SCL | I/O: 3.3V | I2C Clock (Pull up 10K)<br/>FRSYNC:L → I2C Address 0x1A<br/>FRSYNC:H → I2C Address from Flash |
| 27 | CAM-SDA | I/O: 3.3V | I2C Data (Pull up 10K)<br/>FRSYNC:L → I2C Address 0x1A<br/>FRSYNC:H → I2C Address from Flash |
| 28 | GND | POWER | Ground |
| 29 | VCC-3.3V | POWER | 3.3V Power Supply |
| 30 | VCC-3.3V | POWER | 3.3V Power Supply |

</div>

### Power-Up Sequence

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_power_sequence.png" alt="Power Sequence Diagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />

:::info Power-Up Requirements
The SG3-ISX031C-MIPI camera has minimal power-up sequence requirements. Simply ensure that the RESET signal is asserted after all power supplies are stable.
:::

## Lens Options

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | EFL | Max Optical Distortion | Lens Mount |
|-------|------|------|------|-----|------------------------|------------|
| SG3-ISX031C-MIPI-H30X | 30° | 24° | F1.6 | 10.96mm | -2.5% | M12 |
| SG3-ISX031C-MIPI-H60F | 60.35° | 47° | F1.6 | 5.8mm | -11.5% | M12 |
| SG3-ISX031C-MIPI-H100F1 | 100.4° | 78° | F1.6 | 3.55mm | -49% | M12 |
| SG3-ISX031C-MIPI-H190X | 196° | 154.5° | F2.0 | 1.51mm | -154.2% | M12 |

</div>

## Package Contents

<div className="row">
  <div className="col col--6">
    :::note Standard Package
    - SG3-ISX031C-MIPI-Hxxx camera
    - FPC cable
    :::
  </div>
  <div className="col col--6">
    :::note Optional Components
    - Jetson Orin Nano/NX Developer Kit
    :::
  </div>
</div>

## Installation Guide

### Quick Setup Procedure

:::note Installation Steps
1. Connect the FPC cable to the camera
2. Mount the camera onto the Jetson Orin Nano/NX Developer Kit
3. Power on the system and configure software drivers
:::

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_nvidia.png" alt="Camera Installation on Jetson" 
    style={{maxWidth: '60%', height:'auto'}} />
</div>

## Software & Driver Support

### Driver Downloads

:::info Driver Installation
1. Select the appropriate driver package based on your JetPack version
2. Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download the package
3. Follow the installation instructions included in the package
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack Version | Download Link |
|---|-----------------|---------------|
| 1 | JP5.1.2 (L4T R35.4.1) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack5.1.2/Jetson-Orin-Nano-DK_ISX031_YUV_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.1 (L4T R36.4) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_ISX031_YUV_JP6.1_L4TR36.4.2) |

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

The SG3-ISX031C-MIPI supports two FPC cable types for different connection requirements:

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