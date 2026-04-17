---
sidebar_position: 1
title: Qualcomm Platform
description: SENSING high-quality camera solutions for Qualcomm Snapdragon and QCS platforms
---

# Qualcomm Platform Camera Solutions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="row">
  <div className="col col--8">

[SENSING](https://www.sensing-world.com) is a leading provider of high-quality cameras and an expert in Qualcomm camera integration. We specialize in developing innovative camera solutions for Qualcomm's Snapdragon and QCS platforms, providing highly efficient vision processing for mobile, robotics, and embedded applications.

  </div>
  <div className="col col--4">
    :::note Qualcomm Partnership
    Expertise in Qualcomm Linux, camera drivers, and high-performance ISP tuning
    :::
  </div>
</div>

## Platform Overview

Qualcomm's Snapdragon and QCS platforms combine multiple specialized processors for power-efficient vision processing:

<div className="row">
  <div className="col col--6">
    :::info Hardware Architecture
    - **Hexagon DSP** with Tensor Accelerator for neural network acceleration
    - **Adreno GPU** for parallel processing and computer vision tasks
    - **Kryo CPU** cores for general-purpose computing
    - **Spectra ISP** for advanced image signal processing
    - **AI Engine** for coordinating ML workloads across heterogeneous compute units
    :::
  </div>
  <div className="col col--6">
    :::info Key Advantages
    - **Energy Efficiency**: Optimized for battery-powered and thermally constrained devices
    - **Integrated Solution**: Camera interfaces, vision processors, and wireless connectivity in a single SoC
    - **AI Performance**: Dedicated neural processing units for efficient inferencing
    - **Software Ecosystem**: Comprehensive SDKs including Qualcomm Neural Processing SDK and FastCV
    :::
  </div>
</div>

## Supported Development Kits

SENSING camera drivers are validated on the following Qualcomm development platforms:

<Tabs>
<TabItem value="rb3-gen2" label="Qcom6490 RB3 Gen2 Devkit" default>

### Qualcomm Robotics RB3 Gen2 Developer Kit

Powered by the QCS6490 chipset, the RB3 Gen2 offers robust AI processing capabilities and advanced computer vision features.

| Specification | Details |
|---------------|---------|
| **Processor** | Qualcomm QCS6490 (Snapdragon 8cx Gen 3 derived) |
| **AI Performance** | Up to 15 TOPS |
| **Supported OS** | Qualcomm Linux 1.3 / 1.6 |
| **Camera Interfaces** | MIPI CSI-2, GMSL2 |

:::note SENSING Full-Stack Services
Camera integration, driver development, and ISP tuning — focus on your application, we handle the rest.
:::

</TabItem>

<TabItem value="rb8-core" label="Qcom9075 RB8 Core Kit">

### Qualcomm Robotics RB8 Core Kit (IQ-9075 EVK)

Powered by the industrial-grade Dragonwing IQ-9075 processor, the RB8 Core Kit delivers enhanced AI performance for demanding robotics applications.

| Specification | Details |
|---------------|---------|
| **Processor** | Qualcomm Dragonwing IQ-9075 |
| **AI Performance** | Enhanced inference capabilities |
| **Supported OS** | Qualcomm Linux 1.4 |
| **Camera Interfaces** | MIPI CSI-2, GMSL2 |

:::note SENSING Full-Stack Services
Camera integration, driver development, and ISP tuning — focus on your application, we handle the rest.
:::

</TabItem>
</Tabs>

## Supported Camera Modules

### Camera Support Matrix

| Camera Module | Interface | RB3 Gen2 (1.3/1.6) | RB8 Core (1.4) |
|---------------|-----------|:------------------:|:--------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ | ✓ |
| SG3-ISX031C-MIPI-Hxxx | MIPI CSI-2 | ✓ | - |
| SG2-IMX662C-MIPI-Hxxx | MIPI CSI-2 | ✓ | - |

### Technical Resources

<div className="row">
  <div className="col col--6">
    :::info Open Source Drivers
    All SENSING camera drivers for Qualcomm platforms are open source and available on GitHub:

    👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)

    **Includes:**
    - Camera sensor drivers
    - ISP tuning configurations
    - Device tree overlays
    - Build and integration guides
    :::
  </div>
  <div className="col col--6">
    :::info Development Resources
    - [Qualcomm Neural Processing SDK](https://developer.qualcomm.com/software/qualcomm-neural-processing-sdk)
    - [Qualcomm Computer Vision SDK (FastCV)](https://developer.qualcomm.com/software/fastcv-sdk)
    - [Qualcomm AI Engine Direct](https://developer.qualcomm.com/blog/qualcomm-ai-engine-direct-heterogeneous-compute-ai)
    - [Qualcomm Developer Network](https://developer.qualcomm.com/)
    :::
  </div>
</div>
