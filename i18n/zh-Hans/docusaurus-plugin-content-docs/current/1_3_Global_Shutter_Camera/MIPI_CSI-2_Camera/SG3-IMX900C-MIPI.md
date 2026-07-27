---
sidebar_position: 1
---

# SG3-IMX900C-MIPI 摄像头

## 概述

<div className="row">
 <div className="col col--12">
 <p>SG3-IMX900C-MIPI 摄像头搭载 SONY IMX900 CMOS 图像传感器，分辨率为 3.2MP。这款高性能摄像头最高可输出 30fps 的 2064×1552 图像，并支持 HDR。产品预装并调焦 M12 镜头，兼容多种 SoC 平台，适用于高级成像应用。</p>
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031.png" alt="SG3-IMX900C-MIPI"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-229.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 技术规格

### 主要特性

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | SONY 3.2MP IMX900 RGGB |
| ISP | / |
| 图像尺寸 | 1/3.1 inch CMOS |
| 曝光模式 | 全局快门 |
| 输出像素 | 2064H×1552V |
| 帧率 | 30fps |
| 像元尺寸 | 2.25μm×2.25μm |
| HDR 支持 | 是 |
| 输出数据 | MIPI/RAW12 |
| 供电 | 3.3V |
| 电流 | < 350mA @3.3VDC |
| 摄像头接口 | FPC |
| 连接器 | FH67-30S-0.5SV |
| 工作温度 | -30 to +75°C |
| 性能温度 | -10 to +60°C |
| 存储温度 | -40 to +85°C |
| 尺寸 | W: 30mm, L:35mm, H:19.4mm |
| 重量 | < 50g |

### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG3-IMX900C-MIPI/SG3-IMX900C-MIPI_Dimensions.png" alt="SG3-IMX900C-MIPI 尺寸"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

### 镜头选项

<div className="lens-options">
<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 光学畸变参数 | 镜头安装 |
|-------|------|------|------|-----|-------------------|------------|
| SG3-IMX900C-MIPI-H60T | 69.8° | 55.4° | F2.2 | 3.24mm | 0.16% | M12 |
| SG3-IMX900C-MIPI-H120T | 121.4° | 89.2° | F2.2 | 2.27mm | -73.5% | M12 |

</div>
</div>

## 硬件集成

### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/SG3-IMX900C-MIPI/SG3-IMX900C-MIPI_Block_Diagram.png" alt="SG3-IMX900C-MIPI 框图"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

### I2C 地址配置

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | I2C 地址 |
|-----------|-------------------|
| EEPROM | 0xA0 (8 位地址) |
| 传感器 | 0x6C (8 位地址) |

</div>

### 连接器引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>

| NO | 引脚 名称 | 类型 | 说明 |
|----|---------------|-----------------|-------------|
| 1 | FRSYNC1 | INPUT:1.8V | 帧同步信号 1 |
| 2 | FRSYNC2 | INPUT:1.8V | 帧同步信号 2 |
| 3 | GPIO0 | OUTPUT: | GPIO 信号 |
| 4 | GND | POWER | 地 |
| 5 | XHS | I/O:1.8V | 主模式下的水平同步信号 |
| 6 | XVS | I/O:1.8V | 主模式下的垂直同步信号 |
| 7 | GND | POWER | 地 |
| 8 | D0_N | OUTPUT | MIPI |
| 9 | D0_P | OUTPUT | MIPI |
| 10 | GND | POWER | 地 |
| 11 | D1_N | OUTPUT | MIPI |
| 12 | D1_P | OUTPUT | MIPI |
| 13 | GND | POWER | 地 |
| 14 | CLK_N | OUTPUT | MIPI |
| 15 | CLK_P | OUTPUT | MIPI |
| 16 | GND | POWER | 地 |
| 17 | D2_N | OUTPUT | MIPI |
| 18 | D2_P | OUTPUT | MIPI |
| 19 | GND | POWER | 地 |
| 20 | D3_N | OUTPUT | MIPI |
| 21 | D3_P | OUTPUT | MIPI |
| 22 | GND | POWER | 地 |
| 23 | POW_RES | INPUT:3.3V/1.8V | 电源-on 复位信号 |
| 24 | SENSOR-CLK | INPUT:54MHZ(1.8V) | 时钟信号输入 (模组内置振荡器) |
| 25 | GND | POWER | 地 |
| 26 | CAM-SCL | I/O:3.3V | UP 1K(FRSYNC:I2C 地址 7' 36) |
| 27 | CAM-SDA | I/O:3.3V | UP 1K(FRSYNC:I2C 地址 7' 36) |
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
SG3-IMX900C-MIPI 摄像头对上电时序要求较少，只需确保电源稳定后再拉起 RESET 信号。
:::

## 安装指南

### 快速设置

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

:::info
SG3-IMX900C-MIPI 摄像头驱动包正在开发中，后续将发布更新。
:::

<!--
### 驱动仓库

请从我们的 GitHub 仓库获取最新摄像头驱动:

<div style={{marginBottom: '1rem'}}>
 <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
 <span style={{fontWeight: 'bold'}}>SENSING-Technology 摄像头驱动</span>
 </a>
</div>

### 驱动下载

:::info 驱动安装
1. 请根据 JetPack 版本选择合适的驱动包
2. 将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载软件包
3. 按照驱动包中的安装说明完成安装
:::

<div style={{display: 'flex', justifyContent: 'left'}}>

| # | JetPack 版本 | 兼容 平台|下载链接 |
|---|-----------------|--------------------------|---------------|
| 1 | JP6.1 (L4T R36.4) |NVIDIA Jetson Orin Nano/Orin NX 开发套件| [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_IMX678_JP6.1_L4TR36.4.2) |

</div>


:::note JetPack 信息
NVIDIA JetPack 是 Jetson 开发板的官方 SDK，包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及开发工具。 JetPack 版本对应特定的 L4T（Linux for Tegra）版本：

- JetPack 6.2: L4T R36.4.3
- JetPack 6.1: L4T R36.4
- JetPack 6.0: L4T R36.3
- JetPack 5.1.2: L4T R35.4.1


更多信息请访问 [NVIDIA Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

-->

## 配件

### FPC 线缆选项

SG3-IMX900C-MIPI 支持两种 FPC 排线类型，以满足不同连接需求：

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
下载 完整[SG3-IMX900C-MIPI-HXXX 摄像头 数据手册](https://sensing-world.com/en/h-pd-40.html?recommendFromPid=0&fromMid=1563#) 用于 详细规格 和 集成指南.
::: -->
