---
sidebar_position: 1
title: Ego 视角定制化单目摄像头
description: 森云智能专为多目第一人称（Ego）数采设备优化的单目摄像头，提供 ISX031、AR0234、OG02B10、OV9281 四种方案
keywords: [Ego, 第一人称, 单目摄像头, ISX031, AR0234, OG02B10, OV9281, MIPI, 数据采集, 具身智能]
---

export const OSS = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-Mono-Camera';

# Ego 视角定制化单目摄像头

<div style={{background: '#fff', borderRadius: 8, padding: 16, marginBottom: 16, textAlign: 'center'}}>
  <img src={`${OSS}/img/ego_mono_camera.png`} alt="Ego 定制单目摄像头" style={{width: '100%', maxWidth: 320}} />
</div>

## 概述

森云智能 **Ego 定制单目摄像头** 是专为 **多目第一人称（Ego）数采设备** 深度优化的单目摄像头，完美契合 Ego 设备的结构与通信协议。它在头戴设备中作为 **侧向摄像头**，扩展佩戴者双手与周边环境的组合视场。

四种 Sensor 方案覆盖彩色与黑白、卷帘与全局曝光，头戴设备上的每个机位都可以选用最合适的传感器。

## 产品特点

- **适配多目 Ego 设备**：契合 [EgoSense H6](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6) 等多目头戴设备的结构与通信协议。
- **超广角镜头**：最大 H176° × V140°（ISX031，1600 × 1200），1920 × 1536 模式下可达 H200° × V155°。
- **外同步触发**：所有型号均支持与设备内其他摄像头硬件帧同步（FSYNC）。
- **MIPI CSI-2 + FPC**：直连主控板。
- **小巧轻量**：约 28 × 18 mm 板型，重量 15 g，功耗 < 0.5 W。
- **深度定制**：支持接口、结构、排线定制，摄像头分辨率与镜头均可定制。

## 型号选型

| 参数 | SM3S11NS | SM2N2NP | SM2V12NP | SM1V20NJ |
|-|-|-|-|-|
| **Sensor** | Sony ISX031 RGB | onsemi AR0234 RGB | OmniVision OG02B10 RGB | OmniVision OV9281 Mono |
| **曝光方式** | 卷帘曝光 | 全局曝光 | 全局曝光 | 全局曝光 |
| **分辨率** | 1600 × 1200（可选 1920 × 1536） | 1600 × 1200 | 1600 × 1300 | 1280 × 800 |
| **帧率** | 30 fps | 30 fps | 30 fps | 30 fps |
| **输出格式** | YUV422（内置 ISP） | RAW 10bit | RAW 10bit | RAW 10bit |
| **彩色 / 黑白** | 彩色 | 彩色 | 彩色 | 黑白，850 nm 红外 |
| **HDR** | 支持 | 不支持 | 不支持 | 不支持 |
| **镜头 FOV** | H176° × V140° | H160° × V120° | H160° × V130° | H138° × V95° |
| **外同步触发** | 支持 | 支持 | 支持 | 支持 |
| **接口** | MIPI CSI-2，FPC | MIPI CSI-2，FPC | MIPI CSI-2，FPC | MIPI CSI-2，FPC |
| **功耗** | < 0.5 W | < 0.5 W | < 0.5 W | < 0.5 W |
| **重量** | 15 g | 15 g | 15 g | < 15 g |
| **尺寸** | 28.4 × 17.8 × 19.5 mm | 28.4 × 17.8 × 17.7 mm | 28.4 × 17.8 × 17.8 mm | 24 × 16 × 13.3 mm |

:::tip 选型建议
- **SM2V12NP（OG02B10）**：全局曝光，V130°，与 EgoSense H6 所用摄像头的 Sensor 和镜头一致，可与 [SDV12NCP1 双目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) 搭配使用。
- **SM2N2NP（AR0234）**：全局曝光，1600 × 1200，可与 AR0234 双目摄像头搭配使用。
- **SM3S11NS（ISX031）**：内置 ISP，视场角最大，适合追求最大周边覆盖的机位。
- **SM1V20NJ（OV9281）**：黑白传感器，响应 850 nm 红外，适合追踪、弱光或红外补光场景。
:::

## 详细参数

### 镜头参数

| 型号 | 分辨率 | 水平 FOV | 垂直 FOV | 光圈 | 焦距 | 景深 |
|-|-|-|-|-|-|-|
| SM3S11NS | 1600 × 1200 | 176° | 140° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM3S11NS | 1920 × 1536 | 200° | 155° | F2.0 | 1.68 mm | 0.15 m ~ ∞ |
| SM2N2NP | 1600 × 1200 | 160° | 120° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |
| SM2V12NP | 1600 × 1300 | 160° | 130° | F2.0 | 1.68 mm | 0.1 m ~ ∞ |
| SM1V20NJ | 1280 × 800 | 138° | 95° | F2.2 | 1.14 mm | 0.1 m ~ ∞ |

### 接口与环境参数

| 参数 | SM3S11NS | SM2N2NP | SM2V12NP | SM1V20NJ |
|-|-|-|-|-|
| 连接器 | 8.03A0.033200 | 8.03A0.033200 | 8.03A5.021250 | 8.03A5.021250 |
| 连接器品牌 | DIANWEI（钿威科技） | DIANWEI（钿威科技） | DIANWEI（钿威科技） | DIANWEI（钿威科技） |
| 供电电压 | 3.8 V / 1.8 V / 1.1 V | 3.3 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V | 3.3 V / 1.8 V / 1.2 V |
| 工作温度 | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ | -20 ~ 60 ℃ |
| 存储温度 | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ | -20 ~ 75 ℃ |

引脚定义、I2C 地址与结构尺寸图请参考各型号规格书（见 [资料下载](#资料下载)）。

## 多目 Ego 方案

基于 **RK3588** 平台，1 个 [双目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) 加 2 / 3 / 4 个单目摄像头即可组成 4 / 5 / 6 目 Ego 设备，森云智能提供底层驱动、ISP Tuning 与应用程序。具体配置见 [多目 Ego 方案](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera#多目-ego-方案)。

## 定制化服务

- **接口定制**：连接器类型与引脚定义。
- **结构定制**：板型与安装孔位匹配您的外壳设计。
- **排线定制**：FPC 长度与走线。
- **光学定制**：摄像头分辨率与镜头（FOV）均可定制。

## 资料下载

| 型号 | 规格书 |
|-|-|
| SM3S11NS（ISX031） | <a href={`${OSS}/source/SM3S11NS_Spec_CN_V1.0.pdf`}>SM3S11NS_Spec_CN_V1.0.pdf</a> |
| SM2N2NP（AR0234） | <a href={`${OSS}/source/SM2N2NP_Spec_CN_V1.0.pdf`}>SM2N2NP_Spec_CN_V1.0.pdf</a> |
| SM2V12NP（OG02B10） | <a href={`${OSS}/source/SM2V12NP_Spec_CN_V1.0.pdf`}>SM2V12NP_Spec_CN_V1.0.pdf</a> |
| SM1V20NJ（OV9281） | <a href={`${OSS}/source/SM1V20NJ_Spec_CN_V3.0.pdf`}>SM1V20NJ_Spec_CN_V3.0.pdf</a> |

## 联系我们

:::note 联系方式
欢迎联系我们，获取样机演示、报价与定制方案：

- **销售咨询**：[Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **技术支持**：[support@sensing-world.com](mailto:support@sensing-world.com)
- **电话**：+86-755-28990915
- **官网**：[www.sensing-world.com](https://sensing-world.com/)

**工作时间**：周一至周五，9:00 - 18:00（GMT+8）
:::
