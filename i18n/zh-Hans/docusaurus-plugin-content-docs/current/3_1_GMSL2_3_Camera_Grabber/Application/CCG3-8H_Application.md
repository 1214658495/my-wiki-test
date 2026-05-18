---
sidebar_position: 1
title: CCG3-8H 应用
---

# CCG3-8H 应用

## 自动驾驶感知方案

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    视频采集卡可应用于无人车系统。无人车通常需要多路摄像头、毫米波雷达、激光雷达、GPS、组合导航等传感器，并需要将这些传感器接入高性能计算平台（如工业计算机）。因此，需要一种能够同时连接多路摄像头并与其他传感器同步的产品。视频采集卡正是面向无人车提供高速、多摄像头、低延迟图像接入的解决方案。以下是典型方案示例。
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8H/CCG3-8H_useGround2.png" alt="CCG3-8H 应用 Scenario" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
  </div>
</div>

## 系统架构

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ul style={{margin: 0, paddingLeft: '1.2em'}}>
    <li><strong>GMSL 摄像头：</strong> 多路高分辨率摄像头连接到 CoaxCapture 采集卡，由采集卡汇聚并同步各路视频流。</li>
    <li><strong>CoaxCapture 采集卡：</strong> 通过 PCIe 安装在车辆 IPC（工业计算机）中，接收摄像头数据和同步信号，确保所有通道达到帧级对齐。</li>
    <li><strong>GPS 模块：</strong> 提供 1PPS（每秒脉冲）和 TOD（时间信息）信号，作为全局时间参考。</li>
    <li><strong>以太网交换机：</strong> 支持 PTP/gPTP（精确时间协议/通用精确时间协议），用于激光雷达、雷达及其他传感器之间的时间同步。</li>
    <li><strong>激光雷达/外部设备：</strong> 向 CCG3-8H 提供 TTL 方波信号，实现硬件级摄像头同步，确保摄像头采集与传感器测量之间精确对齐。</li>
    <li><strong>IPC（工业计算机）：</strong> 中央处理单元，用于采集、处理并存储来自所有传感器的同步数据。</li>
  </ul>
</div>

## 同步流程

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <ol style={{margin: 0, paddingLeft: '1.2em'}}>
    <li>GPS 向时间同步盒提供 1PPS 和 TOD 信号，时间同步盒再通过以太网向采集卡及其他设备输出 PTP 信息。</li>
    <li>CoaxCapture 采集卡使用这些信号同步所有已连接的 GMSL 摄像头，确保每一帧都具备准确时间戳，并与车辆其他传感器对齐。</li>
    <li>以太网交换机将 PTP/gPTP 信号传递到激光雷达、雷达及其他设备，实现全系统时间同步。</li>
    <li>包括视频、激光雷达和雷达在内的所有传感器数据均由 IPC 采集，用于实时处理和记录。</li>
  </ol>
</div>

---

##  **快速启动**

### SDK 下载

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| 摄像头 | Linux 系统版本 | 驱动包下载链接 | 驱动包下载方式 |
|------------------------------|-------------------------|---------------------------|-------------------------------|
| GMSL2 摄像头 (YUV 数据)<br/>(例如： SG3S-ISX031C-GMSL2-Hxxx) | Ubuntu 18.04/20.04/22.04/24.04 | [链接](https://github.com/SENSING-Technology/CoaxCapture-CCG3/tree/main/Driver) | 复制完整链接地址到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载 |

</div>

#### 1. 编译驱动

使用驱动前需要先进行编译。`Driver` 目录中包含一个 `Makefile`，可同时构建驱动和应用程序。你可以使用顶层 `Makefile` 构建整个项目，也可以进入各个目录单独编译。

编译驱动：

```
make
```

如果需要清理构建目录并重新构建：

```
make clean
make
```

#### 2. 使用说明

#### 2.1 加载驱动

加载驱动时，需要以管理员权限运行 `load_modules.sh` 脚本。在 `bash` 目录中执行以下命令：

```
sudo ./load_modules.sh
```

如果驱动加载成功，会看到以下信息：

```
Loading Pcie driver...
Pcie driver installed correctly.
Video devices were recognized.
DONE
```

此外，`/dev` 目录中会创建视频设备和控制接口文件：

- `/dev/video0`, `/dev/video1`, `/dev/video2`, `/dev/video3` （每张采集卡对应的视频设备）
- `/dev/xdma0_bypass`, `/dev/xdma0_control`, `/dev/xdma0_user` （每张采集卡对应的控制接口设备）

注意：数字（0、1、2 等）对应采集卡索引。例如，`xdma0_bypass` 对应第一张采集卡，`xdma1_bypass` 对应第二张采集卡，依此类推。

#### 2.2 初始化采集卡

初始化第一张采集卡并配置连接的摄像头时，使用以下命令：

```
sudo ./pcie_init_card0.sh
```

如果脚本执行失败，可能需要按前文说明重新构建驱动和应用程序。

#### 2.3 图像测试

可以使用开源工具 `guvcview` 测试摄像头视频流。如果尚未安装，可执行：

```
sudo apt-get install guvcview
```

测试视频流时，对每个视频设备执行以下命令：

```
guvcview -d /dev/video0
guvcview -d /dev/video1
```

此时应能看到每个已连接摄像头的实时视频。

#### 3. 配置采集卡

该目录中提供两个示例脚本：`pcie_init_card0.sh` 和 `pcie_init_card1.sh`。这些脚本用于初始化采集卡并配置已连接摄像头，可根据摄像头规格进行修改。

#### 配置参数

在配置脚本中，可修改以下参数以定制采集卡和摄像头的行为。

#### 3.1 修改板卡编号

脚本第 10 行指定板卡编号：

```
set_card 0
```

`0` 表示第一张采集卡。第二张卡可改为 `1`，依此类推。

#### 3.2 摄像头 ANC 配置

脚本第 27-34 行用于配置摄像头是否启用 ANC（辅助数据）功能。设置 `0` 表示启用 ANC，设置 `1` 表示禁用。`x` 表示接口编号（第一张卡为 0-7，第二张卡为 8-15，依此类推）。

```
camera_anc_enable[x]
```

#### 3.3 图像输出格式

"第 38-45 行对应摄像头输出格式。RAW 可忽略；YUYV 或 UYVY 配置错误可能导致图像显示异常。

第一个参数（如下方 0 所示）表示使用哪个接口。第一张采集卡的 1-8 通道对应 0-7，第二张采集卡的 1-8 通道对应 8-15。

第二个参数用于指定摄像头输出图像格式，可设置为 'YUYV' 或 'UYVY'。"

```
video_output_yuv_format 0 "UYVY"
```

#### 3.4 触发模式

在脚本中配置触发模式。可选项如下：

- `0`: 无触发（仅主模式，无需外部触发）。
- `1`: 保留。
- `2`: 内部触发（PCIe 卡按指定频率触发摄像头）。
- `3`: 外部触发（由外部信号触发）。

```
card_trigger_signal_mode       	"2"
```

#### 3.5 外部触发配置

如果使用外部触发，请配置以下参数：

```
card_external_signal_input_fps 	"1" Hz
camera_external_output_fps     	"30" Hz
```

#### 3.6 内部触发配置

当 `card_trigger_signal_mode` 参数设置为 "2" 时，第 66 行的 `camera_inner_output_fps` 用于配置内部生成触发信号的频率，单位为 Hz。

```
camera_inner_output_fps        	"30" Hz
```

#### 3.7 触发延迟

可以为每个摄像头设置触发延迟：

```
camera_triger_delay[x]=0
```

#### 3.8 摄像头 分辨率

为每个摄像头接口配置分辨率（例如接口 `0` 设置为 `1920x1080`）：

```
camera_resolution 0 1920  1080
```

#### 3.9 摄像头初始化

`camera_serdes_type` 参数用于初始化摄像头传感器、串行器和解串器。例如：

```
camera_serdes_type[0]=1
```

常见 YUYV 或 UYVY 配置

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| **串行器** | ANC  | **配置参数** |
| -------------- | ---- | --------------------------- |
| MAX96705 | 否 | 0                           |
| MAX9295 | 否 | 1                           |
| MAX96717F | 否 | 2                           |
| MAX9295 | 是 | 3                           |
| MAX96717F | 是 | 4                           |

</div>

常见 RAW 或 RAW12 配置

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| **串行器** | **传感器型号** | **配置参数** |
| -------------- | ---------------- | --------------------------- |
| MAX9295           | AR0233           | 102                         |
| MAX9295           | AR0820           | 103                         |
| MAX9295           | IMX390           | 104                         |
| MAX9295           | IMX490           | 105                         |
| MAX9295           | ISX031           | 11                          |
| MAX9295           | IMX728           | 106                         |
| MAX9295           | SC2331AT         | 108                         |
| MAX9295           | OX08D            | 109                         |
| MAX96717F         | IMX623           | 113                         |

</div>


---

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
该架构适用于自动驾驶、ADAS 开发，以及任何需要精确同步多传感器数据采集的应用。
</div>
