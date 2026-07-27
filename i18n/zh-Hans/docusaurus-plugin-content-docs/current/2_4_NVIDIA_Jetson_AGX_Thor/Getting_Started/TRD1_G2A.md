---
sidebar_position: 1
---

# TRD1 G2A


## 概述

<div className="row">
 <div className="col col--12">
 TRD1 G2A 扩展了官方 NVIDIA Jetson AGX THOR 开发套件的 GMSL 连接能力，可在 THOR 平台上快速集成 GMSL 摄像头视频流。最多支持 8 路 GMSL 摄像头。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A.png?x-oss-process=image/format,webp" alt="TRD1_G2A"
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
 • 兼容 摄像头 类型：GMSL / GMSL2 <br/>
 • 最大支持摄像头数量：8 *GMSL <br/>
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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Hardware_Overview.png?x-oss-process=image/format,webp" alt="TRD1 G2A 硬件概述" style={{maxWidth: '80%', height: 'auto'}} />
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

### 框图

<!-- :::caution 注意
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Block_Diagram.jpg?x-oss-process=image/format,webp" alt="TRD1 G2A 框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>
:::note
- TRD1 G2A 使用 **2 个 MAX96712 解串器**，每个解串器最多支持 4 个摄像头端口。
:::

### 支持的摄像头列表
:::note 摄像头兼容性
可以选择以下摄像头组合连接到 TRD1 G2A.
:::

| 相机组合 | 支持的相机数量 | Jetpack 7.0 |
|--------|-------------|---------------|
| 组合 1 | 4*8MP/30FPS | - |
| 组合 2 | 8*3MP/30FPS | - |
| 组合 3 | 6*5MP/30FPS | - |
| Comb. 4 | 2 *8MP/30FPS+4 *3MP/30FPS | - |
| Comb. 5 | 3 *5MP/30FPS+4 *3MP/30FPS | - |
| Comb. 6 | 2 *8MP/30FPS+3 *5MP/30FPS | - |

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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents.png?x-oss-process=image/format,webp" alt="TRD1 G2A 套件内容" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### 安装步骤

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 TRD1 G2A（最多支持 8 路摄像头）
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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_4_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png?x-oss-process=image/format,webp" alt="TRD1 G2A 摄像头连接" style={{maxWidth: '90%', height: 'auto'}} />
</div>


### 软件准备

#### SDK 下载

:::note 驱动包
请根据摄像头类型和 JetPack 版本选择合适的驱动包:
:::

| 摄像头 类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| GMSL2 摄像头 (YUV) | JP7.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_YUV_JP7.0_L4TR38.2) |

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
#### JetPack 版本

* Jetpack 7.0

#### 支持的 SENSING 摄像头模组

* SG2-IMX390C-5200-G2A-Hxxx

 * 最多支持同时拉起 8 路摄像头
* SG2-AR0233-5200-G2A-Hxxx

 * 最多支持同时拉起 8 路摄像头
* SG3-ISX031C-GMSL2-Hxxx

 * 最多支持同时拉起 8 路摄像头
* SG3-ISX031C-GMSL2F-Hxxx

 * 最多支持同时拉起 8 路摄像头
* SG5-IMX490C-5300-GMSL2-Hxxx

 * 最多支持同时拉起 6 路摄像头
* SG8S-AR0820C-5300-G2A-Hxxx

 * 最多支持同时拉起 4 路摄像头
* SHF3L

 * 最多支持同时拉起 8 路摄像头
* SHF3H

 * 最多支持同时拉起 4 路摄像头
#### 快速拉起

1. 将驱动包复制到 Jetson 设备的工作目录，例如 “/home/nvidia”

   ```
   /home/nvidia/TRD1_G2A_YUV_JP7.0_L4TR38.2
   ```

2. 进入驱动目录,

   ```
   cd TRD1_G2A_YUV_JP7.0_L4TR38.2
   chmod a+x ./install.sh
   ./install.sh
   ```

3. 使用 "sudo /opt/nvidia/jetson-io/jetson-io.py" 命令选择对应设备

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson AGX CSI Connector"
   2.select "Configure for compatible hardware"
   3.select "Jetson Sensing SG8A_AGTH_G2Y_A1 YUV GMSL2x8"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```

4. 如果步骤 3 无法执行, 可以手动修改 extlinux.conf 文件以应用设备树.

   ```
   sudo vi /boot/extlinux/extlinux.conf
   ```

5. 将文件修改为以下内容，然后重启。

   ```
   TIMEOUT 30
   DEFAULT JetsonIO

   MENU TITLE L4T boot options

   LABEL primary
         MENU LABEL primary kernel
         LINUX /boot/Image
         INITRD /boot/initrd
         APPEND ${cbootargs} root=PARTUUID=d2f22c03-8ac9-473f-ba9a-8c8cea392567 rw rootwait rootfstype=ext4 mminit_loglevel=4 earlycon=tegra_utc,mmio32,0xc5a0000 console=ttyUTC0,115200 clk_ignore_unused firmware_class.path=/etc/firmware fbcon=map:0 efi=runtime

   # When testing a custom kernel, it is recommended that you create a backup of
   # the original kernel and add a new entry to this file so that the device can
   # fallback to the original kernel. To do this:
   #
   # 1, Make a backup of the original kernel
   #      sudo cp /boot/Image /boot/Image.backup
   #
   # 2, Copy your custom kernel into /boot/Image
   #
   # 3, Uncomment below menu setting lines for the original kernel
   #
   # 4, Reboot

   # LABEL backup
   #    MENU LABEL backup kernel
   #    LINUX /boot/Image.backup
   #    INITRD /boot/initrd
   #    APPEND ${cbootargs}

   LABEL JetsonIO
           MENU LABEL Custom Header Config: <CSI Jetson Sensing SG8A_AGTH_G2Y_A1 YUV GMSL2x4>
           LINUX /boot/Image
           FDT /boot/dtb/kernel_tegra264-p4071-0000+p3834-0008-nv.dtb
           INITRD /boot/initrd
           APPEND ${cbootargs} root=PARTUUID=d2f22c03-8ac9-473f-ba9a-8c8cea392567 rw rootwait rootfstype=ext4 mminit_loglevel=4 earlycon=tegra_utc,mmio32,0xc5a0000 console=ttyUTC0,115200 clk_ignore_unused firmware_class.path=/etc/firmware fbcon=map:0 efi=runtime
           OVERLAYS /boot/tegra264-camera-yuv-gmsl2x8-overlay.dtbo
   ```

6. 拉起摄像头

   ```
   cd TRD1_G2A_AGX_THOR_YUV_JP7.0_L4TR38.2
   chmod +x quick_bring_up.sh
   ./quick_bring_up.sh
   ```
 选择对应的摄像头型号和端口以拉起摄像头。

 以下示例展示如何初始化 SG8S-AR0820C-5300-G2A-Hxxx 摄像头。

   ```
   This package is use for AGX Thor & Jetson_Linux_R38.2.0
   Select the camera type:
   0:SG2-IMX390C-5200-G2A-Hxxx
   1:SG2-AR0233C-5200-G2A-Hxxx
   2:SG3S-ISX031C-GMSL2-Hxxx
   3:SG3S-ISX031C-GMSL2F-Hxxx
   4:SG5-IMX490C-5300-GMSL2-Hxxx
   5:SG8S-AR0820C-5300-G2A-Hxxx
   6:SHF3L
   7:SHW3H
   4
   Select the camera port to light up[0-7]:
   0
   ready bring up camera
   Setting pipeline to PAUSED ...
   Pipeline is live and does not need PREROLL ...
   Pipeline is PREROLLED ...
   Setting pipeline to PLAYING ...
   New clock: GstSystemClock
   WARNING: from element /GstPipeline:pipeline0/GstV4l2Src:v4l2src0: Signal lost
   Additional debug info:
   ../sys/v4l2/gstv4l2src.c(556): gst_v4l2src_query_preferred_size (): /GstPipeline:pipeline0/GstV4l2Src:v4l2src0:
   No input source was detected - video frames invalid
   /GstPipeline:pipeline0/GstV4l2Src:v4l2src0.GstPad:src: caps = video/x-raw, format=(string)UYVY, width=(int)3840, height=(int)2160, framerate=(fraction)30/1, interlace-mode=(string)progressive, colorimetry=(string)2:4:7:1
   /GstPipeline:pipeline0/GstXvImageSink:xvimagesink0.GstPad:sink: caps = video/x-raw, format=(string)UYVY, width=(int)3840, height=(int)2160, framerate=(fraction)30/1, interlace-mode=(string)progressive, colorimetry=(string)2:4:7:1
   Redistribute latency...
   0:02:22.0 / 99:99:99.
   ```

7. 混用 3G 模式摄像头（带 F 标识：XXX-GMSL2F-XXX）和 6G 模式摄像头（不带 F 标识）

 如果需要使用混合模式, 驱动中提供了以下使用方法.

 a. 确定每个摄像头通道对应的模式，其中 3G 用 `1` 表示，6G 用 `0` 表示。

 b.根据实际情况手动加载驱动.

   ```
   sudo insmod ./ko/max96712.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko enable_3G_0=1,1,0,0 enable_3G_1=0,0,1,1
   ```


 enable_3G_0 表示第一组输入通道. `1,1,0,0` 表示第 1、2 路摄像头工作在 3G 模式，第 3、4 路摄像头工作在 6G 模式。

 enable_3G_1 表示第二组输入通道. `0,0,1,1` 表示第 1、2 路摄像头工作在 6G 模式，第 3、4 路摄像头工作在 3G 模式。

8. 摄像头触发同步

 修改 quick_bring_up.sh 脚本并重新运行。

   ```
   v4l2-ctl -d /dev/video0 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video1 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video2 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video3 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video4 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video5 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video6 -c trig_pin=0x00020007,trig_mode=2
   v4l2-ctl -d /dev/video7 -c trig_pin=0x00020007,trig_mode=2
   ```

 8.1 外部触发模式

 对于转接板 CN4，PIN1（CAM-FSYNC1）和 PIN6 分别对应外部触发信号引脚和地引脚。
 将信号发生器的对应引脚连接到这些引脚。

 8.2 内部触发模式

   ```
   a.load the driver
   sudo insmod ko/pwm-gpio.ko

   b.Export PWM channel 0 (pwmchip4 is a newly generated node after loading the driver)
   echo 0 > /sys/class/pwm/pwmchip4/export

   c.Set the period to 33333333 (corresponding to 30 Hz)
   echo 33333333 > /sys/class/pwm/pwmchip4/pwm0/period

   d.Set the duty cycle
   echo 10000000 > /sys/class/pwm/pwmchip4/pwm0/duty_cycle

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
3.select "Jetson Sensing SG8A_AGTH_G2Y_A1 YUV GMSL2x8"
4.select "Save pin changes"
5.select "Save and reboot to reconfigure pins"
```

6. 安装摄像头驱动

```
sudo insmod ./ko/max96712.ko
sudo insmod ./ko/sgx-yuv-gmsl2.ko
```

7. 拉起摄像头

 #### CAM0
 v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video0 ! xvimagesink -ev

 #### CAM1
 v4l2-ctl -d /dev/video1 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video1 ! xvimagesink -ev

 #### CAM2
 v4l2-ctl -d /dev/video2 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video2 ! xvimagesink -ev

 #### CAM3
 v4l2-ctl -d /dev/video3 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video3 ! xvimagesink -ev

 #### CAM4
 v4l2-ctl -d /dev/video4 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video4 ! xvimagesink -ev

 #### CAM5
 v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video5 ! xvimagesink -ev

 #### CAM6
 v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video6 ! xvimagesink -ev

 #### CAM7
 v4l2-ctl -d /dev/video0 -c sensor_mode=?,trig_pin=?
 gst-launch-1.0 v4l2src device=/dev/video7 ! xvimagesink -ev

<br />
## 常见问题

<!-- 详情请点击[这里](../../../FAQ/FAQ_jetson) -->
