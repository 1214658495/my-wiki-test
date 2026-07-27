---
sidebar_position: 1
---

# HSBKITxM


## 概述

<div className="row">
 <div className="col col--12">
 HSBKITxM（Holoscan Sensor Bridge）提供基于 FPGA 的接口，用于 GPU 上的低延迟传感器数据处理。
外设数据由 FPGA 采集，并通过 UDP 发送到主机系统，ConnectX 设备可将这些 UDP 数据直接写入 GPU 显存。
本软件包基于 NVIDIA 官方 HSB v2.2.1 软件包，并增加了对 SENSING HSB 摄像头和
[Lattice Holoscan Sensor Bridge 设备](https://www.latticesemi.com/products/developmentboardsandkits/certuspro-nx-sensor-to-ethernet-bridge-board) 的支持。
 </div>
</div>


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/Sensing-HSBKIT01.png" alt="Sensing-HSBKIT01"
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
 <div style={{flex: 1, minWidth: 500, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>特性:</strong><br/>
 • 支持 Nvidia Holoscan 传感器 Bridge（HSB） 平台 <br/>
 • 输出像素：最高 3840*2160 <br/>
 • 支持不同焦距镜头 <br/>
 • 输出格式: RAW/YUV422 <br/>
 • 支持定制 <br/>
 • 尺寸：L:185mm x W:77mm x H:41mm <br/>
 • 兼容 AGX Thor 和 AGX Orin <br/>
 </div>
 <div style={{flex: 1, minWidth: 200, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
 <strong>应用:</strong><br/>
 • 工业 <br/>
 • 机器人 <br/>
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
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png" alt="HSBKIT2M" style={{maxWidth: '80%', height: 'auto'}} />
 <p><em>图 1：HSBKIT2M</em></p>
</div>

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Nvidia_jetson/SG8A-AGON-G2Y-A1/SG8A-AGON-G2Y-A1_Hardware_Overview2.png" alt="SG8A-AGON-G2Y-A1-overview2" style={{maxWidth: '40%', height: 'auto'}} />
</div> -->

<!-- ### 框图 -->

<!-- :::caution 注意
（1）The coaxial power supply is shared, but each GMSL line has its own filter.
::: -->

<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_3_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Block_Diagram.png" alt="TRD1 G2A 框图" style={{maxWidth: '80%', height: 'auto'}} />
</div> -->

### 推荐包

:::note HSB 套件购买清单
您可以选择以下产品型号
:::

<!-- | 产品型号 | 部件 | 摄像头关键特性 |
|--------|-------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW 摄像头（滚动快门） |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） <br/> 3MP_MIPI RAW 摄像头（滚动快门） | -->

<!-- | 产品型号 | 部件 | 摄像头关键特性 | 产品图片 |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW 摄像头（滚动快门） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png) |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png) |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） <br/> 3MP_MIPI RAW 摄像头（滚动快门） | [View Image](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png) | -->



<!-- | 产品型号 | 部件 | 摄像头关键特性 | 产品图片 |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW 摄像头（滚动快门） | ![SENSING-HSBKIT2M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT2M.png) |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） | ![SENSING-HSBKIT4M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png) |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） <br/> 3MP_MIPI RAW 摄像头（滚动快门） | ![SENSING-HSBKIT6M](https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png) | -->


| 产品型号 | 部件 | 摄像头关键特性 | 产品图片 |
|--------|-------------|---------------|---------------|
| SENSING-HSBKIT2M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs | 8MP_MIPI RAW 摄像头（滚动快门） | <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/Sensing-HSBKIT01.png" alt="SENSING-HSBKIT2M" width="200" /> |
| SENSING-HSBKIT4M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） | <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT4M.png" alt="SENSING-HSBKIT4M" width="200" /> |
| SENSING-HSBKIT6M | Holoscan Sensor Bridge 套件 *1pcs <br/> SG8-IMX678C-MIPI-H80K *2pcs <br/> SG2-AR0234C-MIPI-H60F *2pcs <br/> SG3-ISX031C-MIPI-H100F1 *2pcs| 8MP_MIPI RAW 摄像头（滚动快门）<br/> 2MP_MIPI RAW 摄像头（全局快门） <br/> 3MP_MIPI RAW 摄像头（滚动快门） | <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSBKIT6M.png" alt="SENSING-HSBKIT6M" width="200" /> |

<!-- :::note JetPack 版本
NVIDIA JetPack（<strong style={{ color: 'var(--ifm-color-primary-light)' }}>Jetpack 7.0</strong>）是面向 Jetson 系列开发板的官方软件开发套件（SDK）。它包含操作系统、驱动、CUDA、cuDNN、TensorRT 以及其他开发工具和库。每个 JetPack 版本通常对应特定的 Jetson Linux 版本（此前称为 L4T - Linux for Tegra）。
- 36.4.3: L4T R36.4.3 (Jetpack 6.2)
- 36.4: L4T R36.4 (Jetpack 6.1)
- 36.3: L4T R36.3 (Jetpack 6.0)
- 35.4.1: L4T R35.4.1 (Jetpack 5.1.2)

更多信息请访问 [NVIDIA 官方 Jetson 下载中心](https://developer.nvidia.com/embedded/jetpack-archive).
::: -->

### 硬件准备

#### 物料清单（仅适用于 HSBKIT2M）

| 序号 | 产品型号 | 数量 | 备注 |
|---|---|---:|---|
| 1 | Holoscan Sensor Bridge 套件 | 1 | 最多支持 2 路摄像头 |
| 2 | SG2A-HOLOSCAN-MIPI-A1 | 1 | 标准配置 |
| 3 | SG8-IMX678C-MIPI-H80K | 2 | 标准配置 |
| 4 | FPC_0.5mm_L-50mm | 2 | 标准配置 |
| 5 | M2.5*5 | 2 | 标准配置 |
| 6 | MPO 转 LC 10G 一分四光纤 | 1 | 标准配置 |
| 7 | QSFP-100G 多模光收发模块 | 1 | 标准配置 |
| 8 | 10 Gigabit 多模双纤光收发模块 | 2 | 标准配置 |
| 9 | 电源适配器 | 1 | 标准配置 |
| 10| 类型-c data cable | 1 | 标准配置 |
| 11| JETSON AGX THOR DK | 1 | 可选配置 |

<br />

<div style={{display: 'flex', justifyContent: 'center'}}>

| **参数** | **规格** |
|---------------|-------------------|
| **传感器** | SONY 8.29MP IMX678 RGGB |
| **ISP** | - |
| **图像尺寸** | 1/1.8 inch CMOS |
| **输出像素** | 3840H*2160V |
| **帧率** | MAX 60fps |
| **像元尺寸** | 2.0μm × 2.0μm |
| **HDR 支持** | 是 |
| **输出数据** | MIPI/RAW@10bit/12bit |
| **供电** | 3.3V |
| **电流** | < 300mA @3.3VDC |
| **摄像头 接口** | FPC |
| **连接器** | FH67-30S-0.5SV |
| **工作温度范围** | -30°~+85°C |
| **尺寸** | W: 20mm, L:35mm, H:25mm |
| **EFL** | 4.0mm |
| **F/NO** | 2.6 |
| **光学畸变参数** | 88% |
| **视场角 (FOV)** | HFOV76°/VFOV42° |
| **镜头安装** | M12xP0.5（支持装配不同镜头） |
| **重量** | < 50g |

</div>

<div style={{textAlign: 'center'}}>
 <p><em>SG8-IMX678C-MIPI-H80K 规格</em></p>
</div>


#### HSBKIT2M 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_5_NVIDIA_Holoscan_Sensor_Bridge/HSB_Accessories_for_AGX_Thor.png" alt="用于 AGX Thor 的 HSB 配件" style={{maxWidth: '80%', height: 'auto'}} />
 <p><em>图 2：用于 AGX Thor 的 HSB 配件</em></p>
</div>

#### 安装步骤

:::note 快速设置
1. 将 HSB MIPI 摄像头连接到 Holoscan Sensor Bridge 板卡
2. 将所有设备连接到 Jetson AGX Orin 开发套件 或 Jetson AGX Thor 开发套件
3. 连接电源(DC 12V)
4. 启动系统并拉起摄像头
:::

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '2rem'}}>
 <iframe
 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
 src="//player.bilibili.com/player.html?bvid=BV1cqazzVEc7&page=1&high_quality=1&danmaku=0"
 scrolling="no"
 border="0"
 frameBorder="no"
 framespacing="0"
 allowFullScreen="true">
 </iframe>
</div>
<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/2_3_NVIDIA_Jetson_AGX_Thor/TRD1_G2A_Kit_Contents_Camera.png" alt="TRD1 G2A 摄像头连接" style={{maxWidth: '90%', height: 'auto'}} />
</div> -->


### 软件准备

#### SDK 下载

:::note SDK 包
请根据您的操作系统和 HSBKITxM 硬件版本选择合适的 SDK 包：
:::

| 下载链接 | 下载工具 |
|---------------|---------------|
| [SDK下载](https://github.com/SENSING-Technology/Holoscan-Sensor-Bridge) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip 下载工具使用方法
**DownGit** 可在不克隆整个仓库的情况下，从 GitHub 仓库下载指定文件夹或文件：
1. 从“下载链接”列复制 GitHub 仓库 URL
2. 在浏览器中打开 [DownGit](https://minhaskamal.github.io/DownGit/#/home)
3. 将仓库 URL 粘贴到输入框
4. 点击“下载”，获取包含 SDK 的 ZIP 文件
5. 将 ZIP 文件解压到目标位置

当只需要 SDK 文件而不需要完整 Git 历史时，此方法尤其适用。
:::

#### 快速拉起

<!-- :::note 系统更新
可以使用 NVIDIA SDK Manager Linux 软件，或通过 Linux 命令行使用 NVIDIA Linux Driver Package 将 JetPack OS 刷写到 NVIDIA Jetson 设备。对于初学者，建议优先使用 NVIDIA SDK Manager。
::: -->


 - 请先完成 [详细用户指南](https://docs.nvidia.com/holoscan/sensor-bridge/latest/) 中描述的 “Host Setup”
 - 将本软件包克隆到设备上
 - 进入软件包路径，并执行命令 `sh docker/build.sh -igpu` 构建 Holoscan Sensor Bridge 容器
 - 在设备终端执行以下命令进入 demo 容器
        ```
        xhost +
        sh docker/demo.sh
        ```
 - 执行以下命令拉起 SENSING MIPI 摄像头

 - For sg2_ar0234c_mipi
            ```
            python3 examples/linux_sg2_ar0234c_mipi_player.py
            ```
 - 对于 sg3_isx031c_mipi

 *注意*：仅支持采集图像数据和保存图片，图片将保存到 `captured_images` 文件夹。
            ```
            python3 examples/linux_sg3_isx031c_mipi_capture.py
            ```
 - 对于 sg8_imx678c_mipi
            ```
            python3 examples/linux_sg8_imx678c_mipi_player.py
            ```

<br />


<!-- ## 配件

### FPC 线缆选项

SG2-IMX662C-MIPI 支持两种 FPC 线缆类型，以满足不同连接需求：

<div style={{textAlign: 'center', marginBottom: '1rem'}}>
 <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Camera/mipi_csi_camera/mipi_csi_camera_FPC.png" alt="FPC 线缆选项"
 style={{maxWidth: '70%', height:'auto'}} />
</div> -->




## 常见问题

<!-- 详情请点击[这里](../../../FAQ/FAQ_jetson) -->
