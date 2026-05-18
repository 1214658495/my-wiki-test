---
sidebar_position: 2
---

# 应用

## GMSL2 摄像头分流器工业应用

SENSING Technology Co., Ltd. 设计的 GMSL2 摄像头分流器可为高级视觉系统中的多数据路径需求提供灵活方案。该设备可将一路 GMSL 输入分配为两路一致的 GMSL 输出，适用于需要冗余或并行视觉数据处理的各类工业应用。

### 汽车与 ADAS 应用

#### 同步数据记录与实时处理
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Application.png" alt="ADAS 中的分流器" 
    style={{maxWidth: '100%', height:'auto'}} />
    <p>数据同时流向处理单元和记录单元</p>
</div>

- **领航辅助驾驶（NOA）**: 为安全关键操作部署冗余视觉数据路径
- **自动泊车（AVP 与 APA）**: 支持实时处理与数据记录同步进行，用于系统验证
- **摄像头监控系统（CMS）**: 为显示和处理提供备用视觉数据流

<!-- ### Robotics & Industrial Applications

#### Machine Vision & Quality Control
- **Dual Processing Pipeline**: Route identical visual data to separate processing units with different algorithms
- **Real-time Monitoring + Archiving**: Process visual data for immediate feedback while simultaneously recording for quality assurance
- **Distributed Processing Architecture**: Enable parallel processing across multiple computing nodes for load balancing

#### Unmanned 地 Vehicles (UGV)
- **Sensor Redundancy**: Critical for safety and reliability in autonomous operations
- **Development & Testing**: Simultaneous data flow to both development systems and recording units
- **Heterogeneous Computing Platforms**: Connect the same camera to different computing architectures (GPU + FPGA)

### 轨道交通
- **Safety Monitoring**: Route camera feeds to both monitoring and recording systems
- **Track Inspection**: Enable simultaneous human monitoring and AI-based analysis
- **Operational Optimization**: Process visual data for immediate decision-making while storing for long-term analysis -->

## 集成案例

### 案例 1：自动驾驶平台

某领先自动驾驶开发团队使用 GMSL2 摄像头分流器，将高分辨率环视摄像头同时连接到：
- 用于实时处理的 NVIDIA DRIVE AGX Orin™
- 用于训练数据采集的数据记录系统

**结果**: 使开发和验证流程并行开展，将开发周期缩短 40%。

### 案例 2：工业检测系统

某半导体制造工厂部署 GMSL2 摄像头分流器，将高速检测摄像头连接到：
- 实时缺陷检测系统
- 质量保证记录系统

**结果**: 在无需额外安装摄像头的情况下，实现 99.7% 的缺陷检测准确率，并保留完整质量记录。

## 实施架构

### 硬件配置
<div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>

| 组件 | 说明 | 推荐配置 |
|-----------|-------------|----------------|
| 摄像头 | 兼容 GMSL/GMSL2 的摄像头 | SENSING GMSL2 摄像头系列 |
| 线缆 | 高质量同轴线缆 | SENSING FAKRA-FAKRA 线缆 |
| 处理单元 1 | 主处理系统 | NVIDIA Jetson/Drive 平台 |
| 处理单元 2 | 辅助系统或记录仪 | CoaxCapture 系列采集卡 |

</div>

### 信号流图
<div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter_Block_Diagram.png" alt="信号流" 
    style={{maxWidth: '80%', height:'auto'}} />
</div>

## 性能规格

### 关键技术参数
<!-- - **信号完整性**: < 0.1dB insertion loss -->
- **输出同步**: < 10μs 输出之间
- **延迟影响**: 超低延迟（微秒级）
<!-- - **EMI/EMC Performance**: Compliant with automotive standards -->

### 兼容系统配置
- **NVIDIA 平台**: Jetson AGX Orin, DRIVE AGX Orin
- **Qualcomm 平台**: Snapdragon Ride Platform
- **地平线机器人**: Journey Series
<!-- - **Texas Instruments**: TDA4 Family -->

## 技术资源

如需完整实施细节、寄存器配置指南和示例代码，请联系 SENSING 技术支持：sales@sensing-world.com。

<div style={{textAlign: 'center', marginTop: '2rem'}}>
    <a href="https://sensing-world.com/en/h-col-152.html" target="_blank" rel="noopener noreferrer" 
       style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', textDecoration: 'none'}}>
        <strong style={{color: '#000000', fontSize: '1.2em'}}>购买 GMSL2 摄像头分流器</strong>
    </a>
</div>