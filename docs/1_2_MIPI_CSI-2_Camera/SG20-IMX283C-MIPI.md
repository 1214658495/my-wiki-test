---
sidebar_position: 5
---

# SG20-IMX283C-MIPI Camera

## Overview

<div className="row">
  <div className="col col--12">
    <p>The SG20-IMX283C-MIPI is a high-performance camera module featuring the Sony IMX283 CMOS image sensor, delivering 20.3MP resolution for exceptional image quality. This camera excels in various applications including UAV aerial photography, remote monitoring systems, and precision industrial inspection. Its versatile design allows integration with multiple SOC platforms including NVIDIA Jetson.</p>
  </div>
</div>

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI.png" alt="SG20-IMX283C-MIPI" 
    style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <a href="https://sensing-world.com/en/h-pd-115.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>Buy Now</strong>
    </a>
</div>

## Technical Specifications

### Key Features

| Parameter         | Value                   |
|-------------------|-------------------------|
| Sensor            | Sony 20.3MP IMX283 RGGB |
| ISP               | N/A                     |
| Chip size         | 16.226 mm (H) × 12.654 mm (V) |
| Image Size        | Diagonal 15.86mm (Type 1) |
| Resolution        | 5472H×3648V@20fps RAW12<br/>5472H×3648V@25fps RAW10<br/>3840H×2160V@50fps RAW10<br/>2736H×1824V@50fps RAW12 (2/2 binning) |
| Pixel Size        | 2.40um*2.40um           |
| HDR Support       | N/A                     |
| Output Format     | MIPI RAW10/RAW12        |
| Power Supply      | 3.3V                    |
| Current           | < 500mA @3.3VDC         |
| Camera interface  | FPC                     |
| Connector         | AFC07-S22ECA-00         |
| Operating Temp.   | -20 to +75°C            |
| Performance temp. | -20 to +60°C            |
| Dimensions        | W: 40mm, L: 40mm, H: 10.1mm |
| Weight            | < 40g                   |

### Physical Dimensions

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI_Dimensions.png" alt="SG20-IMX283C-MIPI Dimensions" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

## Lens Options

The SG20-IMX283C-MIPI supports various C-mount lenses to accommodate different field-of-view requirements:

<div className="lens-options">
<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | FOV (H×V) | F-Number | Focal Length | Distortion | Mount Type |
|-------|-----------|----------|--------------|------------|------------|
| SG20-IMX283C-MIPI-H15B | 15° × 10° | F2.2 | 50mm | 0.1% | C-mount |
| SG20-IMX283C-MIPI-H30B | 30° × 25° | F2.0 | 25mm | 0.25% | C-mount |
| SG20-IMX283C-MIPI-H60B | 57.6° × 40.5° | F2.8 | 12mm | 0.5% | C-mount |
| SG20-IMX283C-MIPI-H90B | 95° × 73° | F2.5 | 6mm | 0.23% | C-mount |

</div>
</div>

## Hardware Integration

### System Architecture

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI_Block_Diagram.png" alt="SG20-IMX283C-MIPI Block Diagram" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C Address Configuration

<div style={{display: 'flex', justifyContent: 'center'}}>

| Component | I2C Address       |
|-----------|-------------------|
| EEPROM    | 0xA0 (8-bit address) |
| Sensor    | 0x20 (8-bit address) |

</div>

### Connector Pin Definitions

<div style={{display: 'flex', justifyContent: 'center'}}>

| Pin | Signal | Description |
|-----|--------|-------------|
| 1, 4, 7, 10, 13, 16, 19 | GND | Ground |
| 2 | D1 N | MIPI Data Lane 1 Negative |
| 3 | D1 P | MIPI Data Lane 1 Positive |
| 5 | D2 N | MIPI Data Lane 2 Negative |
| 6 | D2 P | MIPI Data Lane 2 Positive |
| 8 | CLK N | MIPI Clock Negative |
| 9 | CLK P | MIPI Clock Positive |
| 11 | D3 N | MIPI Data Lane 3 Negative |
| 12 | D3 P | MIPI Data Lane 3 Positive |
| 14 | D4 N | MIPI Data Lane 4 Negative |
| 15 | D4 P | MIPI Data Lane 4 Positive |
| 17 | CAM-PWDN | Power Down (1.8V or 3.3V/IO) |
| 18 | CAM-CLK | Camera Clock (Default: Internal 24MHz) |
| 20 | CAM-SCL | I²C Clock (3.3V/IO) |
| 21 | CAM-SDA | I²C Data (3.3V/IO) |
| 22 | VCC-3.3V | Power Supply |

</div>

### Power-Up Sequence

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_ISX031_power_sequence.png" alt="Power Sequence Diagram" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info Power-Up Requirements
The SG20-IMX283C-MIPI camera requires minimal power sequencing. Ensure that the RESET signal is asserted only after all power supplies have stabilized.
:::


## Installation & Setup

### Hardware Connection

:::note Installation Steps
1. Connect the appropriate FPC cable to the camera module
2. Mount the camera securely onto the Jetson Orin Nano/NX Developer Kit
3. Power on the system and proceed to driver installation
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

<!-- ### Compatible Development Kits

<div style={{display: 'flex', justifyContent: 'center'}}>

| Kit | Compatible Platform | Max Camera Inputs |
|------|--------------------------|-------------------|
| [NVIDIA MIPI CSI-2 Camera Developer Kit](https://sensing-world.com/en/h-pd-88.html) | NVIDIA Jetson Orin Nano/Orin NX Developer Kit | 2 |

</div> -->

<!-- ## Software Setup -->

### Driver Installation

Access the latest camera drivers from our GitHub repository:

<div style={{marginBottom: '1rem'}}>
    <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
        <span style={{fontWeight: 'bold'}}>SENSING-Technology Camera Drivers</span>
    </a>
</div>

:::info Driver Installation Process
1. Select the appropriate driver package based on your JetPack version
2. Copy the full link address to [DownGit](https://minhaskamal.github.io/DownGit/#/home) to download the package
3. Follow the installation instructions included in the package
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack Version | Download Link |
|---|-----------------|---------------|
| 1 | JP6.1 (L4T R36.4) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX283_JP6.1_L4TR36.4.2) |

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

The SG20-IMX283C-MIPI supports FPC cable types for different connection requirements:

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="FPC Cable Options" 
    style={{maxWidth: '70%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| Cable Type | Part Number | Specification |
|------------|-------------|---------------|
| 22-Pin FPC | AFC07-S22ECA-00 | 0.5mm Pitch |

</div>

<!-- ## Documentation & Resources

:::info Technical Documentation
Download the complete [SG20-IMX283C-MIPI Camera Datasheet](https://sensing-world.com/en/h-pd-40.html?recommendFromPid=0&fromMid=1563#) for detailed specifications and integration guidelines.
::: -->
