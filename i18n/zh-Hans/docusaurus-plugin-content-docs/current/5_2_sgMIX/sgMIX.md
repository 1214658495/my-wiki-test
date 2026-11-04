---
sidebar_position: 2
title: sgMIX 2.0 快速入门
---

# sgMIX 2.0 快速入门

## 概述

sgMIX 是森云面向摄像头集成与调试提供的控制 SDK 和工具集，支持设备信息与标定数据读取、视频采集与预览、图像控制、畸变校正，以及适配型号的固件或 ISP 调参文件更新。

本文帮助你完成安装、配置和首次出图。完整的型号支持条件、命令参数与 API 说明，请参阅 [GitHub 中文 README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme_cn.md)。

:::info 版本与适用环境
本页对应 sgMIX 2.0。当前仓库说明主要面向 **Jetson AGX Thor DK / JetPack 7.2.0**，支持 V4L2 和 SIPL 驱动框架；RAW 摄像头也可通过 Argus 采集。SDK、摄像头驱动和 BSP 须使用匹配版本，其他平台或版本请先向 FAE 确认。
:::

## 功能概览

| 功能 | 支持内容 | 使用条件与说明 |
| --- | --- | --- |
| 设备与镜头信息 | SN、存储的分辨率 / 帧率 / 图像格式，FOV、焦距、光圈等 | 取决于型号和已烧录数据；存储配置不等于当前采集参数 |
| 相机标定读取 | 内参、畸变系数、可选的右目内参、双目外参及重投影误差 | 读取已有标定，数据需通过对应 CRC 校验 |
| IMU 标定读取 | 噪声、偏置、标定矩阵、相机与 IMU 外参和时间偏移 | 需已烧录有效数据；不提供实时 IMU 采集 |
| 图像基本控制 | 上下翻转、左右镜像、测试图输出 | 按型号和访问通路支持；图像效果需配合预览确认 |
| 采集与预览 | V4L2 / Argus / SIPL 取帧、实时预览，SIPL 多端口及双通道采集 | 双通道独立读取，不自动同步配对或计算深度 |
| 帧信息与 EBD | 帧序号、时间戳，以及驱动提供的嵌入式数据和曝光信息 | 数据内容取决于摄像头、驱动和当前模式 |
| 畸变校正 | Pinhole / 等距 Fisheye 图像校正 | 需 VPI、有效内参及匹配的采集尺寸 |
| 固件与调参文件更新 | 适配型号的固件升级、NVIDIA ISP / NITO 文件更新、运行固件版本查询 | 文件须匹配硬件与框架；RAW 的 OTA 主要指匹配的调参文件更新 |

## 支持型号与功能

以下按 [中文 README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme_cn.md) 的型号矩阵整理，功能列名称与顺序沿用 README。**●** 表示文档列出支持（仍需满足使用条件），`-` 表示原表未标注支持。宽表可横向滚动查看。

### V4L2 / Argus

YUV 摄像头使用 V4L2 采集，RAW 摄像头使用 Argus 采集；信息读取和控制使用 V4L2 配置。

| | 读模组基本信息 | 读模组镜头信息 | 读模组SN码 | 读模组标定数据 | 镜像翻转控制 | 测试模式 | OTA | 视频流获取 | 帧信息解析 | 畸变矫正 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SG3S-ISX031C-GMSL2F-Hxxx | ● | ● | ● | ● | ● | ● | 固件 | ● | ● | ● |
| SG3S-ISX031C-GMSL2-Hxxx | ● | ● | ● | ● | ● | ● | 固件 | ● | ● | ● |
| SG3S11AFLK | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| SHW5G | ● | ● | ● | ● | ● | ● | ISP / NITO | ● | - | ● |
| S36 | ● | ● | ● | ● | ● | ● | 固件 | ● | - | ● |
| S56 | ● | ● | ● | ● | ● | ● | ISP / NITO | ● | - | ● |
| SHF3L / SHF3H | ● | ● | ● | ● | ● | ● | ● | ● | ● | ● |

### SIPL

所有型号均需匹配的驱动和 JSON 配置；多通道摄像头需额外选择内部通道。

| | 读模组基本信息 | 读模组镜头信息 | 读模组SN码 | 读模组标定数据 | 镜像翻转控制 | 测试模式 | OTA | 视频流获取 | 帧信息解析 | 畸变矫正 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| SG3S-ISX031C-GMSL2F-Hxxx | ● | ● | ● | ● | ● | ● | 固件 | ● | - | ● |
| SG3S-ISX031C-GMSL2-Hxxx | ● | ● | ● | ● | ● | ● | 固件 | ● | - | ● |
| SG3S11AFLK | ● | ● | ● | ● | ● | ● | ● | ● | - | ● |
| SHW5G | ● | ● | ● | ● | ● | ● | NITO | ● | ● | ● |
| S36 | ● | ● | ● | ● | ● | ● | 固件 | ● | - | ● |
| S56 | ● | ● | ● | ● | ● | ● | NITO | ● | ● | ● |
| SDT2BCO1 | ● | ● | ● | ● | - | - | ● | ● | - | ● |
| SHF3L / SHF3H | ● | ● | ● | ● | ● | ● | ● | ● | - | ● |

**使用条件：**

- **信息与标定**：仅能读取设备中有效的数据；右目内参、外参、镜头及 IMU 数据按实际烧录情况返回。
- **图像控制与固件升级**：SIPL 受 Serializer、Sensor 映射及活动通道限制；S36 双 ISX031 通路需匹配 MAX9295D 配置，不能仅凭型号判断所有功能可用。
- **EBD**：V4L2 表中的支持指适配 ISX031 首行数据提取；SIPL 的原始 EBD 和解析字段由驱动提供，表中的 `-` 不代表无法获取任何帧元数据。
- **RAW 与 S56C**：SHW3G 在 README 正文中另有采集和调参文件更新说明；S56C 的 SIPL 配置使用 `S56` 型号。其他型号与详细限制请查阅完整 README。

## 1. 准备与安装

### 获取并安装 SENSING 官方驱动

先按实际使用的驱动框架选择对应驱动包。sgMIX 中文 README 提供以下两类入口，均面向 **Jetson AGX Thor Devkit + TRD1_G2A 转接板、JetPack 7.2 / L4T R39.2**：

| 驱动框架 | 对应驱动包与链接 | 安装后检查 |
| --- | --- | --- |
| V4L2 | [TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2) | 按驱动说明加载对应摄像头配置，确认出现实际的 `/dev/videoN` 节点；RAW 摄像头使用 Argus 时，还需对应的 Argus 运行环境 |
| SIPL | [TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) | 准备对应摄像头的 JSON、HAL，以及匹配的 `libnvsipl.so`、`libnvsipl_query.so` 运行库 |

进入对应目录后，按其中的 README 完成驱动安装与摄像头配置，再安装 sgMIX SDK。驱动包须与实际摄像头、转接板和 BSP 匹配；其他硬件或系统版本请在 [SENSING 驱动仓库](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers) 中查找对应目录，或向 FAE 确认。

### 获取并安装 sgMIX SDK

以下两种方式任选其一，均在 Jetson 目标设备安装，文件名以实际获取版本为准。

**方式一：已有安装包**

将从 [sgMIX 仓库](https://github.com/SENSING-Technology/sgMIX) 或 FAE 获取的 `.deb` 包复制到目标设备，进入安装包所在目录后执行：

```bash
sudo apt install ./SENSING_sgMIX_2.0.0.deb
```

**方式二：通过 Git 获取并安装**

克隆仓库，拉取 Git LFS 管理的安装包与库文件，再安装仓库中的 `.deb` 包：

```bash
git clone https://github.com/SENSING-Technology/sgMIX.git
cd sgMIX
sudo apt install git-lfs
git lfs install
git lfs pull
sudo apt install ./SENSING_sgMIX_2.0.0.deb
```

两种方式安装后，SDK 均位于 `/opt/sgMIX`，包含头文件、库、示例和配置工具。可查询已安装版本：

```bash
dpkg-query -W -f='${Version}\n' sgmix-sdk
```

## 2. 生成摄像头配置

安装或升级 SDK 后，手动运行配置工具：

```bash
sudo /opt/sgMIX/bin/sgmix-config.py
```

工具检测平台后，按提示选择框架和实际摄像头型号，确认并保存到 `/opt/sgMIX/etc/sgmix.conf`。

| 框架 | 配置内容 | 后续选择设备的方式 |
| --- | --- | --- |
| V4L2 | 为实际使用的 `/dev/videoN` 节点指定型号 | `--v4l2 --video /dev/videoN` |
| SIPL | 选择 JSON 和配置名，为端口指定实际型号并启用链路 | `--sipl --cam N` |

### V4L2 配置步骤

1. 在配置工具中选择 **V4L2** 框架。
2. 从已检测到的视频节点中选择实际连接的 `/dev/videoN`，例如 `/dev/video6`。
3. 选择该节点对应的实际摄像头型号；有多个节点时，逐个配置需要使用的节点。
4. 输入 `s` 查看待保存配置，按提示确认保存。终端显示配置已保存后，再运行采集工具。

### SIPL 配置步骤

1. 在配置工具中选择 **SIPL** 框架，输入驱动包提供的摄像头 JSON 路径，并选择其中匹配的配置名称。
2. 查看解析出的端口列表，选择实际连接的 CAM 端口，例如 `7` 表示工具列表中的 CAM7。
3. 为端口选择实际摄像头型号，配置工具据此启用对应链路；重复配置其他需要使用的端口。未使用的端口应保持禁用。
4. 核对端口与型号，输入 `s` 保存并退出。随后使用 `--cam N` 选择已启用的端口；双通道采集还需指定 `--channel` 或 `--stereo`。

配置工具不启动摄像头，也不通过 I²C 探测自动识别实际型号。SIPL 的 CAM 编号从 0 开始，应以配置工具显示的端口映射为准；选择 CAM 不会自动启用已关闭的链路。

## 3. 编译示例工具

以下命令均在安装 SDK 的 ARM64 目标设备执行。安装编译与预览依赖，并在用户目录构建：

```bash
sudo apt install build-essential cmake pkg-config \
  libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev
cmake -S /opt/sgMIX -B "$HOME/sgmix-samples-build"
cmake --build "$HOME/sgmix-samples-build" -j6
cd "$HOME/sgmix-samples-build"
```

默认生成以下四个工具及八个 `basic_*` 最小示例：

| 工具 | 用途 |
| --- | --- |
| `camera_data_tool` | 读取设备信息、SN、图像配置、相机标定和 IMU 标定 |
| `camera_frame_capture` | V4L2 / Argus / SIPL 采集、实时预览和畸变校正 |
| `camera_image_controls` | 预览并验证翻转、镜像、测试图接口，结束时尝试恢复初值 |
| `camera_ota` | 适配型号的固件升级、ISP / NITO 文件更新及运行固件版本查询 |

四个工具均支持 `--help`。后续命令在构建目录执行，设备编号按实际配置替换，访问权限不足时使用 `sudo`。预览需在板端可用的桌面显示环境运行；Argus 还需匹配的 NVIDIA GStreamer 插件。

## 4. 读取信息与首次预览

### V4L2：YUV 摄像头

```bash
# 读取 SN 和相机标定
./camera_data_tool --v4l2 --video /dev/video6 get-sn
./camera_data_tool --v4l2 --video /dev/video6 get-calibration

# 实时预览，按 Ctrl+C 停止
./camera_frame_capture --v4l2 --video /dev/video6 --view
```

### Argus：RAW 摄像头

```bash
./camera_frame_capture --v4l2 --video /dev/video0 --argus --view
```

此工具将 `/dev/videoN` 的数字后缀作为 Argus `sensor-id`。使用前须核对 BSP 中两者是否对应同一摄像头；自行开发时，SDK 的 Argus ID 需要显式指定。

### SIPL：单通道与双通道

```bash
# 已启用的 CAM7，单通道摄像头
./camera_data_tool --sipl --cam 7 get-calibration
./camera_frame_capture --sipl --cam 7 --view

# 已启用的 CAM4，双通道摄像头
./camera_frame_capture --sipl --cam 4 --stereo --view

# 只预览 CAM4 内部的通道 1
./camera_frame_capture --sipl --cam 4 --channel 1 --view
```

`--cam` 选择连接端口，`--channel` 选择该摄像头内部的采集通道。多通道摄像头须显式指定 `--channel` 或 `--stereo`，物理左右目与通道的对应关系由驱动定义。

省略 `--view` 时，默认每通道采集 30 帧并打印日志；可用 `--frames 100` 指定帧数。工具不保存图像文件。双通道独立取帧，不自动按曝光时间同步配对，也不计算深度。

## 5. 常用功能

### 畸变校正

在预览命令后添加 `--correct`，例如：

```bash
./camera_frame_capture --v4l2 --video /dev/video6 --view --correct
./camera_frame_capture --sipl --cam 4 --stereo --view --correct
```

校正需要 SDK 启用 VPI、设备具有匹配的 VPI 运行库，以及目标通道有效的 Pinhole 或等距 Fisheye 内参，采集尺寸须与标定尺寸一致。当前 JP7.2 SDK 使用 VPI 4.1.3，校正输出为 NV12；双通道分别校正，不执行双目极线校正。

### 图像控制验证

```bash
./camera_image_controls --v4l2 --video /dev/video6 image
./camera_image_controls --sipl --cam 4 --channel 0 image
```

程序依次验证翻转、镜像和测试图，提供实时预览并尝试恢复初始设置。`PASS` 表示接口、读回和恢复检查通过，画面效果需人工观察。

### 固件与 ISP 更新

使用 `camera_ota`，按实际型号选择匹配的升级文件，并在操作前停止其他摄像头应用及所有采集任务。ISX031 / S36 固件升级后须给摄像头断电重上电，再查询实际运行版本；双目需确认左右目版本。RAW 摄像头的 NITO 更新与摄像头固件升级应区分处理，详细步骤见 [中文 README](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme_cn.md)。

对于支持运行固件版本查询的型号，使用已保存的配置执行：

```bash
# V4L2：查询指定视频节点对应摄像头的运行固件版本
./camera_ota --v4l2 --video /dev/video7 --get-version

# SIPL：查询已启用 CAM7 的运行固件版本
./camera_ota --sipl --cam 7 --get-version
```

设备编号按实际连接替换。V4L2 S36 每次仅查询指定节点对应的一目，需分别查询左右视频节点；SIPL S36 一次返回 `channel0`、`channel1` 的运行版本。此命令不查询 NITO 版本。

## 6. 常见问题

| 现象 | 排查方向 |
| --- | --- |
| SIPL 提示需要显式 `siplChannel` | 为多通道摄像头添加 `--channel 0`、`--channel 1` 或 `--stereo` |
| 普通预览正常，添加 `--correct` 后失败 | 核对内参、标定尺寸、VPI 和标定存储访问通路 |
| SN / 标定读取出现 CRC 错误 | 核对实际型号、存储通路和烧录内容；能出图不代表标定数据有效 |
| `all` 命令部分读取失败 | 按各项结果排查；IMU 标定未烧录不等于视频采集失败 |
| 预览无法启动 | 检查 GStreamer 编译依赖、运行插件和板端显示环境 |
| SIPL owner lock 权限错误 | 核对锁文件权限和工具运行身份，避免混用普通用户与 `sudo` |

## 开发与完整参考

二次开发使用 C++17 和 `sgmix::CameraControl`，典型采集流程为 `SG_Init → SG_StartCapture → SG_GetFrame → SG_StopCapture`。IMU 相关公开接口用于读取已存储的标定数据。

- [中文完整说明](https://github.com/SENSING-Technology/sgMIX/blob/master/Readme_cn.md)：型号条件、配置、完整命令、升级和已知问题。
- [最小调用示例](https://github.com/SENSING-Technology/sgMIX/tree/master/sample/basic)：单项采集、标定读取和图像控制。
- [公开 API](https://github.com/SENSING-Technology/sgMIX/blob/master/include/SG_CameraControl.h) 与 [数据类型](https://github.com/SENSING-Technology/sgMIX/blob/master/include/SG_CameraTypes.h)：接口原型、参数及使用约束。
