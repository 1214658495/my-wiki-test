---
sidebar_position: 1
title: Ego Custom Stereo Camera
description: SENSING stereo cameras optimized for multi-camera egocentric (Ego) data collection devices — ISX031, AR0234 and OG02B10 options with 60 mm baseline and built-in IMU
keywords: [Ego, egocentric, stereo camera, binocular, ISX031, AR0234, OG02B10, ICM-45686, GMSL2, MIPI, data collection, embodied AI]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Stereo-Camera';

# Ego Custom Stereo Camera

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, textAlign: 'center'}}>
  <img src={`${OSS}/img/ego_stereo_camera.png`} alt="Ego Custom Stereo Camera" style={{width: '100%', maxWidth: 560}} />
</div>

## Overview

SENSING's **Ego Custom Stereo Camera** is a stereo camera designed specifically for **multi-camera egocentric (Ego) data collection devices**. Its structure and communication protocol fit directly into Ego headsets, where it serves as the **front-facing stereo pair** that captures the wearer's first-person view and hand-object interaction with depth.

Three sensor options share the same 90 × 28 mm board, 60 mm baseline and on-board 6-axis IMU, so you can choose the image sensor that matches your scene without changing the mechanical design.

## Key Features

- **Built for Ego devices**: matches the structure and communication protocol of multi-camera Ego headsets such as [EgoSense H6](/docs/6_3_Data_Collection_Device/EgoSense-H6).
- **60 mm baseline**: close to the human interpupillary distance, suited to near-field hand-object manipulation.
- **On-board high-performance IMU**: TDK ICM-45686, with **joint camera-IMU calibration** supported.
- **External trigger sync**: all models support hardware frame synchronization with other cameras in the device.
- **Wide-angle lenses**: up to H160° × V130° per camera.
- **Compact and light**: 90 × 28 × 17.8 mm, < 30 g, < 1 W.
- **Customizable**: interface, structure and cable can be customized; resolution and lens are also customizable.

## Model Selection

| Item | SDS11NCL1 | SDN2NNP1 | SDV12NCP1 |
|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0234 RGB | OmniVision OG02B10 RGB |
| **Shutter** | Rolling shutter | Global shutter | Global shutter |
| **Resolution** | 1600 × 1200 × 2 | 1600 × 1200 × 2 | 1600 × 1300 × 2 |
| **Frame rate** | 30 fps | 30 fps | 30 fps |
| **Output format** | YUV422 8-bit (built-in ISP) | RAW 10-bit | RAW 10-bit |
| **Lens FOV** | H124° × V100° | H160° × V120° | H160° × V130° |
| **Baseline** | 60 mm | 60 mm | 60 mm |
| **IMU** | TDK ICM-45686 | TDK ICM-45686 | TDK ICM-45686 |
| **Camera-IMU joint calibration** | Supported | Supported | Supported |
| **External trigger sync** | Supported | Supported | Supported |
| **Interface** | GMSL2 (MAX9295D), IPEX | MIPI CSI-2, FPC | GMSL2 (MAX9295D), IPEX |
| **Power consumption** | < 1 W | < 1 W | < 1 W |
| **Weight** | < 30 g | < 30 g | < 30 g |
| **Dimensions** | 90 × 28 × 17.8 mm | 90 × 28 × 17.8 mm | 90 × 28 × 17.8 mm |

:::tip How to choose
- **SDV12NCP1 (OG02B10)**: global shutter with the tallest vertical FOV (V130°); the same sensor and lens as the cameras in EgoSense H6. Recommended for most Ego collection setups.
- **SDN2NNP1 (AR0234)**: global shutter with a direct MIPI CSI-2 FPC connection, for designs where the camera sits close to the main board.
- **SDS11NCL1 (ISX031)**: built-in ISP outputs ready-to-use YUV images, for platforms without ISP tuning resources.
:::

## Detailed Specifications

### Lens

| Model | HFOV | VFOV | Aperture | Focal length | Depth of field |
|-|-|-|-|-|-|
| SDS11NCL1 | 124° ± 3° | 100° ± 3° | F2.0 | 1.79 mm | 0.2 m ~ ∞ |
| SDN2NNP1 | 160° | 120° | F2.2 | 2.27 mm | 0.28 m ~ ∞ |
| SDV12NCP1 | 160° ± 3° | 130° ± 3° | F2.0 | 1.68 mm | 0.2 m ~ ∞ |

### Interface and Environment

| Item | SDS11NCL1 | SDN2NNP1 | SDV12NCP1 |
|-|-|-|-|
| Serializer | MAX9295D | — | MAX9295D |
| Connector | BWIPX-1-001E | 8.01A0.036200 (36-pin FPC) | BWIPX-1-001E |
| Baseline tolerance | 60.00 ± 0.5 mm | 60 mm | 60.00 ± 0.5 mm |
| Operating temperature | -30 ~ 60 ℃ | -20 ~ 60 ℃ | -30 ~ 60 ℃ |
| Storage temperature | -30 ~ 70 ℃ | — | -30 ~ 70 ℃ |

Pin definitions, I2C addresses and mechanical drawings are in each model's spec sheet (see [Downloads](#downloads)).

## Building a Multi-Camera Ego Device

Based on the **RK3588** platform, SENSING offers 4 / 5 / 6-camera Ego solutions that combine one stereo camera with several mono cameras:

| Configuration | 4-camera Ego | 5-camera Ego | 6-camera Ego |
|-|-|-|-|
| **Platform** | RK3588 | RK3588 | RK3588 |
| **Hardware** | Main board + 1 stereo + 2 mono | Main board + 1 stereo + 3 mono | Main board + 1 stereo + 4 mono |
| **Software** | Drivers, ISP tuning, applications | Drivers, ISP tuning, applications | Drivers, ISP tuning, applications |

For mono cameras, see [Ego Custom Mono Camera](/docs/6_3_Data_Collection_Device/Ego-Mono-Camera). For a ready-to-use 6-camera headset, see [EgoSense H6](/docs/6_3_Data_Collection_Device/EgoSense-H6).

## Customization

- **Interface customization**: GMSL2 or MIPI CSI-2 output, connector type.
- **Structure customization**: board outline and mounting holes to fit your enclosure.
- **Cable customization**: FPC / coax cable length and routing.
- **Optics customization**: resolution and lens (FOV) can be customized.

## Downloads

| Model | Spec sheet |
|-|-|
| SDS11NCL1 (ISX031) | <a href={`${OSS}/source/SDS11NCL1_Spec_EN_V1.0.pdf`}>SDS11NCL1_Spec_EN_V1.0.pdf</a> |
| SDN2NNP1 (AR0234) | <a href={`${OSS}/source/SDN2NNP1_Spec_EN_V1.0.pdf`}>SDN2NNP1_Spec_EN_V1.0.pdf</a> |
| SDV12NCP1 (OG02B10) | <a href={`${OSS}/source/SDV12NCP1_Spec_EN_V1.0.pdf`}>SDV12NCP1_Spec_EN_V1.0.pdf</a> |

## Contact Us

:::note Contact Information
For samples, pricing or customization, please contact us:

- **Sales**: [Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **Technical support**: [support@sensing-world.com](mailto:support@sensing-world.com)
- **Phone**: +86-755-28990915
- **Website**: [www.sensing-world.com](https://sensing-world.com/en/)

**Business hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
:::
