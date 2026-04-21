---
sidebar_position: 1
title: RB3 Gen2 Getting Started
---

# Qualcomm Robotics RB3 Gen2 Developer Kit

## Overview

The Qualcomm Robotics RB3 Gen2 Developer Kit, powered by the QCS6490 chipset, offers robust AI processing capabilities and advanced computer vision features. SENSING provides validated camera drivers for this platform, enabling seamless integration of industrial-grade camera modules.

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB3_Gen2/RB3_Gen2_Overview.png" alt="RB3_Gen2_Overview"
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br />

## Getting Started

### Platform Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Processor         | Qualcomm QCS6490 (Snapdragon 8cx Gen 3 derived) |
| AI Performance    | Up to 15 TOPS |
| Supported OS      | Qualcomm Linux 1.3 / 1.6 |
| Camera Interfaces | MIPI CSI-2, GMSL2 |

</div>

### Supported Camera Modules

| Camera Module | Interface | Qualcomm Linux 1.3 | Qualcomm Linux 1.6 |
|---------------|-----------|:------------------:|:------------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ | ✓ |
| SG3-ISX031C-MIPI-Hxxx | MIPI CSI-2 | ✓ | ✓ |
| SG2-IMX662C-MIPI-Hxxx | MIPI CSI-2 | ✓ | ✓ |

### Hardware Connection

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB3_Gen2/RB3_Gen2_Hardware.png" alt="RB3_Gen2_Hardware"
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<!-- :::note Hardware Setup
For detailed hardware connection instructions, please refer to the official product page:

👉 [RB3 Gen2 Hardware Documentation](https://www.sensing-world.com/h-pd-220.html?recommendFromPid=0&fromMid=3795)
::: -->

### Driver Installation

:::info Open Source Drivers
All SENSING camera drivers for RB3 Gen2 are open source and available on GitHub:

👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)
:::

#### Software Preparation

1. **Select Driver Package**

   Choose the appropriate driver package based on your Qualcomm Linux version and camera module:

   | Qualcomm Linux Version | Camera Module | Download Link |
   |------------------------|---------------|---------------|
   | 1.3 | SG3S-ISX031C-GMSL2F-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.3) |
   | 1.3 | SG3-ISX031C-MIPI-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.3) |
   | 1.3 | SG2-IMX662C-MIPI-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_IMX662_IMX662_QualcommLinux_1.3) |
   | 1.6 | SG3S-ISX031C-GMSL2F-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.6) |
   | 1.6 | SG3-ISX031C-MIPI-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.6) |
   | 1.6 | SG2-IMX662C-MIPI-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_IMX662_IMX662_QualcommLinux_1.6) |

2. **Build and Deploy**

   Follow the build instructions provided in the driver repository to compile and deploy the camera drivers to your RB3 Gen2 device.

### Technical Resources

<div className="row">
  <div className="col col--6">
    :::info Qualcomm Resources
    - [Qualcomm Developer Network](https://www.qualcomm.com/developer?redirect=qdn)
    - [Qualcomm Neural Processing SDK](https://developer.qualcomm.com/software/qualcomm-neural-processing-sdk)
    :::
  </div>
  <!-- <div className="col col--6">
    :::info SENSING Support
    For technical consultation and custom solutions, please contact:

    - Email: [support@sensing-world.com](mailto:support@sensing-world.com)
    - Phone: 0755-28990915
    :::
  </div> -->
</div>

<!-- :::tip SENSING Full-Stack Services
SENSING provides comprehensive camera integration services including camera integration, driver development, and ISP tuning — focus on your application, we handle the rest.
::: -->
