---
sidebar_position: 2
---

# 应用

# DMS 摄像头应用分析：智能座舱安全的核心传感器

随着驾驶技术持续发展，驾驶安全的关注重点已从“外部环境感知”扩展到“舱内行为识别”。驾驶员监控系统（DMS）是智能座舱安全的关键组成部分，在高级驾驶辅助系统（ADAS）和整车安全中发挥重要作用。

## 1. DMS 摄像头核心功能

DMS 摄像头通常安装在仪表台或方向盘柱附近，可实时采集驾驶员面部、眼部、头部和上半身图像。主要功能包括：
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_Application.png" alt="DMSBBFAN_应用"
 style={{maxWidth: '100%', height:'auto'}} />
 <p>DMSBBFAN 摄像头</p>
</div>

- **疲劳检测：** 监测闭眼和眨眼状态（PERCLOS），判断驾驶员是否疲劳。
- **注意力监测：** 检测驾驶员视线和头部朝向，评估其注意力状态。
- **危险行为检测：** 识别使用手机、吸烟、视线偏离道路等风险行为。
- **驾驶员身份识别：** 通过人脸识别验证驾驶员身份，防止未授权使用。

## 2. 技术特性与优势

为满足车载应用对高可靠性和全天候工作的要求，DMS 摄像头具备以下技术优势：

- **高动态范围全局快门传感器：** 即使在复杂光照条件下也能输出清晰图像。
- **940nm 红外补光：** 提升低照度或夜间环境下的眼部和面部识别效果。
- **全帧全局快门：** 避免运动模糊，确保行为分析准确。
- **RGB/IR 双模式成像能力（可选）：** 支持可见光（RGB）与红外（IR）成像无缝切换，确保各种场景下的数据质量。

## 3. 典型应用场景
<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/DMSBBFAN/DMSBBFAN_ConnectNvidia.png" alt="DMSBBFAN_ConnectNvidia"
 style={{maxWidth: '50%', height:'auto'}} />
 <p>DMSBBFAN 摄像头连接到 NVIDIA Jetson AGX Orin</p>
</div>

- **乘用车 ADAS：** 与 ADAS 集成，实现 L2+ 及以上智能驾驶辅助。
- **商用车队管理：** 提供实时驾驶员监控、疲劳检测和异常行为告警，提升运营安全性。
- **出行与共享出行：** 通过驾驶员身份验证和舱内行为监测，提升网约车和共享汽车场景的安全性。
- **智能座舱集成：** 可配合 OMS (Occupant Monitoring System) 实现全面的舱内感知和安全监测。
