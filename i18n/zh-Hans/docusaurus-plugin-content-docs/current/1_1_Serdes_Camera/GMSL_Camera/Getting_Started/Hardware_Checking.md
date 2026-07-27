---
sidebar_position: 1
title: 硬件检查
description: GMSL 摄像头安装前硬件组件检查指南
---

# 硬件检查

安装前，请检查以下硬件组件，确保摄像头能够获得最佳性能。

## 摄像头 连接器

该摄像头采用 **Amphenol Fakra Z-Code** 连接器，面向车载应用，具备高速数据传输能力。

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_connector.png"
 alt="Fakra Z-Code 连接器"
 width="400"
 />
 <p className="image-caption">Amphenol Fakra Z-Code 连接器</p>
</div>

### 连接器规格

<table className="specs-table">
 <thead>
 <tr>
 <th colSpan="2">引脚定义</th>
 <th colSpan="2">工作电压</th>
 <th>电流</th>
 <th>接口</th>
 </tr>
 <tr>
 <th>PIN</th>
 <th>说明</th>
 <th>最高 (V)</th>
 <th>Min (V)</th>
 <th>(mA)</th>
 <th>类型</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1</td>
 <td>Video+</td>
 <td>16</td>
 <td>9</td>
 <td>&lt;400mA@12V</td>
 <td rowSpan="2">FAKRA (Z Code)</td>
 </tr>
 <tr>
 <td>2</td>
 <td>GND</td>
 <td>0</td>
 <td>0</td>
 <td>0</td>
 </tr>
 </tbody>
</table>

**主要特性:**
- 车规级 Z-Code 接口
- 高速数据传输
- 可靠锁止结构
- IP67 防水等级

## 摄像头镜头安装方式

我们的 GMSL 摄像头支持两种镜头安装系统：

### AA（主动对准）镜头安装

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_AA_Structure_intro.png"
 alt="AA Mount Structure"
 width="600"
 />
 <p className="image-caption">AA 安装结构和装配流程</p>
</div>

AA 安装采用先进工艺，可确保精确的光学对准，从而获得更好的图像质量。

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_AA_lens.png"
 alt="AA Mounted Lens"
 width="400"
 />
 <p className="image-caption">AA 安装摄像头镜头</p>
</div>

**主要优势：**
- 精密光轴对准
- 增强图像质量
- 适用于高精度应用

### S-Mount 镜头安装

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_S_mount_Structure_intro.png"
 alt="S-Mount Structure"
 width="600"
 />
 <p className="image-caption">S-Mount 结构和组件</p>
</div>


S-Mount 提供传统螺纹机械安装方案，并支持多种尺寸选项。

#### 可选 S-Mount 型号

| 型号 | 螺纹尺寸 | 应用 |
|:------|:------------|:-------------|
| **M12** | M12×0.5 | 标准车载和安防摄像头 |
| **M16** | M16×0.5 | 中画幅镜头、工业成像 |

<!-- **主要优势：**
- 高性价比方案
- 可现场更换的镜头
- 提供丰富的镜头选择
- 简单的装配流程 -->

#### 镜头安装方式对比

| 特性 | AA Mount | S-Mount |
|:--------|:---------|:---------|
| 安装方式 | 主动对准 | 螺纹机械安装 |
| 光学精度 | 高 | 标准 |
| 成本效率 | 成本较高 | 成本较低 |
| 装配流程 | 复杂 | 简单 |
| 维护 | 专业 | 简单 |

### 带加热功能的摄像头

根据环境要求，我们的摄像头可选择是否集成加热系统。加热系统为可选配置，可按需添加到摄像头中。

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_Heating_intro.png"
 alt="带加热功能的摄像头"
 width="400"
 />
 <p className="image-caption">带集成加热系统的摄像头</p>
</div>

<div className="image-container">
 <img
 src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Heating_Effect_Comparison.png"
 alt="加热效果对比"
 width="600"
 />
 <p className="image-caption">摄像头 加热效果对比: 加热前（左）与加热后（右）</p>
</div>

**主要特性:**
- 镜头外壳内置加热元件（可选）
- ADC 温度控制
- 3 分钟内有效去除结冰/结霜
- 在极寒条件下保持清晰视野
<!-- - 工作温度范围：-40°C 至 +50°C -->



<!-- :::tip Selection Guidance
根据以下条件选择合适的摄像头配置：
1. 安装现场的环境条件
2. 工作温度范围要求
3. 成像应用的精度要求
::: -->
