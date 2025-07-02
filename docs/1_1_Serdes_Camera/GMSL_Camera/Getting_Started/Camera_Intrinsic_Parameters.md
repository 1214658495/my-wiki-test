---
sidebar_position: 5
title: Camera Intrinsic Parameters
description: Guide for accessing and using GMSL camera intrinsic parameters
---

# Camera Intrinsic Parameters

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
| 5 | SG1-<span style={{color: 'red'}}>OX01FC</span>-GMSL-Hxxx | [Intrinsic Parameter Reading Instructions for OX01F10 SENSOR Models](https://autosensee.feishu.cn/file/DCGXbjk1fowY0cxwstUcT8NjnWd) | Models with <span style={{color: 'red'}}>OX01FC</span> in the model name |


**Data Format**
- For standard cameras: Refer to [Camera OTP Data Format Definition_pub](https://autosensee.feishu.cn/file/XhCmbxWsWox4Pjx7joTcIY2rnrb) (Password: SensingOTP2024)
- For binocular cameras: Refer to [Depth Camera OTP Data Format Definition_pub](https://autosensee.feishu.cn/file/FUn3buZdqoa1urxQqRAc5uX7nlh) (Password: SensingOTP2024)

**Method 2**: Using SensingTech Online Service Platform

You can download intrinsic parameters individually through the SensingTech Customer Self-service Information Query Platform. Note that the SN code of the camera is required.
- [Getting Camera Information](../Getting_Camera_Information.md)

### **Q2**: What are the camera models for intrinsic parameters?

There are two types of camera models for intrinsic parameters:
1. **Pinhole Model**: Used for lenses with angles up to 120 degrees (including H120)
2. **Fisheye Model**: Used for lenses with angles up to 190 degrees

### **Q3**: What is the Pinhole Model?

The pinhole camera model with distortion correction can be represented by the following equation:

```
[x']   [x(1 + k₁r² + k₂r⁴ + k₃r⁶)/(1 + k₄r² + k₅r⁴ + k₆r⁶) + 2p₁xy + p₂(r² + 2x²)]
[y'] = [y(1 + k₁r² + k₂r⁴ + k₃r⁶)/(1 + k₄r² + k₅r⁴ + k₆r⁶) + p₁(r² + 2y²) + 2p₂xy]
```

Where:
- (x, y) are the normalized image coordinates
- (x', y') are the distorted image coordinates
- r² = x² + y² is the squared radius
- k₁, k₂, k₃, k₄, k₅, k₆ are the radial distortion coefficients
- p₁, p₂ are the tangential distortion coefficients

By default, parameters K1-K6 are used for distortion correction.

### **Q4**: How to Read Intrinsic Parameters on Third-Party Platforms?

If your camera has calibrated intrinsic parameters, you can access them through the following methods:

**Method 1**: Using I2C Tools

You can use the platform's I2C tools to read intrinsic parameters according to the provided instructions.

**I2C Reading Process:**

1. Identify the correct I2C bus and device address for your camera (typically 0x51 for EEPROM)
2. Use I2C commands to read specific register addresses containing intrinsic parameters
3. For Linux systems:
   - Use `i2cdetect -r -y <bus_number>` to scan for available devices
   - Use `i2ctransfer -y -f <bus_number> w2@<device_address> <reg_high> <reg_low> r<count>` to read data

**Important Note**: When multiple modules are connected to a domain controller simultaneously, the default I2C addresses must be remapped to unique addresses to ensure reading from the correct module.

**Method 2**: Using Platform-Provided Interfaces

Some platforms may have already implemented interfaces based on our documentation. Please consult with your platform provider for specific usage methods.

### **Q5**: How to Convert Intrinsic Parameters?

**Example of Intrinsic Parameter Storage in Registers:**

The following table shows an example of how the focal length parameter (fx) is stored in registers:

| Register | Value | Description | Type and Unit | Flag |
|----------|-------|-------------|---------------|------|
| 0x0065   | 0x59  |             |               |  |
| 0x0066   | 0xAD  |             |               |  |
| 0x0067   | 0xFE  |             |             |  |
| 0x0068   | 0xD6  | 1426.1570701402 | value：fx <br/> type: double <br/>unit: pixels | YES_CRC32_4 |
| 0x0069   | 0xA0  |             |   |  |
| 0x006A   | 0x48  |             |               |  |
| 0x006B   | 0x96  |             |               |  |
| 0x006C   | 0x40  |             |               |  |

These register values can be converted to the actual focal length parameter (fx = 1426.1570701402 pixels) using the string conversion formula described below.

**String Conversion Formula:**
```c
#include "stdio.h"

int main(void)
{
    unsigned char pMem[] = {0x59, 0xad, 0xfe, 0xd6, 0xa0, 0x48, 0x96, 0x40};
    double *p = (double*)pMem;
    printf("%.10f\r\n", *p);

    return 0;
}
```

<!-- ### String Conversion Formula for Parameter Values

The intrinsic parameter values are stored in hexadecimal format and need to be converted to decimal values. The conversion follows IEEE-754 floating-point standard:

1. Read the 4 bytes of data in hexadecimal format (e.g., 0xEC, 0x51, 0x88, 0x40)
2. Combine these bytes in little-endian order: 0x4088_51EC
3. Convert this hex value to a floating-point number according to IEEE-754 standard

**Example of String Conversion:**

For bytes 0xEC, 0x51, 0x88, 0x40:
1. Combined in little-endian: 0x4088_51EC
2. IEEE-754 conversion: 4.26 (focal length in mm) -->

### **Q6**: How to Read and Convert SN Codes?

The SN code is stored as part of the OTP data in the module, following the same format as intrinsic parameters. Reference the [Camera OTP Data Format Definition_pub](https://autosensee.feishu.cn/file/XhCmbxWsWox4Pjx7joTcIY2rnrb) (Password: SensingOTP2024).

**SN Code Conversion Process:**

1. Read the hexadecimal values from the SN code registers (addresses 0x0120-0x0133)
2. Convert each hexadecimal value to its ASCII character representation
3. Combine the characters to form the complete SN code
4. Stop at the first 0xFF value, which indicates the end of the SN string

**SN Code Conversion Example:**

<div style={{textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto'}}>
    <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
            <tr>
                <th>Register</th>
                <th>Address</th>
                <th>Value</th>
                <th>Ref No.</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowSpan="33">SN</td>
                <td>0x0120</td>
                <td>0x48</td>
                <td rowSpan="33">H60S-D11200036</td>
                <td rowSpan="33">Model code contains 32 bytes; unused positions are filled with 0xFF</td>
            </tr>
            <tr><td>0x0121</td><td>0x36</td></tr>
            <tr><td>0x0122</td><td>0x30</td></tr>
            <tr><td>0x0123</td><td>0x53</td></tr>
            <tr><td>0x0124</td><td>0x2D</td></tr>
            <tr><td>0x0125</td><td>0x44</td></tr>
            <tr><td>0x0126</td><td>0x31</td></tr>
            <tr><td>0x0127</td><td>0x31</td></tr>
            <tr><td>0x0128</td><td>0x32</td></tr>
            <tr><td>0x0129</td><td>0x30</td></tr>
            <tr><td>0x012A</td><td>0x30</td></tr>
            <tr><td>0x012B</td><td>0x30</td></tr>
            <tr><td>0x012C</td><td>0x33</td></tr>
            <tr><td>0x012D</td><td>0x36</td></tr>
            <tr><td>0x012E</td><td>0xFF</td></tr>
            <tr><td>0x012F</td><td>0xFF</td></tr>
            <tr><td>0x0130</td><td>0xFF</td></tr>
            <tr><td>0x0131</td><td>0xFF</td></tr>
            <tr><td>0x0132</td><td>0xFF</td></tr>
            <tr><td>0x0133</td><td>0xFF</td></tr>
            <tr><td>0x0134</td><td>0xFF</td></tr>
            <tr><td>0x0135</td><td>0xFF</td></tr>
            <tr><td>0x0136</td><td>0xFF</td></tr>
            <tr><td>0x0137</td><td>0xFF</td></tr>
            <tr><td>0x0138</td><td>0xFF</td></tr>
            <tr><td>0x0139</td><td>0xFF</td></tr>
            <tr><td>0x013A</td><td>0xFF</td></tr>
            <tr><td>0x013B</td><td>0xFF</td></tr>
            <tr><td>0x013C</td><td>0xFF</td></tr>
            <tr><td>0x013D</td><td>0xFF</td></tr>
            <tr><td>0x013E</td><td>0xFF</td></tr>
            <tr><td>0x013F</td><td>0xFF</td></tr>
            <tr><td>0x0140</td><td>0xFF</td></tr>
        </tbody>
    </table>
</div>

**String Conversion Formula:**

```c
#include <stdio.h>

int main() {
    unsigned char pMem[] = {0x48, 0x36, 0x30, 0x53, 0x2d, 0x44, 0x31, 0x31, 0x32, 0x30, 0x30, 0x33, 0x36};

    int arrayLength = sizeof(pMem) / sizeof(pMem[0]);

    char result[arrayLength + 1];

    for (int i = 0; i < arrayLength; i++) {
        result[i] = pMem[i];
    }
    result[arrayLength] = '\0';

    printf("SN: %s\n", result);

    return 0;
}
```

### **Q7**: How to use intrinsic parameters?

Intrinsic parameters can be used with OpenCV. Implementation code must be developed by the customer.

Reference article: [OpenCV Camera Intrinsic Calibration and Usage](https://blog.csdn.net/qq_38429958/article/details/124125912)"

### **Q8**: How to Read Parameters from Multiple Cameras?

**For Modules with GW5200/GW5300 ISP**

1. **For a single camera connection:**
   - In a Linux environment, scan the EEPROM I2C address (0x51) using `i2cdetect -r -y`
   - Read the register values using: `sudo i2ctransfer -y -f 1 w2@0x51 0x00 0x01 r1`

2. **For multiple cameras of the same model:**
   - Remap the EEPROM address 0x51 (0xA2) to different addresses by modifying registers 0x42 and 0x43 of 9295/96717F
   - Write the original address 0x51 (0xA2) to register 0x43
   - Write the destination addresses (e.g., 0x54/0xA8, 0x55/0xAA) to register 0x42 as defined in the device tree file

**Address Remapping Process Diagram:**
1. Original Setup: All cameras initially have the same I2C address (0x51)
2. Configuration: Write to registers 0x42 and 0x43 of MAX9295/MAX96717F
3. Result: Each camera now has a unique address (e.g., 0x54, 0x55, etc.)
4. Reading: Use the new unique addresses to read data from each camera individually

**For ISX031 Cameras**

Follow the same method as above:
- Write the original address 0x34 (0x1A) to register 0x43
- Write destination addresses (e.g., 0x54/0xA8, 0x55/0xAA) to register 0x42 as defined in the device tree file

<!-- ## Additional Technical Information -->

### **Q9**: What is the fisheye camera model?

The fisheye camera model can be represented by the following equation:

```
r(θ) = k₁θ + k₂θ³ + k₃θ⁵ + k₄θ⁷
```

Where:
- θ is the angle between the incoming light ray and the optical axis
- r is the distance from the optical center on the image plane
- k₁, k₂, k₃, k₄ are the fisheye distortion coefficients

This model is specifically designed for wide-angle lenses with fields of view exceeding 120 degrees.

### **Q10**: How to Convert Focal Length to Floating Point?

| Address  | Parameter    | Hex Value | Decoded Value / Description | Status   |
| :------- | :----------- | :-------- | :-------------------------- | :------- |
| `0x0021` |   | `0xEC`    |                         | YES_CRC32_4 |
| `0x0022` |  Focal Length | `0x51`    | 4.26 Focal Length       | YES_CRC32_4 |
| `0x0023` |              | `0x88`    |                             | YES_CRC32_4 |
| `0x0024` |              | `0x40`    |                             | YES_CRC32_4 |

Use the following code for conversion:
```c
unsigned char ppm[] = { 0xEC, 0x51, 0x88, 0x40 };
float* m = (float*)ppm;
printf("%f\r\n", *m);
```

### **Q11**: What is the precision of intrinsic parameters?

- **RMS Differences**: RMS calculation formulas may vary between different batches of cameras
- **Calibration Error Range**:
  - COD precision error: AA lenses have standards, threaded lenses do not
  - Equivalent focal length error: Controlled according to lens design tolerance
  - Reprojection error (RMS): Average reprojection error is 0.25

### **Q12**: What are the calibration standards and how is accuracy assessed?

The evaluation standards include reprojection error, stability of intrinsic parameters and distortion parameters, calibration accuracy at different viewing angles, distortion correction effects, and testing in actual applications.

### **Q13**: What are the storage addresses for different models?

Pinhole and fisheye model parameters are stored at different addresses:
- **Pinhole mode**: Addresses 0x85-0xC4 store K1, K2, P1, P2, K3, K4, K5, K6 parameters (FOV < 120°)
- **Fisheye mode**: Addresses 0xC5-0xE4 store K1, K2, K3, K4 parameters (FOV > 120°)

**Storage Addresses Table:**

| Parameter Type | Model Type | Address Range | Parameters |
|----------------|------------|---------------|------------|
| Intrinsic Matrix | Both | 0x45-0x54 | Fx, Fy, Cx, Cy |
| Distortion | Pinhole | 0x85-0xC4 | K1, K2, P1, P2, K3, K4, K5, K6 |
| Distortion | Fisheye | 0xC5-0xE4 | K1, K2, K3, K4 |
| SN Code | Both | 0x0120-0x0133 | ASCII characters |

