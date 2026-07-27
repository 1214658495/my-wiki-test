---
sidebar_position: 2
---

# SG3-ISX031C-MIPI 摄像头

## 概述

<div className="row">
 <div className="col col--12">
 SG3-ISX031C-MIPI-Hxxx 摄像头搭载 SONY ISX031 CMOS 图像传感器（2.95MP）和内置车规级图像信号处理器（ISP）。该摄像头可通过 YUV422 输出提供出色图像质量，并兼容多种 SOC 平台。
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031.png" alt="SG3-ISX031C-MIPI"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-114.html?recommendFromPid=0&fromMid=1563" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 技术规格

### 主要特性

| 参数 | 值 |
|-------------------|-------------------------|
| 传感器 | SONY 2.95MP ISX031 RGGB |
| ISP | 内置 |
| 图像尺寸 | 1/2.42 inch CMOS |
| 输出分辨率 | 1920×1536 pixels |
| 帧率 | 最高 60fps |
| 像元尺寸 | 3.0μm × 3.0μm |
| HDR 支持 | 是 |
| 输出格式 | MIPI/YUV422-8bit |
| 供电 | 3.3V |
| 电流 | < 500mA @3.3VDC |
| 接口 | FPC |
| 连接器 | FH67-30S-0.5SV |
| 工作温度 | -20°C to +75°C |
| 性能温度 | -20°C to +60°C |
| 尺寸 | W: 20mm, L: 35mm, H: 16.2mm |
| 重量 | < 50g |

### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_Hardware.png" alt="SG3-ISX031C-MIPI 尺寸"
 style={{maxWidth: '80%', height:'auto'}} />
</div>

## 硬件集成

### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_diagram.png" alt="SG3-ISX031C-MIPI 框图"
 style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />

### I2C 地址配置

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | I2C 地址 |
|-----------|-------------|
| EEPROM | 0xA0 (8 位地址) |
| 传感器 (ISX031) | 0x34 (8 位地址) |

</div>

### 连接器引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>

| 引脚 | 名称 | 类型 | 说明 |
|-----|------|------|-------------|
| 1 | E2PROM-WP | INPUT: 3.3V/1.8V | E2PROM 写保护<br/>L：禁止写入；H：可写入 |
| 2 | BOOT-CTL | INPUT: 3.3V/1.8V | 启动控制<br/>H：不加载 NOR FLASH<br/>L：加载 NOR FLASH（默认） |
| 3 | ERROR | OUTPUT | 故障检测信号<br/>H：正常<br/>L：错误 |
| 4 | GND | POWER | 地 |
| 5 | FRSYNC | I/O: 1.8V | 帧同步信号 |
| 6 | GPIO3 | I/O: 1.8V | 预留 |
| 7 | GND | POWER | 地 |
| 8 | D0_N | OUTPUT | MIPI 数据通道 0 (负) |
| 9 | D0_P | OUTPUT | MIPI 数据通道 0 (正) |
| 10 | GND | POWER | 地 |
| 11 | D1_N | OUTPUT | MIPI 数据通道 1 (负) |
| 12 | D1_P | OUTPUT | MIPI 数据通道 1 (正) |
| 13 | GND | POWER | 地 |
| 14 | CLK_N | OUTPUT | MIPI 时钟 (负) |
| 15 | CLK_P | OUTPUT | MIPI 时钟 (正) |
| 16 | GND | POWER | 地 |
| 17 | D2_N | OUTPUT | MIPI 数据通道 2 (负) |
| 18 | D2_P | OUTPUT | MIPI 数据通道 2 (正) |
| 19 | GND | POWER | 地 |
| 20 | D3_N | OUTPUT | MIPI 数据通道 3 (负) |
| 21 | D3_P | OUTPUT | MIPI 数据通道 3 (正) |
| 22 | GND | POWER | 地 |
| 23 | POW_RES | INPUT: 3.3V/1.8V | 电源 复位信号 |
| 24 | SENSOR-CLK | INPUT: 24MHz (1.8V) | 时钟信号输入<br/>(模组内置 24MHz 时钟) |
| 25 | GND | POWER | 地 |
| 26 | CAM-SCL | I/O: 3.3V | I2C 时钟 (上拉 10K)<br/>FRSYNC:L → I2C 地址 0x1A<br/>FRSYNC:H → I2C 地址来自 Flash |
| 27 | CAM-SDA | I/O: 3.3V | I2C 数据 (上拉 10K)<br/>FRSYNC:L → I2C 地址 0x1A<br/>FRSYNC:H → I2C 地址来自 Flash |
| 28 | GND | POWER | 地 |
| 29 | VCC-3.3V | POWER | 3.3V 供电 |
| 30 | VCC-3.3V | POWER | 3.3V 供电 |

</div>

### 上电时序

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_2_MIPI_CSI_Camera/mipi_csi_camera_ISX031_power_sequence.png" alt="电源时序图"
 style={{maxWidth: '80%', height:'auto'}} />
</div>
<br />

:::info 上电要求
SG3-ISX031C-MIPI 摄像头对上电时序要求较少，只需确保所有电源稳定后再拉起 RESET 信号。
:::

## 镜头选项

<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | EFL | 最大光学畸变 | 镜头安装 |
|-------|------|------|------|-----|------------------------|------------|
| SG3-ISX031C-MIPI-H30X | 30° | 24° | F1.6 | 10.96mm | -2.5% | M12 |
| SG3-ISX031C-MIPI-H60F | 60.35° | 47° | F1.6 | 5.8mm | -11.5% | M12 |
| SG3-ISX031C-MIPI-H100F1 | 100.4° | 78° | F1.6 | 3.55mm | -49% | M12 |
| SG3-ISX031C-MIPI-H190X | 196° | 154.5° | F2.0 | 1.51mm | -154.2% | M12 |

</div>

## 包装内容

<div className="row">
 <div className="col col--6">
 :::note 标准配置
 - SG3-ISX031C-MIPI-Hxxx 摄像头
 - FPC cable
 :::
 </div>
 <div className="col col--6">
 :::note 可选组件
 - Jetson Orin Nano/NX 开发套件
 :::
 </div>
</div>

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

### 驱动下载

:::info 驱动安装
1. 请根据 JetPack 版本选择合适的驱动包
2. 将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载软件包
3. 按照驱动包中的安装说明完成安装
:::

<div style={{display: 'flex', justifyContent: 'center'}}>

| # | JetPack 版本 | 下载链接 |
|---|-----------------|---------------|
| 1 | JP5.1.2 (L4T R35.4.1) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack5.1.2/Jetson-Orin-Nano-DK_ISX031_YUV_JP5.1.2_L4TR35.4.1) |
| 2 | JP6.1 (L4T R36.4) | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG_MIPI_CAM/JetPack6.1/Jetson-Orin-Nano-DK_ISX031_YUV_JP6.1_L4TR36.4.2) |

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

SG3-ISX031C-MIPI 支持两种 FPC 排线类型，以满足不同连接需求：

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
