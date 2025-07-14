---
sidebar_position: 1
title: Hardware Checking
description: Verification guide for GMSL camera hardware components before installation
---

# Hardware Checking

Before installation, verify the following hardware components to ensure optimal camera performance.

## Camera Connector

The camera utilizes an **Amphenol Fakra Z-Code** connector designed for automotive applications with high-speed data transmission capabilities.

<div className="image-container">
    <img 
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_connector.png" 
        alt="Fakra Z-Code Connector" 
        width="400" 
    />
    <p className="image-caption">Amphenol Fakra Z-Code Connector</p>
</div>

### Connector Specifications

<table className="specs-table">
  <thead>
    <tr>
      <th colSpan="2">Pin Definition</th>
      <th colSpan="2">Operating Voltage</th>
      <th>Current</th>
      <th>Interface</th>
    </tr>
    <tr>
      <th>PIN</th>
      <th>Description</th>
      <th>Max (V)</th>
      <th>Min (V)</th>
      <th>(mA)</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Video+</td>
      <td>16</td>
      <td>9</td>
      <td>&lt;400mA@12V</td>
      <td rowSpan="2">FAKRA (Z Code)</td>
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

**Key Features:**
- Automotive-grade Z-Code interface
- High-speed data transmission
- Secure locking mechanism
- IP67 waterproof rating

## Mount of Camera Lens

Our GMSL cameras are available with two lens mounting systems:

### AA (Active Alignment) Mount

<div className="image-container">
    <img 
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_AA_Structure_intro.png" 
        alt="AA Mount Structure" 
        width="600" 
    />
    <p className="image-caption">AA Mount Structure and Assembly Process</p>
</div>

AA mounting employs advanced technology ensuring precise optical alignment for superior image quality.

<div className="image-container">
    <img 
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_AA_lens.png" 
        alt="AA Mounted Lens" 
        width="400" 
    />
    <p className="image-caption">AA Mounted Camera Lens</p>
</div>

**Key Advantages:**
- Precision optical axis alignment
- Enhanced image quality
- Ideal for high-precision applications

### S-Mount

<div className="image-container">
    <img
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_S_mount_Structure_intro.png"
        alt="S-Mount Structure"
        width="600"
    />
    <p className="image-caption">S-Mount Structure and Components</p>
</div>


S-Mount provides a traditional threaded mechanical mounting solution with multiple size options.

#### Available S-Mount Models

| Model | Thread Size | Applications |
|:------|:------------|:-------------|
| **M12** | M12×0.5 | Standard automotive and security cameras |
| **M16** | M16×0.5 | Medium format lenses, industrial imaging |

<!-- **Key Advantages:**
- Cost-effective solution
- Field replaceable lenses
- Wide lens selection available
- Simple assembly process -->

#### Mount Comparison

| Feature | AA Mount | S-Mount |
|:--------|:---------|:---------|
| Mounting Method | Active Alignment | Threaded Mechanical |
| Optical Precision | High | Standard |
| Cost Efficiency | Higher Cost | Lower Cost |
| Assembly Process | Complex | Simple |
| Maintenance | Specialized | Simple |

### Camera with Heating Function

Depending on your environmental requirements, our cameras are available with or without integrated heating systems. The heating system is optional and can be added to the camera as needed.

<div className="image-container">
    <img
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_Heating_intro.png"
        alt="Camera with Heating Function"
        width="400"
    />
    <p className="image-caption">Camera with Integrated Heating System</p>
</div>

<div className="image-container">
    <img
        src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Heating_Effect_Comparison.png"
        alt="Heating Effect Comparison"
        width="600"
    />
    <p className="image-caption">Camera Heating Effect Comparison: Before (Left) vs After (Right)</p>
</div>

**Key Features:**
- Integrated heating element in lens housing (optional)
- ADC Temperature control
- Effective ice/frost removal within 3 minutes
- Maintains clear vision in extreme cold conditions
- Operating temperature range: -40°C to +50°C



<!-- :::tip Selection Guidance
Choose the appropriate camera configuration based on:
1. Environmental conditions at installation site
2. Operating temperature range requirements
3. Precision requirements of your imaging application
::: -->

