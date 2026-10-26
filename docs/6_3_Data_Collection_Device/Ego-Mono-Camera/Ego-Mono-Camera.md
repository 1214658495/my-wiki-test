---
sidebar_position: 1
title: Ego Custom Mono Camera
description: SENSING mono cameras optimized for multi-camera egocentric (Ego) data collection devices — ISX031, AR0234, OG02B10 and OV9281 options
keywords: [Ego, egocentric, mono camera, monocular, ISX031, AR0234, OG02B10, OV9281, MIPI, data collection, embodied AI]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Mono-Camera';

# Ego Custom Mono Camera

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, textAlign: 'center'}}>
  <img src={`${OSS}/img/ego_mono_camera.png`} alt="Ego Custom Mono Camera" style={{width: '100%', maxWidth: 320}} />
</div>

## Overview

SENSING's **Ego Custom Mono Camera** is a mono camera designed specifically for **multi-camera egocentric (Ego) data collection devices**. Its structure and communication protocol fit directly into Ego headsets, where it acts as the **side cameras** that widen the combined field of view around the wearer's hands and surroundings.

Four sensor options cover color and monochrome, rolling and global shutter, so each position on the headset can use the sensor that suits it.

## Key Features

- **Built for Ego devices**: matches the structure and communication protocol of multi-camera Ego headsets such as [EgoSense H6](/docs/6_3_Data_Collection_Device/EgoSense-H6).
- **Ultra-wide lenses**: up to H176° × V140° (ISX031 at 1600 × 1200), extending to H200° × V155° at 1920 × 1536.
- **External trigger sync**: all models support hardware frame synchronization (FSYNC) with the other cameras in the device.
- **MIPI CSI-2 over FPC**: connects directly to the main board.
- **Small and light**: about 28 × 18 mm footprint, 15 g, < 0.5 W.
- **Customizable**: interface, structure and cable can be customized; resolution and lens are also customizable.

## Model Selection

| Item | SM3S11NS | SM2N2NP | SM2V12NP | SM1V20NJ |
|-|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0234 RGB | OmniVision OG02B10 RGB | OmniVision OV9281 Mono |
| **Shutter** | Rolling shutter | Global shutter | Global shutter | Global shutter |
| **Resolution** | 1600 × 1200 (1920 × 1536 optional) | 1600 × 1200 | 1600 × 1300 | 1280 × 800 |
| **Frame rate** | 30 fps | 30 fps | 30 fps | 30 fps |
| **Output format** | YUV422 (built-in ISP) | RAW 10-bit | RAW 10-bit | RAW 10-bit |
| **Color / mono** | Color | Color | Color | Mono, 850 nm IR |
| **HDR** | Supported | Not supported | Not supported | Not supported |
| **Lens FOV** | H176° × V140° | H160° × V120° | H160° × V130° | H138° × V95° |
| **External trigger sync** | Supported | Supported | Supported | Supported |
| **Interface** | MIPI CSI-2, FPC | MIPI CSI-2, FPC | MIPI CSI-2, FPC | MIPI CSI-2, FPC |
| **Power consumption** | < 0.5 W | < 0.5 W | < 0.5 W | < 0.5 W |
| **Weight** | 15 g | 15 g | 15 g | < 15 g |
| **Dimensions** | 28.4 × 17.8 × 19.5 mm | 28.4 × 17.8 × 17.7 mm | 28.4 × 17.8 × 17.8 mm | 24 × 16 × 13.3 mm |

:::tip How to choose
- **SM2V12NP (OG02B10)**: global shutter with V130°; the same sensor and lens as the cameras in EgoSense H6, and a natural match for the [SDV12NCP1 stereo camera](/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera).
- **SM2N2NP (AR0234)**: global shutter at 1600 × 1200, pairs with the AR0234 stereo camera (SDN2NNP1).
- **SM3S11NS (ISX031)**: built-in ISP and the widest FOV, for maximum peripheral coverage.
- **SM1V20NJ (OV9281)**: monochrome with 850 nm IR response, for tracking and low-light or IR-illuminated scenes.
:::

## Detailed Specifications

### Lens

| Model | Resolution | HFOV | VFOV | Aperture | Focal length | Depth of field |
|-|-|-|-|-|-|-|
| SM3S11NS | 1600 × 1200 | 176° | 140° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM3S11NS | 1920 × 1536 | 200° | 155° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM2N2NP | 1600 × 1200 | 160° | 120° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |
| SM2V12NP | 1600 × 1300 | 160° | 130° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |
| SM1V20NJ | 1280 × 800 | 138° | 95° | F2.2 | 1.14 mm | 0.1 m ~ ∞ |

### Interface and Environment

| Item | SM3S11NS | SM2N2NP | SM2V12NP | SM1V20NJ |
|-|-|-|-|-|
| Connector | 8.03A0.033200 | 8.03A0.033200 | 8.03A5.021250 | 8.03A5.021250 |
| Supply voltages | 3.8 V / 1.8 V / 1.1 V | 3.3 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V |
| Operating temperature | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ |
| Storage temperature | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ |

Pin definitions, I2C addresses and mechanical drawings are in each model's spec sheet (see [Downloads](#downloads)).

## Building a Multi-Camera Ego Device

On the **RK3588** platform, one [stereo camera](/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) plus 2 / 3 / 4 mono cameras forms a 4 / 5 / 6-camera Ego device. SENSING provides the drivers, ISP tuning and applications. See [Building a Multi-Camera Ego Device](/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera#building-a-multi-camera-ego-device) for the configurations.

## Customization

- **Interface customization**: connector type and pinout.
- **Structure customization**: board outline and mounting holes to fit your enclosure.
- **Cable customization**: FPC length and routing.
- **Optics customization**: resolution and lens (FOV) can be customized.

## Downloads

| Model | Spec sheet |
|-|-|
| SM3S11NS (ISX031) | <a href={`${OSS}/source/SM3S11NS_Spec_EN_V1.0.pdf`}>SM3S11NS_Spec_EN_V1.0.pdf</a> |
| SM2N2NP (AR0234) | <a href={`${OSS}/source/SM2N2NP_Spec_EN_V1.0.pdf`}>SM2N2NP_Spec_EN_V1.0.pdf</a> |
| SM2V12NP (OG02B10) | <a href={`${OSS}/source/SM2V12NP_Spec_EN_V1.0.pdf`}>SM2V12NP_Spec_EN_V1.0.pdf</a> |
| SM1V20NJ (OV9281) | <a href={`${OSS}/source/SM1V20NJ_Spec_EN_V3.0.pdf`}>SM1V20NJ_Spec_EN_V3.0.pdf</a> |

## Contact Us

:::note Contact Information
For samples, pricing or customization, please contact us:

- **Sales**: [Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **Technical support**: [support@sensing-world.com](mailto:support@sensing-world.com)
- **Phone**: +86-755-28990915
- **Website**: [www.sensing-world.com](https://sensing-world.com/en/)

**Business hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
:::
