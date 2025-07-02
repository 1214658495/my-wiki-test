---
sidebar_position: 5
title: Camera Intrinsic Parameters
description: Guide for accessing and using GMSL camera intrinsic parameters
---

# Camera Intrinsic Parameters

## Overview

This document provides comprehensive information about camera intrinsic parameters, including how to obtain them, their formats, and applications.

## Intrinsic Parameters Availability

Starting from 2023, all SENSING cameras come with pre-calibrated intrinsic parameters stored in the camera. For cameras produced before 2023, intrinsic parameters were only calibrated upon specific customer request.

### SN Code Identification

You can identify the manufacturing year of the camera through the SN code:

The image below shows a camera with:
- **SN Code**: H190S-E01220525
- **Product Model**: SG3-ISX031C-GMSL2-H190S

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/SN/SN_code.png" alt="SN Code Example" style={{maxWidth: '300px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>

<div style={{textAlign: 'center',display: 'flex', justifyContent: 'center'}}>

| Prefix | Manufacturing Year | Intrinsic Parameters Status |
|--------|-------------------|----------------------------|
| Dxxxxxx | 2021 | Not calibrated by default |
| Exxxxxx | 2022 | Not calibrated by default |
| Fxxxxxx | 2023 | Calibrated by default |
| Gxxxxxx | 2024 | Calibrated by default |
| Hxxxxxx | 2025 | Calibrated by default |

</div>

### **Q1**: How to Access Camera Intrinsic Parameters

**Method 1**: Following Model-Specific Instructions

Below are examples of models and their corresponding instruction documents for obtaining intrinsic parameters:

| # | Model Examples | Instruction Document | Notes |
|---|---------------|----------------------|-------|
| 1 | SG2-AR0233C-<span style={{color: 'red'}}>5200</span>-G2A-Hxxx <br/> SG2-IMX390C-<span style={{color: 'red'}}>5200</span>-GMSL2-Hxxx <br/> SG5-IMX490C-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx <br/> SG8-AR0820C-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx <br/> SG8-OX08BC-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx | [Intrinsic Parameter Reading Instructions for GW5200 & GW5300 ISP Models](https://autosensee.feishu.cn/file/VP5xbaCuIofT2exvcV0cFoZZnid) | Models with <span style={{color: 'red'}}>5200</span> or <span style={{color: 'red'}}>5300</span> in the model name |
| 2 | SG2-AR0231C-<span style={{color: 'red'}}>0202</span>-GMSL-Hxxx | [Intrinsic Parameter Reading Instructions for AP0101 & AP0202 ISP Models](https://autosensee.feishu.cn/file/PTSHbJmdqobTULxRsWtcn9flnNf) | Models with <span style={{color: 'red'}}>0101</span> or <span style={{color: 'red'}}>0202</span> in the model name |
| 3 | SG3S-<span style={{color: 'red'}}>ISX031</span>-GMSL2F-Hxxx | [ISX031(IMX623) GMSL2 Module Intrinsic Parameter Reading Instructions](https://autosensee.feishu.cn/file/WnZ2bnD4dowVEYxLETjcnLo9nyg)  | Models with <span style={{color: 'red'}}>ISX031</span> or <span style={{color: 'red'}}>IMX623</span> in the model name |
| 4 | SG2-AR0233C-GMSL2 (raw camera) <br/> SG8-IMX728C-G2G-Hxxx (raw) <br/> SG3S-OX03JC-G2F-Hxxx <br/> S56 binocular | [Intrinsic Parameter Reading Instructions for GMSL2 and FPDLINK III Series Modules without ISP](https://autosensee.feishu.cn/file/H1JXbplf5os6nZxTBcnc3N46nBb) | Models with GMSL2 or FPDLINK in the name but without an ISP model number |
| 5 | SG1-<span style={{color: 'red'}}>OX01FC</span>-GMSL-Hxxx | [Intrinsic Parameter Reading Instructions for OX01F10 SENSOR Models](https://example.com/ox01f10_instructions.pdf) | Models with <span style={{color: 'red'}}>OX01FC</span> in the model name |



#### Data Format

- For standard cameras: Refer to "Camera OTP Data Format Definition_pub.xlsx" (Password: SensingOTP2024)
- For binocular cameras: Refer to "Binocular Camera OTP Data Format Definition_pub.xlsx" (Password: SensingOTP2024)

**Method 2**: Using SensingTech Online Service Platform

You can download intrinsic parameters individually through the SensingTech Customer Self-service Information Query Platform. Note that the SN code of the camera is required.

## Camera Models for Intrinsic Parameters

There are two types of camera models for intrinsic parameters:
1. **Pinhole Model**: Used for lenses with angles up to 120 degrees (including H120)
2. **Fisheye Model**: Used for lenses with angles up to 190 degrees

### Pinhole Model

![Pinhole Model]

By default, parameters K1-K6 are used for distortion correction.

## Reading Intrinsic Parameters on Third-Party Platforms

If your camera has calibrated intrinsic parameters, you can access them through the following methods:

### Method 1: Using I2C Tools

You can use the platform's I2C tools to read intrinsic parameters according to the provided instructions.

![I2C Tools]

**Important Note**: When multiple modules are connected to a domain controller simultaneously, the default I2C addresses must be remapped to unique addresses to ensure reading from the correct module.

### Method 2: Using Platform-Provided Interfaces

Some platforms may have already implemented interfaces based on our documentation. Please consult with your platform provider for specific usage methods.

## Converting Intrinsic Parameters

### String Conversion Formula for Parameter Values

![String Conversion Formula]

![String Conversion Example]

### Reading and Converting SN Codes

The SN code is stored as part of the OTP data in the module, following the same format as intrinsic parameters. Reference the "Camera OTP Data Format Definition_pub.xlsx" (Password: SensingOTP2024).

![SN Conversion Formula]

![SN Conversion Example]

## Using Intrinsic Parameters

Intrinsic parameters can be used with OpenCV. Implementation code must be developed by the customer.

![OpenCV Usage]

Reference article: "OpenCV Camera Intrinsic Calibration and Usage"

## Reading Multiple Camera Parameters

### For Modules with GW5200/GW5300 ISP

1. **For a single camera connection:**
   - In a Linux environment, scan the EEPROM I2C address (0x51) using `i2cdetect -r -y`
   - Read the register values using: `sudo i2ctransfer -y -f 1 w2@0x51 0x00 0x01 r1`

2. **For multiple cameras of the same model:**
   - Remap the EEPROM address 0x51 (0xA2) to different addresses by modifying registers 0x42 and 0x43 of 9295/96717F
   - Write the original address 0x51 (0xA2) to register 0x43
   - Write the destination addresses (e.g., 0x54/0xA8, 0x55/0xAA) to register 0x42 as defined in the device tree file

![Address Remapping Example]

### For ISX031 Cameras

Follow the same method as above:
- Write the original address 0x34 (0x1A) to register 0x43
- Write destination addresses (e.g., 0x54/0xA8, 0x55/0xAA) to register 0x42 as defined in the device tree file

![ISX031 Example]

## Additional Technical Information

### Fisheye Camera Model

![Fisheye Model]

### Converting Focal Length to Floating Point

Use the following code for conversion:
```c
unsigned char ppm[] = { 0xEC, 0x51, 0x88, 0x40 };
float* m = (float*)ppm;
printf("%f\r\n", *m);
```

### Intrinsic Parameters Precision

- **RMS Differences**: RMS calculation formulas may vary between different batches of cameras
- **Calibration Error Range**:
  - COD precision error: AA lenses have standards, threaded lenses do not
  - Equivalent focal length error: Controlled according to lens design tolerance
  - Reprojection error (RMS): Average reprojection error is 0.25

### Calibration Standards and Accuracy Assessment

The evaluation standards include reprojection error, stability of intrinsic parameters and distortion parameters, calibration accuracy at different viewing angles, distortion correction effects, and testing in actual applications.

### Storage Addresses for Different Models

Pinhole and fisheye model parameters are stored at different addresses:
- **Pinhole mode**: Addresses 0x85-0xC4 store K1, K2, P1, P2, K3, K4, K5, K6 parameters (FOV < 120°)
- **Fisheye mode**: Addresses 0xC5-0xE4 store K1, K2, K3, K4 parameters (FOV > 120°)

![Storage Addresses]

