---
sidebar_position: 3
---

# NVIDIA 机器人数据采集套件

## 概述

<div className="row">
  <div className="col col--12">
    NVIDIA 机器人数据采集套件是一套完整的多摄像头机器人数据采集开发套件，集成 <strong>NVIDIA Jetson AGX Orin</strong> 与 <strong>SENSING SG10A-AGON-G2M-A1 GMSL 转接板</strong>。SENSING 提供优化后的摄像头驱动，使 GMSL 摄像头能够与 Jetson 平台顺畅集成。
  </div>
</div>

<div style={{textAlign: 'center'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_6_NVIDIA_Robot_Data_Acquisition_Suite/NRDS/NRDS_Application.jpg?x-oss-process=image/format,webp" alt="NRDS_Application.jpg" style={{maxWidth: '55%', height:'auto'}} />
</div>

<br />

<div style={{textAlign: 'center'}}>

:::note 产品组件
<table style={{margin: '0 auto'}}>
| 组件 | 供应商 | 说明 |
|-----------|----------|-------------|
| Jetson AGX Orin | NVIDIA（官方） | 官方开发套件 |
| SG10A-AGON-G2M-A1 | SENSING | GMSL 转接板，最多支持 10 路摄像头 |
| 驱动包 | SENSING | 基于 JetPack 6.2，支持 Astra S56x 与 SHF3L/SHF3H 摄像头 |
</table>
:::

</div>

## 系统架构

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Hardware_Overview.png?x-oss-process=image/format,webp" alt="NRDS Architecture" style={{maxWidth: '70%', height: 'auto'}} />
  <p>SG10A-AGON-G2M-A1 硬件概览</p>
</div>

## 组件规格

### Jetson AGX Orin（NVIDIA 官方）

:::note 官方开发套件
- **模组**：NVIDIA AGX Orin（32GB/64GB 可选）
- **处理器**：NVIDIA Arm® Cortex®-A78AE CPU + NVIDIA Ampere GPU
- **软件**：JetPack 6.2（L4T R36.4.3）
- **接口**：CSI-2、PCIe、USB、以太网等
:::

更多信息请访问 [NVIDIA Jetson AGX Orin](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/)。

### SG10A-AGON-G2M-A1（SENSING）

<div className="row">
  <div className="col col--6">
    :::note 基本信息
    - 型号：SG10A-AGON-G2M-A1
    - 尺寸：88mm × 120mm
    - 重量：50g
    - 连接器：1×120Pin 高密度连接器
    - 摄像头输入：10× GMSL2/GMSL 摄像头
    - 触发输入：4Pin 同步输入
    :::
  </div>
  <div className="col col--6">
    :::note 技术规格
    - 解串器：MAXIM(ADI) MAX9296A ×3；MAXIM(ADI) MAX96712A ×1
    - 摄像头连接器：Fakra Z Code
    - POC 供电：DC 9-16V
    - DC 供电：DC 12V
    - 工作条件：-20°C 至 +70°C
    :::
  </div>
</div>

:::note 关键特性
- 最多支持 10 路摄像头（GMSL/GMSL2 混合）
- 同轴供电（PoC）：单根同轴线传输数据、控制和电源
- 兼容 NVIDIA Jetson AGX Orin 和 Jetson AGX Thor
- 灵活布线，适用于车载应用
:::

更多信息请访问 [SENSING SG10A-AGON-G2M-A1 GMSL 转接板](/zh-Hans/docs/2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1)。

### SG10A-AGON-G2M-A1 框图

:::caution 注意
1. I2C 总线编号对应硬件位置（与连接器一一对应），不一定与软件中列出的编号一致。
2. 同轴供电为共用供电，但每一路 GMSL 线路均有独立滤波。
3. **重要**：请将转接板 J19 的 2 脚和 4 脚短接，以启用摄像头同步。
:::

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Block_Diagram.png" alt="Block Diagram" style={{maxWidth: '100%', height: 'auto'}} />
</div>

#### J19 引脚定义

<div style={{display: 'flex', justifyContent: 'center'}}>
| 引脚号 | 名称 | 说明 |
|--------|------|---------|
| 1 | GND | 地 |
| 2 | SYNC1 | U19 和 U4 的触发引脚 |
| 3 | GND | 地 |
| 4 | SYNC2 | U13 和 U3 的触发引脚 |
</div>

:::note SYNC1 和 SYNC2 跳线
使用触发模式时，**必须将 SYNC1（2 脚）和 SYNC2（4 脚）短接**，摄像头才能正常触发。
:::

## 支持的摄像头

:::note JetPack 6.2（L4T R36.4.3）驱动包
最新驱动包支持 **Astra S56x** 与 **SHF3L/SHF3H** 摄像头。
:::

<div style={{display: 'flex', justifyContent: 'center'}}>
| 型号 | 类型 | 分辨率 | 曝光 | 数据格式 | 水平视场 | 角色/位置 | 最大数量 | 端口 | 文档 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |:--- |
| **Astra S56x** | 双目 | 2 * 5MP | 全局 | RAW | 120° | **头部**：Depth & VLA | 1 | J27/J29 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Binocular_Camera/S56) |
| **SHF3L** | 单目 | 3MP | 卷帘 | YUV | 190° | **手部**：HDR 30fps 单目摄像头 | 6 | J21-J26 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHF3L) |
| **SHW3H**（可选） | 单目 | 3MP | 卷帘 | YUV | 120° | **头部**：HDR 60fps 单目摄像头 | 6 | J21-J26 | [查看规格](https://wiki.sensing-world.com/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW3H) |
</div>

### 摄像头与设备节点映射（JetPack 6.2）

<div style={{display: 'flex', justifyContent: 'center'}}>
| 端口 | 设备节点 | 摄像头 |
|------|----------|--------|
| J27 | /dev/video0, /dev/video1 | S56x |
| J29 | /dev/video2, /dev/video3 |  |
| J25 | /dev/video4 | SHF3L/SHF3H |
| J26 | /dev/video5 | SHF3L/SHF3H |
| J23 | /dev/video6 | SHF3L/SHF3H |
| J24 | /dev/video7 | SHF3L/SHF3H |
| J21 | /dev/video8 | SHF3L/SHF3H |
| J22 | /dev/video9 | SHF3L/SHF3H |
</div>

## 硬件准备

### 套件内容

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_1_NVIDIA_Jetson/SG10A-AGON-G2M-A1/SG10A-AGON-G2M-A1_Kit_Contents.png" alt="Kit Contents" style={{maxWidth: '90%', height: 'auto'}} />
</div>

### 清单

<div style={{display: 'flex', justifyContent: 'center'}}>
| 序号 | 产品型号 | 数量 | 备注 |
|---|---|---:|---|
| 1 | 电源适配器 | 1 | 标配 |
| 2 | 电源转接线束 | 1 | 标配 |
| 3 | SG10A-AGON-G2M-A1 转接板 | 1 | 标配 |
| 4 | 铜柱，M2.5×12+5 | 3 | 标配 |
| 5 | 螺丝，M2.5-F | 3 | 标配 |
| 6 | Jetson AGX Orin DK | 1 | 可选 |
| 7 | 触发线 | 1 | 标配 |
</div>

### 安装步骤

:::note 快速设置
1. 使用同轴线将 GMSL 摄像头连接到 SG10A-AGON-G2M-A1 板卡。
2. **重要**：将 J19 的 2 脚和 4 脚短接，以启用摄像头同步。
3. 将 SG10A-AGON-G2M-A1 板卡安装到 Jetson AGX Orin 模组。
4. 连接电源。
5. 启动系统。
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

## 软件准备

### 驱动包下载

<div style={{textAlign: 'center'}}>
<table style={{margin: '0 auto'}}>
| 摄像头类型 | JetPack 版本 | 下载链接 |
|-------------|-----------------|---------------|
| Astra S56x + SHF3L/SHF3H | JP6.2 (L4TR36.4.3) | [Download](https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3) |
</table>
</div>

:::tip 下载方法
使用 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载 GitHub 中的指定目录：
1. 复制 GitHub 仓库目录 URL。
2. 粘贴到 DownGit。
3. 点击 Download。
:::
