---
sidebar_position: 20
title: 嵌入式视觉
description: 嵌入式视觉平台和解决方案的综合指南
---

# 嵌入式视觉技术

:::note
本指南概述用于构建智能视觉应用的嵌入式视觉平台、开发工具和实现策略。
:::

## 简介

嵌入式视觉系统将图像采集与处理能力直接集成到设备中，使自动驾驶、工业自动化等场景具备实时视觉智能。本章节覆盖主要平台、开发方法和优化技术，帮助构建嵌入式视觉解决方案。

## 支持的平台

<div className="platform-grid">

### <span style={{color: 'var(--ifm-link-color)'}}>NVIDIA Jetson</span>

面向自主机器和嵌入式系统的边缘 AI 计算平台。

| 特性 | 规格 |
|---------|---------------|
| GPU | NVIDIA Ampere/Volta 架构 |
| AI 性能 | 最高 275 TOPS |
| 功耗效率 | 10-30W 功耗范围 |

**[了解更多 Jetson 开发 →](/zh-Hans/docs/2_1_NVIDIA_Jetson/NVIDIA_Jetson)**

---

### <span style={{color: 'var(--ifm-link-color)'}}>NVIDIA DRIVE AGX Orin</span>

具备先进 AI 能力、面向自动驾驶开发的可扩展平台。

| 特性 | 规格 |
|---------|---------------|
| 性能 | 最高 254 TOPS |
| 处理器 | 12 核 ARM Cortex-A78AE CPU |
| 安全 | ASIL-D 功能安全 |

**[探索 DRIVE AGX Orin →](/zh-Hans/docs/2_2_NVIDIA_Drive_AGX_Orin/NVIDIA_Drive_AGX_Orin)**

---

### <span style={{color: 'var(--ifm-link-color)'}}>Qualcomm 平台</span>

基于 Qualcomm 异构计算架构的移动优化视觉处理解决方案。

| 特性 | 规格 |
|---------|---------------|
| AI 引擎 | Hexagon DSP + Tensor 加速器 |
| 视觉处理 | Adreno GPU + ISP |
| 集成度 | 完整移动 SoC 方案 |

**[发现 Qualcomm 解决方案 →](/zh-Hans/docs/2_3_Qualcomm_Platform/Qualcomm_Platform)**

</div>

## 实现策略

- **硬件加速**：利用 VPU、GPU 和 AI 加速器等专用视觉处理单元
- **软件优化**：采用高效算法实现和内存管理技术
- **流水线设计**：构建低延迟的采集到推理处理链路
- **电源管理**：在处理能力与电池供电设备的能耗约束之间取得平衡

## 开发工作流

1. **平台选择**：根据性能、功耗和功能需求选择硬件
2. **摄像头集成**：配置 MIPI CSI-2、USB 等合适的摄像头接口
3. **视觉框架设置**：接入 OpenCV、CUDA Vision 或平台专用视觉库
4. **算法部署**：针对目标硬件优化神经网络和视觉算法
5. **测试与优化**：围绕延迟、吞吐和功耗进行基准测试与调优

## 常见应用

- 自动驾驶与高级驾驶辅助系统（ADAS）
- 工业自动化与视觉检测
- 智慧城市基础设施与交通监控
- 机器人与无人机导航系统
- 安防与监控
- 消费电子与增强现实

---

## 平台对比

<div className="table-responsive">

| 平台 | AI 性能 | 功耗效率 | 集成难度 | 生态 |
|----------|---------------|-----------------|-----------------|-----------|
| NVIDIA Jetson | ★★★★★ | ★★★★☆ | ★★★★★ | ★★★★★ |
| NVIDIA DRIVE AGX | ★★★★★ | ★★★☆☆ | ★★★★☆ | ★★★★★ |
| Qualcomm | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★☆ |

</div>