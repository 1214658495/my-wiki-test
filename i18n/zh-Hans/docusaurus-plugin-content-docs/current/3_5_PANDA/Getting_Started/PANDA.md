---
sidebar_position: 1
title: PANDA Serial PG2 快速入门
---

# PANDA Serial PG2 快速入门

## 概述
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/PANDA_Overview.png" alt="PANDA_概述" style={{maxWidth: '45%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    <strong>PANDA Serial PG2</strong> 由深圳市森云智能科技有限公司设计，可将摄像头信号无损转换为 USB 3.0 接口，并支持 SENSING GMSL 系列摄像头
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://www.sensing-world.com/USB_Converter/" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>了解更多</span>
    </a>
  </div>
</div>


## 关键特性与应用

<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>特性：</strong><br/>
    • 未压缩视频采集<br/>
    • 通过 I2C 读写摄像头寄存器<br/>
    • 支持多摄像头同步<br/>
    • 更新摄像头固件
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>应用：</strong><br/>
    • 自动驾驶与机器设备<br/>
    • 视频采集<br/>
    • 实验室<br/>
    • USB 摄像头
  </div>
  <!-- <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>SerDes 支持：</strong><br/>
    • 串行器：MAX9295A、MAX96717F、MAX96717 等<br/>
    • 解串器：MAX9296A、MAX96712、MAX96716、MAX96718 等<br/>
    • 仿真 ECU 与摄像头之间的 I2C 消息<br/>
    • 操作系统：支持 Linux
  </div> -->
</div>

## 规格参数

<div style={{display: 'flex', justifyContent: 'center'}}>

| **参数** | **值** |
|---|---|
| **解串器** | MAX9296AGTM/V+T |
| **分辨率支持** | 1920 * 1080@60fps<br/>1920 * 1536@30fps<br/>仅支持一路摄像头 |
| **帧率** | YUV422/RAW12 |
| **压缩** | 否 |
| **输出接口** | USB3.0 |
| **摄像头 连接器** | 同轴连接器<br/>FMK2252AW-001-TL30G-50 |
| **触发模式** | 支持外部触发 |
| **通信** | 支持读写寄存器<br/>(仅通过 SensingCaptureV3.exe) |
| **支持的操作系统** | Windows 或 Linux / 标准 V4L2 |
| **电源** | 通过 USB 端口供电 / 支持外部供电|
| **电流** | < 500mA |
| **温度** | -40 ~ +75°C |
| **尺寸** | 45mm(W), 64mm(L), 23.6mm(H) |
| **材质** | 金属 |
| **颜色** | 黑色 |

</div>

<!-- ### 高级能力
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
• 支持 ECU 外部触发信号控制，实现所有通道同步输出<br/>
• 支持 基于时间戳的 RAW 视频数据仿真<br/>
• 支持多块基板同步<br/>
• 支持用户注入视频数据<br/>
• 支持由 GPU 显卡仿真渲染的视频数据<br/>
• 支持 gPTP/PTP 同步
</div> -->


## 硬件准备
### 尺寸
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_5_PANDA/PANDA_Dimensions.png" alt="PANDA_Dimensions" style={{maxWidth: '100%', height:'auto'}} />
</div>

<!-- ### 框图
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Diagram.png" alt="CyberCobra 应用 Diagram" style={{maxWidth: '100%', height:'auto'}} />
</div> -->

#### 部件清单
<div style={{display: 'flex', justifyContent: 'center'}}>

| 料号 | 型号 | 说明 | 数量 |
|------------|-------|-------------|-----------|
| 169900-0834 | GH1.25-6PIN-1000mm | 外部触发 线缆 | 1 |
| 169900-0004 | TZJC-PC-ZZ-0250A | 0.5M 二合一同轴线缆 | 1 |
| 161000-0001 | 同轴线缆 | SG-JS2JS2200L | 1 |
| 169900-0811 | USB3.0 A 转 TYPE-C 1M 线缆 | USB 线缆（视频显示） | 1 |
| 169900-0985 | Type-C 数据线_1m_USB 2.0 | 摄像头固件升级线缆 | 1 |

</div>

#### 支持的摄像头型号列表

下表列出了当前支持的摄像头型号及对应产品系列：

<div style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center', width: '100%'}}>
  <table style={{width: '60%', borderCollapse: 'collapse', margin: '0 auto'}}>
    <thead>
      <tr style={{backgroundColor: '#f5f5f5'}}>
        <th style={{padding: '12px', textAlign: 'center', border: '1px solid #ddd', fontWeight: 'bold'}}>
          序号
        </th>
        <th style={{padding: '12px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd', fontWeight: 'bold'}}>
          摄像头产品系列
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>1</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG1-OX01F10C-GMSL-Hxxx</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>2</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG1S-OX01F10C-G1G-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>3</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG2-AR0231C-0202-GMSL-Hxxx</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>4</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG2-AR0233C-5200-G2A-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>5</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG2-IMX390C-5200-G2A-Hxxx</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>6</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG2-OX03CC-5200-G2F-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>7</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SH2-N1B60-G2A-Hxxx</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>8</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG2S-OX03CC-G2F-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>9</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SN2M4EFGD</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>10</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG3S-OX03JC-G2F-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>11</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG3S-ISX031C-GMSL2F-Hxxx</td>
      </tr>
      <tr style={{backgroundColor: '#f9f9f9'}}>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>12</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG3S-ISX031C-GMSL2-Hxxx</td>
      </tr>
      <tr>
        <td style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>13</td>
        <td style={{padding: '10px', textAlign: 'center', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', borderLeft: '1px solid #ddd'}}>SG3S-IMX623C-G2F-Hxxx</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- <div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.05em'}}>
自动驾驶车辆完成数据采集后，需要进行算法验证与优化，这就需要数据注入系统。自动驾驶 IPC 通过 PCIe 接口将硬盘中的采集视频数据传输到视频注入卡，视频注入卡再根据时间戳同步输出 8 路视频，模拟摄像头时序，并通过 GMSL 接口传输至域控制器。CyberCobra 卡支持 gPTP/PTP 同步，可通过交换机、IPC 与 ACU 实现时间同步，确保系统内所有设备处于同一时间轴。
</div> -->

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
<!-- <div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/Data_collection/3_4_GMSL_Video_Injection_Card/CIG3-8H_Software_Diagram.png" alt="Software Framework Diagram" style={{maxWidth: '100%', height:'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
  <div style={{fontSize: '0.9em', marginTop: '0.5rem', color: 'var(--ifm-color-gray-700)'}}>
    软件框架架构
  </div>
</div> -->

### SDK 下载

<!-- :::note SDK 软件包
请根据操作系统和 CIG4-8H 硬件版本选择合适的 SDK 软件包：
::: -->

| 操作系统 | 硬件版本 | 软件工具 | 下载链接 |
|------------------|------------------|-------------|---------------|
| windows | v3.0 | SensingCaptureV3 | [下载](https://github.com/SENSING-Technology/SensingCaptureV3) |

<!-- :::tip 下载工具使用说明
**DownGit** 可在不克隆整个仓库的情况下，从 GitHub 仓库下载指定文件夹或文件：
1. 复制“下载链接”列中的 GitHub 仓库 URL
2. 在浏览器中打开 [DownGit](https://minhaskamal.github.io/DownGit/#/home)
3. 将仓库 URL 粘贴到输入框中
4. 点击“下载”，获取包含 SDK 的 ZIP 文件
5. 将 ZIP 文件解压到目标位置

当只需要 SDK 文件而不需要完整 Git 历史时，该方法尤其适用。
::: -->

<!-- ### SDK 软件包内容

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
</div> -->

:::tip 下载帮助
如果下载 SDK 时遇到问题，或需要获取旧版本，请联系技术支持团队 [support@sensing-world.com](mailto:support@sensing-world.com)，或访问 [GitHub 仓库](https://github.com/SENSING-Technology/CIG4-8H) 获取最新版本。
:::

---

## 详细使用说明

如需完整软件设置说明，请参考详细应用指南：

**[📖 完整应用指南](../Application/PANDA_Application)**

<!-- ## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
For more information and frequently asked questions, please contact our technical support team or visit our <a href="https://sensing-world.com/en/h-col-151.html" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>official website</a>.
</div> -->
