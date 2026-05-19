---
sidebar_position: 1
title: 机器人摄像头解决方案
---

# 机器人摄像头解决方案

## 基于 Jetson AGX Thor 的人形机器人方案

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{fontSize: '1.1em'}}>
    <strong>SENSING TRD1 Jetson AGX Thor 视觉解决方案</strong> 是 SENSING 面向具身智能和人形机器人打造的视觉感知平台。作为 NVIDIA Elite Partner，SENSING 将自研高性能摄像头模组与 NVIDIA Jetson AGX Thor 计算平台深度整合，提供从感知到计算的端到端方案。该系统结合双目摄像头、高帧率单目摄像头和手部摄像头，帮助机器人获得空间定位、环境感知和精细操作能力。
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Solutions.png?x-oss-process=image/format,webp" alt="Robotic Camera Solutions" style={{maxWidth: '100%', height:'auto', borderRadius: '8px'}} />
  </div>
</div>

## 系统架构

该方案采用集中式高性能计算单元，并连接分布式视觉传感器网络。为保证工业级可靠性、低延迟和高带宽，所有摄像头模组均通过 **GMSL** 接口接入计算平台。

<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Connect.png?x-oss-process=image/format,webp" alt="Robotic_Camera_Connect" style={{maxWidth: '65%', height:'auto', borderRadius: '8px'}} />
</div>

### 组件拓扑

* **核心计算（SOC）**
  * NVIDIA Jetson AGX Thor Developer Kit
  * SENSING TRD1 G2A 载板（SG8-AGX-Thor-GMSL2）
* **头部视觉**
  * **Astra S56：** 2 * 5MP 双目摄像头（Depth & VLA）
  * **Astra S36（可选）：** 2 * 3MP 双目摄像头（备选深度方案）
  * **SHW3H：** 3MP HDR 60fps 单目摄像头
* **手部视觉**
  * **SHF3L（×4）：** 3MP HDR 30fps 单目摄像头

### 摄像头配置

| 型号 | 类型 | 分辨率 | 曝光 | 数据格式 | 水平视场 | 角色/位置 | 数量 | 文档 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Astra S56** | 双目 | 2 * 5MP | 全局 | RAW | 120° | **头部**：Depth & VLA | 1 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Binocular_Camera/S56) |
| **Astra S36**（可选） | 双目 | 2 * 3MP | 卷帘 | YUV | 120° | **头部**：备选深度方案 | 1 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Binocular_Camera/S36) |
| **SHW3H** | 单目 | 3MP | 卷帘 | YUV | 120° | **头部**：HDR 60fps 单目摄像头 | 1 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW3H) |
| **SHF3L** | 单目 | 3MP | 卷帘 | YUV | 190° | **手部**：HDR 30fps 单目摄像头 | 4 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHF3L) |

### 计算平台

| 组件 | 型号 | 说明 |
| :--- | :--- | :--- |
| **SOC** | NVIDIA Jetson AGX Thor | 面向人形机器人的新一代 AI 计算机 |
| **载板** | SENSING TRD1 G2A（SG8-AGX-Thor-GMSL2） | 支持最多 8 路 GMSL 摄像头输入，具备硬件同步功能 |

---

## 快速启动

### 安装步骤

<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Camera_Connect.png?x-oss-process=image/format,webp" alt="Camera_Connect" style={{maxWidth: '90%', height:'auto', borderRadius: '8px'}} />
</div>

:::note 快速设置
1. 参考图片标注，使用同轴线将 GMSL 摄像头连接到 TRD1 G2A 对应位置。
2. 将 CN7 连接到 DC 9-16V 电源。
3. 启动 Jetson Thor 系统。
:::

### SDK 下载

:::note 驱动包
请根据摄像头类型和 JetPack 版本选择对应的驱动包。
:::

| 摄像头类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| GMSL2 Camera (YUV) | JP7.0 | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2) |

:::tip 下载方法
将完整链接复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载指定目录。
:::

---

# 软件安装与驱动配置

本指南说明如何在 Jetson AGX Thor 上为 SENSING TRD1 视觉方案配置摄像头驱动、安装内核并验证视频流。

### 1. 选择摄像头配置

进入驱动目录，运行配置脚本选择已连接的摄像头模组。

```bash
cd TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2
python3 generate_camera_overlay.py
```

<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_step1.png?x-oss-process=image/format,webp" alt="bringUp_step1" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
</div>

> **需要操作：** 根据终端提示中的硬件端口连接关系，选择对应的摄像头型号。

### 2. 安装内核与驱动

安装内核镜像以及所选摄像头对应的内核模块（`.ko` 文件）。

```bash
chmod a+x ./install.sh
./install.sh
```

### 3. 配置设备树（Jetson-IO）

使用 NVIDIA Jetson-IO 工具为 SENSING 硬件配置 CSI 接口。

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

按界面提示完成以下步骤：

1. 选择 **"Configure Jetson AGX CSI Connector"**。
2. 选择 **"Configure for compatible hardware"**。
3. 选择 **"Jetson Sensing SG8A_AGTH_G2Y_A1 GMSL2x8"**。
4. 选择 **"Save pin changes"**。
5. 选择 **"Save and reboot to reconfigure pins"**。

系统将重启以应用更改。

### 4. 配置触发模式

重启后，修改 `load_modules.sh` 脚本，设置正确的触发模式和同步参数。确保脚本包含以下 `v4l2-ctl` 配置，将 `sensor_mode=1`、`trig_mode=0` 设置为从模式。

```bash
v4l2-ctl -d /dev/video0 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video1 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video2 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video3 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video4 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video5 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video6 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0
v4l2-ctl -d /dev/video7 -c sensor_mode=1,trig_pin=0x00020007,trig_mode=0

green_print "Load modules done."
```

### 5. 加载驱动

```bash
sudo ./load_modules.sh
```

### 6. 安装 Argus 摄像头工具

```bash
sudo apt update
sudo apt-get install nvidia-l4t-jetson-multimedia-api
cd /usr/src/jetson_multimedia_api/argus/
sudo apt-get install cmake build-essential pkg-config libx11-dev libgtk-3-dev libexpat1-dev libjpeg-dev libgstreamer1.0-dev
sudo mkdir build && cd build
sudo cmake ..
sudo make -j8
sudo make install
```

### 7. 重启 Argus Daemon

重启 `nvargus-daemon`，确保 ISP 识别新的配置。RAW 摄像头需要此步骤。

```bash
sudo service nvargus-daemon stop
export NVCAMERA_NITO_PATH=CONFIG
sudo -E enableCamInfiniteTimeout=1 nvargus-daemon
```

### 8. 验证与实时预览

#### 8.1 测试 Astra S56（双目/RAW）

```bash
argus_camera -d 0
argus_camera -d 1
```

<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_S56.png?x-oss-process=image/format,webp" alt="bringUp_S56" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
</div>

#### 8.2 测试 SHW3H 与 SHF3L（单目）

使用 GStreamer 验证 SHW3H 和 SHF3L 摄像头，将 `/dev/videoX` 替换为对应设备节点。

```bash
gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev
```

<div style={{textAlign: 'center', marginTop: '1.5rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/bringUp_SHW3H.png?x-oss-process=image/format,webp" alt="bringUp_SHW3H" style={{maxWidth: '85%', height:'auto', borderRadius: '8px'}} />
</div>

**所有端口命令：**

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev
gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
```

---

## 注意事项

- 初始化开发板前，请确认所有摄像头均已通过同轴线正确连接。