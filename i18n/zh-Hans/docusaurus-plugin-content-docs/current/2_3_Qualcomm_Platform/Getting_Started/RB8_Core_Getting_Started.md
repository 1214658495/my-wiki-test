---
sidebar_position: 2
title: RB8 Core 快速入门
---

# Qualcomm 机器人 RB8 Core Kit (IQ-9075 EVK)

## 概述

Qualcomm Robotics RB8 Core Kit 搭载工业级 Dragonwing IQ-9075 处理器，可为高要求机器人应用提供增强 AI 性能。SENSING 为该平台提供经过验证的摄像头驱动，便于无缝集成工业级摄像头模组。

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB8/RB8_Overview.png?x-oss-process=image/format,webp" alt="RB8_概述"
 style={{maxWidth: '100%', height:'auto'}} />
</div>
<br />

## 快速入门

### 平台规格

<div style={{display: 'flex', justifyContent: 'center'}}>

| 参数 | 值 |
|-------------------|-------------------------|
| 处理器 | Qualcomm Dragonwing IQ-9075 |
| AI 算力 | 增强的推理能力 |
| 支持 OS | Qualcomm Linux 1.4 |
| 摄像头 接口 | MIPI CSI-2, GMSL2 |

</div>

### 支持 摄像头 模组

| 摄像头 模组 | 接口 | Qualcomm Linux 1.4 |
|---------------|-----------|:------------------:|
| SG3S-ISX031C-GMSL2F-Hxxx | GMSL2 | ✓ |

### 硬件连接

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_3_Qualcomm_Platform/RB8/RB8_Hardware.jpg?x-oss-process=image/format,webp" alt="RB8_Hardware"
 style={{maxWidth: '60%', height:'auto'}} />
</div>

<!-- :::note Hardware Setup
For detailed hardware connection instructions, please refer to official product page:

👉 [RB8 Core Hardware 文档](https://www.sensing-world.com/h-pd-220.html?recommendFromPid=0&fromMid=3795)
::: -->

### 驱动安装

:::info 开源驱动
SENSING 面向 RB8 Core Kit 的摄像头驱动均已开源，可在 GitHub 获取：

👉 [SENSING-Technology/qualcomm-camera-drivers](https://github.com/SENSING-Technology/qualcomm-camera-drivers)
:::

#### 软件准备

1. **选择驱动包**

 请根据 Qualcomm Linux 版本和摄像头模组选择合适的驱动包：

 | Qualcomm Linux Version | 摄像头 模组 | 下载链接 |
 |------------------------|---------------|---------------|
 | 1.4 | SG3S-ISX031C-GMSL2F-Hxxx | [下载](https://github.com/SENSING-Technology/qualcomm-camera-drivers/tree/main/Qcom9075%20RB8%20Core%20kit/QualcommLinux-1.4) |

2. **编译和部署**

 请按照驱动仓库中的编译说明，编译并部署摄像头驱动到 RB8 Core 设备。

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
