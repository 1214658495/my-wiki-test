---
sidebar_position: 1
title: EgoSense H6 Head-Mounted 6-Camera Data Collection Device
description: Overview, hardware specifications, camera specifications and software architecture of the SENSING EgoSense H6 head-mounted six-camera egocentric data collection device
keywords: [EgoSense H6, EgoSense, head-mounted, six-camera, egocentric, first-person, data collection, embodied AI, MCAP, IMU]
---

# EgoSense H6 Head-Mounted 6-Camera Data Collection Device

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_hero.png" alt="EgoSense H6 Head-Mounted 6-Camera Data Collection Device" style={{width: '100%', maxWidth: '560px', borderRadius: '8px'}} />
</div>

## Overview

**EgoSense H6** is a **head-mounted, six-camera egocentric (first-person) data collection device** developed by SENSING. It combines a front-facing stereo pair with two mono cameras on each side, for a total of **six global shutter cameras** covering a **270° combined field of view**. A **6-axis IMU** and **microphones** are built in, so the wearer's first-person view, head pose and audio are recorded in sync.

Data is recorded offline in **MCAP** format to the built-in Micro SD card, so no computer is needed while collecting. The Windows host software **EGOTool** provides live preview and recording control, and recordings can be played back directly in **Foxglove Studio**.

:::note Why egocentric data collection
Fixed-camera and motion-capture labs cannot see hand details and are detached from real environments; robot teleoperation is costly and slow; simulated data suffers from the sim-to-real gap. EgoSense H6 is a lightweight wearable that takes data collection into real homes, factories, hospitals and shopping malls, delivering **first-person perspective, multi-sensor synchronization and scalability** at the same time.
:::

## Key Features

- **First-person view, just like the human eye**: records what the wearer actually sees, preserving hand-eye coordination and perception-decision behavior.
- **Six global shutter cameras, 270° ultra-wide coverage**: a front stereo pair plus two mono cameras per side, with no rolling-shutter distortion during motion.
- **Multi-modal synchronization**: images, IMU (200 Hz) and microphone audio are captured together; cameras support internal and external trigger synchronization.
- **Wear and go, offline recording**: battery powered with about 3 hours of runtime, recording straight to the Micro SD card — no camera rigs or dedicated venue required.
- **Open data format**: recordings are `.mcap` files with H.265 video, readable in Foxglove Studio and easy to integrate into your own data pipeline.
- **Customizable**: the complete device, main board and cameras can all be customized.

## Applications

- **Embodied AI data collection**: capture real manipulation processes from a first-person view as high-quality training data for imitation learning and world models.
- **Humanoid robot training**: collect human demonstrations and visual data for robot skill learning.
- **Multi-modal perception research**: synchronized analysis of vision, inertial and audio data.
- **Behavior analysis**: record real-world operating procedures and habits.

## Product Appearance

| Front | Side |
|:-:|:-:|
| ![EgoSense H6 front](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_front.png) | ![EgoSense H6 side](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_side.png) |

## Key Specifications

| Category | Item | Value |
|-|-|-|
| **Physical** | Dimensions | 268 × 223 × 92 mm |
| | Weight | 350 g |
| | Battery runtime | About 3 hours |
| | Storage | 256 GB (Micro SD card) |
| | Connectivity | Wi-Fi, USB Type-C |
| **Output data** | Images | RGB images (6 channels) |
| | Inertial data | IMU data |
| | Audio | Microphone audio |
| | Recording format | `.mcap` (H.265 video) |
| **Cameras** | Number of cameras | 6 (front stereo pair + 2 mono cameras per side) |
| | Resolution | 1600 × 1300 |
| | Frame rate | 30 fps (60 fps optional) |
| | Combined FOV | 270° |
| | Shutter | Global shutter |
| **IMU** | Type | 6-axis |
| | Sample rate | 200 Hz |

## Hardware Specifications

### Main Controller

| Category | Item | Value |
|-|-|-|
| **SoC** | Platform | Rockchip RK3588 |
| | CPU | 4 × ARM Cortex-A76 + 4 × ARM Cortex-A55 |
| | VPU | Encoding up to 8K@30fps, H.265 / H.264 |
| | ISP | Image processing up to 32MP@30fps |
| **Memory & storage** | DDR | 4 GB |
| | eMMC | 32 GB |
| | Micro SD | Up to 256 GB, write speed > 50 MB/s |
| **Interfaces** | Camera | 3 × MIPI CSI-2 (4 lanes) |
| | USB | 1 × Type-C |
| | Speaker | 2 channels, PDM / I2S |
| | Microphone | 2 channels, PDM / I2S |
| | Wireless | Wi-Fi 6 (AP + STA modes, ≥ 100 Mbps uplink/downlink), Bluetooth 5.3 |
| **Power** | Battery | 10000 mAh, snap-on magnetic battery |
| | Charging port | Type-C with PD fast charging |
| **Electrical** | Typical power consumption | < 10 W |
| | Operating temperature | -20 ~ 60 ℃ |
| **Mechanical** | Cooling | Fan |
| | Ingress protection | IP52 |
| **Buttons & indicators** | Record button | Start / stop recording (with voice prompt) |
| | Volume + / - | Adjust the prompt volume |
| | LED indicator | Shows power and recording status |

### Camera Module

| Item | Value |
|-|-|
| Sensor | OG02B10 |
| Resolution | 1600 × 1300 |
| Frame rate | 30 fps |
| Shutter | Global shutter |
| Output format | RAW color |
| Lens FOV | H160° × V130° |
| Power consumption | < 0.5 W |
| Intrinsics storage | EEPROM |
| Weight | < 30 g |
| Operating temperature | -10 ~ 60 ℃ |
| Synchronization | Internal and external trigger |

## Software Architecture

EgoSense H6 runs **Rockchip Linux**. The software is organized into a driver layer and an application layer:

| Layer | Modules |
|-|-|
| **Application** | Data Storage, Time Sync, Viewer, Tools, HMI |
| **Driver** | Image sensor, SerDes, IMU, audio, communication and storage configuration |
| **Operating system** | Rockchip Linux |

### Companion Software

| Software | Platform | Purpose |
|-|-|-|
| **EGOTool** host software | Windows | Connect to the device, six-channel live preview, recording control, encoding settings, capture metadata entry, device status |
| **Foxglove Studio** | Windows / macOS / Linux | Open and play back `.mcap` recordings, view images and IMU data |

For step-by-step instructions, see the [EgoSense H6 User Manual](/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual).

## Data Format: MCAP

EgoSense H6 recordings use the **MCAP** format. MCAP is an open-source, modular container file format for robotics and autonomous driving, created by Foxglove to record multiple sensor streams — camera images, IMU data and more — packed by timestamp into a single file for playback and analysis.

- Similar in purpose to ROS bags (`.bag` / `.db3`), but with better read/write performance and broader language support (official SDKs for C++ / Python / Rust / Go).
- The default storage format of ROS 2 rosbag2, and natively supported by Foxglove Studio.
- One `.mcap` file holds everything the device saw and sensed during a session, ready for algorithm debugging, data labeling and issue reproduction.

EgoSense H6 recordings contain the following topics:

| Topic | Message type | Description |
|-|-|-|
| `/camera/middle-1/h265`, `/camera/middle-2/h265` | `foxglove.CompressedVideo` | Front stereo cameras (H.265) |
| `/camera/left-1/h265`, `/camera/left-2/h265` | `foxglove.CompressedVideo` | Two left-side cameras (H.265) |
| `/camera/right-1/h265`, `/camera/right-2/h265` | `foxglove.CompressedVideo` | Two right-side cameras (H.265) |
| `/imu` | `foxglove.IMU` | 6-axis IMU data |

Sample recording data is available under [User Manual · Downloads](/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#downloads).

## Customization

SENSING offers customization of the complete EgoSense device, main board and cameras:

- **Camera count**: 2 / 3 / 4 / 5 / 6-camera EgoSense configurations built from mono and stereo cameras.
- **Camera options**: OG02B10, AR0234, ISX031, OV9281 and more, in mono and stereo form factors.
- **Software support**: drivers, applications and ISP tuning services.
- **Combined solutions**: works with UMI grippers, wrist units or a backpack collection system for synchronized head and hand data capture.

Please contact our sales team for customization.

## Contact Us

:::note Contact Information
- **Sales**: [Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **Technical support**: [support@sensing-world.com](mailto:support@sensing-world.com)
- **Phone**: +86-755-28990915
- **Website**: [www.sensing-world.com](https://sensing-world.com/en/)

**Business hours**: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
:::
