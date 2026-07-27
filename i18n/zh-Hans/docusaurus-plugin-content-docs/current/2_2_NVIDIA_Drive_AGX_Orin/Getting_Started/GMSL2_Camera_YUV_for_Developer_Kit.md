---
sidebar_position: 1
---

# [YUV] GMSL2 多摄像头开发套件

<div className="row">
 <div className="col col--8">
 SENSING 基于 NVIDIA DRIVE AGX Orin 进行了深度开发，并推出多通道 GMSL2 摄像头开发套件。该套件主要面向智能驾驶行业的 AI 从业者、开发爱好者和生态伙伴，提供可快速搭建 GMSL2 摄像头系统的开发平台。借助 DRIVE AGX Orin 开发套件的安全性和开放性，开发者可以便捷地开展学习、研究和应用开发。
 </div>
 <div className="col col--4">
 :::note 主要特性
 - 支持 NVIDIA DRIVE AGX Orin
 - 支持 16 路 GMSL2 摄像头
 - 支持多摄像头同步
 - 支持提供自有 ISP 算法
 - YUV422 输出格式
 :::
 </div>
</div>

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/2_2_NVIDIA_Drive_AGX_Orin/GMSL2_Multi-Camera_for_Developer_Kit.png" alt="GMSL2 Multi-摄像头 Kit"
 style={{maxWidth: '60%', height:'auto'}} />
</div>

<div style={{textAlign: 'center', marginBottom: '2rem'}}>
 <a href="https://sensing-world.com/en/h-pd-101.html" target="_blank" rel="noopener noreferrer"
 style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
 <strong style={{color: '#000000', fontSize: '1.2em'}}>立即购买</strong>
 </a>
</div>

## 产品规格

<div className="row">
 <div className="col col--6">
 :::note 平台支持
 - 支持 平台: NVIDIA DRIVE AGX Orin
 - ISP: 支持提供自有 ISP 算法
 - 输出数据: YUV422
 - 摄像头输入: 摄像头*16 (GMSL2)
 :::
 </div>
 <div className="col col--6">
 :::note 操作系统
 - 带安全扩展的 DRIVE OS Linux（Ubuntu）
 - 用于安全域的 QNX
 :::
 </div>
</div>

## 支持的摄像头列表

SENSING GMSL2 摄像头广泛适用于长距离、低延迟和高质量传输场景，例如各类车辆、车路协同、UGV、大型机器人、工业机器人等应用。目前该系列产品型号丰富，可适配多种主流平台，图像已完成优化，客户可直接使用，从而显著缩短开发时间。

| 产品 | 传感器 | 分辨率 | 输出 | HFOV | 接口 |
|---------|--------|------------|--------|------|-----------|
| SG2-AR0233C-5200-G2A-Hxxx | Onsemi AR0233 | 2MP | YUV 422 | 60°/100°/118°/196° | GMSL2 |
| SG3S-ISX031C-GMSL2F-Hxxx | SONY ISX031 | 3MP | YUV 422 | 30°/60°/100°/118°/196° | GMSL2 |
| SG8-OX08BC-5300-GMSL2-Hxxx | OmniVision OX08B40 | 8MP | YUV 422 | 30°/60°/90°/120° | GMSL2 |
| SG8S-AR0820C-5300-GMSL2-Hxxx | Onsemi AR0820 | 8MP | YUV 422 | 30°/60°/90°/120° | GMSL2 |

## 产品默认设置

:::note 默认 配置
- 该产品默认出货配置为 **FIXED** 镜头，用户无需调焦，也不能自行更换镜头。如确需独立更换镜头，请在下单时备注；更换镜头后的图像质量不在服务范围内。

- 默认情况下，该产品不标定摄像头内参。如需标定内参并写入摄像头，请在下单时备注。
:::


## 技术文档

如需产品规格、Drive OS SDK 和驱动安装指南，请联系 SENSING 销售人员或发送邮件：
- 销售咨询： sales@sensing-world.com
- 技术支持： 支持@sensing-world.com
