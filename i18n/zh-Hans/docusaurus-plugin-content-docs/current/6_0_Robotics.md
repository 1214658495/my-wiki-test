---
sidebar_position: 1
title: 机器人技术
description: 先进摄像头技术及其在现代视觉系统中的应用综合指南
keywords: [摄像头, 视觉, 成像, 传感器, MIPI, Serdes, 全局曝光, 事件相机, 低延迟]
---

# 机器人技术概述

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
    <img src="/img/SENSING_WIKI.png" alt="SENSING Camera Technologies" style={{maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
</div>

:::note 专业视觉解决方案
SENSING 提供全面的摄像头技术解决方案，专为机器人、自动系统、工业自动化和高级 AI 视觉处理的严格要求而设计。
:::

## 简介

摄像头技术是现代视觉系统的重要组成部分。从需要超低延迟处理的自动驾驶汽车到要求精确质量控制的工业自动化，选择合适的摄像头技术直接影响系统性能、可靠性和成本效益。

本文档全面介绍了 SENSING 生态系统中的各种摄像头技术，提供详细的技术规格、实施指南和特定应用建议，帮助工程师和系统集成商为视觉系统需求做出明智的决策。

---

## 双目摄像头

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>Astra S56x </span>
**Astra S56x** 是一款专为嵌入式 AI 应用设计的立体摄像头，采用双 5MP 全局曝光传感器，基线距离60mm，接近人眼。

| 技术规格 | 性能 |
|------------------------|-------------|
| **分辨率** | 双 5MP (2560×1920) |
| **曝光** | 全局曝光 |
| **基线** | 60mm |
| **视场** | 130° 水平 |
| **防护** | IP52 |
| **IMU** | 双 IMU 支持 (SCHA634-D03 / BMI088) |
| **接口** | GMSL2 |

**主要应用：** 人形机器人、嵌入式 AI、遥操作、3D扫描。

---

### <span style={{color: 'var(--ifm-color-primary)'}}>Astra S36 </span>
**Astra S36** 是一款紧凑型立体摄像头，专为嵌入式智能应用设计，集成6轴 IMU。

| 技术规格 | 性能 |
|------------------------|-------------|
| **分辨率** | 双 3MP HDR |
| **曝光** | 卷帘曝光 (HDR) |
| **基线** | 60mm |
| **视场** | 120° 水平 |
| **防护** | IP65 |
| **IMU** | 集成6轴 (BMI088) |
| **接口** | GMSL2 |

**主要应用：** 人形机器人、足式机器人、机械臂。

</div>

---

## 单目摄像头

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>SHF 系列（超广角）</span>

**SHF3G** — 3MP 全局曝光，173° 水平视场
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 3MP |
| **曝光** | 全局曝光 |
| **视场** | 173° 水平 |
| **帧率** | 最高 125fps |
| **输出** | RAW 数据 |
| **防护** | IP67 |

**SHF5G** — 5MP 全局曝光，200° 水平视场
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 5MP |
| **曝光** | 全局曝光 |
| **视场** | 200° 水平 |
| **帧率** | 最高 60fps |
| **输出** | RAW10 |
| **防护** | IP69K |

**SHF3L** — 3MP HDR，196° 水平视场，30fps
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 3MP |
| **曝光** | 卷帘曝光 (HDR) |
| **视场** | 196° 水平 |
| **帧率** | 30fps |
| **输出** | YUV422 (内置 ISP) |
| **防护** | IP67 / IP69K 镜头 |

**主要应用：** 人形机器人和足式机器人的鱼眼感知。

---

### <span style={{color: 'var(--ifm-color-primary)'}}>SHW 系列（广角）</span>

**SHW3G** — 3MP 全局曝光，122° 水平视场
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 3MP |
| **曝光** | 全局曝光 |
| **视场** | 122° 水平 |
| **帧率** | 最高 125fps |
| **输出** | RAW 数据 |
| **防护** | IP67 |

**SHW3H** — 3MP HDR，118° 水平视场，60fps
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 3MP |
| **曝光** | 卷帘曝光 (HDR) |
| **视场** | 118° 水平 |
| **帧率** | 60fps |
| **输出** | YUV422 (内置 ISP) |
| **防护** | IP67 |

**SHW5G** — 5MP 全局曝光，130° 水平视场
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 5MP |
| **曝光** | 全局曝光 |
| **视场** | 130° 水平 |
| **帧率** | 最高 60fps |
| **输出** | RAW10 |
| **防护** | IP69K |

**主要应用：** 人形机器人的头部/躯干视觉。

---

### <span style={{color: 'var(--ifm-color-primary)'}}>M 系列（迷你）</span>

**M3A** — 3MP 迷你 HDR，200° 水平视场，30fps
| 规格 | 值 |
|--------------|-------|
| **分辨率** | 3MP |
| **曝光** | 卷帘曝光 (HDR) |
| **视场** | 200° 水平 |
| **帧率** | 30fps |
| **输出** | YUV422 (内置 ISP) |
| **尺寸** | 超紧凑 (17mm×17mm) |

**主要应用：** 人形机器人的头部/躯干、数据采集、足式机器人。

</div>

---

## 视觉解决方案

<div className="camera-grid">

### <span style={{color: 'var(--ifm-color-primary)'}}>NRDCK — NVIDIA 机器人数据采集套件</span>

**NRDCK** 是一个基于 Jetson AGX Orin 的多摄像头机器人数据采集套件，支持 GMSL 摄像头。

| 组件 | 规格 |
|-----------|--------------|
| **平台** | Jetson AGX Orin (32GB/64GB) + JetPack 6.2 (L4T R36.4.3) |
| **适配板** | SG10A-AGON-G2M-A1 (88mm × 120mm) |
| **解串器** | MAXIM MAX9296A / MAX96712A |
| **摄像头支持** | Astra S56x (深度)、SHF3L (手部 HDR 30fps)、SHW3H (头部 HDR 60fps) |
| **最大通道数** | 最高 10 路 GMSL 摄像头 |

**设备节点映射 (JetPack 6.2):**
- J27 → /dev/video0/1
- J29 → /dev/video2/3
- J21-J26 → /dev/video4-9

**主要应用：** 机器人数据采集、嵌入式 AI 训练。

---

### <span style={{color: 'var(--ifm-color-primary)'}}>机器人摄像头应用 — Jetson AGX Thor</span>

**SENSING TRD1 Jetson AGX Thor 视觉解决方案** 专为嵌入式 AI 和人形机器人感知而设计。

| 组件 | 规格 |
|-----------|--------------|
| **平台** | Jetson AGX Thor + TRD1 G2A 载板 |
| **适配板** | SG8-AGX-Thor-GMSL2 |
| **头部视觉** | Astra S56x (深度+VLA)、Astra S36 (可选)、SHW3H (HDR 60fps) |
| **手部视觉** | SHF3L ×4 用于精细操作指导 |
| **电源** | DC 9-16V |

**快速开始：** 连接摄像头 → 开机 (DC 9-16V) → 系统启动

**驱动配置（8步）：**
1. 选择摄像头配置 (`generate_camera_overlay.py`)
2. 安装内核和驱动 (`./install.sh`)
3. 配置设备树 (Jetson-IO → Jetson Sensing SG8A_AGTH_G2Y_A1 GMSL2x8)
4. 配置触发模式 (`load_modules.sh`: `sensor_mode=1`, `trig_mode=0`)
5. 加载驱动 (`./load_modules.sh`)
6. 安装 Argus 摄像头工具 (`jetson_multimedia_api`)
7. 重启 Argus 守护进程
8. 使用 `argus_camera -d 0/1` 或 GStreamer 验证

**主要应用：** 人形机器人、嵌入式 AI、自主导航。

</div>

---

## 技术对比矩阵


:::tip 选型指南
使用此综合对比矩阵根据您的特定应用需求评估摄像头技术。每种技术都根据关键性能维度进行评级，以促进明智的决策。
:::


| 摄像头系列     | 分辨率 | 帧率 | 视场范围  | 防护等级 |
|------------------|------------|------------|------------|-----------|
| Astra S56x (双目) | ★★★★★ (5MP) | ★★★★☆     | 130°       | IP52      |
| Astra S36 (双目) | ★★★☆☆ (3MP) | ★★★☆☆     | 120°       | IP65      |
| SHF (鱼眼)    | ★★★☆☆-★★★★☆ | ★★★☆☆-★★★★☆ | 173°-200°  | IP67-IP69K |
| SHW (广角)       | ★★★☆☆-★★★★☆ | ★★★☆☆-★★★★☆ | 118°-130°  | IP67-IP69K |
| M (迷你)         | ★★★☆☆ (3MP) | ★★★☆☆     | 200°       | —         |

:::note
**产品线概述：** Astra（双目）、SHF（超广角鱼眼）、SHW（广角）、M（迷你）— 均使用 GMSL2 接口和 MAXIM 串行器。
:::


---

## 实施示例与最佳实践

### 专业摄像头集成框架

以下示例展示了行业标准的摄像头系统集成方法，具有强大的错误处理、最佳性能模式和生产就绪的代码结构。

#### **V4L2 摄像头初始化 (Linux)**

```c
/* 摄像头帧采集示例代码 */
#include "camera_api.h"

int main() {
    // 初始化摄像头
    camera_init();

    // 打开摄像头设备
    int fd = open("/dev/video0", O_RDWR);
    if (fd < 0) {
        perror("Failed to open camera device");
        return -1;
    }

    // 配置视频采集格式
    struct v4l2_format fmt = {0};
    fmt.type = V4L2_BUF_TYPE_VIDEO_CAPTURE;
    fmt.fmt.pix.width = 1920;
    fmt.fmt.pix.height = 1536;
    fmt.fmt.pix.pixelformat = V4L2_PIX_FMT_UYVY;

    if (ioctl(fd, VIDIOC_S_FMT, &fmt) < 0) {
        perror("Failed to set format");
        close(fd);
        return -1;
    }

    // 请求并映射缓冲区
    // ...（缓冲区设置代码）...

    // 开始视频流
    // ...（视频流代码）...

    // 采集并处理帧
    // ...（帧处理代码）...

    // 清理资源
    close(fd);
    return 0;
}

```
---
## 联系我们与支持
:::note 联系方式
    **联系我们的团队**:

    - **邮箱**: [support@sensing-world.com](mailto:support@sensing-world.com)
    - **电话**: +86-755-28990915
    - **网站**: [www.sensing-world.com](https://sensing-world.com/cn/)
    - **GitHub**: [SENSING-Technology](https://github.com/SENSING-Technology)

    **工作时间**: 周一至周五 9:00 AM - 6:00 PM (GMT+8)
    :::
