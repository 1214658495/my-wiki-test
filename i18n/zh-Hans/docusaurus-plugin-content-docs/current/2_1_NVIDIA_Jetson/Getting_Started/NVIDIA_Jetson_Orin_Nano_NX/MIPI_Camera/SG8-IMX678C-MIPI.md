---
sidebar_position: 3
sidebar_label: SG8-IMX678C-MIPI（已下架）
---

# SG8-IMX678C-MIPI 摄像头

:::warning 产品已下架（停止销售）
**SG8-IMX678C-MIPI 已下架，不再对外销售。** 官网产品页面已下线，因此本页不再提供购买链接。

本文档继续保留，作为存量用户的技术支持资料。如需新项目选型或替代型号建议，请联系 SENSING 技术支持。
:::

## 概述

<div className="row">
 <div className="col col--12">
 <p>SG8-IMX678C-MIPI-HXXX 摄像头搭载 SONY IMX678 CMOS 图像传感器，分辨率为 8.29MP。这款高性能摄像头最高可输出 60fps 的 4K（3840×2160）图像，并支持 HDR。产品预装并调焦 M12 镜头，兼容多种 SOC 平台，适用于高级成像应用。</p>
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031.png" alt="SG8-IMX678C-MIPI"
 style={{maxWidth: '30%', height:'auto'}} />
</div>

## 技术规格

### 主要特性

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | SONY 8.29MP IMX678 RGGB |
| ISP | N/A |
| 图像尺寸 | 1/1.8 inch CMOS |
| 输出分辨率 | 3840H×2160V (4K) |
| 帧率 | 最高 60 fps |
| 像元尺寸 | 2μm |
| HDR 支持 | 是 |
| 输出格式 | MIPI/RAW@10bit/12bit |
| 供电 | 3.3V |
| 电流 | < 300mA @3.3VDC |
| 接口 | FPC |
| 连接器 | FH67-30S-0.5SV |
| 工作温度 | -30°C ~ 85°C |
| 尺寸 | W: 20mm, L: 35mm, H: 25mm |
| 重量 | < 50g |

### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG8-IMX678C-MIPI/SG8-IMX678C-MIPI_Dimensions.png" alt="SG8-IMX678C-MIPI 尺寸"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

## 硬件集成

### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG8-IMX678C-MIPI/SG8-IMX678C-MIPI_Block_Diagram.png" alt="SG8-IMX678C-MIPI 框图"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C 地址配置

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | I2C 地址 |
|-----------|-------------------|
| EEPROM | 0xA0 (8 位地址) |
| 传感器 | 0x34 (8 位地址) |

</div>

### 连接器引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>

| PIN | 名称 | 类型 | 说明 |
|-----|----------------|-----------------|-------------|
| 1 | E2PPROM-WP | INPUT:3.3V/1.8V | EEPROM 写保护<br/>L：禁止写入；H：允许写入 |
| 2 | / | NC | 未连接 |
| 3 | / | NC | 未连接 |
| 4 | GND | POWER | 地 |
| 5 | XHS | I/O:1.8V | 水平同步 |
| 6 | XVS | I/O:1.8V | 垂直同步 |
| 7 | GND | POWER | 地 |
| 8 | D1_N | OUTPUT | MIPI 数据通道 1 (负) |
| 9 | D1_P | OUTPUT | MIPI 数据通道 1 (正) |
| 10 | GND | POWER | 地 |
| 11 | D2_N | OUTPUT | MIPI 数据通道 2 (负) |
| 12 | D2_P | OUTPUT | MIPI 数据通道 2 (正) |
| 13 | GND | POWER | 地 |
| 14 | CLK_N | OUTPUT | MIPI 时钟 (负) |
| 15 | CLK_P | OUTPUT | MIPI 时钟 (正) |
| 16 | GND | POWER | 地 |
| 17 | D3_N | OUTPUT | MIPI 数据通道 3 (负) |
| 18 | D3_P | OUTPUT | MIPI 数据通道 3 (正) |
| 19 | GND | POWER | 地 |
| 20 | D4_N | OUTPUT | MIPI 数据通道 4 (负) |
| 21 | D4_P | OUTPUT | MIPI 数据通道 4 (正) |
| 22 | GND | POWER | 地 |
| 23 | SENSOR-RESETn | INPUT:1.8V/3.3V | 摄像头复位信号<br/>1：工作<br/>0：复位 |
| 24 | CAM-CLK | INPUT | 时钟信号输入 (24MHz)<br/>模组内置 24MHz 振荡器 |
| 25 | GND | POWER | 地 |
| 26 | CAM-SCL | I/O:3.3V | I2C 时钟 (内部 pull-up 10K) |
| 27 | CAM-SDA | I/O:3.3V | I2C 数据 (内部 pull-up 10K) |
| 28 | GND | POWER | 地 |
| 29 | VCC-3.3V | POWER | 3.3V 供电 |
| 30 | VCC-3.3V | POWER | 3.3V 供电 |

</div>

### 上电时序

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_power_sequence.png" alt="电源时序图"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info 上电要求
SG8-IMX678C-MIPI 摄像头对上电时序要求较少，只需确保电源稳定后再拉起 RESET 信号。
:::

## 镜头选项

<div className="lens-options">
<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 最大光学畸变 | 镜头安装 |
|-------|------|------|------|-----|------------------------|------------|
| SG8-IMX678C-MIPI-H30S1 | 29° | 16° | 1.6 | 15.7mm | -2% | M12 |
| SG2-IMX678C-MIPI-H60S | 57.2° | 31° | 1.8 | 3.87mm | -11% | M12 |
| SG8-IMX678C-MIPI-H120K | 124° | 62° | 2.6 | 4.0mm | -88% | M12 |

</div>
</div>

## 安装指南

### 快速设置流程

:::note 安装步骤
1. 连接 FPC 线缆到摄像头模组
2. 将摄像头安装到 Jetson Orin Nano/NX 开发套件
3. 启动系统并配置软件驱动
:::

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_nvidia.png" alt="摄像头在 Jetson 上的安装"
 style={{maxWidth: '60%', height:'auto'}} />
</div>

## 软件与驱动支持

### 驱动仓库

请从我们的 GitHub 仓库获取最新摄像头驱动:

<div style={{marginBottom: '1rem'}}>
 <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
 <span style={{fontWeight: 'bold'}}>SENSING-Technology 摄像头驱动</span>
 </a>
</div>

<!-- ### 兼容 开发套件

<div style={{display: 'flex', justifyContent: 'center'}}>

| 名称 | 兼容 平台 | 最大摄像头输入数 |
|------|--------------------------|-------------------|
| [NVIDIA MIPI CSI-2 摄像头 开发套件](https://sensing-world.com/en/h-pd-88.html) | NVIDIA Jetson Orin Nano/Orin NX 开发套件 | 2 |

</div> -->

### 驱动下载

:::info 驱动安装
1. 请根据 JetPack 版本选择合适的驱动包
2. 将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载软件包
3. 按照驱动包中的安装说明完成安装
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack 版本 | 兼容 平台 | 下载链接 |
|---|-----------------|--------------------|---------------|
| 1 | JP6.1 (L4T R36.4) | Jetson Orin Nano/NX 开发套件 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX678_JP6.1_L4TR36.4.2) |

</div>

:::note JetPack 信息
NVIDIA JetPack 是 Jetson 开发板的官方 SDK，包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及开发工具。 JetPack 版本对应特定的 L4T（Linux for Tegra）版本：

- JetPack 6.2: L4T R36.4.3
- JetPack 6.1: L4T R36.4
- JetPack 6.0: L4T R36.3
- JetPack 5.1.2: L4T R35.4.1

更多信息请访问 [NVIDIA Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

## 配件

### FPC 线缆选项

SG8-IMX678C-MIPI 支持两种 FPC 排线类型，以满足不同连接需求：

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_FPC.png" alt="FPC 线缆选项"
 style={{maxWidth: '70%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 线缆类型 | 料号 | 规格 |
|------------|-------------|---------------|
| 22-引脚 FPC | 339901-0010 | 0.5mm 间距 |
| 15-引脚 FPC | 339901-0011 | 1.0mm 间距 |

</div>

<!-- ## 文档与资源

:::info 技术文档
《SG8-IMX678C-MIPI-HXXX 摄像头 数据手册》已不再通过官网提供下载。如需完整规格书和集成指南，请联系 SENSING 技术支持获取。
::: -->
