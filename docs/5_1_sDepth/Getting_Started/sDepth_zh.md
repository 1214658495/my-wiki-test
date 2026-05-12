---
sidebar_position: 2
title: sDepth 快速入门
---

# sDepth 快速入门

## 概述

sDepth 利用尖端神经网络从立体图像中生成高保真深度图，即使在苛刻的条件下也能始终如一地提供可靠的深度估计。与传统方法相比，sDepth 在纹理贫乏区域和低光环境中实现卓越的精度。这些优势使其成为自主机器人、增强现实（AR）和大规模 3D 重建等应用的理想选择，在这些应用中，强大的深度感知至关重要。

sDepth SDK 提供了一套通用 AI 驱动的深度模式，使您能够微调深度感测配置以满足您的特定应用需求。每种模式都在空间保真度、传感范围和计算效率之间进行独特的权衡，使您能够优先考虑准确性、扩展范围、提高处理速度或根据操作要求实现量身定制的平衡。

## 关键特性

- **AI 驱动的深度估计**：基于神经网络的深度估计，优于传统方法
- **稳定性能**：在纹理贫乏区域和低光环境中保持可靠精度
- **灵活模式**：多种深度模式，支持可配置的权衡
- **广泛应用**：自主机器人、AR、3D 重建

## 支持平台

- NVIDIA Jetson AGX Orin
- NVIDIA Jetson AGX Thor

---

## 实时推理性能

以下性能数据在室内条件下测量，使用随机采集的场景，实时推理时间超过 3 分钟。数值代表平均资源利用率和帧率。

:::note
在 Jetson AGX Thor（128GB，Jetpack 7.0）上，相机输出限制为 30FPS，这将模型推理速度限制在 30FPS。
:::

### 嵌入式设备性能

| 相机 | 边缘设备 | 转接板 | FPS | CPU 平均利用率 (%) | GPU 平均利用率 (%) |
|------|-----------|--------|-----|---------------------|---------------------|
| S36 | Jetson AGX Orin（32GB，Jetpack 6.2） | 10路 GMSL | 24 | 38.45 | 93.43 |
| S36 | Jetson AGX Orin（32GB，Jetpack 6.2） | 10路 GMSL | 10 | 15.42 | 46.73 |
| S36 | Jetson AGX Thor（128GB，Jetpack 7.0） | 8路 GMSL | 30 | 18.35 | 36.67 |
| S36 | Jetson AGX Thor（128GB，Jetpack 7.0） | 8路 GMSL | 10 | 7.17 | 15.24 |

---

## 垂直测距精度

测试在室内环境中使用激光测距仪进行。每个深度距离测量 10 次并与实际值进行比较。

:::note
所有测试均在 Jetson AGX Orin（32GB，Jetpack 6.2）搭载 S36 相机、24FPS 室内条件下进行。
:::

---

## 显示设置

运行 SDK 后，您可以通过键盘按键切换显示模式。模式切换不影响精度，仅影响视觉显示效果。

### 可视化页面切换

| 按键 | 功能 |
|------|------|
| `q` / `ESC` | 退出深度模式 |
| `d` / `D` | 切换深度图/视差图 |

### 颜色映射

| 按键 | 模式 | 说明 |
|------|------|------|
| `1` | 线性归一化 + TURBO | 适用于短距离 |
| `2` | 幂函数归一化 + TURBO | 增强画面颜色层次，适用于长距离 |

### 参数调整（仅在模式 2 下有效）

| 按键 | 功能 |
|------|------|
| `+` / `=` | 增加伽马值（远处的层次感减弱） |
| `-` | 降低伽马值（增强远处的深度感） |

---

## sDepth SDK

sDepth SDK 提供标定参数加载和深度图生成等核心能力，支持离线测试和实时相机采集场景，大幅降低双目深度算法的开发与集成门槛。

### SDK 下载

<!-- | 资源 | 链接 |
|------|------|
| sDepth SDK | [GitHub - SENSING-Technology/sDepth](https://github.com/SENSING-Technology/sDepth) | -->

| 资源 | 链接 |
|------|------|
| sDepth SDK | SDK 下载链接正在维护中，即将更新。 |



:::caution
SDK 下载链接正在维护中，即将更新。
:::

### 文件结构

```
sDepth/
├── CMakeLists.txt
├── README.md
├── config/
│   ├── stereo_calibration.json
│   └── sDepth.enc
├── include/
│   ├── opencv4/
│   └── SG_StereoDepth_api.h
├── lib/
│   ├── opencv/
│   └── libsDepth.so
└── samples/
    └── main.cpp
```

---

## 快速开始

### 1. 安装依赖

```bash
sudo apt install -y cmake build-essential v4l-utils nvidia-jetpack
```

### 2. 编译

```bash
cd sDepth
mkdir build
cd build
cmake ..
make -j$(nproc)
```

### 3. 运行

可执行文件 `sDepth_Demo` 生成在 `sDepth/bin` 目录中。

---

## 参数说明

| 参数 | 说明 | 是否必填 |
|------|------|----------|
| `-mode` | SDK 运行模式：`0`=离线模式（立体图像转深度），`1`=在线 YUV 预览，`2`=在线 RAW 预览 | 是 |
| `-left` | 离线模式：左目图像文件路径；在线模式：左目摄像头设备号 | 是 |
| `-right` | 离线模式：右目图像文件路径；在线模式：右目摄像头设备号 | 是 |
| `-width` | 输入图像/视频流的宽度像素值（需与输入源分辨率一致） | 是 |
| `-height` | 输入图像/视频流的高度像素值（需与输入源分辨率一致） | 是 |
| `-key` | 模型许可证文件 | 是 |
| `-enc` | 深度模型文件（默认：`sDepth/config/sDepth.enc`） | 否 |
| `-json` | 相机标定参数文件（默认：`sDepth/config/stereo_calibration.json`） | 否 |

---

## 使用示例

### 离线模式

输入立体图像并输出深度图：

```bash
./sDepth_Demo -mode 0 -left left.jpg -right right.jpg -width 1920 -height 1080 -key <keyfile_name>
```

### 在线模式

实时预览深度视频流：

```bash
./sDepth_Demo -mode 1 -left /dev/video0 -right /dev/video1 -width 1920 -height 1080 -key <keyfile_name>
```
