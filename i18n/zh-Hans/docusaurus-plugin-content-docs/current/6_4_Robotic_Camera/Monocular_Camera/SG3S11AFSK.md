---
sidebar_position: 2
title: SG3S11AFSK（3MP HDR 30fps）
---

# SG3S11AFSK（3MP HDR 30fps）

## 概述

SG3S11AFSK 是 SG3S11AFxK 系列中水平视场角为 196° 的型号。采用 Sony ISX031 传感器、内置 ISP 和 MAX96717F 串行器，通过 GMSL2 以 30fps 输出 1920(H) × 1536(V) 的非压缩 8bit YUV422 图像。支持 HDR、LED 闪烁抑制（LFM）、外部触发和多摄像头同步。

[SG3S11AFxK 系列规格书（英文）](/zh-Hans/pdf-viewer?file=datasheet/huojiaDatasheet/SG3S11AFxK.pdf)

## 技术规格

| 参数 | 值 |
|---|---|
| 传感器 | Sony ISX031，2.95MP RGGB，1/2.42 英寸 CMOS |
| 像元尺寸 | 3.0 × 3.0µm |
| 输出分辨率与帧率 | 1920(H) × 1536(V) @ 30fps |
| 输出格式 | 非压缩 YUV422，8bit |
| ISP | 内置 |
| HDR / LFM | 支持 |
| 光学分辨率 | 中心 ≥800 LW/PH |
| 串行器与链路 | MAX96717F，GMSL2 3Gbps |
| 供电 | 9–16V PoC，12V DC 时 &lt;200mA |
| 连接器 | Amphenol Fakra Z Code |
| 工作温度 | −40 至 +85°C |
| 外壳防护 | IP67 |
| 外壳平面尺寸 / 重量 | 25 × 25mm / &lt;50g |

> **备注**　规格书仅确认中心光学分辨率达标。

## 镜头与机械尺寸

| 水平 / 垂直视场角 | 光圈值 | 有效焦距 | 对焦距离 | 景深 | 最大光学畸变 | 镜头防护 / 装配 |
|---|---|---|---|---|---|---|
| 196° / 154° | 2.0 | 1.51mm | 0.4m | 0.13m 至无穷远 | −155% | IP67 / 主动对准（AA） |

[第 6 页 SG3S11AFSK 机械图](https://sgword-service.oss-cn-heyuan.aliyuncs.com/datasheet/huojiaDatasheet/SG3S11AFxK.pdf#page=6) 标注了正视图、侧视图、后视图、成像方向和安装尺寸。

## 硬件与接入

| 功能 | 配置 |
|---|---|
| 串行器 I2C 地址 | `0x80`（8bit） |
| 传感器 / ISP I2C 地址 | `0x34`（8bit） |
| 帧同步 | MAX96717F MFP7 |
| 传感器复位 | MAX96717F MFP0 |
| 传感器错误信号 | MAX96717F MFP5 |

内置 ISP 输出 YUV。主机端配置 SerDes 时使用 3Gbps GMSL2 链路和 8bit YUV422 数据流。[第 3 页系统框图](https://sgword-service.oss-cn-heyuan.aliyuncs.com/datasheet/huojiaDatasheet/SG3S11AFxK.pdf#page=3) 展示了 CSI-2、PoC 和控制信号的连接关系。

## 摄像头使用

### 适配 NVIDIA Jetson 平台

SG3S11AFSK 使用 GMSL2 3Gbps，输出为 1920(H) × 1536(V) @ 30fps、YUV422（UYVY）。部分驱动包按系列列为 `SG3S11AFxK`，选择与板卡、JetPack 版本和采集方式对应的驱动包。

| Jetson 平台 | 转接板 / 载板 | JetPack | 接入方式 | 驱动与安装说明 |
|---|---|---|---|---|
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 6.2 | V4L2 | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2_L4TR36.4.3/Readme_yuv_raw.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 6.2.1 | V4L2 | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2.1/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack6.2.1/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP6.2.1_L4TR36.4.4/Readme.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 7.2 | V4L2 | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP7.2_L4TR39.2) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_Orin_GMSL2x8_JP7.2_L4TR39.2/Readme_yuv_raw.md) |
| Jetson AGX Orin | [SG8A-AGON-G2Y-A1](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1) | 7.2 | SIPL | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2/Readme.md) |
| Jetson AGX Orin | SG10A-AGON-G2M-A4 | 7.2 | V4L2 | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A4/JetPack7.2/SG10A_AGON_G2M_A4_AGX_ORIN_GMSL2x10_JP7.2_L4TR39.2) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A4/JetPack7.2/SG10A_AGON_G2M_A4_AGX_ORIN_GMSL2x10_JP7.2_L4TR39.2/Readme.md) |
| Jetson AGX Thor | [TRD1 G2A](/zh-Hans/docs/2_4_NVIDIA_Jetson_AGX_Thor/Getting_Started/TRD1_G2A) | 7.2 | SIPL | [驱动包](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) · [安装说明](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2/Readme.md) |

1. 按所选驱动包说明将摄像头接到对应板卡的 GMSL2 端口，核对供电和端口映射。
2. 使用 **V4L2** 时，按对应安装说明配置设备树和采集端口。
   - **SG8A-AGON-G2Y-A1，JetPack 6.2 / 7.2**。在 `raw_yuv_quick_bring_up.sh` 中为对应端口启用 3Gbps，并选择 `SG3S11AFxK(3G)`。
   - **SG8A-AGON-G2Y-A1，JetPack 6.2.1**。在设备树配置工具中选择 `sgx-yuv-gmsl2`，并在 `camera_config.sh` 中为对应端口启用 3Gbps、设置传感器模式为 1。
   - **SG10A-AGON-G2M-A4，JetPack 7.2**。为对应端口设置 `sensor_mode=2` 和 `gmsl_mode=1`。
3. **SIPL**：按对应平台的 SGX-YUV-GMSL2 指南选用 `SGX_YUV_GMSL2_3M_3G`，按实际端口设置配置并运行 `nvsipl_camera`。[AGX Orin 配置](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Orin%20Devkit/SG8A-AGON-G2Y-A1/JetPack7.2/SG8A_AGON_G2Y_A1_AGX_ORIN_SIPL_JP7.2_L4TR39.2/docs/sgx_yuv_gmsl2.md) · [AGX Thor 配置](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/blob/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2/docs/sgx_yuv_gmsl2.md)
4. 使用驱动包中的采集示例验证 1920(H) × 1536(V) @ 30fps 的输出。

### 与客户自研平台集成

使用支持 GMSL2 3Gbps 的解串器，按系统框图配置 PoC、SerDes 链路和 I2C 映射。主机 CSI 接收端使用 1920(H) × 1536(V) @ 30fps、YUV422 8bit。需要外部帧同步时，按硬件表配置 MAX96717F MFP7。

> **备注**　系列规格书另列有 PANDA PG2 单路 USB 转换器（Windows）和 CoaxCapture II CCG3-4H/8H 采集卡。接入前按实际设备核对型号、链路速率和所需驱动。
