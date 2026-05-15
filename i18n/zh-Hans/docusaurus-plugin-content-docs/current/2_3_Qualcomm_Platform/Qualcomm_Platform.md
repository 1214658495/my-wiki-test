---
sidebar_position: 1
title: 高通平台
description: SENSING 为高通 Snapdragon 和 QCS 平台提供的优质摄像头解决方案
---

# 高通平台摄像头解决方案
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/Qualcomm_Platform_Overview.png" alt="Qualcomm_Platform_Overview"
    style={{width: 960, height:'auto'}} />
</div>
<br />
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="row">
  <div className="col col--8">

[SENSING](https://www.sensing-world.com) 是领先的优质摄像头提供商，也是高通摄像头集成专家。我们专注于为高通的 Snapdragon 和 QCS 平台开发创新摄像头解决方案，为移动、机器人和嵌入式应用提供高效的视觉处理。

  </div>
  <div className="col col--4">
    :::note 高通合作伙伴
    高通 Linux、摄像头驱动和高性能 ISP 调优的专业能力
    :::
  </div>
</div>

## 平台概述

高通的 Snapdragon 和 QCS 平台结合多个专业处理器，实现高效能的视觉处理：

<div className="row">
  <div className="col col--6">
    :::info 硬件架构
    - **Hexagon DSP** 配备张量加速器，用于神经网络加速
    - **Adreno GPU** 用于并行处理和计算机视觉任务
    - **Kryo CPU** 内核用于通用计算
    - **Spectra ISP** 用于高级图像信号处理
    - **AI Engine** 用于协调异构计算单元上的 ML 工作负载
    :::
  </div>
  <div className="col col--6">
    :::info 关键优势
    - **能效优化**：专为电池供电和热受限设备优化
    - **一体化解决方案**：摄像头接口、视觉处理器和无线连接集成在单一 SoC 中
    - **AI 性能**：专用神经处理单元，实现高效推理
    - **软件生态系统**：全面的 SDK，包括高通神经处理 SDK 和 FastCV
    :::
  </div>
</div>

## 支持的开发套件

SENSING 摄像头驱动已在以下高通开发平台上验证：

<Tabs>
<TabItem value="rb3-gen2" label="Qcom6490 RB3 Gen2 开发套件" default>

### 高通 Robotics RB3 Gen2 开发者套件
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB3_Gen2/RB3_Gen2_Overview.png" alt="RB3_Gen2_Overview"
    style={{width: 960, height:'auto'}} />
</div>
<br />

RB3 Gen2 由 QCS6490 芯片驱动，提供强大的 AI 处理能力和先进的计算机视觉功能。

| 规格 | 详情 |
|---------------|---------|
| **处理器** | 高通 QCS6490 (源自 Snapdragon 8cx Gen 3) |
| **AI 性能** | 最高 15 TOPS |
| **支持操作系统** | 高通 Linux 1.3 / 1.6 |
| **摄像头接口** | MIPI CSI-2、GMSL2 |

:::note SENSING 全栈服务
摄像头集成、驱动开发和 ISP 调优 - 专注于您的应用，其余的交给我们。
:::

</TabItem>

<TabItem value="rb8-core" label="Qcom9075 RB8 Core Kit">

### 高通 Robotics RB8 Core Kit (IQ-9075 EVK)
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB8/RB8_Overview.png" alt="RB8_Overview"
    style={{width: 960, height:'auto'}} />
</div>
<br />

RB8 Core Kit 由工业级 Dragonwing IQ-9075 处理器驱动，可为高要求的机器人应用提供增强的 AI 性能。

| 规格 | 详情 |
|---------------|---------|
| **处理器** | 高通 Dragonwing IQ-9075 |
| **AI 性能** | 增强的推理能力 |
| **支持操作系统** | 高通 Linux 1.4 |
| **摄像头接口** | MIPI CSI-2、GMSL2 |

:::note SENSING 全栈服务
摄像头集成、驱动开发和 ISP 调优 - 专注于您的应用，其余的交给我们。
:::

</TabItem>
</Tabs>

## 支持的摄像头模组

### 摄像头支持矩阵

| 摄像头模组 | 接口 | RB3 Gen2 (1.3/1.6) | RB8 Core (1.4) |
|---------------|-----------|:------------------:|:--------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ | ✓ |
| SG3-ISX031C-MIPI-Hxxx | MIPI CSI-2 | ✓ | - |
| SG2-IMX662C-MIPI-Hxxx | MIPI CSI-2 | ✓ | - |

### 技术资源

<div className="row">
  <div className="col col--6">
    :::info 开源驱动
    高通平台的所有 SENSING 摄像头驱动均为开源，可在 GitHub 上获取：

    👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)

    **包含：**
    - 摄像头传感器驱动
    - ISP 调优配置
    - 设备树覆盖
    - 构建和集成指南
    :::
  </div>
  <div className="col col--6">
    :::info 开发资源
    - [高通开发者网络](https://www.qualcomm.com/developer?redirect=qdn)
    - [高通神经处理 SDK](https://developer.qualcomm.com/software/qualcomm-neural-processing-sdk)
    :::
  </div>
</div>
