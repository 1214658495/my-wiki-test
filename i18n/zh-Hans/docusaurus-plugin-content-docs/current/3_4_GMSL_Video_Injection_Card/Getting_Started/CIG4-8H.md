---
sidebar_position: 2
title: CIG4-8H 快速入门
---

# CIG4-8H 快速入门

## 概述
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H.png" alt="CyberCobra" style={{maxWidth: '45%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    <strong>CIG4-8H</strong> GMSL 视频注入卡（以下简称视频注入卡）是一款基于 FPGA 的高速图像产品，由深圳市森云智能科技有限公司（简称 SENSING）自主研发，属于 SENSING 图像解决方案系列。视频注入卡采用 PCIe Gen3 技术，可实现 8 通道视频/图像注入，并通过高精度多通道时间同步技术确保多通道数据同步输出，广泛应用于硬件在环 HIL 仿真系统、数字采集与回灌系统、视频仿真系统等场景。
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/h-col-151.html" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>了解更多</span>
    </a>
  </div>
</div>


## 关键特性与优势

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>硬件：</strong><br/>
    • PCI Express 形态的基板<br/>
    • 最高支持 PCIe Gen3 x8<br/>
    • PCIe 持续带宽最高 4800 MB/s<br/>
    • Zynq™ UltraScale+™ ZU7EV MPSoC
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>视频支持：</strong><br/>
    • 输出分辨率：最高 8 通道 3840×2160@30fps<br/>
    • 输出格式： YUV422, RAW10/12/14<br/>
    • 用于数据传输的高性能 DMA 引擎<br/>
    • 大规模数据实时处理
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>SerDes 支持：</strong><br/>
    • 串行器：MAX9295A、MAX96717F、MAX96717 等<br/>
    • 解串器：MAX9296A、MAX96712、MAX96716、MAX96718 等<br/>
    • 仿真 ECU 与摄像头之间的 I2C 消息<br/>
    • 操作系统：支持 Linux
  </div>
</div>

## 规格参数

<div style={{display: 'flex', justifyContent: 'center'}}>

| **视频注入卡参数** | **值** |
|---|---|
| **主机接口** | PCIe Gen3 x8 |
| **带宽** | 持续带宽最高 4800 MB/s |
| **载板内部存储** | DDR4 |
| **网络接口** | 千兆以太网 |
| **重量** | 300 g |
| **供电功耗** | 12V 供电时，电流约 1A |
| **工作温度** | -20°-70°C |
| **存储温度** | -40°C-80°C |
| **相对湿度** | 5%-90% 无凝露（工作），0%-95%（存储） |
| **MTBF** | 5 年 |
| **串行器** | MAX9295A/MAX96717F/MAX96717... |
| **解串器支持** | MAX9296A/MAX96712/MAX96716/<br/>MAX96718/MAX96722... |
| **同轴线缆型号** | Amphenol Min-fakra Dual<br/>MFK2252AW-001-TL30G-50 |
| **线缆长度** | Amphenol 250mm<br/>MKA2FZ-302LL-FKMZ1-21-01 |
| **输出视频数量** | CIG4-8H：8 通道视频输出 |
| **视频分辨率** | 1-8 百万像素 |
| **视频格式** | 8 bit (YUV422), 10/12/14 bit (RAW) |
| **数据带宽** | 每通道支持 6 Gbps |

</div>

### 高级能力
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
• 支持 ECU 外部触发信号控制，实现所有通道同步输出<br/>
• 支持 基于时间戳的 RAW 视频数据仿真<br/>
• 支持多块基板同步<br/>
• 支持用户注入视频数据<br/>
• 支持由 GPU 显卡仿真渲染的视频数据<br/>
• 支持 gPTP/PTP 同步
</div>


## 硬件准备
### 框图
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG3-8H_Diagram.png" alt="CyberCobra 应用 Diagram" style={{maxWidth: '100%', height:'auto'}} />
</div>

#### 部件清单
<div style={{display: 'flex', justifyContent: 'center'}}>

| 序号 | 产品型号                 | 数量 | 备注                |
|-----|-------------------------------|----------|-----------------------|
| 1   | CIG4-8H 视频注入卡          | 1        | 标准配置|
| 2   | Fakra 一分二转接线 | 4 | 标准配置|
| 3   | 航空插头转网线 | 1 | 标准配置|

</div>

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
自动驾驶车辆完成数据采集后，需要进行算法验证与优化，这就需要数据注入系统。自动驾驶 IPC 通过 PCIe 接口将硬盘中的采集视频数据传输到视频注入卡，视频注入卡再根据时间戳同步输出 8 路视频，模拟摄像头时序，并通过 GMSL 接口传输至域控制器。CyberCobra 卡支持 gPTP/PTP 同步，可通过交换机、IPC 与 ACU 实现时间同步，确保系统内所有设备处于同一时间轴。
</div>

<!-- #### 请按以下步骤安装产品：

1. 使用同轴线缆将 GMSL 摄像头连接到 CCG3-8H
2. 将 CCG3-8H 插入主机 PCIe 插槽
3. Connect the power supply to the CCG3-8H
4. 系统上电

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '20px'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="//player.bilibili.com/player.html?bvid=BV1w6j2z8E16&page=1&high_quality=1&danmaku=0"
    scrolling="no"
    border="0"
    frameBorder="no"
    framespacing="0"
    allowFullScreen="true">
  </iframe>
</div> -->

<!-- :::note Complete 解决方案
SENSING can provide a complete solution including 摄像头 + GMSL Video Injection Card + IPC + Coaxial cable for your hardware-in-the-loop testing needs.
::: -->




## 软件准备

<!-- ### Software Framework Diagram -->
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_4_GMSL_Video_Injection_Card/CIG4-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    软件框架架构
  </div>
</div>

### SDK 下载

:::note SDK 软件包
请根据操作系统和 CIG4-8H 硬件版本选择合适的 SDK 软件包：
:::

| 操作系统 | 硬件版本 | SDK 版本 | 下载链接 | 下载工具 |
|------------------|------------------|-------------|---------------|---------------|
| Ubuntu 18.04 LTS <br/> Ubuntu 20.04 LTS | CIG4-8H v1.0 | SDK v2.1.0 | [下载](https://github.com/SENSING-Technology/CIG4-8H) | [DownGit](https://minhaskamal.github.io/DownGit/#/home) |

:::tip 下载工具使用说明
**DownGit** 可在不克隆整个仓库的情况下，从 GitHub 仓库下载指定文件夹或文件：
1. 复制“下载链接”列中的 GitHub 仓库 URL
2. 在浏览器中打开 [DownGit](https://minhaskamal.github.io/DownGit/#/home)
3. 将仓库 URL 粘贴到输入框中
4. 点击“下载”，获取包含 SDK 的 ZIP 文件
5. 将 ZIP 文件解压到目标位置

当只需要 SDK 文件而不需要完整 Git 历史时，该方法尤其适用。
:::

### SDK 软件包内容

<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem'}}>
  <strong>SDK 目录结构:</strong><br/>
  📁 <strong>CIG4-8H-SDK/</strong><br/>
  ├── 📁 <strong>bash/</strong> - 控制脚本和工具<br/>
  ├── 📁 <strong>include/</strong> - 头文件和 API 定义<br/>
  ├── 📁 <strong>xdma/</strong> - PCIe 驱动源代码<br/>
  ├── 📁 <strong>tools/</strong> - 开发与调试工具<br/>
  ├── 📁 <strong>examples/</strong> - 示例应用与演示<br/>
  ├── 📁 <strong>docs/</strong> - API 文档和用户指南<br/>
  ├── 📄 <strong>Makefile</strong> - 构建配置<br/>
  ├── 📄 <strong>README.md</strong> - 快速入门指南<br/>
  └── 📄 <strong>LICENSE</strong> - 软件许可条款
</div>

:::tip 下载帮助
如果下载 SDK 时遇到问题，或需要获取旧版本，请联系技术支持团队 [support@sensing-world.com](mailto:support@sensing-world.com)，或访问 [GitHub 仓库](https://github.com/SENSING-Technology/CIG4-8H) 获取最新版本。
:::

---

## 详细使用说明

如需完整的软件安装、SDK 配置和视频传输协议说明，请参考详细应用指南：

**[📖 完整应用指南](../Application/CIG4-8H_Application)**

<!-- ## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information and frequently asked questions, please contact our technical support team or visit our <a href="https://sensing-world.com/en/h-col-151.html" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>official website</a>.
</div> -->
