---
sidebar_position: 2
---

# TRD1 G3A

## 概述

<div className="row">
  <div className="col col--12">
    TRD1 G3A 是基于 NVIDIA Jetson AGX Thor Developer Kit 扩展的 GMSL3 相机接入方案，可在 Thor 平台上快速集成高分辨率 GMSL3 相机视频流。
  </div>
</div>

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A.png?x-oss-process=image/format,webp" alt="TRD1 G3A" style={{maxWidth: '50%', height: 'auto'}} />
</div>
<br />

## 主要特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>主要特性：</strong><br/>
    - 支持 NVIDIA JETSON THOR 平台<br/>
    - 支持相机分辨率：最高 5140*3840<br/>
    - 支持相机输出格式：RAW/YUV422<br/>
    - 尺寸：L:243.12mm x W:112.4mm x H:56.88mm<br/>
    - 兼容相机类型：GMSL3/C-PHY<br/>
    - 最大支持相机数量：8*GMSL3<br/>
    - SOC：NVIDIA Jetson T5000 Module<br/>
    - AI 算力：2070 TFLOPS<br/>
    - 内存：128 GB 256-bit LPDDR5X
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>应用场景：</strong><br/>
    - 机器人<br/>
    - 工业<br/>
    - 医疗<br/>
    - 检测
  </div>
</div>

## 快速入门

### 硬件概览

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 G3A 硬件概览" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### 框图

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G3A/TRD1_G3A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 G3A 框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>

:::note
- TRD1 G3A 采用 **MAX96726 GMSL3 解串器** 设计，用于接入 GMSL3 相机。
:::

### 支持的相机组合

:::note 相机兼容性
你可以选择以下相机组合连接到 TRD1 G3A。
:::

| 相机组合 | 支持的相机数量 | 备注 |
| --- | --- | --- |
| Comb. 1 | 8*8MP/30FPS | / |
| Comb. 2 | 4*12MP/30FPS | / |
| Comb. 3 | 2*17MP/30FPS | / |

:::note JetPack 版本
TRD1 G3A 当前支持 NVIDIA Jetson AGX Thor 上的 **JetPack 7.0 / L4T R38.2.0**。

更多信息请参考 [NVIDIA 官方 Jetson Download Center](https://developer.nvidia.com/embedded/jetpack-archive)。
:::

### 硬件准备

#### 物料清单

| 序号 | 产品型号 | 数量 | 备注 |
| --- | --- | ---: | --- |
| 1 | 945-14070-0080-000-MIPI | 1 | 最多支持 8 路相机 |
| 2 | T4JC-JC-ZZZZ-0500L (Female to Female 0.5m) | 2 | 标准配置 |
| 3 | Trigger Cable | 1 | 标准配置 |
| 4 | Power Conversion Cable | 1 | 标准配置 |
| 5 | Power adapter | 1 | 标准配置 |
| 6 | Multi-functional conversion socket | 1 | 标准配置 |

#### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 G3A 套件内容" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### 安装步骤

:::note 快速连接
1. 使用同轴线将 GMSL3 相机连接到 TRD1 G3A 的 CAM 端口。
2. 将 12V 电源连接到适配板。
3. 给 Jetson AGX Thor 系统上电。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 G3A 相机连接" style={{maxWidth: '90%', height: 'auto'}} />
</div>

CAM 端口与设备节点的对应关系如下：

| 端口 | 设备树节点 | 设备节点 |
| --- | --- | --- |
| CAM0 | cam_0 | /dev/video0 |
| CAM1 | cam_1 | /dev/video1 |
| CAM2 | cam_2 | /dev/video2 |
| CAM3 | cam_3 | /dev/video3 |
| CAM4 | cam_4 | /dev/video4 |
| CAM5 | cam_5 | /dev/video5 |
| CAM6 | cam_6 | /dev/video6 |
| CAM7 | cam_7 | /dev/video7 |

### 软件准备

#### SDK 下载

:::note 驱动包
请使用面向 Jetson AGX Thor、JetPack 7.0 和 L4T R38.2.0 的 TRD1 G3A 驱动包。
:::

| 相机类型 | JetPack 版本 | SDK下载链接 |
| --- | --- | --- |
| GMSL3 Camera (RAW) | JP7.0 / L4T R38.2.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G3A/TRD1_G3A_AGX_THOR_IMX715_IMX735_IMX577_AR2020C_JP7.0_L4TR38.2) |

:::tip 下载方法
复制完整链接地址到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载。
:::



<!-- For details, please click [here](../../../FAQ/FAQ_jetson) -->
