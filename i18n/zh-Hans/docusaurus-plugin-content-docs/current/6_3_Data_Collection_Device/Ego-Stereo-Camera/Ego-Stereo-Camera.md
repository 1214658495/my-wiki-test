---
sidebar_position: 1
title: Ego 视角定制化双目摄像头
description: 森云智能专为多目第一人称（Ego）数采设备优化的双目摄像头，提供 ISX031、AR0234、OG02B10 三种方案，60 mm 基线并内置 IMU
keywords: [Ego, 第一人称, 双目摄像头, ISX031, AR0234, OG02B10, ICM-45686, GMSL2, MIPI, 数据采集, 具身智能]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Stereo-Camera';

# Ego 视角定制化双目摄像头

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, textAlign: 'center'}}>
  <img src={`${OSS}/img/ego_stereo_camera.png`} alt="Ego 定制双目摄像头" style={{width: '100%', maxWidth: 560}} />
</div>

## 概述

森云智能 **Ego 定制双目摄像头** 是专为 **多目第一人称（Ego）数采设备** 深度优化的双目摄像头，完美契合 Ego 设备的结构与通信协议。它在头戴设备中作为 **前置双目**，采集佩戴者的第一视角画面与手物交互的深度信息。

三种 Sensor 方案共用同一款 90 × 28 mm 板型、60 mm 基线和板载六轴 IMU，可按场景选择图像传感器而无需改动结构设计。

## 产品特点

- **适配多目 Ego 设备**：契合 [EgoSense H6](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6) 等多目头戴设备的结构与通信协议。
- **60 mm 基线**：接近人眼瞳距，适合近距离的手物操作场景。
- **板载高性能 IMU**：TDK ICM-45686，支持 **相机与 IMU 联合标定**。
- **外同步触发**：所有型号均支持与设备内其他摄像头硬件帧同步。
- **广角镜头**：单目最大 H160° × V130°。
- **小巧轻量**：90 × 28 × 17.8 mm，重量 < 30 g，功耗 < 1 W。
- **深度定制**：支持接口、结构、排线定制，摄像头分辨率与镜头均可定制。

## 型号选型

| 参数 | SDS11NCL1 | SDN2NNP1 | SDV12NCP1 |
|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0234 RGB | OmniVision OG02B10 RGB |
| **曝光方式** | 卷帘曝光（Rolling Shutter） | 全局曝光（Global Shutter） | 全局曝光（Global Shutter） |
| **分辨率** | 1600 × 1200 × 2 | 1600 × 1200 × 2 | 1600 × 1300 × 2 |
| **帧率** | 30 fps | 30 fps | 30 fps |
| **输出格式** | YUV422 8bit（内置 ISP） | RAW 10bit | RAW 10bit |
| **镜头 FOV** | H124° × V100° | H160° × V120° | H160° × V130° |
| **基线** | 60 mm | 60 mm | 60 mm |
| **IMU** | TDK ICM-45686 | TDK ICM-45686 | TDK ICM-45686 |
| **相机与 IMU 联合标定** | 支持 | 支持 | 支持 |
| **外同步触发** | 支持 | 支持 | 支持 |
| **接口** | GMSL2（MAX9295D），IPEX | MIPI CSI-2，FPC | GMSL2（MAX9295D），IPEX |
| **功耗** | < 1 W | < 1 W | < 1 W |
| **重量** | < 30 g | < 30 g | < 30 g |
| **尺寸** | 90 × 28 × 17.8 mm | 90 × 28 × 17.8 mm | 90 × 28 × 17.8 mm |

:::tip 选型建议
- **SDV12NCP1（OG02B10）**：全局曝光，垂直视场角最大（V130°），与 EgoSense H6 所用摄像头的 Sensor 和镜头一致，适合大多数 Ego 采集方案。
- **SDN2NNP1（AR0234）**：全局曝光，MIPI CSI-2 FPC 直连，适合摄像头与主板距离较近的设计。
- **SDS11NCL1（ISX031）**：内置 ISP，直接输出 YUV 图像，适合没有 ISP 调试资源的平台。
:::

## 详细参数

### 镜头参数

| 型号 | 水平 FOV | 垂直 FOV | 光圈 | 焦距 | 景深 |
|-|-|-|-|-|-|
| SDS11NCL1 | 124° ± 3° | 100° ± 3° | F2.0 | 1.79 mm | 0.2 m ~ ∞ |
| SDN2NNP1 | 160° | 120° | F2.2 | 2.27 mm | 0.28 m ~ ∞ |
| SDV12NCP1 | 160° ± 3° | 130° ± 3° | F2.0 | 1.68 mm | 0.2 m ~ ∞ |

### 接口与环境参数

| 参数 | SDS11NCL1 | SDN2NNP1 | SDV12NCP1 |
|-|-|-|-|
| 串行器 | MAX9295D | — | MAX9295D |
| 连接器 | BWIPX-1-001E | 8.01A0.036200（36 Pin FPC） | BWIPX-1-001E |
| 基线公差 | 60.00 ± 0.5 mm | 60 mm | 60.00 ± 0.5 mm |
| 工作温度 | -30 ~ 60 ℃ | -20 ~ 60 ℃ | -30 ~ 60 ℃ |
| 存储温度 | -30 ~ 70 ℃ | — | -30 ~ 70 ℃ |

引脚定义、I2C 地址与结构尺寸图请参考各型号规格书（见 [资料下载](#资料下载)）。

## 多目 Ego 方案

基于 **RK3588** 平台，森云智能提供由 1 个双目摄像头加若干单目摄像头组成的 4 / 5 / 6 目 Ego 方案：

| 方案 | 4 目 Ego | 5 目 Ego | 6 目 Ego |
|-|-|-|-|
| **平台** | RK3588 | RK3588 | RK3588 |
| **硬件** | 主控板 + 双目 × 1 + 单目 × 2 | 主控板 + 双目 × 1 + 单目 × 3 | 主控板 + 双目 × 1 + 单目 × 4 |
| **软件** | 底层驱动、ISP Tuning、应用程序 | 底层驱动、ISP Tuning、应用程序 | 底层驱动、ISP Tuning、应用程序 |

单目摄像头请参考 [Ego 视角定制化单目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Mono-Camera)；开箱即用的六目头戴整机请参考 [EgoSense H6](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6)。

## 定制化服务

- **接口定制**：GMSL2 或 MIPI CSI-2 输出，连接器类型可选。
- **结构定制**：板型与安装孔位匹配您的外壳设计。
- **排线定制**：FPC / 同轴线缆长度与走线。
- **光学定制**：摄像头分辨率与镜头（FOV）均可定制。

## 资料下载

| 型号 | 规格书 |
|-|-|
| SDS11NCL1（ISX031） | <a href={`${OSS}/source/SDS11NCL1_Spec_CN_V1.0.pdf`}>SDS11NCL1_Spec_CN_V1.0.pdf</a> |
| SDN2NNP1（AR0234） | <a href={`${OSS}/source/SDN2NNP1_Spec_CN_V1.0.pdf`}>SDN2NNP1_Spec_CN_V1.0.pdf</a> |
| SDV12NCP1（OG02B10） | <a href={`${OSS}/source/SDV12NCP1_Spec_CN_V1.0.pdf`}>SDV12NCP1_Spec_CN_V1.0.pdf</a> |

## 联系我们

:::note 联系方式
欢迎联系我们，获取样机演示、报价与定制方案：

- **销售咨询**：[Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **技术支持**：[support@sensing-world.com](mailto:support@sensing-world.com)
- **电话**：+86-755-28990915
- **官网**：[www.sensing-world.com](https://sensing-world.com/)

**工作时间**：周一至周五，9:00 - 18:00（GMT+8）
:::
