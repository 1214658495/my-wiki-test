---
sidebar_position: 3
title: "SYW2G & SYF2G（2MP 全局曝光）"
---

# SYW2G & SYF2G（2MP 全局曝光）

## 概述

<div className="row">
  <div className="col col--12">
    SYW2G（HFOV120°）与 SYF2G（HFOV200°）摄像头专为具身智能应用开发设计，可用于人形机器人头部、躯干等位置的感知与识别。两款均采用 2MP 全局曝光传感器和内置 ISP，经过专业图像调试，通过 GMSL2 输出 1920(H) × 1200(V)、30fps 的未压缩 YUV 图像。
    两者的差异在于镜头视场角、对焦距离、景深和整机高度，均采用 25 × 25mm 的紧凑设计。
  </div>
</div>

<div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', textAlign: 'center'}}>
  <figure style={{flex: '1 1 240px', minWidth: 0, margin: 0}}>
    <div className="monocular-overview-photo">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G.png?x-oss-process=image/format,webp" alt="SYW2G" style={{width: '88%', translate: '5% -2%'}} />
    </div>
    <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYW2G（HFOV 120°）</figcaption>
  </figure>
  <figure style={{flex: '1 1 240px', minWidth: 0, margin: 0}}>
    <div className="monocular-overview-photo">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYF2G/SYF2G.png?x-oss-process=image/format,webp" alt="SYF2G" style={{width: '91.5%', translate: '4.5% -1%'}} />
    </div>
    <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYF2G（HFOV 200°）</figcaption>
  </figure>
</div>

## 关键特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>特性：</strong><br/>
    • 内置 ISP，输出未压缩 YUV 数据<br/>
    • 全局曝光<br/>
    • 低延迟<br/>
    • 支持外部触发<br/>
    • 多摄像头同步
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>应用：</strong><br/>
    • 具身智能<br/>
    • 人形机器人感知与识别
  </div>
</div>

## 快速开始

### 规格参数

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数 | 值 |
|------|----|
| 传感器 | 2MP 3µm RGB 传感器 |
| ISP | 内置 |
| 输出像素 | 1920(H) × 1200(V) |
| 帧率 | 1920(H) × 1200(V) @ 30fps |
| HDR 支持 | 不支持 |
| 曝光 | 全局曝光 |
| 输出数据 | 未压缩 YUV422 @ 8bit |
| 串行器 | MAXIM MAX96717 |
| 摄像头接口 | GMSL2（6Gbps） |
| 功耗 | 1.7W |
| 连接器 | Amphenol Fakra（Z Code） |
| 工作温度范围 | -40～+85℃ |
| 存储温度范围 | -40～+95℃ |
| 尺寸 | W: 25mm，L: 25mm，H: 29.81mm（SYW2G）/ 30.42mm（SYF2G） |
| 重量 | 小于 50g |

</div>

### 尺寸

<figure style={{textAlign: 'center', margin: '0 0 0.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G_Dimensions.png?x-oss-process=image/format,webp" alt="SYW2G 机械尺寸，前视图、侧视图和后视图" style={{maxWidth: '100%', height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYW2G</figcaption>
</figure>
<figure style={{textAlign: 'center', margin: '0 0 0.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYF2G/SYF2G_Dimensions.png?x-oss-process=image/format,webp" alt="SYF2G 机械尺寸，前视图、侧视图和后视图" style={{maxWidth: '100%', height: 'auto'}} />
  <figcaption style={{marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)', fontSize: '0.875rem'}}>SYF2G</figcaption>
</figure>

> **图纸备注**　尺寸单位为 mm。方向图标表示图像正向，安装结构和公差见图纸。

### 硬件概览

#### 系统框图

SYW2G 与 SYF2G 使用相同的系统框图。

<img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/SYW2G/SYW2G_System_Diagram.png?x-oss-process=image/format,webp&v=ea8e131bbeaf" alt="SYW2G 与 SYF2G 系统框图" style={{width: '100%', maxWidth: 900, height: 'auto'}} />

#### 数据链路

传感器 → 内置 ISP → MAX96717 串行器 → GMSL2 → 主机端解串器 / SoC。

#### 帧同步使用要求

| 功能 | 控制方式 |
|------|----------|
| 传感器帧同步 | MAX96717 MFP7 |
| ISP 复位 | MAX96717 MFP0 |

两款均支持外部触发与多摄像头同步。触发波形、时序及寄存器配置请联系 SENSING 获取与目标平台匹配的说明。

#### I2C 地址信息

<div style={{display: 'flex', justifyContent: 'center'}}>

| 组件 | 型号 | I2C 地址（8bit） | 备注 |
|------|------|-----------------|------|
| 串行器 | MAX96717 | 0x80 | GMSL2，6Gbps |
| ISP | — | 0xDA | 由 MAX96717 MFP0 控制复位 |
| 传感器 | — | 0x20 | 由 MAX96717 MFP7 控制帧同步 |

</div>

### 镜头规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| 型号 | HFOV | VFOV | F.No | 对焦距离 | 景深范围 | 防水等级 |
|------|------|------|------|----------|----------|----------|
| SYW2G | 120° | 71° | 2.0 | 0.8m | 0.4m - INF | IP67 |
| SYF2G | 200° | 120° | 2.0 | 0.4m | 0.2m - INF | IP67 |

</div>

## 摄像头使用

### 与客户自研平台集成

使用自有解串器的平台，集成前需确认 GMSL2 6Gbps 兼容性、供电要求、I2C 地址映射及 YUV422 输出配置。

1. 获取摄像头寄存器配置和 I2C 通信说明：[获取摄像头信息](/zh-Hans/docs/1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information)。
2. 初始化串行器 / 解串器链路，将主机 CSI 输入配置为 1920(H) × 1200(V) @ 30fps、YUV422 8bit。
3. 按配套初始化时序配置 MFP0 的 ISP 复位，以及 MFP7 的外部帧同步。
4. 在目标平台验证图像方向、图像输出及多摄像头同步效果。
