---
sidebar_position: 2
---

# SG4A-NONX-G2Y-A1

## 概述

<div className="row">
 <div className="col col--9">
 SG4A-NONX-G2Y-A1 转接板的 MIPI 接口按照 NVIDIA 标准 22 引脚接口设计（见 CN8 引脚定义），兼容官方开发板和客户自研开发板。

 该设计提供 4 路同轴 FAKRA 接口，最多支持 4 路摄像头，并兼容不同类型的 GMSL 摄像头。转接板可通过软件配置为不同工作频率，兼容 GMSL 和 GMSL2 协议接口。GMSL 摄像头通过 PoC（Power over Coax）供电，数据、控制信号和电源均可通过 50 欧姆同轴线传输，使车载应用中的摄像头线束布线更加灵活且便于安装。
 </div>
 <div className="col col--3">
 :::note 主要特性
 - 支持 4 路摄像头
 - 兼容 GMSL/GMSL2 协议
 - PoC 供电
 - 易于安装
 :::
 </div>
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1.png" alt="SG4A-NONX-G2Y-A1" style={{maxWidth: '30%', height: 'auto'}} />
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-168.html?recommendFromPid=0&fromMid=962" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 快速入门

### 硬件概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Hardware_Overview.png" alt="SG4A-NONX-G2Y-A1-概述" style={{maxWidth: '80%', height: 'auto'}} />
</div>

### 基本规格

<div className="row">
 <div className="col col--6">
 :::note 基本信息
 - 型号: SG4A-NONX-G2Y-A1
 - 尺寸: 74mm × 53mm
 - 重量: 50g
 - 连接器: 1×22引脚, 1×28引脚（可选）
 - 摄像头输入：4 路摄像头 (GMSL2/GMSL)
 - 触发输入: 3引脚 同步 input
 :::
 </div>
 <div className="col col--6">
 :::note 技术规格
 - 解串器: MAXIM(ADI) MAX96712GTB
 - 摄像头连接器: Fakra Z coding
 - PoC 供电: DC 9-16V
 - DC 供电: DC 12V
 - 工作环境: -20°C~70°C
 - 适配套件: Jetson Orin Nano/NX,Jetson AGX Orin（可选）
 :::
 </div>
</div>

### 框图

:::caution 注意
(1) I2C 总线号表示硬件位置（对应连接器）。该总线号不一定与软件中列出的编号一致。

(2) 同轴供电为共享设计，但每条 GMSL 链路都有独立滤波。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Block_Diagram.png" alt="SG4A-NONX-G2Y-A1-框图" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### 接口定义

| 序号 | 型号 | 功能 | 备注 |
|-----|-------|----------|---------|
| CN8 | AFC07-S22ECA-00 | 用于 Jetson Orin Nano/NX | 通常选择该接口 |
| CN1 | AFC07-S28ECA-00 | 用于 Jetson AGX Orin | （可选）引脚定义不同 |
| CN4 CN5 CN6 CN7 | Amphenol Fakra Z Code | 连接到摄像头 | 软件可配置任意通道 |
| CN2 | HCZZ0001-3 | FSYNC | 同步信号 |
| CN3 | DC-005-2.5A-2.0 | 电源 | 电源接口 |


#### CN8 接口 引脚定义

| 引脚编号 | 名称 | 备注 |
|---------|------|---------|
| 1 | GND | 地 |
| 2 | CSI2_D0N | 差分信号 |
| 3 | CSI2_D0P | 差分信号 |
| 4 | GND | 地 |
| 5 | CSI2_D1N | 差分信号 |
| 6 | CSI2_D1P | 差分信号 |
| 7 | GND | 地 |
| 8 | CSI2_CLKBN | 时钟差分信号 |
| 9 | CSI2_CLKBP | 时钟差分信号 |
| 10 | GND | 地 |
| 11 | CSI2_D2N | 差分信号 |
| 12 | CSI2_D2P | 差分信号 |
| 13 | GND | 地 |
| 14 | CSI2_D3N | 差分信号 |
| 15 | CSI2_D3P | 差分信号 |
| 16 | GND | 地 |
| 17 | PWDN | 3.3V LEVEL |
| 18 | NC | 未连接 |
| 19 | GND | 地 |
| 20 | I2C_SCL | 3.3V LEVEL |
| 21 | I2C_SDA | 3.3V LEVEL |
| 22 | VDD3V3 | 板卡供电 |

#### CN1 接口 引脚定义（可选）

| 引脚编号 | 名称 | 备注 |
|---------|------|---------|
| 1 | VDD3V3 | 板卡供电 |
| 2 | VDD3V3 | 板卡供电 |
| 3 | MS | 3.3V LEVEL |
| 4 | ERRB | 3.3V LEVEL |
| 5 | MPF10 | 3.3V LEVEL |
| 6 | FSYNC | 3.3V LEVEL |
| 7 | GND | 地 |
| 8 | I2C_SDA | 3.3V LEVEL |
| 9 | I2C_SCL | 3.3V LEVEL |
| 10 | GND | 地 |
| 11 | NC | 未连接 |
| 12 | PWDN | 3.3V LEVEL |
| 13 | GND | 地 |
| 14 | CSI_D0N | 差分信号 |
| 15 | CSI_D0P | 差分信号 |
| 16 | GND | 地 |
| 17 | CSI_D1N | 差分信号 |
| 18 | CSI_D1P | 差分信号 |
| 19 | GND | 地 |
| 20 | CSI_CLKN | 时钟差分信号 |
| 21 | CSI_CLKP | 时钟差分信号 |
| 22 | GND | 地 |
| 23 | CSI_D2N | 差分信号 |
| 24 | CSI_D2P | 差分信号 |
| 25 | GND | 地 |
| 26 | CSI_D3N | 差分信号 |
| 27 | CSI_D3P | 差分信号 |
| 28 | GND | 地 |

#### CN3: 12V 电源 输入

| 引脚编号 | 名称 | 备注 |
|---------|------|---------|
| 1 | 12V-IN | 摄像头供电 |
| 2 | GND | 地 |

#### CN2: FSYNC 输入

| 引脚编号 | 名称 | 备注 |
|---------|------|---------|
| 1 | FSYNC | 3.3V LEVEL |
| 2 | GND | 3.3V LEVEL |
| 3 | MPF10 | 3.3V LEVEL |


| 连接器 | 接口 Definition |
|-----------|---------------------|
| FAKRA Z | +: PoC 信号 / -: 地 |

## 支持的摄像头列表

:::note 摄像头兼容性
以下摄像头兼容不同 JetPack 版本：
:::

| 摄像头 | 数据类型 | Jetpack 6.0 | Jetpack 6.1 | Jetpack 6.2 |
|--------------|-------------|---------------|-------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ |
| DMSBBFAN | YUV422 | - | - | ✅ |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - | - |

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

## 硬件准备

### 物料清单

<div className="row">
 <div className="col col--6">
 :::note 标准配置
 - SG4A-NONX-G2Y-A1 转接板
 - 电源适配器
 - 触发线缆
 - 电源转接线
 - FPC
 :::
 </div>
 <div className="col col--4">
 :::note 可选配置
 - Jetson Orin Nano/NX 开发套件
 :::
 </div>
</div>

### 安装步骤

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/NVIDIA_Jetson_Orin_Nano_NX/GMSL_adapter_board_developer_kit/SG4A-NONX-G2Y-A1/SG4A-NONX-G2Y-A1_Application.png" alt="SG4A-NONX-G2Y-A1-快速设置" style={{maxWidth: '70%', height: 'auto'}} />
</div>

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 SG4A-NONX-G2Y-A1 转接板
2. 将 SG4A-NONX-G2Y-A1 板卡安装到 Jetson Orin Nano/NX 或 Jetson AGX Orin 模组上
3. 连接电源
4. 启动系统
:::

## 软件准备

### SDK 下载

:::note 驱动包
请根据摄像头类型和 JetPack 版本选择合适的驱动包:
:::

| 摄像头 类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| GMSL 摄像头 (YUV) | JP6.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.0/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.0_L4TR36.3) |
| GMSL 摄像头 (YUV) | JP6.1 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.1/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.1_L4TR36.4.2) |
| GMSL 摄像头 (YUV) | JP6.2 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20Orin%20Nano%26NX%20Devkit/SG4A-NONX-G2Y-A1/JetPack6.2/SG4A-NONX-G2Y-A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3) |


:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

### 快速设置

:::note 系统更新
可以使用 NVIDIA SDK Manager Linux 软件，或通过 Linux 命令行使用 NVIDIA Linux Driver Package 将 JetPack OS 刷写到 NVIDIA Jetson 设备。对于初学者，建议优先使用 NVIDIA SDK Manager。
:::

1. 将驱动包复制到 Jetson 设备的工作目录，例如 “/home/nvidia”

   ```
   /home/nvidia/SG4A_NONX_G2Y_A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3
   ```
2. 进入驱动目录

   ```
   cd SG4A_NONX_G2Y_A1_ORIN_NANO_YUV_JP6.2_L4TR36.4.3
   ```
3. 为所有脚本授予执行权限，然后运行 `install.sh` 脚本

   ```
   chmod a+x *.sh
   ./install.sh
   ```
4. 使用 "sudo /opt/nvidia/jetson-io/jetson-io.py" 命令选择对应设备

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson 24pin CSI Connector"
   2.select Configure for compatible hardware
   3.select "Jetson Sensing YUV GMSLx4"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
5. 如果第 4 步无法执行，可手动修改 extlinux.conf 文件以应用设备树。

   ```
   sudo vi /boot/extlinux/extlinux.conf
   ```
6. 将文件修改为以下内容，然后重启。

   ```
   TIMEOUT 30
   DEFAULT JetsonIO

   MENU TITLE L4T boot options

   LABEL primary
         MENU LABEL primary kernel
         LINUX /boot/Image
         INITRD /boot/initrd
         APPEND ${cbootargs} root=PARTUUID=1171a64d-f038-4b7a-91a9-cb3d448d880c rw rootwait rootfstype=ext4 mminit_loglevel=4 console=ttyTCU0,115200 firmware_class.path=/etc/firmware fbcon=map:0 nospectre_bhb video=efifb:off console=tty0

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
         MENU LABEL Custom Header Config: <CSI Jetson Sensing YUV GMSLx4>
         LINUX /boot/Image
         FDT /boot/dtb/kernel_tegra234-p3768-0000+p3767-0005-nv.dtb
         INITRD /boot/initrd
         APPEND ${cbootargs} root=PARTUUID=1171a64d-f038-4b7a-91a9-cb3d448d880c rw rootwait rootfstype=ext4 mminit_loglevel=4 console=ttyTCU0,115200 firmware_class.path=/etc/firmware fbcon=map:0 nospectre_bhb video=efifb:off console=tty0
         OVERLAYS /boot/tegra234-camera-yuv-gmslx4-overlay.dtbo
   ```
7. 设备重启后安装 v4l-utils 插件，然后进入驱动目录并运行 `quick_bring_up.sh` 脚本。

   ```
   sudo apt update
   sudo apt-get install v4l-utils
   sudo ./quick_bring_up.sh
   ```
8. 可为每路摄像头配置串行器类型，然后选择 `Bring up one camera`

   ```
   This package is use for Sensing SG4A-NONX-G2Y-A1 on JetPack-6.2-L4T-36.4.3
   Press select your frist camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your second camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your third camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your fourth camera type: (GMSL=0, GMSL2/6G=1, GMSL2/3G=2)
   1
   Press select your camera port [0-3]:
   0
   Press select your camera resolution:
   0:1920x1080
   1:1920x1536
   2:2880x1860
   3:3840x2160
   4:1280x720
   0
   ```
9. 如需使用外部触发同步模式，需要在启动摄像头后运行 `camera_fsync_set.sh` 脚本。

   ```
   ./camera_fsync_set.sh
   ```
10. 外部触发信号通过转接板上的 “CN2” 端口输入。

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
   export KERNEL_HEADERS=$PWD/kernel/kernel-jammy-src
   export INSTALL_MOD_PATH=<install-path>/Linux_for_Tegra/rootfs/
   make -C kernel
   make modules
   make dtbs
   sudo -E make install -C kernel

   cp kernel/kernel-jammy-src/arch/arm64/boot/Image <install-path>/Linux_for_Tegra/kernel/Image
   cp nvidia-oot/device-tree/platform/generic-dts/dtbs/* <install-path>/Linux_for_Tegra/kernel/dtb/
   ```
3. 将新生成的 Image 和 dtb 安装到 NVIDIA 设备并重启使其生效

   ```
   dtb:nvidia-oot/device-tree/platform/generic-dts/dtbs/
   Image: kernel/kernel-jammy-src/arch/arm64/boot/

   tegra-camera.ko:nvidia-oot/drivers/media/platform/tegra/camera/
   nvhost-nvcsi-t194.ko:nvidia-oot/drivers/video/tegra/host/nvcsi/
   ```
4. 将上述编译生成的 image、dtb、ko 复制到 Jetson 对应位置

   ```
   sudo cp *.dtbo /boot/
   sudo cp Image /boot/Image
   sudo cp tegra-camera.ko /lib/modules/5.15.148-tegra/updates/drivers/media/platform/tegra/camera/
   sudo cp nvhost-nvcsi-t194.ko /lib/modules/5.15.148-tegra/updates/drivers/video/tegra/host/nvcsi/
   ```
5. 选择要启用的 device tree

   ```
   sudo /opt/nvidia/jetson-io/jetson-io.py

   1.select "Configure Jetson 24pin CSI Connector"
   2.select Configure for compatible hardware
   3.select "Jetson Sensing YUV GMSLx4"
   4.select "Save pin changes"
   5.select "Save and reboot to reconfigure pins"
   ```
6. 安装摄像头驱动

   ```
   sudo insmod ./ko/max96712.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko
   ```
7. 拉起摄像头

   ```
   ## CAM0
    gst-launch-1.0 v4l2src device=/dev/video0 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM1
    gst-launch-1.0 v4l2src device=/dev/video1 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM2
    gst-launch-1.0 v4l2src device=/dev/video2 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink

    ## CAM3
    gst-launch-1.0 v4l2src device=/dev/video3 ! "video/x-raw, format=UYVY, width=1920, height=1080, framerate=30/1" ! xvimagesink
   ```

<br />
## 常见问题

<!-- 详情请点击[这里](../../../FAQ/FAQ_jetson) -->
