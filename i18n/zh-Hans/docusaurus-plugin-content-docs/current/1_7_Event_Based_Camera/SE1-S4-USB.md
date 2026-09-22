---
sidebar_position: 1
title: SE1-S4-USB
---

# SE1-S4-USB

## 概述

<div className="row">
 <div className="col col--12">
 SE1-S4-USB 是 SENSING、PROPHESEE 和 Sony 联合开发的 EVS 摄像头。该摄像头采用 SONY IMX646 EVS 图像传感器，并通过 USB3.0 接口输出。它完全兼容 MetaVision 软件，广泛应用于工业检测、辅助驾驶和航空等领域。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/Event_Based_Camera.png" alt="Event_Based_Camera"
 style={{maxWidth: '30%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-col-133.html" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>了解更多</strong>
 </a>
</div>

## 技术规格

### 主要特性

| Characteristic | 值 |
|----------------|-------|
| 传感器 | Sony IMX646 (HD) |
| 图像尺寸 | 1/2.5 inch CMOS |
| 分辨率 (px) | 1280 x 720 |
| 像元尺寸 (μm) | 4.86 x 4.86 |
| 接口 (数据输出) | USB 3.0 |
| 延迟 (μs) | 800 μs @ 1000lux |
| 摄像头最大带宽 (Gbps) | 1.6 |
| 触发输入 | 4引脚 连接器 |
| 动态范围 (dB) | > 110* |
| 摄像头功耗 (W) | < 3 |
| 同步输入/输出 | 4引脚 连接器 |
| 标称对比度阈值 (%) | 25 |
| 读出吞吐量 | 20Mevents/s（默认值，可配置） |
| 料号 | SE1-S4-USB-HxxxC<br/>SE1-S4-USB-HxxxM<br/>xxx 表示 HFOV，C 表示 CS 镜头接口，M 表示 M12 镜头接口 |
| 尺寸 | 35mm x 35mm x 35mm |
| 重量 | 80g（不含光学镜头） |
| DFOV | 详情请咨询制造商 |
| VFOV | 详情请咨询制造商 |
| 电源 | 通过 USB |

\*5 lux 是保证成像特性的最低照度条件。
基于 0.08 lux 低照度截止测量可达到 DR >120 dB（该条件下不保证成像特性）。


### 尺寸图

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/SE1-S4-USB-HxxxM.png" alt="SE1-S4-USB 尺寸"
 style={{maxWidth: '100%', height:'auto'}} />
 <p>SE1-S4-USB-HxxxM</p>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/SE1-S4-USB-HxxxC.png" alt="SE1-S4-USB 尺寸"
 style={{maxWidth: '100%', height:'auto'}} />
 <p>SE1-S4-USB-HxxxC</p>
</div>


## 型号和镜头选项

<div style={{display: 'flex', justifyContent: 'left'}}>

| 料号 | 型号 | HFOV | VFOV | F.No | EFL | 镜头接口 |
|----------------|---------------------|------|------|------|------|---------------|
| 190300-0003 | SE1-S4-USB-H70FM | 66 | 35 | F1.6 | 5.8 | M12 |
| 190300-0002 | SE1-S4-USB-H110FM | 110 | 58 | F1.6 | 3.55 | M12 |
| 190300-0601 | SE1-S4-USB-H130LM | 131 | 72 | F2.8 | 2.8 | M12 |
| 190300-0005 | SE1-S4-USB-H40LC | 44 | 25 | F1.8 | 8 | CS |
| 190300-0004 | SE1-S4-USB-H130LC | 134 | 72 | F2.0 | 2.6 | CS |

</div>

## 硬件集成

<!-- ### 系统架构

<div style={{textAlign: 'center'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/1_7_Event_Based_Camera/SE1-S4-USB_Block_Diagram.png" alt="SE1-S4-USB 框图"
 style={{maxWidth: '100%', height:'auto'}} />
</div> -->

### 4 引脚连接器定义

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/SE1-S4-USB_Back_View.png" alt="SE1-S4-USB 背面视图"
 style={{maxWidth: '40%', height:'auto'}} />
 <p>背面视图</p>
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 序号 | 颜色 | 定义 | I/O | 电压 | 备注 |
|-----|--------|---------------------|-------|---------|------------------------------------------------------------------|
| 1 | 红色 | 外部触发 | 输入 | 3.3V | EXTRIG 引脚变为高电平或低电平时，外部触发功能会输出带时间戳的事件时序。 |
| 2 | 黄色 | 时钟同步 | I/O | 3.3V | 时间戳时钟同步 |
| 3 | 黑色 | GND | GND | / | |
| 4 | 白色 | 像素矩阵复位 | 输入 | 3.3V | 像素复位功能会根据亮度变化复位像素 |

</div>


## 安装指南

### 快速设置
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/EVS_Installation_Jetson.png" alt="SE1-S4-USB 在 Jetson 上的安装"
 style={{maxWidth: '50%', height:'auto'}} />
 <p>示例: SE1-S4-USB 在 NVIDIA Jetson 上的安装</p>
</div>

:::note 安装步骤
1. 将 USB 线缆连接到 SE1-S4-USB
2. 将摄像头安装到 NVIDIA Jetson Orin Nano/NX 开发套件
3. 启动系统并配置软件驱动
:::

<!-- <div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/EVS_Installation_Jetson.png" alt="SE1-S4-USB 在 Jetson 上的安装"
 style={{maxWidth: '40%', height:'auto'}} />
 <p>SE1-S4-USB 在 Jetson 上的安装</p>
</div> -->

## 软件与驱动支持

### 快速入门

如需开始使用 SE1-S4-USB 事件相机，请参考以下集成指南：

<!-- - [快速入门指南](./Getting_Started/index) -->
- [NVIDIA Jetson 平台集成](./Getting_Started/NVIDIA_Jetson_Platform_Integration)
- [Windows 系统集成](./Getting_Started/Window_System_Integration)
- [Ubuntu 系统集成](./Getting_Started/Ubuntu_System_Integration)

<!-- :::tip
- 所有产品页面均提供可下载的数据手册、3D 模型和 SerDes 配置文件
- 所有摄像头均支持 GMSL/GMSL2 协议，可实现可靠的高速数据传输
- 表格支持横向滚动，便于在移动设备上查看
::: -->


## 配件

<!-- ### 摄像头 Mount Adapters -->

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/CS_to_M12mount.png" alt="CS to M12mount"
 style={{maxWidth: '20%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 料号 | 说明 | 数量 |
|------------|-------------|-----------|
| 311060-0055 | CS to M12mount | 1 |

</div>

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_7_Event_Based_Camera/EVS_tripod_mounting.png" alt="EVS Tripod Mounting"
 style={{maxWidth: '20%', height:'auto'}} />
</div>

<div style={{display: 'flex', justifyContent: 'center'}}>

| 料号 | 说明 | 数量 |
|------------|-------------|-----------|
| 311099-0019 | EVS 三脚架安装支架 | 1 |
| 311070-0049 | M3*8 内六角圆柱头螺钉 | 2 |

</div>
