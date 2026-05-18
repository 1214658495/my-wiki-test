---
sidebar_position: 2
---

# 应用

## GMSL2 摄像头中继器应用

SENSING GMSL2 摄像头中继器是在保持信号完整性的同时延长 GMSL2 传输距离的关键组件。本文介绍 GMSL2 中继器在汽车、工业和机器人环境中的主要应用及使用场景。

## 汽车应用

### 高级驾驶辅助系统（ADAS）

<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater_Application.png" alt="ADAS 应用" 
    style={{maxWidth: '100%', height:'auto'}} />
</div>
<br />

在摄像头需要距离处理 ECU 较远布置的 ADAS 实现中，GMSL2 摄像头中继器是关键组件：

- **环视系统**: 支持车身周围多路摄像头的无缝集成
- **前视摄像头系统**: 延长远距离检测摄像头的传输距离
- **车道偏离预警系统**: 确保摄像头到 ECU 的长距离信号传输可靠

### 摄像头监控系统（CMS）

在用摄像头替代传统后视镜的 CMS 应用中：

- **侧视摄像头系统**: 中继器可在保持信号质量的同时支持更灵活的摄像头布置
- **后视摄像头系统**: 支持后备箱安装摄像头到仪表台显示屏的可靠信号传输
- **商用车应用**: 支持卡车、客车等大型车辆中的长线缆布设
  
<!-- 
## Industrial & Robotics Applications

### Automated Guided Vehicles (AGVs)

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater_AGV_Application.png" alt="AGV 应用" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

For AGVs operating in large warehouses or manufacturing facilities:

- **Obstacle Detection**: Extends camera coverage for real-time obstacle detection
- **Path Following**: Enables floor-line tracking cameras to be optimally positioned
- **Navigation Systems**: Supports multiple camera integration for comprehensive environment perception

### Machine Vision Systems

In industrial automation and quality control:

- **Assembly Line Inspection**: Allows cameras to be positioned optimally without distance constraints
- **Robotic Arm Vision**: Extends camera signals from moving robotic components to stationary controllers
- **Quality Control Systems**: Enables high-resolution camera placement in challenging industrial environments -->

## 公共交通与基础设施

<!-- ### Smart City Applications

<div style={{textAlign: 'center'}}>
    <img src="https://raw.githubusercontent.com/1214658495/myWikiFiles/main/3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater_Infrastructure_Application.png" alt="Infrastructure 应用" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

For surveillance and monitoring in urban environments:

- **Traffic Monitoring**: Extends camera signal transmission in complex traffic infrastructure
- **Public Transport Systems**: Supports camera deployments in buses, trains, and stations
- **Security Systems**: Enables flexible camera positioning in buildings and public spaces -->

### 轨道交通

在轨道交通应用中：

- **铁路监控**: 支持沿轨道和车站部署更长距离的摄像头
- **列车监控系统**: 支持在多节车厢中延长摄像头信号
- **道口安全**: 便于在铁路道口进行最佳摄像头布置

## 实施优势

<div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>

| 优势 | 说明 |
|---------|-------------|
| 扩展传输距离 | 每个中继器可将 GMSL2 传输距离提升至 15-20 米 |
| 信号完整性 | 以极低衰减保持完整信号质量 |
| 抗 EMI 能力 | 保持 GMSL2 技术优异的抗 EMI 特性 |
| 灵活安装 | 在复杂车辆架构中提供更灵活的摄像头布置选择 |
| 成本效益 | 通过优化布线路径降低线缆成本 |
| 系统可靠性 | 在复杂环境中提升系统整体可靠性 |

</div>

## 部署注意事项

在应用中部署 GMSL2 摄像头中继器时：

1. **电源**: 确保向中继器提供稳定的 9-12V DC 电源
2. **安装位置**: 安装在受保护位置，并远离极端热源
3. **线缆管理**: 使用具备良好屏蔽的高质量同轴线缆
4. **软件集成**: 使用提供的示例代码实现顺畅集成
5. **热管理**: 在封闭空间中考虑充分散热

<!-- ## 技术支持

For application-specific integration assistance, detailed documentation, and customization options, please contact our technical support team:

- Email: sales@sensing-world.com
- Phone: 0755-28990915 -->
<!-- - [SENSING 技术支持 Portal](https://sensing-world.com) -->