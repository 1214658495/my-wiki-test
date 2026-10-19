---
sidebar_position: 3
---

# SG10A-AGON-G2M-A1

## 概述

<div className="row">
 <div className="col col--8">
 SG10A-AGON-G2M-A1 转接板最多允许 10 路摄像头连接到 Jetson AGX Orin 模组，
完全兼容 NVIDIA Jetson AGX Orin 开发套件。
由于 GMSL 摄像头类型较多，转接板可自适应工作在不同频率下，
 可通过软件配置同时兼容 GMSL 和 GMSL2 协议接口。
GMSL 摄像头通过 PoC（Power over Coax）供电，因此所有数据、控制信号和电源都通过 50 欧姆同轴电缆传输，
使车载应用中的摄像头线束布线更加灵活，也更便于安装。
 </div>
 <div className="col col--4">
 :::note 主要特性
 - 10 camera 支持
 - GMSL/GMSL2 compatible
 - PoC 供电
 - 易于安装
 :::
 </div>
</div>


<!-- ![SG8A-ORIN-GMSL](/img/SG8A-ORIN-GMSL.png) -->

<!-- <img src={require('@site/static/img/SG8A-ORIN-GMSL.png').default} alt="SG8A-ORIN-GMSL" /> -->

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1.png" alt="SG10A-AGON-G2M-A1"
 style={{maxWidth: '45%', height:'auto'}} />
</div>
<br />

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/SG10A-AGON-G2M-A1.html?fromMid=898#recommendFromPid=0" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>coming soon</strong>
 </span>
</div> -->

## 快速入门

### 规格

<div className="row">
 <div className="col col--6">
 :::note 基本信息
 - 型号: SG10A-AGON-G2M-A1
 - 尺寸: 88mm*120mm
 - 重量: 50g
 - 连接器: 1x120引脚 High-density connectors
 - 摄像头输入: 摄像头*10(GMSL2/GMSL)
 - 触发输入: 4引脚 同步 In
 :::
 </div>
 <div className="col col--6">
 :::note 技术规格
 - 解串器: MAXIM(ADI) MAX9296A *3
 MAXIM(ADI) MAX96712A *1
 - 摄像头 连接器: Fakra Z Code
 - POC 供电: DC 9-16V
 - DC 供电: DC 12V
 - 工作条件： -20°C to +70°C
 - 适配套件: Jetson AGX Orin
 :::
 </div>
</div>

### 硬件概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Hardware_Overview.png" alt="SG10A-AGON-G2M-A1-overview" style={{maxWidth: '70%', height: 'auto'}} />
</div>

### 框图

:::caution 注意
（1）I2C 总线号表示硬件位置（对应连接器）。该总线号不一定与软件中列出的编号一致。

（2）同轴供电共用，但每一路 GMSL 线路都有独立滤波器。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Block_Diagram.png" alt="SG10A-AGON-G2M-A1-框图" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### J19 引脚定义

<div style={{marginBottom: '2rem'}}>
 <table>
 <thead>
 <tr>
 <th colSpan="3">J19</th>
 </tr>
 <tr>
 <th>引脚 NO</th>
 <th>NAME</th>
 <th>备注</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1</td>
 <td>GND</td>
 <td>/</td>
 </tr>
 <tr>
 <td>2</td>
 <td>SYNC1</td>
 <td>触发 pins 用于 U19 和 U4</td>
 </tr>
 <tr>
 <td>3</td>
 <td>GND</td>
 <td>/</td>
 </tr>
 <tr>
 <td>4</td>
 <td>SYNC2</td>
 <td>触发 pins 用于 U13 和 U3</td>
 </tr>
 </tbody>
 </table>
</div>

### 支持的摄像头列表

:::note 摄像头兼容性
支持 JetPack 6.0 与 JetPack 6.2，各驱动包支持的摄像头组合见 [SDK 下载](#sdk-下载)。以下摄像头列表与映射适用于 JetPack 6.0 的 `SG10A-AGON-G2M-A1-AGX_G335Lg_SHW3H&SHF3L` 驱动包。
:::

#### 摄像头版本支持

* Gemini 335Lg
* SHW3H(3MP/H120UA)
* SHF3L(3MP/H190XA)

#### 摄像头映射

| FAKRA | Video | 摄像头 |
|-------|-------|--------|
| J21 | video0 | SHW3H |
| J22 | video1 | SHW3H |
| J27 | video2 | SHW3H |
| J28 | video3 | SHW3H |
| J29 | video4 | SHW3H |
| J30 | video5 | SHW3H |
| J25 | video6~video13 | Gemini 335Lg |
| J22 | video14~video21 | Gemini 335Lg |
| J22 | video22~video29 | Gemini 335Lg |
| J22 | video30~video37 | Gemini 335Lg |

<!-- | 摄像头 | 输出数据 | Jetpack 5.1.2 | Jetpack 6.2 |
|--------|-------------|---------------|-------------|
| SG1-OX01F10C-GMSL-Hxxx | YUV422 | - | - |
| SG1S-OX01F10C-G1G-Hxxx | YUV422 | - | - |
| SG2-AR0231C-0202-GMSL-Hxxx | YUV422 | - | - |
| SG2-AR0233C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-IMX390C-5200-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG2-OX03CC-5200-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-ISX031C-GMSL2F-Hxxx | YUV422 | ✅ | ✅ |
| SG3S-OX03JC-G2F-Hxxx | YUV422 | - | - |
| SG5-IMX490C-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| SG5-OX05BC-4000-GMSL2-Hxxx | YUV422 | - | - |
| SG8S-AR0820C-5300-G2A-Hxxx | YUV422 | ✅ | ✅ |
| SG8-OX08BC-5300-GMSL2-Hxxx | YUV422 | ✅ | ✅ |
| DMSBBFAN | YUV422 | - | - |
| SG3S-IMX623C-G2F-Hxxx | RAW12 | - | - |
| SG8-IMX728C-G2G-Hxxx | RAW12 | - | - | -->

:::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.0</strong> 或 <strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 6.2</strong>）是 Jetson 系列开发板的官方软件开发套件（SDK），包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
:::

### 硬件准备

#### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Kit_Contents.png" alt="SG10A-AGON-G2M-A1-套件内容" style={{maxWidth: '90%', height: 'auto'}} />
</div>

#### 物料清单

<div style={{marginBottom: '2rem'}}>
 <table>
 <thead>
 <tr>
 <th colSpan="4">Parts list</th>
 </tr>
 <tr>
 <th>序号</th>
 <th>产品型号</th>
 <th>quantity</th>
 <th>remark</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>1</td>
 <td>电源适配器</td>
 <td>1</td>
 <td>标准配置</td>
 </tr>
 <tr>
 <td>2</td>
 <td>电源切换线束</td>
 <td>1</td>
 <td>标准配置</td>
 </tr>
 <tr>
 <td>3</td>
 <td>SG10A-AGON-G2M-A1 转接板</td>
 <td>1</td>
 <td>标准配置</td>
 </tr>
 <tr>
 <td>4</td>
 <td>铜柱，M2.5*12+5</td>
 <td>3</td>
 <td>标准配置</td>
 </tr>
 <tr>
 <td>5</td>
 <td>screw, M2.5-F</td>
 <td>3</td>
 <td>标准配置</td>
 </tr>
 <tr>
 <td>6</td>
 <td>Jetson AGX Orin DK</td>
 <td>1</td>
 <td>可选配置</td>
 </tr>
 <tr>
 <td>7</td>
 <td>触发 line</td>
 <td>1</td>
 <td>标准配置</td>
 </tr>
 </tbody>
 </table>
</div>

#### 安装步骤

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 SG10A-AGON-G2M-A1 转接板
2. 将 SG10A-AGON-G2M-A1 转接板安装到 Jetson AGX Orin 模组
3. 连接电源
4. 启动系统
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
 <iframe
 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
 src="//player.bilibili.com/player.html?bvid=BV15SN4zaEc6&page=1&high_quality=1&danmaku=0"
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

| JetPack 版本 | 框架 | 驱动包 | 支持的摄像头 | 下载链接 |
|--------------|------|--------|--------------|----------|
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56Cx1_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S56C ×1（含 IMU）+ SHF3L/SHF3H ×6 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56Cx1_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S56 ×1（含 IMU）+ SHF3L/SHF3H ×6 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHW3Gx6_JP6.2_L4TR36.4.3` | Astra S56 ×1 + SHW3G/SHF3G ×6 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHW3Gx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_AR0234x5_JP6.2_L4TR36.4.3` | Astra S56 ×1 + AR0234 ×5 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_AR0234x5_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S56&SHW5G_JP6.2_L4TR36.4.3` | SHW5G ×9；Astra S56 ×4；Astra S56 ×2 + SHW5G ×5 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56%26SHW5G_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_60fps_JP6.2_L4TR36.4.3` | SHW5G 60fps ×8（每颗 MAX96712 最多 2 路） | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_60fps_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_JP6.2_L4TR36.4.3` | SHW5G ×9 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW5G_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Hx6_SHW5Gx4_JP6.2_L4TR36.4.3` | SHW3H ×6 + SHW5G ×3 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Hx6_SHW5Gx4_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Gx9_JP6.2_L4TR36.4.3` | SHW3G/SHF3G ×9 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_SHW3Gx9_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A-AGON-G2M-A1-AGX_ORIN_SHW3H&SHF3L_JP6.2_L4TR36.4.3` | SHW3H ×8 / SHF3L ×10 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A-AGON-G2M-A1-AGX_ORIN_SHW3H%26SHF3L_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S36x2_SHF3Lx6_JP6.2_L4TR36.4.3` | Astra S36 ×2 + SHF3L ×6（或 SHW3H ×4） | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S36x2_SHF3Lx6_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_S36x1_AR0233x7_JP6.2_L4TR36.4.3` | Astra S36 ×1 + SG2-AR0233C（60fps）×7 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S36x1_AR0233x7_JP6.2_L4TR36.4.3) |
| JP6.2 | V4L2 | `SG10A_AGON_G2M_A1_AGX_ORIN_N1B60_SHW3Hx6_AR0233x4_JP6.2_L4TR36.4.3` | SH2-N1B60-G2A ×6 或 SHW3H ×6，+ SG2-AR0233C ×4 | [下载](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_N1B60_SHW3Hx6_AR0233x4_JP6.2_L4TR36.4.3) |

:::tip 下载方法
将完整链接地址复制到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 进行下载
:::

:::tip 驱动包说明
- **SIPL** 驱动包基于 JetPack 7.2 起支持的 NVIDIA SIPL 相机框架；**V4L2** 驱动包使用标准 V4L2 / Argus 相机链路。
- 每个驱动包目录内都附带 `Readme.md`（拉起步骤）和 `Version.md`（更新记录），请以所下载驱动包的 Readme 为准。
:::
