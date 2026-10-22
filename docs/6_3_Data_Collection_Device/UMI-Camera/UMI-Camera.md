---
sidebar_position: 1
title: UMI Custom Camera
description: SENSING mono cameras optimized for UMI hand-held data collection devices (gripper and wrist) — ISX031, AR0145 and AR0234 options
keywords: [UMI, Universal Manipulation Interface, gripper, wrist, mono camera, ISX031, AR0145, AR0234, MIPI, data collection, embodied AI]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/UMI-Camera';
export const MONO = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Mono-Camera';

# UMI Custom Camera

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 24}}>
  <img src={`${OSS}/img/umi_camera_module.png`} alt="UMI Custom Camera" style={{width: 200}} />
  <img src={`${OSS}/img/umi_gripper.png`} alt="UMI gripper" style={{width: 200}} />
  <img src={`${OSS}/img/umi_wrist.png`} alt="UMI wrist unit" style={{width: 180}} />
</div>

## Overview

**UMI** (Universal Manipulation Interface) devices are hand-held data collection tools: the operator performs a task with a **gripper** or a **wrist-worn unit**, while a camera on the device records the manipulation from the hand's point of view. The data is used to train robot manipulation policies.

SENSING's **UMI Custom Camera** is a mono camera optimized for both device forms, the **gripper** and the **wrist**. Its structure and communication protocol fit directly into UMI devices, and it can work alongside an Ego headset such as [EgoSense H6](/docs/6_3_Data_Collection_Device/EgoSense-H6) for synchronized head and hand data capture.

## Key Features

- **Built for UMI devices**: optimized for both the gripper and wrist forms.
- **Ultra-wide FOV**: 160° ~ 200° horizontal, keeping the gripper fingers and the object in view at close range.
- **Compact option**: the AR0145 camera (SM1N8ASC) is only 16 × 16 × 16.5 mm, suited to space-limited wrist units.
- **External trigger sync**: all models support hardware frame synchronization (FSYNC).
- **MIPI CSI-2 over FPC**, < 0.5 W, 15 g.
- **Customizable**: interface, structure and cable can be customized; resolution and lens are also customizable.

## Model Selection

| Item | SM3S11NS | SM1N8ASC | SM2N2NP |
|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0145 RGB | onsemi AR0234 RGB |
| **Shutter** | Rolling shutter | Global shutter | Global shutter |
| **Resolution** | 1600 × 1200 (1920 × 1536 optional) | 1280 × 800 | 1600 × 1200 |
| **Frame rate** | 30 fps | 30 fps | 30 fps |
| **Output format** | YUV422 (built-in ISP) | RAW 10-bit | RAW 10-bit |
| **HDR** | Supported | Supported | Supported |
| **Lens FOV** | H176° × V140° | H183° × V122° | H160° × V120° |
| **External trigger sync** | Supported | Supported | Supported |
| **Interface** | MIPI CSI-2, FPC | MIPI CSI-2, FPC | MIPI CSI-2, FPC |
| **Power consumption** | < 0.5 W | < 0.5 W | < 0.5 W |
| **Weight** | 15 g | 15 g | 15 g |
| **Dimensions** | 28.4 × 17.8 × 19.5 mm | 16 × 16 × 16.5 mm | 28.4 × 17.8 × 17.7 mm |

:::tip How to choose
- **SM1N8ASC (AR0145)**: global shutter, the widest horizontal FOV (183°) and the smallest size; a good fit for wrist units.
- **SM2N2NP (AR0234)**: global shutter at 1600 × 1200, for higher-resolution views of fast hand motion.
- **SM3S11NS (ISX031)**: built-in ISP outputs ready-to-use YUV images, for platforms without ISP tuning resources.
:::

## Detailed Specifications

### Lens

| Model | HFOV | VFOV | Aperture | Focal length | Depth of field |
|-|-|-|-|-|-|
| SM3S11NS (1600 × 1200) | 176° | 140° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM3S11NS (1920 × 1536) | 200° | 155° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM1N8ASC | 183° | 122° | F2.0 | 0.95 mm | 0.1 m ~ ∞ |
| SM2N2NP | 160° | 120° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |

### Interface and Environment

| Item | SM3S11NS | SM1N8ASC | SM2N2NP |
|-|-|-|-|
| Connector | 8.03A0.033200 | 8.03A0.033200 | 8.03A0.033200 |
| Supply voltages | 3.8 V / 1.8 V / 1.1 V | 2.8 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V |
| Operating temperature | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ |
| Storage temperature | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ |

Pin definitions, I2C addresses and mechanical drawings are in each model's spec sheet (see [Downloads](#downloads)).

## Customization

- **Interface customization**: connector type and pinout.
- **Structure customization**: board outline and mounting holes to fit the gripper or wrist enclosure.
- **Cable customization**: FPC length and routing.
- **Optics customization**: resolution and lens (FOV) can be customized.

## Downloads

| Model | Spec sheet |
|-|-|
| SM3S11NS (ISX031) | <a href={`${MONO}/source/SM3S11NS_Spec_EN_V1.0.pdf`}>SM3S11NS_Spec_EN_V1.0.pdf</a> |
| SM1N8ASC (AR0145) | <a href={`${OSS}/source/SM1N8ASC_Spec_EN_V1.0.pdf`}>SM1N8ASC_Spec_EN_V1.0.pdf</a> |
| SM2N2NP (AR0234) | <a href={`${MONO}/source/SM2N2NP_Spec_EN_V1.0.pdf`}>SM2N2NP_Spec_EN_V1.0.pdf</a> |

## Contact Us

:::note Contact Information
For samples, pricing or customization, please contact us:

- **Sales**: [Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **Technical support**: [support@sensing-world.com](mailto:support@sensing-world.com)
- **Phone**: +86-755-28990915
- **Website**: [www.sensing-world.com](https://sensing-world.com/en/)

**Business hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
:::
