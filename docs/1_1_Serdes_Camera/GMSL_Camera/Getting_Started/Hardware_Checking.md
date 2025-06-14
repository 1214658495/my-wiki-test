---
sidebar_position: 1
---

# Hardware Checking

Before installing the camera, please carefully check the following hardware aspects to ensure proper functionality.

## 1. Camera Connector

The camera uses an **Amphenol Fakra (Z Code)** connector for signal transmission. This connector is specifically designed for automotive applications and provides reliable high-speed data transmission.

<!-- <div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/camera-connector.png" alt="Camera Connector" style={{maxWidth: '80%', height: 'auto'}} />
  <p style={{color: '#666', fontSize: '0.9em'}}>Amphenol Fakra (Z Code) Connector</p>
</div> -->
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_connector.png" alt="Camera_connector" style={{maxWidth: '45%', height:'auto'}} />
</div>

### Connector Pin Definition

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
      <td>&lt;350mA@12V</td>
      <td rowSpan="2">FAKRA(Z Code)</td>
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

Key features of the connector:
- Z Code interface for automotive applications
- High-speed data transmission capability
- Secure locking mechanism
- IP67 waterproof rating

## 2. Mount of Camera Lens

Our cameras are available in two lens mounting types:

### AA (Active Alignment) 
The AA type lens features an advanced mounting technology that ensures precise optical alignment.

<!-- <div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/aa-lens.png" alt="AA Lens Structure" style={{maxWidth: '80%', height: 'auto'}} />
  <p style={{color: '#666', fontSize: '0.9em'}}>AA Lens Structure and Mounting Process</p>
</div> -->
<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_AA_Structure_intro.png" alt="AA_Mount" style={{maxWidth: '100%', height:'auto'}} />
</div>

Key features of AA lens:
- Active alignment during assembly
- Precise optical axis alignment
- Enhanced image quality
- Suitable for high-precision applications

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_AA_lens.png" alt="AA_Mount" style={{maxWidth: '60%', height:'auto'}} />
</div>
### S-Mount
The S-Mount lens provides a traditional mechanical mounting solution.

<!-- <div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/S-Mount.png" alt="Threaded Lens" style={{maxWidth: '80%', height: 'auto'}} />
  <p style={{color: '#666', fontSize: '0.9em'}}>Threaded Lens Mount</p>
</div> -->

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_S_mount_Structure_intro.png" alt="AA_Mount" style={{maxWidth: '100%', height:'auto'}} />
</div>

Comparison between AA and S-Mount:
| Feature | AA | S-Mount |
|---------|---------|---------------|
| Mounting Method | Active Alignment | Mechanical Thread |
| Precision | High | Standard |
| Cost | Higher | Lower |
| Assembly Time | Longer | Shorter |
| Maintenance | Complex | Simple |

## 3. Heating Feature

Some camera models include a heating function to prevent lens fogging in cold environments.

### With Heating Function
<!-- <div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/camera-with-heating.png" alt="Camera with Heating" style={{maxWidth: '80%', height: 'auto'}} />
  <p style={{color: '#666', fontSize: '0.9em'}}>Camera with Heating Function</p>
</div> -->


<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_Heating_intro.png" alt="Camera_Heating_intro" style={{maxWidth: '50%', height:'auto'}} />
</div>

Features:
- External power supply required
- Heating element integrated in the lens housing
- Temperature control system
- Suitable for cold environments

### Without Heating Function
<!-- <div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/camera-without-heating.png" alt="Camera without Heating" style={{maxWidth: '80%', height: 'auto'}} />
  <p style={{color: '#666', fontSize: '0.9em'}}>Standard Camera without Heating</p>
</div> -->

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/Camera_Without_Heating_intro.png" alt="Camera_Without_Heating_intro" style={{maxWidth: '50%', height:'auto'}} />
</div>

Features:
- Standard Power over Coax (POC) power supply only
- Simpler design
- Lower power consumption
- Suitable for normal temperature environments

:::note
Please ensure you have selected the appropriate camera model based on your environmental requirements and application needs.
:::

