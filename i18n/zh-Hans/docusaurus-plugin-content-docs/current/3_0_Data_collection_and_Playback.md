---
sidebar_position: 30
title: 数据采集与仿真
---

# 数据采集与仿真

## 概述

<div className="row">
  <div className="col col--7">
    本章节介绍面向汽车和嵌入式视觉应用的摄像头数据采集、分配与仿真方案。这些技术能够在保持信号完整性和同步性的同时，在多个处理单元之间高效处理视频数据。
  </div>
  <div className="col col--5">
    :::note 关键组件
    - GMSL 摄像头采集卡
    - GMSL2 摄像头中继器
    - GMSL2 摄像头分配器
    - GMSL 视频注入卡
    :::
  </div>
</div>

## 方案架构

<div className="row" style={{marginTop: '2rem', marginBottom: '2rem'}}>
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>数据采集链路</h3>
      </div>
      <div className="card__body">
        <p>使用 GMSL 摄像头采集卡捕获高质量摄像头视频流，用于数据采集与分析；也可通过摄像头分配器将信号分发到多个 ECU 进行并行处理。</p>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>仿真链路</h3>
      </div>
      <div className="card__body">
        <p>使用视频注入卡将预录制场景输入视觉系统，用于测试和验证，实现基于真实数据的可重复测试。</p>
      </div>
    </div>
  </div>
</div>

## 组件概览

### GMSL 摄像头采集卡

摄像头采集卡支持从 GMSL/GMSL2 摄像头高速采集视频，用于数据采集、测试和开发。

**[了解更多 GMSL 摄像头采集卡 →](/zh-Hans/docs/3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H)**

### GMSL2 摄像头中继器

通过一进一出的配置扩展 GMSL2 传输距离，同时尽量降低信号衰减。

**[探索 GMSL2 摄像头中继器 →](/zh-Hans/docs/3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater)**

### GMSL2 摄像头分配器

将单路 GMSL2 摄像头信号分发到多个处理单元，同时保持信号完整性和同步性。

**[了解 GMSL2 摄像头分配器 →](/zh-Hans/docs/3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter)**

### GMSL 视频注入卡

将预录制视频仿真注入汽车视觉系统，用于测试和验证。

**[了解视频注入 →](/zh-Hans/docs/3_4_GMSL_Video_Injection_Card/Getting_Started/CIG4-8H)**

## 实施指南

1. **根据具体的数据采集或仿真需求选择合适的组件**
2. **根据设备文档配置硬件**
3. **使用示例代码和 API 开发软件接口**
4. **使用推荐测试流程验证系统性能**

## 技术对比

<div className="table-responsive">

| 组件 | 功能 | 最高分辨率 | 延迟 | 多路输出 | 关键特性 |
|----------|----------|----------------|---------|-----------------|-------------|
| 摄像头采集卡 | 数据采集 | 4K (3840×2160) | 低 | 否 | 高速数据采集 |
| 摄像头中继器 | 信号延长 | 4K (3840×2160) | 超低 (< 10μs) | 否 | 延长传输距离 |
| 摄像头分配器 | 信号分发 | 4K (3840×2160) | 超低 (< 10μs) | 是 (2×) | 同步输出 |
| 视频注入卡 | 数据仿真 | 4K (3840×2160) | 低 | 否 | 场景仿真 |

</div>

## 常见应用

- 汽车视觉系统开发与验证
- 多 ECU 摄像头数据分发
- 摄像头数据记录与回放
- 自动驾驶算法的仿真测试
- 分布式处理系统的信号延长