---
sidebar_position: 4
sidebar_label: SG12-IMX577C-MIPI（已下架）
---

# SG12-IMX577C-MIPI 摄像头

:::warning 产品已下架（停止销售）
**SG12-IMX577C-MIPI 已下架，不再对外销售。** 官网产品页面已下线，因此本页不再提供购买链接。

本文档继续保留，作为存量用户的技术支持资料。如需新项目选型或替代型号建议，请联系 SENSING 技术支持。
:::

## 概述

<div className="row">
 <div className="col col--12">
 SG12-IMX577C-MIPI 摄像头模组采用 Sony 高性能 12MP IMX577 CMOS 图像传感器。这款紧凑型摄像头具备高分辨率和出色图像质量，并支持多种系统级芯片（SOC）平台，适用于广泛的工业和嵌入式视觉应用。
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031.png" alt="SG12-IMX577C-MIPI"
 style={{maxWidth: '30%', height:'auto'}} />
</div>

## 技术规格

### 主要特性

| 参数 | 值 |
|-------------------|----------------------------|
| 传感器 | Sony 12MP IMX577 RGGB |
| ISP | / |
| Chip size | 7.564 mm (H) × 5.476 mm (V)|
| 图像尺寸 | 1/2.3 inch CMOS |
| 输出像素 | 4056 (H) × 3040 (V) |
| 帧率 | • 全分辨率 raw10 @60fps<br/>• 全分辨率 raw12 @40fps<br/>• 最高 240fps（raw10，1080P） |
| 像元尺寸 | 1.55μm × 1.55μm |
| HDR 支持 | 是 |
| 输出数据 | MIPI/RAW@10bit/12bit |
| 供电 | 3.3V |
| 电流 | < 300mA @3.3VDC |
| 摄像头接口 | FPC |
| 连接器 | FH67-30S-0.5SV |
| 工作温度 | -20°C to +75°C |
| 性能温度 | -20°C to +60°C |
| 尺寸 | W: 20mm, L: 35mm, H: 25mm |
| 重量 | < 50g |

### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG12-IMX577C-MIPI/SG12-IMX577C-MIPI_Dimensions.png" alt="SG12-IMX577C-MIPI 尺寸"
 style={{maxWidth: '90%', height:'auto'}} />
</div>

## 镜头选项

<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 最大光学畸变 | 镜头安装 |
|-------------------------|------|------|------|---------|------------------------|------------|
| SG12-IMX577C-MIPI-H60K | 61° | 45° | F2.1 | 6mm | -19.5% | M12*P0.5 |
| SG12-IMX577C-MIPI-H90J | 89° | 72° | F2.6 | 3.25mm | -3% | M12 |

</div>

## 硬件集成

### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG12-IMX577C-MIPI/SG12-IMX577C-MIPI_Block_Diagram.png" alt="SG12-IMX577C-MIPI 框图"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C 地址配置

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | I2C 地址 |
|-----------|-------------|
| EEPROM | 0xA0 (8 位地址) |
| 传感器 | 0x34 (8 位地址) |

</div>

### 连接器引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO | 引脚 名称 | 类型 | 说明 |
|----|----------------|-----------------|-----------------------------------------------------------------|
| 1 | E2PPROM-WP | INPUT:3.3V | 写保护 用于 E2PROM<br/>L：禁止写入；H：允许写入 |
| 2 | FSTROBE | OUTPUT:1.8V | 触发输出 |
| 3 | / | | |
| 4 | GND | POWER | |
| 5 | GPO | OUTPUT:1.8V | 保留输出 |
| 6 | XVS | I/O:1.8V | 在双传感器应用中用作垂直同步信号 |
| 7 | GND | POWER | |
| 8 | D1_N | OUTPUT | MIPI |
| 9 | D1_P | OUTPUT | MIPI |
| 10 | GND | POWER | |
| 11 | D2_N | OUTPUT | MIPI |
| 12 | D2_P | OUTPUT | MIPI |
| 13 | GND | POWER | |
| 14 | CLK_N | OUTPUT | MIPI |
| 15 | CLK_P | OUTPUT | MIPI |
| 16 | GND | POWER | |
| 17 | D3_N | OUTPUT | MIPI |
| 18 | D3_P | OUTPUT | MIPI |
| 19 | GND | POWER | |
| 20 | D4_N | OUTPUT | MIPI |
| 21 | D4_P | OUTPUT | MIPI |
| 22 | GND | POWER | |
| 23 | SENSOR-RESETn | INPUT:1.8V | 传感器复位信号 |
| 24 | CAM-CLK | 时钟信号 | 时钟信号输入 (模组默认内置晶振) |
| 25 | GND | POWER | |
| 26 | CAM-SCL | I/O:3.3V | 上拉 10K（地址：7'HA 或 0X1A） |
| 27 | CAM-SDA | I/O:3.3V | 上拉 10K（地址：7'HA 或 0X1A） |
| 28 | GND | POWER | |
| 29 | VCC-3.3V | POWER | |
| 30 | VCC-3.3V | POWER | |

</div>

### 上电时序

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_power_sequence.png" alt="电源时序图"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info 上电要求
SG12-IMX577C-MIPI 摄像头对上电时序要求较少，只需确保电源稳定后再拉起 RESET 信号。
:::

## 安装指南

### 快速设置流程

:::note 安装步骤
1. 将 FPC 线缆连接到摄像头
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

<!-- ### 开发套件

<div style={{display: 'flex', justifyContent: 'center'}}>

| 名称 | 兼容开发套件 | 最大摄像头输入数 |
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
| 1 | JP5.1.2 (L4T R35.4.1) | Jetson Orin Nano/NX 开发套件 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack5.1.2/Jetson-Orin-Nano-DK_IMX662_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.1 (L4T R36.4) | Jetson Orin Nano/NX 开发套件 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX662_JP6.1_L4TR36.4.2) |

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

SG12-IMX577C-MIPI 支持两种 FPC 排线类型，以满足不同连接需求：

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
