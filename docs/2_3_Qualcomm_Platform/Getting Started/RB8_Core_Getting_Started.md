---
sidebar_position: 2
title: RB8 Core Getting Started
---

# Qualcomm Robotics RB8 Core Kit (IQ-9075 EVK)

## Overview

The Qualcomm Robotics RB8 Core Kit, powered by the industrial-grade Dragonwing IQ-9075 processor, delivers enhanced AI performance for demanding robotics applications. SENSING provides validated camera drivers for this platform, enabling seamless integration of industrial-grade camera modules.

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB8/RB8_Overview.png" alt="RB8_Overview"
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br />

## Getting Started

### Platform Specifications

<div style={{display: 'flex', justifyContent: 'center'}}>

| Parameter         | Value                   |
|-------------------|-------------------------|
| Processor         | Qualcomm Dragonwing IQ-9075 |
| AI Performance    | Enhanced inference capabilities |
| Supported OS      | Qualcomm Linux 1.4 |
| Camera Interfaces  | MIPI CSI-2, GMSL2 |

</div>

### Supported Camera Modules

| Camera Module | Interface | Qualcomm Linux 1.4 |
|---------------|-----------|:------------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ |

### Hardware Connection

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB8/RB8_Hardware.png" alt="RB8_Hardware"
    style={{maxWidth: '100%', height:'auto'}} />
</div>

<!-- :::note Hardware Setup
For detailed hardware connection instructions, please refer to the official product page:

👉 [RB8 Core Hardware Documentation](https://www.sensing-world.com/h-pd-220.html?recommendFromPid=0&fromMid=3795)
::: -->

### Driver Installation

:::info Open Source Drivers
All SENSING camera drivers for RB8 Core Kit are open source and available on GitHub:

👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)
:::

#### Software Preparation

1. **Select Driver Package**

   Choose the appropriate driver package based on your Qualcomm Linux version and camera module:

   | Qualcomm Linux Version | Camera Module | Download Link |
   |------------------------|---------------|---------------|
   | 1.4 | SG3S-ISX031C-GMSL2F-Hxxx | [Download](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom9075%20RB8%20Core%20kit/QualcommLinux-1.4) |

2. **Build and Deploy**

   Follow the build instructions provided in the driver repository to compile and deploy the camera drivers to your RB8 Core device.

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
