---
sidebar_position: 10
title: SG8A-ORIN-GMSL2（已停产）
---

# SG8A-ORIN-GMSL2（已停产）

:::warning 产品已停产
该产品已停产，不再销售。本文档仅作为现有客户的参考资料保留。如需当前可选产品，请联系销售团队。
:::

## 概述

<div className="row">
 <div className="col col--8">
 SG8A-ORIN-GMSL2 转接板最多允许 8 路摄像头连接到 Jetson AGX Orin 模组，
完全兼容 NVIDIA Jetson AGX Orin 开发套件。
由于 GMSL 摄像头类型较多，转接板可自适应工作在不同频率下，
 可通过软件配置同时兼容 GMSL 和 GMSL2 协议接口。
GMSL 摄像头通过 PoC（Power over Coax）供电，因此所有数据、控制信号和电源都通过 50 欧姆同轴电缆传输，
使车载应用中的摄像头线束布线更加灵活，也更便于安装。
 </div>
 <div className="col col--4">
 :::note 主要特性
 - 8 camera 支持
 - GMSL/GMSL2 compatible
 - PoC 供电
 - 易于安装
 :::
 </div>
</div>


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL.png" alt="SG8A-ORIN-GMSL"
 style={{maxWidth: '55%', height:'auto'}} />
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-65.html?recommendFromPid=0&fromMid=898" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 快速入门

### 规格

<div className="row">
 <div className="col col--6">
 :::note 基本信息
 - 型号: SG8A-ORIN-GMSL2
 - 尺寸: 104mm*74mm
 - 重量: 50g
 - 连接器: 1x120引脚 High-density
 - 摄像头输入: 摄像头*8(GMSL2/GMSL)
 - 触发输入: 12引脚 同步 In
 :::
 </div>
 <div className="col col--6">
 :::note 技术规格
 - 解串器: MAXIM(ADI) MAX9296A*4
 - 摄像头 连接器: Fakra Z Code
 - POC 供电: DC 8-16V
 - DC 供电: DC 12-24V
 - 工作条件： -20°C to +85°C
 - 适配套件: Jetson AGX Orin/Xavier
 :::
 </div>
</div>

### 硬件概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-overview.png" alt="SG8A-ORIN-GMSL2-overview" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### 框图

:::caution 注意
（1）I2C 总线号表示硬件位置（对应连接器 J2 引脚）。该总线号不一定与软件中列出的编号一致。

（2）同轴供电共用，但每一路 GMSL 线路都有独立滤波器。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-Block Diagram.png" alt="SG8A-ORIN-GMSL2-框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>

### 支持的摄像头列表

:::note 摄像头兼容性
以下摄像头支持不同 JetPack 版本：
:::

| 摄像头 | 输出数据 | Jetpack 5.1.2 | Jetpack 6.0DP | Jetpack 6.0 | Jetpack 6.1 | Jetpack 6.2 |
|--------|-------------|---------------|---------------|-------------|-------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | ✅ | - | - | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | ✅ | - | - | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ | ✅ | - | ✅ |
| DMSBBFAN | YUV422 | ✅ | - | - | - | ✅ |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - | - | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | ✅ | - | ✅ | - | - |

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 5.1.2</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### 硬件准备

#### 物料清单

<div className="row">
 <div className="col col--6">
 :::note 标准配置
 - 电源适配器
 - 电源切换线束
 - SG8A-ORIN-GMSL2 转接板
 - Copper column, M2.5*16 (3 pcs)
 - Screw, M2.5-F (3 pcs)
 :::
 </div>
 <div className="col col--4">
 :::note 可选配置
 - Jetson AGX Orin DK
 :::
 </div>
</div>

#### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-complete2.png" alt="SG8A-ORIN-GMSL2-complete" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### 安装步骤

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 SG8A-ORIN-GMSL2 转接板
2. 将 SG8A-ORIN-GMSL2 转接板安装到 Jetson AGX Orin 模组
3. 连接电源
4. 启动系统
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
 <iframe
 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
 src="//player.bilibili.com/player.html?bvid=BV1gj5TzdEAo&page=1&high_quality=1&danmaku=0"
 scrolling="no"
 border="0"
 frameBorder="no"
 framespacing="0"
 allowFullScreen="true">
 </iframe>
</div>

### 软件准备

#### SDK 下载

:::note 驱动包
请根据摄像头类型和 JetPack 版本选择合适的驱动包:
:::

| 摄像头 类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| GMSL 摄像头 (YUV) | JP5.1.2 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP5.1.2_L4TR35.4.1) |
| GMSL 摄像头 (YUV) | JP6.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_GMSL1_JP6.0_L4TR36.3.0) |
| GMSL2 摄像头 (YUV) | JP5.1.2 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1) |
| GMSL2 摄像头 (YUV) | JP6.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP6.0_L4TR36.3.0) |
| GMSL2 摄像头 (RAW) | JP5.1.2 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack5.1.2/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP5.1.2_L4TR35.4.1) |
| GMSL2 摄像头 (RAW) | JP6.0 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG8A-ORIN-GMSL2-F/JetPack6.0/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_RAW_JP6.0_L4TR36.3.0) |

:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

#### 快速拉起

:::note 系统更新
可以使用 NVIDIA SDK Manager Linux 软件，或通过 Linux 命令行使用 NVIDIA Linux Driver Package 将 JetPack OS 刷写到 NVIDIA Jetson 设备。对于初学者，建议优先使用 NVIDIA SDK Manager。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-ORIN-GMSL2/SG8A-ORIN-GMSL2-cmd.png" alt="SG8A-ORIN-GMSL2-cmd" style={{maxWidth: '100%', height: 'auto'}} />
</div>

1. 将驱动包复制到 Jetson 设备的工作目录，例如 “/home/nvidia”

   ```
   /home/nvidia/SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1
   ```
2. 进入驱动目录

   ```
   cd SG8A_ORIN_GMSL2-F_V2_AGX_Orin_YUV_JP5.1.2_L4TR35.4.1
   ```
3. 为 `quick_bring_up.sh` 脚本授予执行权限并执行脚本
   ```
   chmod a+x quick_bring_up.sh
   sudo ./quick_bring_up.sh
   ```
4. 选择摄像头类型。该步骤会在脚本运行完成后安装 Image 和 DTB。
需要重启设备以使 Image 和 DTB 生效。
例如：

   ```
   This package is use for Sensing SG8A-ORING-GMSL on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl1
   2.sgx-yuv-gmsl2
   Press select your camera type:
   2
   ```

此时应输入 `1` 选择摄像头类型，然后按 Enter。
5. 设备重启后，进入驱动目录并运行 `quick_bring_up.sh` 脚本

   ```
   sudo ./quick_bring_up.sh
   ```
6. 选择摄像头类型。先选择 `sgx-yuv-gmsl2` 摄像头类型，然后选择 `SG2-IMX390C-5200-GMSL2`，
最后输入实际连接的 0-7 摄像头端口以开启摄像头。

   ```
   This package is use for Sensing SG8A-ORING-GMSL on JetPack-5.1.2-L4T-35.4.1
   1.sgx-yuv-gmsl1
   2.sgx-yuv-gmsl2
   Press select your camera type:
   2
   Press select your yuv camera type:
   0:SG2-IMX390C-5200-GMSL2
   1:SG2-AR0233-5300-GMSL2
   2.SG2-OX03CC-5200-GMSL2F
   3.SG3-ISX031C-GMSL2F
   4.SG5-IMX490C-5200-GMSL2
   5.SG8-AR0820C-5300-GMSL2
   6.SG8-OX08BC-5300-GMSL2
   0
   Press select your camera port [0-7]:
   0
   ready bring up camera
   Use the following command to light the camera!
   gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev
   ```
7. 选择上方提示的命令之一点亮摄像头.

<br />
#### 集成 SENSING 驱动源码

1. 编译 Image 和 dtb
 参考以下命令将 Dtb 和 Kernel 源码集成到你的内核源码中

   ```
   cp camera-driver-package/source/hardware Linux_for_Tegra/source/public/$YourDir/hardware -r
   cp camera-driver-package/source/kernel Linux_for_Tegra/source/public/$YourDir/kernel -r
   ```
2. 进入源码根目录并重新编译

   ```
   cd  Linux_for_Tegra/source/public/$YourDir/
   export CROSS_COMPILE_AARCH64_PATH=toolchain-path
   export CROSS_COMPILE_AARCH64=toolchain-path/bin/aarch64-buildroot-linux-gnu-
   mkdir kernel_out
   ./nvbuild.sh -o $PWD/kernel_out
   ```
3. 将新生成的 Image 和 dtb 安装到 NVIDIA 设备并重启使其生效

   ```
   dtb:kernel_out/arch/arm64/boot/dts/nvidia/
   Image: kernel_out/arch/arm64/boot/Image
   ```
4. 安装摄像头驱动

   ```
   sudo insmod ./ko/max9295.ko
   sudo insmod ./ko/max9296.ko
   sudo insmod ./ko/sgx-yuv-gmsl2.ko
   ```
5. 拉起摄像头

   ```
   gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev
   ```

<br />
## 常见问题

详情请点击[这里](../../../FAQ/FAQ_jetson)
