---
sidebar_position: 2
sidebar_label: 使用说明
title: EgoSense H6 使用说明
description: EgoSense H6 头戴式六目数采设备的上电、录制、EGOTool 上位机连接、数据导出与 Foxglove Studio 回放操作指南
keywords: [EgoSense H6, 使用说明, 用户手册, EGOTool, Foxglove, MCAP, SD 卡]
---

import AnnotatedImage from '@site/src/components/AnnotatedImage';

export const IMG = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img';
export const SRC = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source';

# EgoSense H6 使用说明

本说明面向设备操作者。只需一台 **Windows 电脑**（安装 EGOTool 上位机与 Foxglove Studio）即可完成采集、查看与导出数据的全部流程，**无需任何命令行、Python 或 Linux 操作**。

## 产品清单

| 序号 | 物品 |
|-|-|
| 1 | EgoSense H6 设备（出厂已插入一张 Micro SD 卡） |
| 2 | EgoSense 磁吸电池 |
| 3 | 充电器 |
| 4 | 充电线 |
| 5 | 电池充电配件 |

:::tip 另需自备
- Windows 电脑，安装 **EGOTool** 与 **Foxglove Studio**
- USB Type-C 数据线（用于连接电脑实时预览）
- 读卡器（用于导出数据）
:::

## 认识设备

<div className="row">
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_led_recording.jpg`}
  alt="EgoSense H6 录制按键与指示灯"
  items={[
    {at: [59.2, 50.4], label: [50, 22], text: '录制按键'},
    {at: [64.4, 53.2], label: [80, 78], text: '指示灯'},
  ]}
/>

</div>
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_photo_rear.jpg`}
  alt="EgoSense H6 设备后部接口"
  items={[
    {at: [38.5, 64.1], label: [26, 86], text: 'SD 卡槽'},
    {at: [52.8, 62.7], label: [66, 86], text: 'USB Type-C 接口'},
  ]}
/>

</div>
</div>

| 部件 | 说明 |
|-|-|
| **六目摄像头** | 朝前的两个镜头（双目）+ 左右两侧各两个镜头，共采集 6 路视频。佩戴时请保持镜头清洁、不被遮挡。 |
| **头部姿态传感器（IMU）** | 记录头部朝向与转动，无需操作。 |
| **录制按键** | 位于机身右侧，用于开始 / 停止录制，并有语音提示。 |
| **指示灯** | 位于录制按键旁，通电后亮起；**录制中为紫色，停止录制后为白色**。 |
| **SD 卡槽** | 位于设备后部，录制数据保存在 Micro SD 卡上。出厂已插入一张 SD 卡。 |
| **USB Type-C 接口** | 位于设备后部，连接 Windows 电脑后配合 EGOTool 实时预览与控制。 |
| **磁吸电池** | 卡扣式磁吸电池，扣上即上电。 |

设备的运行状态（电量、温度、SD 卡用量等）可在 EGOTool 上位机中查看。

## SD 卡选型与准备

设备出厂已附带一张 SD 卡，**录制时必须插入 SD 卡**。如需自行更换，请注意：

- **格式**：格式化为 **exFAT**。
- **容量**：建议 **≤ 256 GB**。
- **选型**：市面上假卡、低配卡较多，**假卡或不兼容卡会导致设备识别不到 SD 卡、插卡后不录制**。
  - ✅ 实测可用：**移速（MoveSpeed）A1 V30**、**Biwin** 等，建议通过正规渠道购买。
  - ❌ 已知不兼容：部分 **SanDisk A1 / V10** 消费级卡无法在本设备上工作。
- **验证真实容量（建议）**：新卡上机前，先在 Windows 上用 **H2testw** 检测一遍，确认是真实容量，避免虚标卡导致录制文件损坏。

## 上电、录制与断电

1. 确认 SD 卡已插入。
2. 扣上磁吸电池，设备上电，指示灯亮起。
3. （可选）用 Type-C 数据线连接 Windows 电脑，打开 EGOTool 实时预览画面，见 [连接 EGOTool 上位机](#连接-egotool-上位机)。
4. 按下录制按键，听到语音提示「**开始录制**」，**指示灯变为紫色**，开始录制。也可以点击 EGOTool 中的「开始录像」按钮。
5. 采集结束后，再次按下录制按键，听到语音提示「**结束录制**」，**指示灯变为白色**。待录制保存完成后，再取下电池。

<div className="row">
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_led_recording.jpg`}
  alt="录制中指示灯为紫色"
  caption="录制中"
  items={[{at: [64.4, 53.2], label: [80, 78], text: '指示灯为紫色'}]}
/>

</div>
<div className="col col--6">

<AnnotatedImage
  src={`${IMG}/ego6_led_stopped.jpg`}
  alt="结束录制后指示灯为白色"
  caption="结束录制"
  items={[{at: [65.2, 53.8], label: [80, 78], text: '指示灯为白色'}]}
/>

</div>
</div>

:::warning 务必先停止录制，再断电
请先结束录制、待文件保存完成后再取下磁吸电池。**切勿在录制过程中直接断电**，否则正在写入的数据可能丢失。
:::

## 充电

- 电池满电续航约 **3 小时**。
- 当电池电量**特别低**时，直接用 Type-C 充电器连接设备**无法充电**。请将电池取下，使用**电池充电配件**单独充电。

## 连接 EGOTool 上位机

EgoSense H6 通过 Windows 上位机 EGOTool 进行实时预览与录制控制。

### 安装 EGOTool

- 安装包：**`EGOTool_V1.0.3.zip`**（下载见 [附件下载](#附件下载)）。
- 下载后直接解压，无需安装，双击 **`EGOTool.exe`** 即可运行。

### 配置电脑网络

设备通过 USB Type-C 在电脑上虚拟出一个网口，需要为该网口配置与设备同网段的静态 IP。

1. 给设备扣上电池通电，用 Type-C 数据线连接设备与电脑。
2. 打开 Windows **设置 → 网络和 Internet → 以太网**，找到新出现的网络。
3. 将该网口的 IP 分配改为**手动**，并按下表配置：

   | 项目 | 设置值 |
   |-|-|
   | IPv4 地址 | `192.168.140.21`（同网段未被占用的地址即可，不能与设备 IP `192.168.140.20` 相同） |
   | 子网掩码 | `255.255.255.0` |

<AnnotatedImage
  src={`${IMG}/ego6_network_ip.png`}
  alt="配置虚拟网口 IP"
  maxWidth={640}
  items={[
    {box: [2.2, 13, 21.5, 8.8], text: '设备虚拟网口，显示为「未识别的网络，无法访问 Internet」，这是正常现象'},
    {box: [4, 43.6, 47.5, 15.4], text: 'IP 分配改为「手动」，填写 IPv4 地址与子网掩码'},
  ]}
/>

### 连接设备

打开 EGOTool，在「**通信**」页确认设置后，点击「**设备连接**」：

<AnnotatedImage
  src={`${IMG}/ego6_egotool_connect.png`}
  alt="EGOTool 连接设备"
  items={[
    {box: [68.2, 11.6, 31, 13.3], text: '端口类型 UDP，设备 IP 192.168.140.20，端口 58889'},
    {box: [68.2, 26.6, 31, 4.4], text: '点击「设备连接」'},
  ]}
/>

## 实时预览与录制

连接成功后，EGOTool 显示六路实时画面与设备状态：

<AnnotatedImage
  src={`${IMG}/ego6_egotool_preview.png`}
  alt="EGOTool 六路实时预览"
  items={[
    {box: [0.9, 7, 65.9, 91.6], text: '六路相机实时画面'},
    {box: [67.9, 35.4, 14.8, 3.6], text: '开始 / 结束录制'},
    {box: [67.9, 40.1, 26.2, 3.3], badge: [94.1, 41.75], text: '功能页：设备控制 / 编码参数 / 工厂采集 / 日志'},
    {box: [67.3, 68.3, 31.6, 30.9], text: '设备信息：名称、软件版本、IP、电量、温度、SD 卡用量、系统时间'},
  ]}
/>

**录制控制**有两种方式：

1. 按机身右侧的**录制按键**开始 / 结束录制，设备会有对应的语音提示；
2. 在 EGOTool 中点击「**开始录像**」按钮控制录制。

EGOTool 主要功能页：

| 功能页 | 说明 |
|-|-|
| **设备控制** | 勾选需要录制的画面通道（1 ~ 6）以及是否录制 IMU。 |
| **编码参数** | 查看和设置录制分辨率（默认 1600 × 1300）、码率、录制帧率、编码类型（H.265）与封装格式，修改后点击「保存」。 |
| **工厂采集** | 填写「采集任务 / 采集地址 / 备注 / 采集者」，点击「设置」后，信息将写入**下一次**录制的文件。 |
| **日志** | 查看设备运行日志。 |

| 设备控制 | 编码参数 | 工厂采集 |
|:-:|:-:|:-:|
| ![设备控制](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_tab_device_control.png) | ![编码参数](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_tab_encoding.png) | ![工厂采集](https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img/ego6_tab_factory.png) |

:::info
实时预览仅用于**确认画面、对焦与构图**，不用于保存数据。数据以 SD 卡上的录制文件为准。
:::

## 导出数据到电脑

录制文件为 **`.mcap`** 格式，保存在 SD 卡上。

1. 结束录制后，取下电池使设备断电，从设备后部取出 SD 卡。
2. 使用**读卡器**将 SD 卡连接到 Windows 电脑。
3. 将卡中的 **`.mcap`** 文件复制到电脑，建议按录制场次分目录存放。

:::tip
复制并确认数据完好后，请**删除 SD 卡上已导出的录制文件**，为新的录制腾出空间。
:::

## 使用 Foxglove Studio 查看录制文件

`.mcap` 文件使用 **Foxglove Studio** 查看，无需任何命令行操作。

1. 从 [foxglove.dev](https://foxglove.dev/download) 下载并安装 Foxglove Studio 桌面版。首次使用需要**用邮箱注册并登录**。
2. 打开软件后，在「设置您的框架」页面选择 **ROS 2**：

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_framework.png`}
  alt="Foxglove 选择 ROS 2 框架"
  maxWidth={720}
  items={[{box: [43, 28.6, 14.6, 23.6], text: '选择 ROS 2'}]}
/>

3. 切换到「**回放录制数据**」，点击「**打开**」，选择复制出来的 `.mcap` 文件（也可以直接把文件拖进窗口）：

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_open.png`}
  alt="Foxglove 打开 MCAP 文件"
  maxWidth={720}
  items={[
    {box: [18.8, 19.8, 15.8, 9.2], text: '切换到「回放录制数据」'},
    {box: [56.5, 86.2, 10, 8.4], text: '点击「打开」，选择 .mcap 文件'},
  ]}
/>

4. 文件打开后主界面为空，需要**导入布局文件** `Ego-Foxglove-Layout.json`（下载见 [附件下载](#附件下载)）：点击右上角的布局按钮，选择「**从文件导入……**」：

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_import_layout.png`}
  alt="Foxglove 导入布局文件"
  maxWidth={520}
  items={[
    {box: [71.5, 6.8, 19.2, 7.6], text: '点击右上角的布局按钮'},
    {box: [41, 31, 49.8, 7.2], text: '选择「从文件导入……」，选中 Ego-Foxglove-Layout.json'},
  ]}
/>

5. 导入后即可看到六路相机画面，左侧为录制文件中的数据话题：

<AnnotatedImage
  src={`${IMG}/ego6_foxglove_playback.jpg`}
  alt="Foxglove 六路回放效果"
  items={[
    {box: [0.2, 10.4, 13.4, 66], text: '数据话题列表（6 路相机 + IMU）'},
    {box: [77, 0.6, 14.6, 3.6], text: '当前使用的布局'},
  ]}
/>

录制文件中的数据话题：

| 话题 | 数据类型 | 说明 |
|-|-|-|
| `/camera/middle-1/h265`、`/camera/middle-2/h265` | `foxglove.CompressedVideo` | 前置双目相机 |
| `/camera/left-1/h265`、`/camera/left-2/h265` | `foxglove.CompressedVideo` | 左侧两路相机 |
| `/camera/right-1/h265`、`/camera/right-2/h265` | `foxglove.CompressedVideo` | 右侧两路相机 |
| `/imu` | `foxglove.IMU` | 六轴 IMU 数据 |

:::note
- Foxglove Studio 原生支持 H.265 解码，无需额外插件。
- 不导入布局也能使用，只是需要手动添加面板。
- Foxglove Studio 用于查看**已录制**的 `.mcap` 文件；实时画面请在 EGOTool 中查看。
:::

## 附件下载

| 文件 | 大小 | 说明 |
|-|-|-|
| <a href={`${SRC}/EGOTool_V1.0.3.zip`}>EGOTool_V1.0.3.zip</a> | 约 70 MB | Ego 设备 Windows 上位机，解压后双击 `EGOTool.exe` 运行 |
| <a href={`${SRC}/Ego-Foxglove-Layout.json`}>Ego-Foxglove-Layout.json</a> | 约 7 KB | Foxglove Studio 布局文件，通过「从文件导入……」导入 |
| <a href={`${SRC}/2026-08-20_11-15-40.zip`}>2026-08-20_11-15-40.zip</a> | 约 183 MB | 示例录制数据（`.mcap`），可在购买前用 Foxglove Studio 体验 |

下载遇到问题，请联系技术支持：[support@sensing-world.com](mailto:support@sensing-world.com)。

## 常见问题

使用中遇到问题，请参阅 [EgoSense H6 常见问题](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/FAQ)。
