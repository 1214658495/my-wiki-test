---
sidebar_position: 2
---

# 应用

## SENSING RGB-IR 摄像头
在人工智能时代，计算机视觉技术与汽车电子的融合已成为行业趋势。然而，传统 RGB 摄像头难以满足高精度检测需求，尤其在需要人脸识别的低照度场景下表现受限。RGB-IR 技术结合了 RGB 与红外成像的优势，可在低照度环境中提供更好的识别性能。通过集成 RGB-IR 摄像头技术，可在多种光照条件下实现优秀的人脸识别能力。

森云智能科技（深圳）有限公司自主研发并推出 5MP RGB-IR 全局快门摄像头模组。该摄像头面向 NVIDIA Jetson 平台设计，并已在 Jetson AGX Orin 上完成测试。摄像头集成 OmniVision 5MP OX05B1S RGB-IR 传感器、OAX4000 ISP 和 Maxim MAX9295A GMSL2 串行器，配备高品质 M12 车规级镜头，支持可见光和 940nm 红外光识别，在低照度条件下具备优秀表现。



<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_ConnectNvidia.png" alt="OMSBDAAN_ConnectNvidia"
 style={{maxWidth: '70%', height:'auto'}} />
 <p>OMSBDAAN 摄像头连接到 NVIDIA Jetson AGX Orin</p>
</div>

基于 OX05B1S 传感器，SENSING RGB-IR 摄像头可同时输出 RGB 和 IR 图像。摄像头支持 5MP 全分辨率 30fps 输出；在低照度条件下可切换到红外模式以提升可见性。它支持 AA/AB 模式，对应不同分辨率和帧率：AA 模式输出 2592H×1944V @30fps，AB 模式输出 2592H×1800V @60fps。


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_3_Global_Shutter_Camera/GMSL_Camera/OMSBDAAN/OMSBDAAN_Application.png" alt="OMSBDAAN"
 style={{maxWidth: '100%', height:'auto'}} />
 <p>夜间 IR 效果（左）与日间 RGB 效果（右）</p>
</div>

该摄像头结构紧凑，尺寸为 28.8 × 44.2 × 20mm，重量小于 50g。其采用坚固金属外壳，散热性能良好，便于安装和使用。

该摄像头适用于车内监控系统、驾驶员疲劳检测以及其他计算机视觉任务。OMS RGB-IR 与 GMSL 技术的结合使其适合车载应用，可在多种光照条件下提供高可靠性和优秀性能，尤其适用于驾驶员监控系统（DMS）和舱内监控系统（ICMS），从而提升驾驶安全。
