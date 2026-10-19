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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
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
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0 / 7.1 / 7.2</strong>）是面向 Jetson 系列开发板的官方软件开发套件（SDK）。它包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 39.2: L4T R39.2 (Jetpack 7.2)
- 38.4: L4T R38.4 (Jetpack 7.1)
- 38.2: L4T R38.2 (Jetpack 7.0)

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

| JetPack 版本 | 框架 | 驱动包 | 支持的摄像头 | 下载链接 |
|--------------|------|--------|--------------|----------|
| JP7.2 | SIPL | `TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2` | SG8-OX08DC-G2G、SG3-OX03H10C-G2F、SHW3G ×8、SHW5G ×8、Astra S56C/S56 ×4、SGX YUV 系列；(S56C ×1 + SHW5G ×2) ×2、(S56C ×1 + SHF3L ×2) ×2；支持外部触发同步 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_AGX_THOR_SIPL_JP7.2_L4TR39.2) |
| JP7.2 | V4L2 | `TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2` | GMSL2 x8 通用包：SGX YUV 系列（含 SHW3H / SHF3L / SG8-ISX028C / SG8-OX08DC / SG2-ISX021C / SG3S11AFLK）、Astra S36、Astra S56、Astra S56C、SHW5G、SHW3G、SG8-IMX728C、SDV11NM1 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.2/TRD1_G2A_GMSL2x8_JP7.2_L4TR39.2) |
| JP7.1 | V4L2 | `TRD1_G2A_AGX_THOR_GMSL2x8_JP7.1_L4TR38.4` | GMSL2 x8 通用包：SGX YUV 系列、SG8-OX08DC、SG8-IMX728C、SG8-ISX028C、SG3-OX03H10C、SHW3G、SHW5G、SDV11NM1、Astra S56、Astra S36 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.1/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.1_L4TR38.4) |
| JP7.0 | V4L2 | `TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2` | GMSL2 x8 通用包（支持异构接入）：SG8-OX08DC、SHW3G、SHW5G、SGX YUV 系列、Astra S36、Astra S56、Astra S56C、SDV11NM1 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_AGX_THOR_GMSL2x8_JP7.0_L4TR38.2) |
| JP7.0 | V4L2 | `TRD1_G2A_YUV_JP7.0_L4TR38.2` | GMSL2 YUV 摄像头（SG2 / SG3S / SG5 / SG8S 系列、SHF3L、SHF3H） | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Thor%20Devkit/TRD1_G2A/JetPack7.0/TRD1_G2A_YUV_JP7.0_L4TR38.2) |


:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

:::tip 驱动包说明
- **SIPL** 驱动包基于 JetPack 7.2 起支持的 NVIDIA SIPL 相机框架；**V4L2** 驱动包使用标准 V4L2 / Argus 相机链路。
- 每个驱动包目录内都附带 `Readme.md`（拉起步骤）和 `Version.md`（更新记录），请以所下载驱动包的 Readme 为准。
:::
