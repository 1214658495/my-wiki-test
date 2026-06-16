---
sidebar_position: 1
title: 人形机器人参考设计视觉方案
description: 森云智能面向 Isaac GR00T 人形机器人参考设计提供的视觉感知方案，以及基于 Jetson AGX Thor 和 SENSING 相机模组的视觉开发基座
keywords: [Isaac GR00T, Unitree H2 Plus, 人形机器人参考设计, 具身智能, 机器人视觉, NVIDIA Jetson Thor, GMSL2, SENSING]
hide_title: true
---

<section className="humanoid-hero">
  <div className="humanoid-hero__content">
    <p className="humanoid-eyebrow">SENSING ROBOTIC VISION</p>
    <h1>人形机器人参考设计<br /><span>视觉方案</span></h1>
    <p className="humanoid-hero__lead">
      森云智能为 Unitree H2 Plus 与 NVIDIA Isaac GR00T 人形机器人参考设计提供从头部到手部的多视角视觉感知能力。
    </p>
    <div className="humanoid-hero__tags">
      <span>实际参考案例</span>
      <span>Jetson Thor</span>
      <span>多视角感知</span>
      <span>视觉开发基座</span>
    </div>
    <div className="humanoid-hero__actions">
      <a className="humanoid-button humanoid-button--primary" href="#实际案例h2-plus-与-isaac-gr00t">了解实际案例</a>
      <a className="humanoid-button humanoid-button--secondary" href="#推荐摄像头配置">查看推荐摄像头</a>
    </div>
  </div>
  <figure className="humanoid-hero__visual">
    <a href="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Humanoid_Reference_Design_Vision_Solution/Humanoid_Reference_Design_Vision_Solution_cn.jpg" target="_blank" rel="noopener noreferrer" aria-label="查看人形机器人参考设计视觉方案原图">
      <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Humanoid_Reference_Design_Vision_Solution/Humanoid_Reference_Design_Vision_Solution_cn.jpg?x-oss-process=image/format,webp" alt="SENSING 人形机器人参考设计视觉方案全景图" />
    </a>
    <figcaption><strong>方案全景图</strong><span>完整展示机器人本体、计算平台与多视角视觉感知链路 · 点击查看原图</span></figcaption>
  </figure>
</section>

<div className="humanoid-proof-strip">
  <div><strong>实际案例</strong><span>H2 Plus × Isaac GR00T</span></div>
  <div><strong>视觉范围</strong><span>从头部到手部</span></div>
  <div><strong>计算平台</strong><span>NVIDIA Jetson Thor</span></div>
  <div><strong>复用基座</strong><span>GMSL2 多摄像头</span></div>
</div>

## 推荐摄像头配置

森云智能面向人形机器人头部感知、环境观察和手部操作视角，提供可组合的 GMSL2 摄像头模组。以下推荐用于说明客户可复用的视觉开发配置，不代表特定量产机器人的实际物料清单。

### 推荐视觉组合

<div className="humanoid-camera-grid">
  <article>
    <span>头部双目</span>
    <h3>Astra S56x</h3>
    <p>双 5MP · 全局曝光 · 10-bit RAW</p>
    <strong>立体视觉与 VLA 输入</strong>
    <a href="/zh-Hans/docs/6_1_Camera/Binocular_Camera/S56">查看规格 →</a>
  </article>
  <article>
    <span>可选双目</span>
    <h3>Astra S36</h3>
    <p>双 3MP · HDR · YUV422</p>
    <strong>HDR 双目视觉</strong>
    <a href="/zh-Hans/docs/6_1_Camera/Binocular_Camera/S36">查看规格 →</a>
  </article>
  <article>
    <span>手部超广角</span>
    <h3>SHF3L</h3>
    <p>3MP · HDR 30fps · 196°</p>
    <strong>近距离操作区域感知</strong>
    <a href="/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHF3L">查看规格 →</a>
  </article>
  <article>
    <span>可选手部广角</span>
    <h3>SHW3H</h3>
    <p>3MP · HDR 60fps · 118°</p>
    <strong>手部操作区域感知</strong>
    <a href="/zh-Hans/docs/6_1_Camera/Monocular_Camera/SHW3H">查看规格 →</a>
  </article>
</div>

### 摄像头推荐配置

<div className="table-responsive">

| 型号 | 类型 | 分辨率 | 曝光 | 数据格式 | 水平视场角 | 推荐角色 | 推荐数量 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Astra S56x** | 双目 | 双 5MP | 全局曝光 | 10-bit RAW | 130° / 140° 可选 | **头部**：立体视觉与 VLA 输入 | 1 |
| **Astra S36**（可选） | 双目 | 双 3MP | 卷帘曝光 | YUV422 | 120° | **头部**：HDR 双目视觉 | 1 |
| **SHF3L** | 单目 | 3MP | 卷帘曝光 | YUV422 | 196° | **手部**：HDR 30fps 操作区域感知 | 最多 4 |
| **SHW3H**（可选） | 单目 | 3MP | 卷帘曝光 | YUV422 | 118° | **手部**：HDR 60fps 操作区域感知 | 可选 |

</div>

:::note 配置说明
- 上表是基于当前驱动与 TRD1 G2A 接口能力整理的开发推荐组合，不代表特定量产机器人的实际配置。
- Astra S56x 与 Astra S36 是可按输出格式、曝光方式和应用需求选择的双目方案。
- 实际摄像头数量和端口分配应根据机器人结构、带宽预算、供电条件及软件配置确定。
:::

## 方案定位

<div className="humanoid-intro">
  <div>
    <p className="humanoid-section-kicker">FROM REFERENCE DESIGN TO DEPLOYABLE VISION</p>
    <h3>从实际参考设计，走向可复用的机器人视觉基座</h3>
  </div>
  <p>
    该案例展示了森云智能视觉感知能力如何接入以 Jetson Thor 为计算核心的人形机器人参考设计。基于项目积累，森云智能进一步提供以 Jetson AGX Thor、TRD1 G2A 和 GMSL2 相机模组为核心的视觉开发基座，帮助开发团队复用从视觉采集、平台适配到端侧部署的完整链路。
  </p>
</div>

:::info 案例与开发基座的边界
Unitree H2 Plus 与 NVIDIA Isaac GR00T 人形机器人参考设计是本文介绍的实际应用案例，森云智能提供其中的视觉感知方案。后文列出的 TRD1 G2A 与 SENSING 摄像头组合用于说明可复用的视觉开发基座和集成流程，不代表 H2 Plus 整机的完整物料清单。
:::

## 实际案例：H2 Plus 与 Isaac GR00T

人形机器人参考设计将机器人的身体、计算与软件栈、视觉感知连接为统一的开发平台。森云智能在其中专注于视觉感知环节，通过相机模组、平台适配与视觉软件支持，为机器人提供稳定、多视角的图像输入。

<div className="humanoid-role-grid">
  <article className="humanoid-role-card">
    <span className="humanoid-role-card__index">01</span>
    <p className="humanoid-role-card__label">ROBOT BODY</p>
    <h3>Unitree H2 Plus</h3>
    <p>提供新一代仿生人形机器人本体，以及头部、手部等关键视觉节点的载体。</p>
    <a href="https://www.unitree.com/cn/H2plus/" target="_blank" rel="noopener noreferrer">查看 Unitree 官方页面 →</a>
  </article>
  <article className="humanoid-role-card">
    <span className="humanoid-role-card__index">02</span>
    <p className="humanoid-role-card__label">COMPUTE & SOFTWARE</p>
    <h3>Jetson Thor + Isaac GR00T</h3>
    <p>提供机载 AI 计算能力和开放软件栈，连接数据采集、训练、推理与真实部署。</p>
  </article>
  <article className="humanoid-role-card humanoid-role-card--accent">
    <span className="humanoid-role-card__index">03</span>
    <p className="humanoid-role-card__label">VISUAL PERCEPTION</p>
    <h3>SENSING 森云智能</h3>
    <p>提供从头部到手部的相机模组、平台适配和视觉软件支持，构建多视角感知能力。</p>
    <a href="https://www.sensing-world.com/h-nd-121.html?fromMid=336" target="_blank" rel="noopener noreferrer">查看森云官方案例 →</a>
  </article>
</div>

## 从感知到操作的能力闭环

<div className="humanoid-flow">
  <article>
    <span>01</span>
    <h3>多视角采集</h3>
    <p>头部双目、广角视觉与手部超广角视觉共同覆盖环境和操作区域。</p>
  </article>
  <article>
    <span>02</span>
    <h3>稳定传输与同步</h3>
    <p>通过 GMSL2 同轴链路汇入计算平台，并支持多路视频硬件同步。</p>
  </article>
  <article>
    <span>03</span>
    <h3>端侧理解与推理</h3>
    <p>Jetson Thor 接收视觉流，为深度处理、识别和 VLA 模型提供输入。</p>
  </article>
  <article>
    <span>04</span>
    <h3>精细操作</h3>
    <p>将稳定视觉输入接入机器人软件栈，支持导航、抓取和自主决策。</p>
  </article>
</div>

## 视觉开发基座

<section className="humanoid-platform">
  <div className="humanoid-platform__copy">
    <p className="humanoid-section-kicker">SENSING VISION FOUNDATION</p>
    <h3>面向客户复用的多摄像头视觉开发基座</h3>
    <p>森云智能提供以 Jetson AGX Thor、TRD1 G2A 和 GMSL2 摄像头模组为核心的开发配置，帮助机器人团队快速验证多视角感知链路。</p>
    <ul>
      <li>最多支持 8 路 GMSL 摄像头接入</li>
      <li>支持 RAW 与 YUV422 视觉输入</li>
      <li>覆盖头部立体视觉、环境感知与手部操作视角</li>
      <li>提供驱动、平台适配和集成支持</li>
    </ul>
  </div>
  <div className="humanoid-platform__visual">
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_10_Humanoid_Robotic_Camera/Solutions/Robotic_Camera_Connect.png?x-oss-process=image/format,webp" alt="SENSING 人形机器人视觉开发基座连接架构" />
  </div>
</section>

## 官方参考资料

<div className="humanoid-reference-grid">
  <a href="https://www.unitree.com/cn/H2plus/" target="_blank" rel="noopener noreferrer">
    <span>UNITREE</span>
    <strong>H2 Plus：产研一体，全栈启航</strong>
    <small>查看官方页面 →</small>
  </a>
  <a href="https://www.sensing-world.com/h-nd-121.html?fromMid=336" target="_blank" rel="noopener noreferrer">
    <span>SENSING</span>
    <strong>Isaac GR00T 参考设计视觉方案案例</strong>
    <small>查看官方案例 →</small>
  </a>
  <a href="https://github.com/SENSING-Technology/nvidia-jetson-camera-drivers/tree/main/Jetson%20AGX%20Orin%20Devkit/SG10A-AGON-G2M-A1/JetPack6.2/SG10A_AGON_G2M_A1_AGX_ORIN_S56x1_SHF3Lx6_JP6.2_L4TR36.4.3" target="_blank" rel="noopener noreferrer">
    <span>GITHUB</span>
    <strong>SENSING NVIDIA Jetson 摄像头驱动</strong>
    <small>查看驱动仓库 →</small>
  </a>
</div>
