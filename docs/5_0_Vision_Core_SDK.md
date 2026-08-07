---
sidebar_position: 40
title: VisionCore SDK
---

# VisionCore SDK

## Overview

VisionCore SDK brings together the core software components used to build SENSING camera applications on NVIDIA Jetson platforms. Its currently available module is **sgMIX**, a camera control, acquisition, calibration, ISP tuning, firmware, and sensor utility SDK for GMSL camera systems.

## SDK Modules

| Module | Main Role | Typical Use |
|--------|-----------|-------------|
| [sgMIX](/docs/5_2_sgMIX/sgMIX) | Camera control and integration SDK | Configure GMSL cameras, capture frames, tune ISP parameters, read calibration data, and access camera utilities |

## Capability Summary

### sgMIX

sgMIX is a camera control SDK and GUI toolset for NVIDIA Jetson platforms. It is designed for integrating and operating GMSL camera systems with fine-grained control over camera behavior and image output.

Key capabilities include:

- Camera initialization and video stream control
- Image control, including flip, mirror, test pattern, and resolution settings
- Camera intrinsic, stereo intrinsic, extrinsic, serial number, and firmware information access
- ISP parameter control, including brightness, contrast, saturation, sharpness, denoise, exposure, gain, and white balance
- OTA firmware upgrade and network license activation
- IMU data acquisition for S56 and S56C cameras
- Stereo depth API support for S36 cameras
- Distortion correction based on camera intrinsic parameters
- Frame capture, timestamp reading, sensor data frame access, and EBD data reading for supported cameras

sgMIX can be used through the GUI workflow or directly through the C++ API, depending on whether the application needs interactive setup or programmatic integration.

## Typical Workflow

1. **Prepare the Jetson platform**
   Install the required JetPack, build tools, camera drivers, and runtime dependencies for the target device.

2. **Bring up the camera with sgMIX**
   Select the camera model, resolution, EEPROM address, and video device. Open the camera stream and verify that frames are captured correctly.

3. **Read calibration and camera information**
   Use sgMIX to read camera serial numbers, intrinsic parameters, stereo calibration data, firmware versions, and related device information.

4. **Tune image quality when required**
   Use sgMIX ISP controls to adjust exposure, gain, white balance, brightness, contrast, saturation, sharpness, and denoise settings.

5. **Integrate into the application**
   Use captured frames, timestamps, sensor data, IMU data, and corrected images as inputs for perception, navigation, reconstruction, or validation workflows.

## Platform and Camera Context

| Area | Details |
|------|---------|
| Edge platforms | NVIDIA Jetson AGX Orin, NVIDIA Jetson AGX Thor |
| Camera systems | GMSL camera systems supported by the corresponding SDK and driver package |
| Depth camera examples | S36 stereo camera depth workflows |
| Sensor examples | S56 / S56C IMU data acquisition workflows |
| Build environment | CMake, build-essential, v4l-utils, NVIDIA JetPack |

## When to Use Each SDK

| Requirement | Recommended SDK |
|-------------|-----------------|
| Configure and open a GMSL camera | sgMIX |
| Capture frames or read frame timestamps | sgMIX |
| Read camera intrinsic, extrinsic, SN, firmware, or EBD data | sgMIX |
| Tune ISP parameters | sgMIX |
| Perform OTA firmware upgrade | sgMIX |
| Acquire IMU data from S56 / S56C | sgMIX |

## Documentation Entry Points

- [sgMIX Quick Start](/docs/5_2_sgMIX/sgMIX): GUI operation guide, camera setup flow, ISP control, OTA, authorization, and API reference.
