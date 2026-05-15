---
sidebar_position: 5
---

# NVIDIA® DRIVE AGX Orin 摄像头

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_2_NVIDIA_Drive_AGX_Orin/NVIDIA_Drive_AGX_Orin.png" alt="NVIDIA_Drive_AGX_Orin"
    style={{maxWidth: '100%', height:'auto'}} />
</div>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 产品概述

<div className="row">
  <div className="col col--12">
    SENSING 基于 NVIDIA DRIVE AGX Orin 进行了深度开发，并发布了基于 DRIVE AGX Orin 的多通道 GMSL2 摄像头开发套件。该套件主要为智能驾驶行业的 AI 从业者、开发爱好者和生态合作伙伴提供一个快速构建 GMSL2 摄像头的开发平台。凭借 DRIVE AGX Orin 开发套件的安全性和开放性，每个人都可以轻松开发各种适合学习和研究的应用程序。

    SENSING 是领先的优质摄像头提供商，支持 DRIVE AGX Orin 平台。我们提供创新摄像头解决方案，如高分辨率 SerDes 摄像头、超低光摄像头、红外摄像头、HDR 摄像头以及 ADAS 摄像头。我们的 NVIDIA DRIVE AGX Orin GMSL2 摄像头应用于汽车、ADAS 和自动驾驶。

    我们具备成像解决方案开发能力，使用 DRIVE AGX Orin 摄像头工具链满足各种摄像头系统的需求。我们尤其擅长低延迟传输、高图像质量和强抗干扰解决方案。目前，我们的解决方案支持 GMSL2 接口摄像头。我们还提供 Linux 驱动和示例应用程序，实现快速顺畅的集成。
  </div>
</div>

## 产品规格

<div className="row">
  <div className="col col--12">
    :::note 产品规格
    - 支持平台：NVIDIA DRIVE AGX Orin
    - ISP：支持专有 ISP 算法
    - 输出格式：YUV422
    - 摄像头输入：摄像头×16 (GMSL2)
    - 支持多摄像头同步
    - 操作系统：DRIVE OS Linux with Security Extension (Ubuntu) | QNX for Security
    :::
  </div>
</div>

## NVIDIA DRIVE AGX Orin 平台摄像头
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_2_NVIDIA_Drive_AGX_Orin/Support_for_Camera.png" alt="Support_for_Camera"
    style={{maxWidth: '60%', height:'auto'}} />
</div>

| **产品** | **传感器** | **分辨率** | **输出** | **水平视角** | **Drive OS SDK** | **摄像头驱动** | **ISP 文件(.nito)** | **ISP** |
|------------|----------|----------|-----------|------------|--------------|--------------|--------------|--------------|
| SG2-AR0233C-GMSL2-Hxxx | AR0233 | 1920x1080 | RAW | 60°/100°/118°/196° | 6051 | 是 | 是 | 否 |
| SG2-AR0233C-5200-G2A-Hxxx | AR0233 | 1920x1080 | YUV422 | 30°/60°/90°/120°/190° | 6040/6051/6060 | 是 | 不需要 | 是 |
| SG2-IMX390C-GMSL2-Hxxx | IMX390 | 1920x1080 | RAW | 30°/60°/90°/120°/190° | 6040/6051 | 是 | 是 | 否 |
| SG3S-ISX031C-GMSL2F-Hxxx | ISX031 | 1920x1536 | YUV422 | 30°/60°/100°/118°/196° | 6040/6051 | 是 | 不需要 | 是 |
| SG3S-IMX623C-G2F-Hxxx | IMX623 | 1920x1536 | RAW | 60°/100°/190° | 6051 | 是 | 是 | 否 |
| SG8-OX08BC-5300-GMSL2-Hxxx | OX08B40 | 3840x2160 | YUV422 | 30°/60°/90°/120° | 6040/6051 | 是 | 不需要 | 是 |
| SG8-AR0820C-G2A-Hxxx | AR0820 | 3840x2160 | RAW | 120° | 6040/6051 | 是 | 是 | 否 |
| SG8S-AR0820C-5300-G2A-Hxxx | AR0820 | 3840x2160 | YUV422 | 59.7°/99°/196° | 6040/6051/6060 | 是 | 不需要 | 是 |

## NVIDIA DRIVE AGX Orin 开发套件摄像头

<div className="row">
  <div className="col col--6">
    :::note [YUV]GMSL2 多摄像头开发套件
    - 支持平台：NVIDIA DRIVE AGX Orin
    - ISP：支持专有 ISP 算法
    - 输出格式：YUV422
    - 摄像头输入：摄像头×16 (GMSL2)
    :::
  </div>
  <div className="col col--6">
    :::note [RAW]GMSL2 多摄像头开发套件
    - 支持平台：NVIDIA DRIVE AGX Orin
    - ISP：支持专有 ISP 算法
    - 输出格式：RAW
    - 摄像头输入：摄像头×16 (GMSL2)
    :::
  </div>
</div>

### NVIDIA DRIVE AGX Orin 摄像头解决方案
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_2_NVIDIA_Drive_AGX_Orin/GMSL2_Multi-Camera_for_Developer_Kit1.png" alt="GMSL2_Multi-Camera_for_Developer_Kit1"
    style={{maxWidth: '60%', height:'auto'}} />
</div>


<div className="row">
  <div className="col col--6">
    :::note 关键特性
    - 高性能图像处理
    - 低延迟传输
    - 多种接口支持
    - Linux 驱动和示例
    - 定制开发能力
    - 支持多摄像头同步
    :::
  </div>
  <div className="col col--6">
    :::note 应用领域
    - 自动驾驶车辆
    - 工业检测
    - 机器人技术
    - 边缘计算
    - AI 视觉系统
    - 无人地面车辆 (UGV)
    :::
  </div>
</div>

## 产品配置说明

<div className="row">
  <div className="col col--12">
    :::note 默认配置
    - 本产品的默认发货状态是配备**固定**镜头。用户无需调整焦距，也不能自行更换镜头。如需独立更换镜头，请在下单时注明。更换镜头后，图像质量不在服务范围内。
    - 默认情况下，本产品不校准摄像头的内部参数。如需校准摄像头内部参数并写入摄像头，请在下单时注明。
    :::
  </div>
</div>

## 技术支持与咨询

如需更多信息，请联系销售人员 Sales@sensing-world.com。