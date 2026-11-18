---
sidebar_position: 0
title: New-Generation Robotic Cameras
description: Compare binocular and monocular robotic cameras by image format, field of view, frame rate and mechanical configuration.
---

# New-Generation Robotic Cameras

This family covers binocular and monocular cameras for embodied intelligence, humanoid robotics and data collection applications. Start with the image pipeline your platform supports, then compare field of view, frame rate and mechanical options.

<figure style={{margin: 0, textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/New_Generation/Stereo_Housing.png?x-oss-process=image/format,webp" alt="New-generation stereo camera housing" style={{display: 'block', marginInline: 'auto', width: '100%', maxWidth: 520, height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>New-generation stereo camera</figcaption>
</figure>

## Binocular Camera

| Model | Sensors | Resolution / frame rate per eye | Shutter | Output / ISP | HFOV / VFOV |
|---|---|---|---|---|---|
| [S56D](/docs/6_4_Robotic_Camera/Binocular_Camera/S56D) | ST VB1940 × 2 | 2400(H) × 1800(V) @ 30fps | Global | RAW10 / host processing | 140° / 102° |
| [S56Y](/docs/6_4_Robotic_Camera/Binocular_Camera/S56Y) | ST VB1940 × 2 | 2400(H) × 1800(V) @ 30fps | Global | YUV422 8bit / built-in ISP | 128° / 91° |
| [S36A](/docs/6_4_Robotic_Camera/Binocular_Camera/S36A) | Sony ISX031 × 2 | 1920(H) × 1536(V) @ 30fps; 1920(H) × 1080(V) @ 60fps | Rolling, 140dB HDR | YUV422 8bit / built-in ISP | 120° / 93° |

All three feature a 60 ± 0.5mm baseline, TDK ICM-45686 six-axis IMU, precision stereo AA and MAX9295D GMSL2 6Gbps serialization. Lens protection is IP67; the complete camera is IP54. Lens FOV tolerance is ±3°.

### How to Choose

- **S56D:** Global Shutter capture with RAW10 output, a 140° HFOV and a host-managed image pipeline.
- **S56Y:** Global Shutter capture with built-in ISP processing, YUV output and a 128° HFOV.
- **S36A:** 140dB HDR and a 1920(H) × 1080(V) @ 60fps mode with Rolling Shutter capture.

S56D and S56Y share the specified output dimensions, overall dimensions and baseline, but their output formats, image pipelines and hardware initialization differ. Confirm lens parameters, drivers and platform configuration for the selected model.

### Mechanical and Ordering Options

| Model | Overall W × L × H, including lenses | Standard weight | Lightweight weight |
|---|---|---|---|
| S56D | 27 × 84 × 30.3mm | 82 ± 10g | 66 ± 10g |
| S56Y | 27 × 84 × 30.3mm | 85 ± 10g | 69 ± 10g |
| S36A | 27 × 84 × 28.8mm | 85 ± 10g | 69 ± 10g |

Each model offers a standard Fakra version, `_A` lightweight Fakra, `_B` lightweight SS-mini01 and `_C` standard SS-mini01. Full configuration tables and model-specific drawings are on the product pages.

## Monocular Camera

| Model | Sensor / ISP | Resolution / frame rate | Imaging mode / output | HFOV / VFOV | Focus / depth of field | Dimensions |
|---|---|---|---|---|---|---|
| [SYW2G](/docs/6_4_Robotic_Camera/Monocular_Camera/SYW2G_SYF2G) | AR0234 / GW5200 | 1920(H) × 1200(V) @ 30fps | Global / YUV422 8bit | 120° / 71° | 0.8m / 0.4m - INF | 25 × 25 × 29.81mm |
| [SYF2G](/docs/6_4_Robotic_Camera/Monocular_Camera/SYW2G_SYF2G) | AR0234 / GW5200 | 1920(H) × 1200(V) @ 30fps | Global / YUV422 8bit | 200° / 120° | 0.4m / 0.2m - INF | 25 × 25 × 30.42mm |
| [SG3S11AFSK](/docs/6_4_Robotic_Camera/Monocular_Camera/SG3S11AFSK) | ISX031 / built-in | 1920(H) × 1536(V) @ 30fps | HDR / YUV422 8bit | 196° / 154° | 0.4m / 0.13m to infinity | 25 × 25mm footprint |
| [SHW5G](/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G) | 5MP RGGB | 2560(H) × 1984(V) @ up to 60fps (Global) / 50fps (Rolling) | Global or Rolling / RAW10 | 130° / 102° | 0.8m / 0.3m to infinity | 25 × 25 × 29.49mm |
| [SHF5G](/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G) | 5MP RGGB | 2560(H) × 1984(V) @ up to 60fps (Global) / 50fps (Rolling) | Global or Rolling / RAW10 | 200° / 150° | 0.4m / 0.1m to infinity | 25 × 25 × 31.35mm |
| [M3A](/docs/6_1_Camera/Monocular_Camera/M3A) | RGGB / built-in | 1920(H) × 1536(V) @ 30fps | HDR / YUV422 8bit | 200° / 155° | 0.4m / 0.15m to infinity | 17 × 17 × 31.89mm |

SYW2G and SYF2G both use MAX96717 GMSL2 6Gbps, consume 1.7W, and support external triggering and multi-camera synchronization. They share one comparison page because the sensor, ISP, serializer and integration flow are shared; the lens and mechanical differences are listed separately. Choose SYW2G for its narrower view, or SYF2G for wider scene coverage.

SHW5G / SHF5G cover higher-resolution RAW10 capture. SG3S11AFSK and M3A provide ultra-wide HDR YUV output, with a 25 × 25mm and 17 × 17mm footprint respectively. SHW5G, SHF5G and M3A use the same product documentation in both Robotic Camera sections.

## Calibration and Integration

The binocular models use **Omni-radtan** stereo calibration and include factory camera / IMU calibration. Read the individual device’s calibration using SENSING sgMIX or the matching OTP format documentation. Confirm image format, synchronization, I2C mapping and platform support before integration.

For driver packages, adapter boards, power requirements and calibration tools, contact [support@sensing-world.com](mailto:support@sensing-world.com).

## Existing Camera Documentation

The existing Robotic Camera section remains available for established projects and model comparison. Inclusion in that section does not imply discontinuation of every model.

| Category | Documentation |
|---|---|
| Binocular | [Astra S56 / S56C](/docs/6_1_Camera/Binocular_Camera/S56), [Astra S36](/docs/6_1_Camera/Binocular_Camera/S36) |
| Monocular | [SHW3H](/docs/6_1_Camera/Monocular_Camera/SHW3H), [SHF3L](/docs/6_1_Camera/Monocular_Camera/SHF3L), [SHW3G / SHF3G](/docs/6_1_Camera/Monocular_Camera/SHW3G_SHF3G), [SHW5G / SHF5G](/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G), [M3A](/docs/6_1_Camera/Monocular_Camera/M3A) |

See [Robotics](/docs/6_0_Robotics) for vision solutions and data collection devices.
