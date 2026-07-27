---
sidebar_position: 3
---

# TRD1 F4B


## 概述

<div className="row">
 <div className="col col--12">
 TRD1 F4B 扩展了官方 NVIDIA Jetson AGX THOR 开发套件的 FPDLINK 连接能力，可在 THOR 平台上快速集成 FPDLINK 摄像头视频流。最多支持 8 路 FPDLINK 摄像头。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B.png?x-oss-process=image/format,webp" alt="TRD1_F4B"
 style={{maxWidth: '50%', height:'auto'}} />
</div>
<br />

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/RedFoxD3Gx.html?fromMid=1544#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div> -->

## 主要特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
 <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>特性:</strong><br/>
 • 支持 NVIDIA JETSON THOR 平台 <br/>
 • 支持 摄像头 分辨率：最高 3840*2160 <br/>
 • 支持 摄像头 输出格式 : RAW / YUV422 <br/>
 • 尺寸：L:243.12mm x W:112.4mm x H:56.88mm <br/>
 • 兼容 摄像头 类型：FPDLINK Ⅲ、FPDLINK Ⅳ <br/>
 • 最大支持摄像头数量：8 *FPDLINK <br/>
 • SOC：NVIDlA Jetson T5000 模组 <br/>
 • AI 算力：2070 TFLOPS <br/>
 • 内存：128 GB 256-bit LPDDR5X
 </div>
 <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>应用:</strong><br/>
 • 机器人 <br/>
 • 工业 <br/>
 • 医疗<br/>
 • 检测
 </div>
</div>

## 快速入门

<!-- ### 规格

<div className="row">
 <div className="col col--6">
 :::note 基本信息
 - 型号: SG8A-AGON-G2Y-A1
 - 尺寸: 86.9mm * 55mm * 21.8mm
 - 重量: 50g
 - 连接器: 1x120引脚 High-density
 - 摄像头输入: 摄像头*8(GMSL2/GMSL)
 - 触发输入: 6引脚 同步 In
 :::
 </div>
 <div className="col col--6">
 :::note 技术规格
 - 解串器: MAXIM(ADI) MAX96712*2
 - 摄像头 连接器: Fakra Z Code
 - POC 供电: DC 9-16V
 - DC 供电: DC 12V
 - 工作条件： -20°C to +70°C
 - 适配套件: Jetson AGX Orin
 :::
 </div>
</div> -->

### 硬件概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 F4B 硬件概述" style={{maxWidth: '80%', height: 'auto'}} />
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

### 框图

<!-- :::caution 注意
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 F4B 框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>
:::note
- TRD1 F4B 使用 **2 个 UB9724 解串器**，每个解串器最多支持 4 个摄像头端口。
:::

### 支持的摄像头列表

:::note 摄像头兼容性
可以选择以下摄像头组合连接到 TRD1 F4B.
:::

| 相机组合 | 支持的相机数量 | Jetpack 7.0 |
|--------|-------------|---------------|
| 组合 1 | 4*8MP/30FPS | - |
| 组合 2 | 8*3MP/30FPS | - |
| 组合 3 | 2 *8MP/30FPS+4 *3MP/30FPS | - |
| Comb. 4 | 1 *8MP/30FPS+2 *2MP/30FPS+4 *3MP/30FPS | - |

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0</strong>）是面向 Jetson 系列开发板的官方软件开发套件（SDK）。它包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### 硬件准备

#### 物料清单


| 序号 | 产品型号 | 数量 | 备注 |
|---|---|---:|---|
| 1 | 945-14070-0080-000-MIPI | 1 | 最多支持 8 路摄像头 |
| 2 | T4JC-JC-ZZZZ-0500L (母头转母头 0.5m) | 2 | 标准配置 |
| 3 | 触发 Cable | 1 | 标准配置 |
| 4 | 电源 Conversion Cable | 1 | 标准配置 |
| 5 | 电源适配器 | 1 | 标准配置 |
| 6 | 多功能转换座 | 1 | 可选配置 |


#### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 F4B 套件内容" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### 安装步骤

:::note 快速设置
1. 使用同轴线将 FPDLINK 摄像头连接到 TRD1 F4B（最多支持 8 路摄像头）
2. 连接电源(DC 9-16V)
3. 启动系统(Jetson Thor)
:::

<!-- <div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
 <iframe
 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
 src="//player.bilibili.com/player.html?bvid=BV1XxNWznEkV&page=1&high_quality=1&danmaku=0"
 scrolling="no"
 border="0"
 frameBorder="no"
 framespacing="0"
 allowFullScreen="true">
 </iframe>
</div> -->
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_F4B/TRD1_F4B_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 F4B 摄像头连接" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### 软件准备

#### SDK 下载

:::note 驱动包
请根据摄像头类型和 JetPack 版本选择合适的驱动包:
:::

| 摄像头 类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| FPDLINK 摄像头 (YUV) | JP7.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_F4B) |

:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

#### 快速拉起

:::note 系统更新
可以使用 NVIDIA SDK Manager Linux 软件，或通过 Linux 命令行使用 NVIDIA Linux Driver Package 将 JetPack OS 刷写到 NVIDIA Jetson 设备。对于初学者，建议优先使用 NVIDIA SDK Manager。
:::

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-cmd.png" alt="SG8A-ORIN-GMSL2-cmd" style={{maxWidth: '100%', height: 'auto'}} />
</div> -->
##### JetPack 版本

* Jetpack 7.0 L4TR38.2.1

##### 支持 摄像头 模组

* SG2-AR0233C-5200-F3A-Hxxx
 * 最多支持同时拉起 8 路摄像头

* SG8S-AR0820C-5300-F4A-Hxxx
 * 最多支持同时拉起 4 路摄像头

* SG3S-ISX031C-F3A-Hxxx
 * 最多支持同时拉起 8 路摄像头

##### 快速拉起

1. 连接 摄像头 to ports on 转接板.

 <!-- ![alt text](<../../../../Picture/SENSING Thor 开发套件/TRD1 G2A 摄像头 接口 Definition.jpg>) -->

   ```
   CN1 (CAM4/CAM5/CAM6/CAM7)
   CN2 (CAM0/CAM1/CAM2/CAM3)
   ```
 CAM 端口与设备节点的对应关系如下：

    ```
    PORT                    DeviceTree Node            DEV NODE
    CN1(COAX0)               cam_4                    /dev/video4
    CN1(COAX1)               cam_5                    /dev/video5
    CN1(COAX2)               cam_6                    /dev/video6
    CN1(COAX3)               cam_7                    /dev/video7
    CN2(COAX4)               cam_0                    /dev/video0
    CN2(COAX5)               cam_1                    /dev/video1
    CN2(COAX6)               cam_2                    /dev/video2
    CN2(COAX7)               cam_3                    /dev/video3
    ```

 供电

SG8-AGX-Thor-9724 转接板需要使用 12V 供电。

 <!-- ![alt text](<../../../../Picture/SENSING Thor 开发套件/TRD1 G2A 电源 和 触发 接口 Definition.jpg>) -->


2. 进入驱动目录,

   ```
   cd TRD1_F4B_AGX_THOR_FPDx8_YUV_JP7.0_L4TR38.2.1
   chmod a+x ./install.sh
   ./install.sh
   ```

3. 使用 "sudo /opt/nvidia/jetson-io/jetson-io.py" 命令选择对应设备

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Sensing SG8_AGX_F4_A1 YUV FPD4x8"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
4. 设备重启后，修改 `load_module.sh` 脚本。

 4.1 修改 `load_modules.sh` 脚本

 4.1.1 修改视频设备配置命令行。

 以下命令用于配置系统中识别为 video0 到 video7 的摄像头。
 需要根据摄像头型号和实际连接方式调整命令参数 `sensor_mode`、`trig_mode` 和 `trig_pin`。
   ```
   v4l2-ctl -d /dev/video0 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video1 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video2 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video3 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video4 -c sensor_mode=0,trig_mode=0,trig_pin=0x00020000
   v4l2-ctl -d /dev/video5 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video6 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   v4l2-ctl -d /dev/video7 -c sensor_mode=0,trig_mode=0,trig_pin=0x00000000
   ```
 `sensor_mode` 参数的取值与摄像头型号相关，具体如下：
   ```
   SG2-AR0233C-5200-F3A-Hxxx(1920X1080): sensor_mode=0;
   SG3S-ISX031C-F4A-Hxxx(1920X1536): sensor_mode=1;
   SG3S-ISX031C-F3A-Hxxx(1920X1536): sensor_mode=1;
   SG8S-AR0820C-5300-F4A-Hxxx(3840X2160): sensor_mode=3.
   ```
 `trig_mode` 和 `trig_pin` 参数表示要使用的触发模式及对应触发引脚。
   ```
   Auto-trigger Mode（摄像头启动后自动触发，但不同摄像头之间不同步）：trig_mode=0;trig_pin=0x00000000

   Jetson Orin Trigger Mode（摄像头通过 Jetson Orin 生成的触发信号进行触发和同步）：trig_mode=1;trig_pin=0x00000000

   External-Trigger Mode（摄像头通过连接到套件触发引脚的外部信号发生器生成的触发信号进行同步触发）：trig_mode=1;trig_pin=0x00020000
   ```
 4.1.2 修改驱动模块参数：

 如果需要混合使用 FPD3（带 F3 标识：XXX-F3A-XXX）摄像头和 FPD4（带 F4 标识：XXX-F4A-XXX）摄像头，可按以下方法配置。

 a. 确认每个摄像头通道对应的摄像头类型。

 b. 修改以下驱动加载命令中的 `enable_fpd4_0` 和 `enable_fpd4_1` 参数，其中 FPD4 用 `1` 表示，FPD3 用 `0` 表示。

 sudo insmod ko/sgx-yuv-fpd4.ko enable_fpd4_0=X,X,X,X enable_fpd4_1=X,X,X,X

 以下示例中：
   ```
   sudo insmod ko/sgx-yuv-fpd4.ko enable_fpd4_0=1,1,0,0 enable_fpd4_1=0,0,1,1
   ```
 `enable_fpd4_0` 表示第一组输入通道。取值 `1,1,0,0` 表示 cam_0 和 cam_1 以 FPD4 模式工作，cam_2 和 cam_3 以 FPD3 模式工作。

`enable_fpd4_1` 表示第二组输入通道。取值 `0,0,1,1` 表示 cam_4 和 cam_5 以 FPD3 模式工作，cam_6 和 cam_7 以 FPD4 模式工作。




5. 拉起摄像头

 5.1 运行 `load_module.sh` 脚本。
   ```
   sudo ./load_modules.sh
   ```
 模块加载后会生成 `/dev/video0` 到 `/dev/video7` 设备节点。

 5.2 在终端运行 `gst-launch-1.0`。
   ```
   ## COAX4
   gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

   ## COAX5
   gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

   ## COAX6
   gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

   ## COAX7
   gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

   ## COAX0
   gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

   ## COAX1
   gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

   ## COAX2
   gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

   ## COAX3
   gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
   ```

如果上述步骤均已正确完成，下次重启设备后只需运行 `sudo ./load_modules.sh` 命令加载驱动，然后在终端运行 `gst-launch-1.0`。

6. 提供触发同步信号

 修改 load_modules.sh 脚本并重新运行。

   ```
   v4l2-ctl -d /dev/video0 -c sensor_mode=0,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video1 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video2 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video3 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video4 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video5 -c sensor_mode=1,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video6 -c sensor_mode=3,trig_pin=0x00000000,trig_mode=1
   v4l2-ctl -d /dev/video7 -c sensor_mode=3,trig_pin=0x00000000,trig_mode=1
   ```

 6.1 外部触发模式

当使用外部触发信号发生器提供外部触发信号时，触发源应连接到 CN4 6-PIN 连接器：
PIN2（CAM-FSYNC2）对应 CN1 摄像头的外部触发信号，
PIN4（CAM-FSYNC4）对应 CN2 摄像头的外部触发信号，
 PIN6 is 地 pin.
将触发信号源正极连接到 PIN2 和 PIN4，以同步所有摄像头。
将触发信号源负极连接到 PIN6。

 6.2 Jetson Orin 触发模式

当使用 Jetson Orin 触发模式时，需要按以下步骤配置 Jetson Orin 生成的触发信号。
   ```
   a.load the driver
   sudo insmod ko/pwm-gpios.ko

   b.Export PWM channel 0 (pwmchip4 is a newly generated node after loading the driver)
   echo 0 > /sys/class/pwm/pwmchip4/export

   c.Set the period to 33333333 (corresponding to 30 Hz)
   echo 33333333 > /sys/class/pwm/pwmchip4/pwm0/period

   d.Set the duty cycle
   echo 30000000 > /sys/class/pwm/pwmchip4/pwm0/duty_cycle

   e.Enable PWM output
   echo 1 > /sys/class/pwm/pwmchip4/pwm0/enable
   ```

#### 集成 SENSING 驱动源码

1. 编译 Image 和 dtb
 参考以下命令将 Dtb 和 Kernel 源码集成到你的内核源码中

   ```
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/kernel -r
   cp camera-driver-package/source/nvidia-oot Linux_for_Tegra/source/nvidia-oot -r
   ```

2. 进入源码根目录并重新编译

   ```
   cd <install-path>/Linux_for_Tegra/source
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   export KERNEL_HEADERS=$PWD/kernel/kernel-noble
   export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
   make -C kernel
   make modules
   make dtbs
   sudo -E make install -C kernel

   cp kernel/kernel-noble/arch/arm64/boot/Image <install-path>/Linux_for_Tegra/kernel/Image
   cp nvidia-oot/device-tree/platform/generic-dts/dtbs/* <install-path>/Linux_for_Tegra/kernel/dtb/
   ```

3. 将新生成的 Image 和 dtb 安装到 NVIDIA 设备并重启使其生效

   ```
   dtb:nvidia-oot/device-tree/platform/generic-dts/dtbs/
   Image: kernel/kernel-noble/arch/arm64/boot/

   tegra-camera.ko:nvidia-oot/drivers/media/platform/tegra/camera/
   nvhost-nvcsi.ko:nvidia-oot/drivers/video/tegra/host/nvcsi/
   ```

4. 将上述编译生成的 image、dtb、ko 复制到 Jetson 对应位置

   ```
   sudo cp *.dtbo /boot/
   sudo cp Image /boot/Image
   sudo cp tegra-camera.ko /lib/modules/6.8.12-tegra/updates/drivers/media/platform/tegra/camera/
   sudo cp nvhost-nvcsi.ko /lib/modules/6.8.12-tegra/updates/drivers/video/tegra/host/nvcsi/
   ```

5. 选择已安装的设备树

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Sensing SG8_AGX_F4_A1 YUV FPD4x8"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```

6. 安装摄像头驱动

   ```
   sudo insmod ./ko/ti9724.ko
   sudo insmod ./ko/sgx-yuv-fpd4.ko
   ```

7. 拉起摄像头

   ```
   ## COAX4
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

   ## COAX5
    v4l2-ctl -d /dev/video1 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

   ## COAX6
    v4l2-ctl -d /dev/video2 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

   ## COAX7
    v4l2-ctl -d /dev/video3 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

   ## COAX0
    v4l2-ctl -d /dev/video4 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

   ## COAX1
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

   ## COAX2
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

   ## COAX3
    v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
    gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev
   ```
