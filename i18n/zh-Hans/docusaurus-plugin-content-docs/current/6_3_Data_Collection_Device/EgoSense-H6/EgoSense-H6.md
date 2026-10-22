---
sidebar_position: 1
title: EgoSense H6 头戴式六目数采设备
description: 森云智能自研 EgoSense H6 头戴式六目第一人称数据采集设备的产品介绍、硬件参数、摄像头参数与软件架构
keywords: [EgoSense H6, EgoSense, 头戴式, 六目, 第一人称, Egocentric, 数据采集, 具身智能, MCAP, IMU]
---

# EgoSense H6 头戴式六目数采设备

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_hero.png" alt="EgoSense H6 头戴式六目数采设备" style={{width: '100%', maxWidth: '560px', borderRadius: '8px'}} />
</div>

## 概述

**EgoSense H6** 是森云智能自研的**头戴式六目第一人称（Egocentric）数据采集设备**。设备前置一组双目摄像头，左右两侧各配置两路单目摄像头，共 **6 路全局曝光摄像头**，组合视场角达 **270°**；同时集成**六轴 IMU** 与**麦克风**，可同步记录佩戴者第一视角的图像、头部姿态与音频数据。

采集数据以 **MCAP** 格式脱机录制到设备内置的 Micro SD 卡，无需外接电脑即可独立采集；配套 Windows 上位机 **EGOTool** 用于实时预览与录制控制，录制文件可直接在 **Foxglove Studio** 中回放查看。

:::note 为什么选择第一人称数采
固定机位/动捕实验室看不到手部细节、脱离真实场景；真机遥操作成本高、产能低；仿真数据存在 Sim-to-Real 鸿沟。EgoSense H6 以轻量化头戴形态，把采集带进家庭、工厂、医院、商场等真实环境，兼顾**第一人称视角、多传感器同步与规模化复制**。
:::

## 产品特点

- **第一人称视角，与人眼一致**：记录佩戴者真实看到的画面，同时保留手眼协作与感知决策过程。
- **6 路全局曝光，270° 超广角**：前置双目 + 左右侧各两路单目，视角覆盖更全，运动场景下无果冻效应（[查看覆盖范围视频](#六路画面覆盖范围)）。
- **多模态同步**：图像、IMU（200 Hz）、麦克风音频同步采集，摄像头支持内、外触发同步（[查看双目同步实测](#双目同步精度)）。
- **佩戴即走，脱机录制**：电池供电，续航约 3 小时，数据直接录入 Micro SD 卡，无需摄像头阵列与专用场地。
- **开放的数据格式**：录制文件为 `.mcap`，H.265 编码，可直接用 Foxglove Studio 打开，也便于接入自有数据处理流程。
- **支持定制**：整机、主板与摄像头均可按需定制。

## 应用场景

- **具身智能数据采集**：以第一视角记录真实操作过程，为模仿学习与世界模型提供高质量训练数据。
- **人形机器人训练**：采集人类示范动作与视觉数据，用于机器人技能学习。
- **多模态感知研究**：视觉、惯性、音频多模态数据同步分析。
- **行为分析**：记录真实场景中的人员操作流程与行为习惯。

## 产品外观

<div style={{display: 'flex', justifyContent: 'center'}}>

| 正面 | 侧面 |
|:-:|:-:|
| ![EgoSense H6 正面](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_front.png) | ![EgoSense H6 侧面](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_side.png) |

</div>

## 六路画面覆盖范围

<div style={{background: '#fff', borderRadius: 8, padding: 12, marginBottom: 16}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/%E7%9B%B8%E6%9C%BA%E6%A8%A1%E7%BB%84%E5%80%BE%E8%A7%92%E8%AE%BE%E8%AE%A1.png" alt="EgoSense H6 摄像头倾角设计" style={{display: 'block', width: '100%'}} />
</div>

各摄像头的安装角度不同：**中间两颗**（前置双目）为 **0° 倾角**，平视前方；**其余四颗**均**向下倾斜 20°**，在操作过程中让佩戴者的双手与工作台面始终保持在画面内。

下面是佩戴 EgoSense H6 进行桌面操作时实际录制的六路画面。画面 1、2 为前置双目，画面 3 ~ 6 为左右两侧的单目摄像头。六路视野相互重叠，组合覆盖约 270°，佩戴者的双手、桌面物体和周围环境都能完整进入画面。

<video src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source/%E8%A6%86%E7%9B%96%E7%9A%84%E5%8C%BA%E5%9F%9F.mp4" controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />

## 双目同步精度

为直观验证前置双目的同步效果，我们用 LED 计时面板（每 1 ms 点亮下一颗 LED）作为拍摄对象，并在 Foxglove Studio 中逐帧对比双目两路画面（middle-1 / middle-2）：

- **画面一致**：同一帧中，两路摄像头拍到的 LED 点亮位置完全相同，说明两路曝光时刻的差异小于 LED 面板 1 ms 的刻度。
- **时间戳一致**：同一帧两路图像的时间戳相差不到 30 µs（视频中抽查的帧分别相差 14 ~ 27 µs）。

<video src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source/%E7%9B%B8%E6%9C%BA%E5%90%8C%E6%AD%A5%E7%B2%BE%E5%BA%A6-%E7%A7%91%E5%AD%A6%E7%9A%84%E8%A7%86%E9%A2%91%E8%AF%81%E6%98%8E.mp4" controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />

## 核心参数

| 参数类别 | 参数项 | 参数值 |
|-|-|-|
| **物理参数** | 尺寸 | 268 × 223 × 92 mm |
| | 重量 | 350 g |
| | 电池续航 | 约 3 小时 |
| | 存储容量 | 256 GB（Micro SD 卡） |
| | 通信方式 | Wi-Fi、USB Type-C |
| **输出数据** | 图像数据 | RGB 图像（6 路） |
| | 惯性测量数据 | IMU 数据 |
| | 音频数据 | 麦克风音频 |
| | 录制格式 | `.mcap`（视频 H.265 编码） |
| **摄像头参数** | 摄像头数量 | 6 路（前置双目 + 左右侧各 2 路单目） |
| | 分辨率 | 1600 × 1300 |
| | 帧率 | 30 fps（60 fps 可选） |
| | 组合视场角 | 270° |
| | 曝光方式 | 全局曝光（Global Shutter） |
| | 安装倾角 | 中间两颗（前置双目）0°，其余四颗向下倾斜 20° |
| **IMU 参数** | 类型 | 六轴（6-axis） |
| | 采样率 | 200 Hz |

## 硬件参数

### 主控参数

| 类型 | 参数项 | 参数值 |
|-|-|-|
| **SoC** | 平台 | Rockchip RK3588 |
| | CPU | 4 × ARM Cortex-A76 + 4 × ARM Cortex-A55 |
| | VPU | 编码能力 8K@30fps，H.265 / H.264 |
| | ISP | 图像处理能力 32MP@30fps |
| **内存与存储** | DDR | 4 GB |
| | eMMC | 32 GB |
| | Micro SD | 最高 256 GB，写入速率 > 50 MB/s |
| **通信接口** | 摄像头接口 | 3 × MIPI CSI-2（4 lane） |
| | USB | 1 × Type-C |
| | 扬声器接口 | 2 路，PDM / I2S |
| | 麦克风接口 | 2 路，PDM / I2S |
| | 无线 | Wi-Fi 6（支持 AP + STA 模式，上下行带宽 ≥ 100 Mbps）、蓝牙 5.3 |
| **电源** | 电池 | 10000 mAh，卡扣式磁吸电池 |
| | 充电接口 | Type-C，支持 PD 快充 |
| **电气特性** | 典型功耗 | < 10 W |
| | 工作温度 | -20 ~ 60 ℃ |
| **结构** | 散热方式 | 风扇散热 |
| | 防护等级 | IP52 |
| **按键与指示** | 采集键 | 开始 / 停止采集（带语音提示） |
| | 音量 + / - | 调节扬声器提示音音量 |
| | LED 指示灯 | 显示电源、采集等状态 |

### 摄像头参数

| 参数项 | 参数值 |
|-|-|
| 传感器 | OG02B10 |
| 分辨率 | 1600 × 1300 |
| 帧率 | 30 fps |
| 曝光方式 | 全局曝光（Global Shutter） |
| 输出格式 | RAW 彩色 |
| 镜头视场角 | H160° × V130° |
| 功耗 | < 0.5 W |
| 内参存储 | EEPROM |
| 重量 | < 30 g |
| 工作温度 | -10 ~ 60 ℃ |
| 数据同步 | 支持内、外触发同步 |

## 软件架构

EgoSense H6 运行 **Rockchip Linux**，软件分为驱动层与应用层：

| 层级 | 模块 |
|-|-|
| **应用层** | 数据存储（Data Storage）、时间同步（Time Sync）、实时预览（Viewer）、工具（Tools）、人机交互（HMI） |
| **驱动层** | 图像传感器配置、SerDes 配置、IMU 配置、音频配置、通信配置、存储配置 |
| **操作系统** | Rockchip Linux |

### 配套软件

| 软件 | 运行平台 | 用途 |
|-|-|-|
| **EGOTool** 上位机 | Windows | 连接设备、六路实时预览、录制控制、编码参数设置、采集信息录入、查看设备状态 |
| **Foxglove Studio** | Windows / macOS / Linux | 打开并回放 `.mcap` 录制文件，查看图像与 IMU 数据 |

详细操作步骤请参阅 [EgoSense H6 使用说明](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual)。

## 数据格式：MCAP

EgoSense H6 的录制文件采用 **MCAP** 格式。MCAP 是由 Foxglove 推出的开源、面向机器人/自动驾驶领域的模块化容器文件格式，专门用来记录多路传感器数据：多路摄像头图像、IMU 等数据按时间戳打包存入同一个文件，便于回放与分析。

- 与 ROS bag（`.bag` / `.db3`）用途类似，但读写性能更好，跨语言支持更完善（C++ / Python / Rust / Go 均有官方 SDK）。
- 是 ROS 2 rosbag2 的默认存储格式，也是 Foxglove Studio 原生支持的格式。
- 一个 `.mcap` 文件即是一段时间内设备"看到和感知到"的全部数据，可直接用于算法调试、数据标注与问题复现。

EgoSense H6 录制文件包含以下数据话题：

| 话题 | 数据类型 | 说明 |
|-|-|-|
| `/camera/middle-1/h265`、`/camera/middle-2/h265` | `foxglove.CompressedVideo` | 前置双目摄像头（H.265） |
| `/camera/left-1/h265`、`/camera/left-2/h265` | `foxglove.CompressedVideo` | 左侧两路摄像头（H.265） |
| `/camera/right-1/h265`、`/camera/right-2/h265` | `foxglove.CompressedVideo` | 右侧两路摄像头（H.265） |
| `/imu` | `foxglove.IMU` | 六轴 IMU 数据 |

可在 [使用说明 · 附件下载](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#附件下载) 获取示例录制数据。

## 定制化服务

森云智能提供 EgoSense 系列的整机、主板与摄像头定制服务：

- **多目配置**：可由单目、双目摄像头组合为 2 / 3 / 4 / 5 / 6 目 EgoSense 方案。
- **可选摄像头**：OG02B10、AR0234、ISX031、OV9281 等，提供单目与双目形态，详见 [Ego 视角定制化双目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) 与 [Ego 视角定制化单目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Mono-Camera)。
- **软件支持**：提供驱动程序、应用程序与 ISP 调试服务。
- **组合方案**：可与 UMI 夹爪（Gripper）、手环（Wrist）或背包式采集设备组合，实现头部与手部数据的同步采集，详见 [UMI 定制化摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/UMI-Camera)。

如需定制，请联系我们的销售团队。

## 联系我们

:::note 联系方式
- **销售咨询**：[Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **技术支持**：[support@sensing-world.com](mailto:support@sensing-world.com)
- **电话**：+86-755-28990915
- **官网**：[www.sensing-world.com](https://sensing-world.com/)

**工作时间**：周一至周五，9:00 - 18:00（GMT+8）
:::
