---
sidebar_position: 1
title: UMI 定制化摄像头
description: 森云智能专为 UMI 手部采集设备（夹爪 Gripper 与手环 Wrist）优化的单目摄像头，提供 ISX031、AR0145、AR0234 三种方案
keywords: [UMI, 夹爪, Gripper, 手环, Wrist, 单目摄像头, ISX031, AR0145, AR0234, MIPI, 数据采集, 具身智能]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/UMI-Camera';
export const MONO = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Mono-Camera';

# UMI 定制化摄像头

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 24}}>
  <img src={`${OSS}/img/umi_camera_module.png`} alt="UMI 定制单目摄像头" style={{width: 200}} />
  <img src={`${OSS}/img/umi_gripper.png`} alt="UMI 夹爪" style={{width: 200}} />
  <img src={`${OSS}/img/umi_wrist.png`} alt="UMI 手环" style={{width: 180}} />
</div>

## 概述

**UMI**（Universal Manipulation Interface）是一类手持式数据采集设备：操作者手持 **夹爪（Gripper）** 或佩戴 **手环（Wrist）** 完成任务，设备上的摄像头以手部视角记录整个操作过程，采集的数据用于训练机器人操作策略。

森云智能 UMI 定制化摄像头是专为夹爪与手环两种设备形态深度优化的单目摄像头，完美契合 UMI 设备的结构与通信协议，并可与 [EgoSense H6](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6) 等 Ego 头戴设备配合，实现头部与手部数据的同步采集。

## 产品特点

- **适配 UMI 设备**：针对夹爪与手环两种形态优化。
- **超广角视场**：水平 FOV 160° ~ 200°，近距离下也能同时拍到夹爪指尖与被操作物体。
- **小尺寸方案**：AR0145 摄像头（SM1N8ASC）仅 16 × 16 × 16.5 mm，适合空间受限的手环设备。
- **外同步触发**：所有型号均支持硬件帧同步（FSYNC）。
- **MIPI CSI-2 + FPC**，功耗 < 0.5 W，重量 15 g。
- **深度定制**：支持接口、结构、排线定制，摄像头分辨率与镜头均可定制。

## 型号选型

| 参数 | SM3S11NS | SM1N8ASC | SM2N2NP |
|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0145 RGB | onsemi AR0234 RGB |
| **曝光方式** | 卷帘曝光 | 全局曝光 | 全局曝光 |
| **分辨率** | 1600 × 1200（可选 1920 × 1536） | 1280 × 800 | 1600 × 1200 |
| **帧率** | 30 fps | 30 fps | 30 fps |
| **输出格式** | YUV422（内置 ISP） | RAW 10bit | RAW 10bit |
| **HDR** | 支持 | 支持 | 支持 |
| **镜头 FOV** | H176° × V140° | H183° × V122° | H160° × V120° |
| **外同步触发** | 支持 | 支持 | 支持 |
| **接口** | MIPI CSI-2，FPC | MIPI CSI-2，FPC | MIPI CSI-2，FPC |
| **功耗** | < 0.5 W | < 0.5 W | < 0.5 W |
| **重量** | 15 g | 15 g | 15 g |
| **尺寸** | 28.4 × 17.8 × 19.5 mm | 16 × 16 × 16.5 mm | 28.4 × 17.8 × 17.7 mm |

:::tip 选型建议
- **SM1N8ASC（AR0145）**：全局曝光，水平视场角最大（183°），体积最小，适合手环设备。
- **SM2N2NP（AR0234）**：全局曝光，1600 × 1200，适合需要更高分辨率记录快速手部动作的场景。
- **SM3S11NS（ISX031）**：内置 ISP，直接输出 YUV 图像，适合没有 ISP 调试资源的平台。
:::

## 详细参数

### 镜头参数

| 型号 | 水平 FOV | 垂直 FOV | 光圈 | 焦距 | 景深 |
|-|-|-|-|-|-|
| SM3S11NS（1600 × 1200） | 176° | 140° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM3S11NS（1920 × 1536） | 200° | 155° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM1N8ASC | 183° | 122° | F2.0 | 0.95 mm | 0.1 m ~ ∞ |
| SM2N2NP | 160° | 120° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |

### 接口与环境参数

| 参数 | SM3S11NS | SM1N8ASC | SM2N2NP |
|-|-|-|-|
| 连接器 | 8.03A0.033200 | 8.03A0.033200 | 8.03A0.033200 |
| 供电电压 | 3.8 V / 1.8 V / 1.1 V | 2.8 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V |
| 工作温度 | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ |
| 存储温度 | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ |

引脚定义、I2C 地址与结构尺寸图请参考各型号规格书（见 [资料下载](#资料下载)）。

## 定制化服务

- **接口定制**：连接器类型与引脚定义。
- **结构定制**：板型与安装孔位匹配夹爪或手环外壳。
- **排线定制**：FPC 长度与走线。
- **光学定制**：摄像头分辨率与镜头（FOV）均可定制。

## 资料下载

| 型号 | 规格书 |
|-|-|
| SM3S11NS（ISX031） | <a href={`${MONO}/source/SM3S11NS_Spec_CN_V1.0.pdf`}>SM3S11NS_Spec_CN_V1.0.pdf</a> |
| SM1N8ASC（AR0145） | <a href={`${OSS}/source/SM1N8ASC_Spec_CN_V1.0.pdf`}>SM1N8ASC_Spec_CN_V1.0.pdf</a> |
| SM2N2NP（AR0234） | <a href={`${MONO}/source/SM2N2NP_Spec_CN_V1.0.pdf`}>SM2N2NP_Spec_CN_V1.0.pdf</a> |

## 联系我们

:::note 联系方式
欢迎联系我们，获取样机演示、报价与定制方案：

- **销售咨询**：[Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **技术支持**：[support@sensing-world.com](mailto:support@sensing-world.com)
- **电话**：+86-755-28990915
- **官网**：[www.sensing-world.com](https://sensing-world.com/)

**工作时间**：周一至周五，9:00 - 18:00（GMT+8）
:::
