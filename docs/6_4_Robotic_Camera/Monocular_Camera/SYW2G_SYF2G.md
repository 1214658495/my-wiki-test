---
sidebar_position: 3
title: "SYW2G & SYF2G (2MP Global)"
---

# SYW2G & SYF2G (2MP Global)

## Overview

<div className="row">
  <div className="col col--12">
    SYW2G (HFOV 120°) and SYF2G (HFOV 200°) cameras are designed for embodied intelligence applications, including perception and recognition from humanoid robot head and torso positions. Both combine a 2MP Global Shutter sensor with a built-in ISP to deliver professionally tuned, uncompressed YUV images at 1920(H) × 1200(V) and 30fps through GMSL2.
    The two models differ in lens field of view, focus distance, depth of field and overall height. Both have a compact 25 × 25mm footprint.
  </div>
</div>

<div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', textAlign: 'center'}}>
  <figure style={{flex: '1 1 240px', minWidth: 0, margin: 0}}>
    <div className="monocular-overview-photo">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G.png?x-oss-process=image/format,webp" alt="SYW2G" style={{width: '88%', translate: '5% -2%'}} />
    </div>
    <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYW2G (HFOV 120°)</figcaption>
  </figure>
  <figure style={{flex: '1 1 240px', minWidth: 0, margin: 0}}>
    <div className="monocular-overview-photo">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYF2G/SYF2G.png?x-oss-process=image/format,webp" alt="SYF2G" style={{width: '91.5%', translate: '4.5% -1%'}} />
    </div>
    <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYF2G (HFOV 200°)</figcaption>
  </figure>
</div>

## Key Features and Applications

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Features:</strong><br/>
    • Uncompressed YUV output with built-in ISP<br/>
    • Global Shutter<br/>
    • Low latency<br/>
    • External trigger support<br/>
    • Multi-camera synchronization
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>Applications:</strong><br/>
    • Embodied intelligence<br/>
    • Humanoid robot perception and recognition
  </div>
</div>

## Quick Start

### Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter | Value |
|-----------|-------|
| Sensor | 2MP 3µm RGB sensor |
| ISP | Built-in |
| Output Pixels | 1920(H) × 1200(V) |
| Frame Rate | 1920(H) × 1200(V) @ 30fps |
| HDR Support | No |
| Shutter | Global Shutter |
| Output Data | Uncompressed YUV422 @ 8bit |
| Serializer | MAXIM MAX96717 |
| Camera Interface | GMSL2 (6Gbps) |
| Power Consumption | 1.7W |
| Connector | Amphenol Fakra (Z Code) |
| Operating Temperature | -40 to +85°C |
| Storage Temperature | -40 to +95°C |
| Dimensions | W: 25mm, L: 25mm, H: 29.81mm (SYW2G) / 30.42mm (SYF2G) |
| Weight | Less than 50g |

</div>

### Dimensions

<figure style={{textAlign: 'center', margin: '0 0 0.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G_Dimensions.png?x-oss-process=image/format,webp" alt="SYW2G mechanical dimensions, front, side and rear views" style={{maxWidth: '100%', height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYW2G</figcaption>
</figure>
<figure style={{textAlign: 'center', margin: '0 0 0.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYF2G/SYF2G_Dimensions.png?x-oss-process=image/format,webp" alt="SYF2G mechanical dimensions, front, side and rear views" style={{maxWidth: '100%', height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYF2G</figcaption>
</figure>

> **Drawing note**　Dimensions are in mm. The orientation icon marks the upright image direction. Mounting details and tolerances are on the drawings.

### Hardware Overview

#### System Diagram

SYW2G and SYF2G share the same system diagram.

<img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G_System_Diagram.png?x-oss-process=image/format,webp&v=ea8e131bbeaf" alt="SYW2G and SYF2G system diagram" style={{width: '100%', maxWidth: 900, height: 'auto'}} />

#### Data Path

Sensor → built-in ISP → MAX96717 serializer → GMSL2 → host deserializer / SoC.

#### Frame Synchronization

| Function | Control |
|----------|---------|
| Sensor frame sync | MAX96717 MFP7 |
| ISP reset | MAX96717 MFP0 |

Both models support external triggering and multi-camera synchronization. Contact SENSING for the trigger waveform, timing and register configuration required by your platform.

#### I2C Address Information

<div style={{display: 'flex', justifyContent: 'center'}}>

| Component | Model | I2C Address (8bit) | Notes |
|-----------|-------|-------------------|-------|
| Serializer | MAX96717 | 0x80 | GMSL2, 6Gbps |
| ISP | — | 0xDA | Reset controlled by MAX96717 MFP0 |
| Sensor | — | 0x20 | Frame sync controlled by MAX96717 MFP7 |

</div>

### Lens Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| Model | HFOV | VFOV | F.No | Focus Distance | Depth of Field | IP Rating |
|-------|------|------|------|----------------|----------------|-----------|
| SYW2G | 120° | 71° | 2.0 | 0.8m | 0.4m - INF | IP67 |
| SYF2G | 200° | 120° | 2.0 | 0.4m | 0.2m - INF | IP67 |

</div>

## Camera Usage

### Integration with Custom Platforms

For platforms with a customer-provided deserializer, confirm GMSL2 6Gbps compatibility, power requirements, I2C address mapping and YUV422 output configuration before integration.

1. Obtain the camera register configuration and I2C communication details: [Getting Camera Information](/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information).
2. Initialize the serializer / deserializer link and configure the host CSI input for 1920(H) × 1200(V) @ 30fps, YUV422 8bit.
3. Configure ISP reset through MFP0 and external frame synchronization through MFP7 using the supplied initialization sequence.
4. Verify image orientation, image output and multi-camera synchronization on the target platform.
