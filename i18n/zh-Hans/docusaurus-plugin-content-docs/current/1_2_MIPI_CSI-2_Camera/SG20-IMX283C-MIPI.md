---
sidebar_position: 5
sidebar_label: SG20-IMX283C-MIPI（已下架）
---

# SG20-IMX283C-MIPI 摄像头

:::warning 产品已下架（停止销售）
**SG20-IMX283C-MIPI 已下架，不再对外销售。** 官网产品页面已下线，因此本页不再提供购买链接。

本文档继续保留，作为存量用户的技术支持资料。如需新项目选型或替代型号建议，请联系 SENSING 技术支持。
:::

## 概述

<div className="row">
 <div className="col col--12">
 <p>SG20-IMX283C-MIPI 是一款高性能摄像头模组，采用 Sony IMX283 CMOS 图像传感器，可提供 20.3MP 分辨率和出色图像质量。该摄像头适用于无人机航拍、远程监控系统和精密工业检测等应用，通用设计便于集成到包括 NVIDIA Jetson 在内的多种 SOC 平台。</p>
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI.png" alt="SG20-IMX283C-MIPI"
 style={{maxWidth: '30%', height:'auto'}} />
</div>

## 技术规格

### 主要特性

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | Sony 20.3MP IMX283 RGGB |
| ISP | N/A |
| Chip size | 16.226 mm (H) × 12.654 mm (V) |
| 图像尺寸 | Diagonal 15.86mm (类型 1) |
| 分辨率 | 5472H×3648V@20fps RAW12<br/>5472H×3648V@25fps RAW10<br/>3840H×2160V@50fps RAW10<br/>2736H×1824V@50fps RAW12 (2/2 binning)<br/>1824Hx1216V@60fps RAW12 (3/3 binning) |
| 像元尺寸 | 2.40um*2.40um |
| HDR 支持 | N/A |
| 输出格式 | MIPI RAW10/RAW12 |
| 供电 | 3.3V |
| 电流 | < 500mA @3.3VDC |
| 摄像头接口 | FPC |
| 连接器 | AFC07-S22ECA-00 |
| 工作温度 | -20 to +75°C |
| 性能温度 | -20 to +60°C |
| 尺寸 | W: 40mm, L: 40mm, H: 10.1mm |
| 重量 | < 400g |

### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI_Dimensions.png" alt="SG20-IMX283C-MIPI 尺寸"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

## 镜头选项

SG20-IMX283C-MIPI 支持多种 C-Mount 镜头，以满足不同视场角需求：

<div className="lens-options">
<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | FOV（H×V） | F 数 | 焦距 | 畸变参数 | 安装类型 |
|-------|-----------|----------|--------------|------------|------------|
| SG20-IMX283C-MIPI-H15B | 15° × 10° | F2.2 | 50mm | 0.1% | C-mount |
| SG20-IMX283C-MIPI-H30B | 30° × 25° | F2.0 | 25mm | 0.25% | C-mount |
| SG20-IMX283C-MIPI-H60B | 57.6° × 40.5° | F2.8 | 12mm | 0.5% | C-mount |
| SG20-IMX283C-MIPI-H90B | 95° × 73° | F2.5 | 6mm | 0.23% | C-mount |

</div>
</div>

## 硬件集成

### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG20-IMX283C-MIPI/SG20-IMX283C-MIPI_Block_Diagram.png" alt="SG20-IMX283C-MIPI 框图"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C 地址配置

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | I2C 地址 |
|-----------|-------------------|
| EEPROM | 0xA0 (8 位地址) |
| 传感器 | 0x20 (8 位地址) |

</div>

### 连接器引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>

| 引脚 | Signal | 说明 |
|-----|--------|-------------|
| 1, 4, 7, 10, 13, 16, 19 | GND | 地 |
| 2 | D1 N | MIPI 数据通道 1 负 |
| 3 | D1 P | MIPI 数据通道 1 正 |
| 5 | D2 N | MIPI 数据通道 2 负 |
| 6 | D2 P | MIPI 数据通道 2 正 |
| 8 | CLK N | MIPI 时钟 负 |
| 9 | CLK P | MIPI 时钟 正 |
| 11 | D3 N | MIPI 数据通道 3 负 |
| 12 | D3 P | MIPI 数据通道 3 正 |
| 14 | D4 N | MIPI 数据通道 4 负 |
| 15 | D4 P | MIPI 数据通道 4 正 |
| 17 | CAM-PWDN | 掉电 (1.8V or 3.3V/IO) |
| 18 | CAM-CLK | 摄像头时钟（默认：内部 24MHz） |
| 20 | CAM-SCL | I²C 时钟 (3.3V/IO) |
| 21 | CAM-SDA | I²C Data (3.3V/IO) |
| 22 | VCC-3.3V | 供电 |

</div>

<!-- ### 上电时序

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_power_sequence.png" alt="电源时序图"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

:::info 上电要求
SG20-IMX283C-MIPI 摄像头对上电时序要求较少，请确保所有电源稳定后再拉起 RESET 信号。
::: -->


## 安装与设置

### 硬件连接

:::note 安装步骤
1. 连接 appropriate FPC 线缆到摄像头模组
2. 将摄像头牢固安装到 Jetson Orin Nano/NX 开发套件上
3. 启动系统并继续安装驱动
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


### 驱动下载

:::info 驱动安装 Process
1. 请根据 JetPack 版本选择合适的驱动包
2. 将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载软件包
3. 按照驱动包中的安装说明完成安装
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack 版本 | 兼容 平台 | 下载链接 |
|---|-----------------|--------------------|---------------|
| 1 | JP6.1 (L4T R36.4) | Jetson Orin Nano/NX 开发套件 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX283_JP6.1_L4TR36.4.2) |

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

SG20-IMX283C-MIPI 支持多种 FPC 排线类型，以满足不同连接需求：

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_FPC.png" alt="FPC 线缆选项"
 style={{maxWidth: '70%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 线缆类型 | 料号 | 规格 |
|------------|-------------|---------------|
| 22-引脚 FPC | AFC07-S22ECA-00 | 0.5mm 间距 |

</div>

<!-- ## 文档与资源

:::info 技术文档
《SG20-IMX283C-MIPI 摄像头 数据手册》已不再通过官网提供下载。如需完整规格书和集成指南，请联系 SENSING 技术支持获取。
::: -->
