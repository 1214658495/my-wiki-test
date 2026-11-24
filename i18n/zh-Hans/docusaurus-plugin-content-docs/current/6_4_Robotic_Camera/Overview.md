---
sidebar_position: 0
sidebar_label: 新一代选型指南
title: 新一代机器人摄像头
description: 按图像格式、视场角、帧率与机械配置对比双目和单目机器人摄像头。
---

# 新一代机器人摄像头

本系列面向具身智能、人形机器人与数据采集应用，包含双目与单目摄像头。选型时先确认平台支持的图像处理链路，再比较视场角、帧率与机械配置。

<figure style={{margin: 0, textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/New_Generation/Stereo_Housing.png?x-oss-process=image/format,webp" alt="新一代双目摄像头外观" style={{display: 'block', marginInline: 'auto', width: '100%', maxWidth: 520, height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>新一代双目摄像头</figcaption>
</figure>

## 双目摄像头

| 型号 | 传感器 | 每目分辨率 / 帧率 | 曝光方式 | 输出 / ISP | 水平 / 垂直视场角 |
|---|---|---|---|---|---|
| [S56D](/zh-Hans/docs/6_4_Robotic_Camera/Binocular_Camera/S56D) | 5MP × 2 | 2560(H) × 1984(V) @ 30fps | 全局曝光 | RAW10 / 主机端处理 | 140° / 102° |
| [S56Y](/zh-Hans/docs/6_4_Robotic_Camera/Binocular_Camera/S56Y) | 5MP × 2 | 2400(H) × 1800(V) @ 30fps | 全局曝光 | YUV422 8bit / 内置 ISP | 128° / 91° |
| [S36A](/zh-Hans/docs/6_4_Robotic_Camera/Binocular_Camera/S36A) | 2.95MP × 2 | 1920(H) × 1536(V) @ 30fps | 卷帘曝光，140dB HDR | YUV422 8bit / 内置 ISP | 120° / 93° |

三款均采用 60 ± 0.5mm 基线、六轴 IMU、高精度双目 AA 工艺及 GMSL2 6Gbps 接口。前端防护等级为 IP67，整机为 IP54。镜头视场角公差为 ±3°。

### 选型要点

- **S56D：** 全局曝光、RAW10 输出、140° 水平视场，适用于在主机端处理 RAW 图像的系统。
- **S56Y：** 全局曝光、内置 ISP、128° 水平视场，提供 YUV 图像输出。
- **S36A：** 卷帘曝光、140dB HDR，内置 ISP 输出 YUV 图像。

S56D 与 S56Y 的整机尺寸和基线相同，但输出分辨率、输出格式、图像处理链路与硬件初始化不同。请按所选型号分别核对镜头参数、驱动与平台配置。

### 机械与订购配置

| 型号 | 含镜头整机尺寸 W × L × H | 标准版重量 | 轻量化版重量 |
|---|---|---|---|
| S56D | 27 × 84 × 30.3mm | 82 ± 10g | 66 ± 10g |
| S56Y | 27 × 84 × 30.3mm | 85 ± 10g | 69 ± 10g |
| S36A | 27 × 84 × 28.8mm | 85 ± 10g | 69 ± 10g |

每款均提供标准版 Fakra、`_A` 轻量化 Fakra、`_B` 轻量化 SS-mini01 和 `_C` 标准版 SS-mini01 配置。完整配置表和各型号机械图见对应产品页。

## 单目摄像头

| 型号 | 传感器 / ISP | 分辨率 / 帧率 | 成像模式 / 输出 | 水平 / 垂直视场角 | 对焦距离 / 景深 | 尺寸 |
|---|---|---|---|---|---|---|
| [SYW2G](/zh-Hans/docs/6_4_Robotic_Camera/Monocular_Camera/SYW2G_SYF2G) | 2MP 3µm / 内置 | 1920(H) × 1200(V) @ 30fps | 全局曝光 / YUV422 8bit | 120° / 71° | 0.8m / 0.4m - INF | 25 × 25 × 29.81mm |
| [SYF2G](/zh-Hans/docs/6_4_Robotic_Camera/Monocular_Camera/SYW2G_SYF2G) | 2MP 3µm / 内置 | 1920(H) × 1200(V) @ 30fps | 全局曝光 / YUV422 8bit | 200° / 120° | 0.4m / 0.2m - INF | 25 × 25 × 30.42mm |
| [SYF3L](/zh-Hans/docs/6_4_Robotic_Camera/Monocular_Camera/SYF3L) | 2.95MP 3µm / 内置 | 1920(H) × 1536(V) @ 30fps | HDR / YUV422 8bit | 196° / 154° | 0.4m / 0.13m 至无穷远 | 25 × 25 × 27.9mm |
| [SHW5G](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G) | 5MP RGGB | 2560(H) × 1984(V) @ 最高 60fps（全局）/ 50fps（卷帘） | 全局或卷帘曝光 / RAW10 | 130° / 102° | 0.8m / 0.3m 至无穷远 | 25 × 25 × 29.49mm |
| [SHF5G](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G) | 5MP RGGB | 2560(H) × 1984(V) @ 最高 60fps（全局）/ 50fps（卷帘） | 全局或卷帘曝光 / RAW10 | 200° / 150° | 0.4m / 0.1m 至无穷远 | 25 × 25 × 31.35mm |
| [M3A](/zh-Hans/docs/6_4_Robotic_Camera/Monocular_Camera/M3A) | RGGB / 内置 | 1920(H) × 1536(V) @ 30fps | HDR / YUV422 8bit | 200° / 155° | 0.4m / 0.15m 至无穷远 | 17 × 17 × 31.89mm |

SYW2G 与 SYF2G 均采用 MAX96717 GMSL2 6Gbps，功耗为 1.7W，支持外部触发与多摄像头同步。由于传感器、ISP、串行器和接入流程共用，两款保留在同一对比页，分别列出镜头与机械差异。SYW2G 适用于相对集中的视野，SYF2G 用于更大范围的场景覆盖。

SHW5G / SHF5G 提供更高分辨率的 RAW10 采集，SYF3L 与 M3A 提供超广角 HDR YUV 输出，外壳平面尺寸分别为 25 × 25mm 和 17 × 17mm。M3A 参数沿用原版规格书，接线前请核对新线束的连接器和引脚定义。

## 标定与接入

双目产品采用 **Omni-radtan** 标定模型，出厂提供摄像头与 IMU 标定。请使用 SENSING sgMIX 或配套 OTP 格式文档读取当前设备参数。接入前确认图像格式、同步配置与目标平台支持情况。

驱动包、转接板、供电要求与标定工具请联系 [support@sensing-world.com](mailto:support@sensing-world.com)。

## 热门产品

「机器人摄像头」下的「热门产品」栏目收录已量产的成熟型号，可用于现有项目与型号对比。

| 分类 | 文档 |
|---|---|
| 双目 | [Astra S56 / S56C](/zh-Hans/docs/6_1_Camera/Binocular_Camera/S56)、[Astra S36](/zh-Hans/docs/6_1_Camera/Binocular_Camera/S36) |
| 单目 | [SHW3H](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW3H)、[SHF3L](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHF3L)、[SHW3G / SHF3G](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW3G_SHF3G)、[SHW5G / SHF5G](/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW5G_SHF5G)、[M3A（原线束版）](/zh-Hans/docs/6_1_Camera/Monocular_Camera/M3A) |

视觉方案与数据采集设备见 [Robotics 总览](/zh-Hans/docs/6_0_Robotics)。
