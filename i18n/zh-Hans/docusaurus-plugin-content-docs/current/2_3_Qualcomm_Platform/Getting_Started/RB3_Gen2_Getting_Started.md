---
sidebar_position: 1
title: RB3 Gen2 快速入门
---

# Qualcomm 机器人 RB3 Gen2 开发套件

## 概述

Qualcomm Robotics RB3 Gen2 开发套件搭载 QCS6490 芯片组，具备强大的 AI 处理能力和先进计算机视觉特性。SENSING 为该平台提供经过验证的摄像头驱动，便于无缝集成工业级摄像头模组。

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB3_Gen2/RB3_Gen2_Overview.png?x-oss-process=image/format,webp" alt="RB3_Gen2_概述"
 style={{maxWidth: '100%', height:'auto'}} />
</div>
<br />

## 快速入门

### 平台规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数 | 值 |
|-------------------|-------------------------|
| 处理器 | Qualcomm QCS6490 (Snapdragon 8cx Gen 3 derived) |
| AI 算力 | 最高 15 TOPS |
| 支持 OS | Qualcomm Linux 1.3 / 1.6 |
| 摄像头 接口 | MIPI CSI-2, GMSL2 |

</div>

### 支持 摄像头 模组

| 摄像头 模组 | 接口 | Qualcomm Linux 1.3 | Qualcomm Linux 1.6 |
|---------------|-----------|:------------------:|:------------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ | ✓ |
| SG3-ISX031C-MIPI-Hxxx | MIPI CSI-2 | ✓ | ✓ |
| SG2-IMX662C-MIPI-Hxxx | MIPI CSI-2 | ✓ | ✓ |

### 硬件连接

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB3_Gen2/RB3_Gen2_Hardware.png?x-oss-process=image/format,webp" alt="RB3_Gen2_Hardware"
 style={{maxWidth: '100%', height:'auto'}} />
</div>

<!-- :::note Hardware Setup
For detailed hardware connection instructions, please refer to official product page:

👉 [RB3 Gen2 Hardware 文档](https://www.sensing-world.com/h-pd-220.html?recommendFromPid=0&fromMid=3795)
::: -->

### 驱动安装

:::info 开源驱动
SENSING 面向 RB3 Gen2 的摄像头驱动均已开源，可在 GitHub 获取：

👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)
:::

#### 软件准备

1. **选择驱动包**

 请根据 Qualcomm Linux 版本和摄像头模组选择合适的驱动包：

 | Qualcomm Linux Version | 摄像头 模组 | 下载链接 |
 |------------------------|---------------|---------------|
 | 1.3 | SG3S-ISX031C-GMSL2F-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.3) |
 | 1.3 | SG3-ISX031C-MIPI-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.3) |
 | 1.3 | SG2-IMX662C-MIPI-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.3/SG2A_RB3_MIPI_A1_IMX662_IMX662_QualcommLinux_1.3) |
 | 1.6 | SG3S-ISX031C-GMSL2F-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.6) |
 | 1.6 | SG3-ISX031C-MIPI-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_ISX031_IMX662_QualcommLinux_1.6) |
 | 1.6 | SG2-IMX662C-MIPI-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom6490%20RB3%20Gen2%20Devkit/QualcommLinux-1.6/SG2A_RB3_MIPI_A1_IMX662_IMX662_QualcommLinux_1.6) |

2. **编译和部署**

 请按照驱动仓库中的编译说明，编译并部署摄像头驱动到 RB3 Gen2 设备。

### 技术资源

<div className="row">
 <div className="col col--6">
 :::info Qualcomm 资源
 - [Qualcomm Developer Network（高通开发者网络）](https://www.qualcomm.com/developer?redirect=qdn)
 - [Qualcomm Neural Processing SDK（高通神经处理 SDK）](https://developer.qualcomm.com/software/qualcomm-neural-processing-sdk)
 :::
 </div>
 <!-- <div className="col col--6">
 :::info SENSING 支持
 如需技术咨询和定制方案，请联系：

 - Email: [支持@sensing-world.com](mailto:支持@sensing-world.com)
 - Phone: 0755-28990915
 :::
 </div> -->
</div>

<!-- :::tip SENSING 全栈服务
SENSING 提供完整摄像头集成服务，包括摄像头适配、驱动开发和 ISP 调校。你可以专注于应用开发，其余集成工作由我们协助完成。
::: -->
