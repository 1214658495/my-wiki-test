---
sidebar_position: 1
title: EgoSense H6 头戴式六目数采设备
description: EgoSense H6 头戴式六目第一人称数采设备：6 路全局曝光摄像头、270° 视野、多模态同步采集，产出可直接用于具身智能训练的数据
keywords: [EgoSense H6, EgoSense, 头戴式, 六目, 第一人称, Egocentric, 数据采集, 具身智能, 标定, 同步, MCAP, IMU]
---

export const IMG = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/img';
export const SRC = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/6_3_Data_Collection_Device/Ego-6/source';

export const Stat = ({value, label}) => (
  <div style={{flex: '1 1 140px', padding: '14px 12px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: 8, textAlign: 'center'}}>
    <div style={{fontSize: '1.6rem', fontWeight: 700, color: 'var(--ifm-color-primary)', lineHeight: 1.2}}>{value}</div>
    <div style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: 4}}>{label}</div>
  </div>
);

# EgoSense H6 头戴式六目数采设备

<div style={{textAlign: 'center'}}>
  <img src={`${IMG}/ego6_hero.png`} alt="EgoSense H6 头戴式六目数采设备" style={{width: '100%', maxWidth: '560px', borderRadius: '8px'}} />
</div>

**戴上即可采集，把具身智能训练数据的采集带进真实场景。**

EgoSense H6 是森云智能自研的头戴式六目第一人称数据采集设备。6 路全局曝光摄像头覆盖 270° 视野，与 IMU、麦克风同步记录佩戴者看到的画面、头部姿态和声音。设备脱机录制，不需要电脑陪跑，也不需要搭建动捕场地。

<div style={{display: 'flex', flexWrap: 'wrap', gap: 12, margin: '20px 0'}}>
  <Stat value="6 路" label="全局曝光摄像头" />
  <Stat value="270°" label="组合视场角" />
  <Stat value="< 30 µs" label="双目同步实测偏差" />
  <Stat value="350 g" label="整机重量" />
  <Stat value="约 3 h" label="单块电池续航" />
  <Stat value="256 GB" label="设备内存储" />
</div>

<video src={`${SRC}/%E8%A6%86%E7%9B%96%E7%9A%84%E5%8C%BA%E5%9F%9F.mp4`} controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 8}} />

<p style={{textAlign: 'center', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)'}}>佩戴 EgoSense H6 进行桌面操作时实际录制的六路画面</p>

## 为什么用第一人称采集

| 采集方式 | 局限 |
|-|-|
| 固定机位 / 动捕实验室 | 看不到手部细节，场景脱离真实环境 |
| 真机遥操作 | 设备成本高，单人产能低 |
| 仿真数据 | 存在 Sim-to-Real 鸿沟 |
| **EgoSense H6** | **佩戴者看到什么就录什么，可进入家庭、工厂、医院、商场等真实环境，多台设备并行采集** |

## 一段录制里有什么

每次采集生成一个 `.mcap` 文件，以下数据都在同一个文件里：

| 数据 | 说明 |
|-|-|
| **6 路图像** | 1600 × 1300 @ 30 fps，全局曝光，运动中无果冻效应；H.265 编码 |
| **IMU** | 六轴，200 Hz，记录头部姿态 |
| **音频** | 麦克风音频，可用于语音指令与环境声分析 |
| **时间戳** | 每帧图像与每个 IMU 采样都带时间戳 |
| **标定参数** | 逐台出厂标定，内参、外参与相机-IMU 标定数据写入摄像头 EEPROM，按标准 OTP 定义直接读取（[查看标定指标](#出厂标定)） |

想先看看数据？可在 [使用说明 · 附件下载](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#附件下载) 获取一段示例录制，用 Foxglove Studio 直接打开。

## 标定与精度

### 出厂标定

每台设备出厂前逐台标定，标定数据直接写入摄像头 EEPROM，客户拿到即可使用。

| 项目 | 指标 |
|-|-|
| 摄像头内参 | 重投影误差 < 0.5 px |
| 前置双目外参 | 基线距离误差 < 1.5 mm；外参重投影误差 < 0.5 px |
| 6 路摄像头间外参 | 标定相邻摄像头两两之间的外参 |
| 相机与 IMU 联合标定 | 外参平移误差 Tx / Ty / Tz 均 < 4 mm；时间偏移 < 6 ms |
| 标定数据存储 | 摄像头 EEPROM，按 SENSING 标准 OTP 定义存储 |
| 标定数据读取 | 提供 OTP 定义文档，客户可直接从 EEPROM 读出标定数据 |

### 同步精度

我们用 LED 计时面板（每 1 ms 点亮下一颗 LED）作为拍摄对象，在 Foxglove Studio 中逐帧对比前置双目两路画面：

- **画面一致**：同一帧中，两路摄像头拍到的 LED 点亮位置完全相同，曝光时刻差异小于 1 ms 刻度。
- **时间戳一致**：同一帧两路图像的时间戳相差不到 **30 µs**（视频中抽查的帧分别相差 14 ~ 27 µs）。

<video src={`${SRC}/%E7%9B%B8%E6%9C%BA%E5%90%8C%E6%AD%A5%E7%B2%BE%E5%BA%A6-%E7%A7%91%E5%AD%A6%E7%9A%84%E8%A7%86%E9%A2%91%E8%AF%81%E6%98%8E.mp4`} controls muted playsInline preload="metadata" style={{width: '100%', borderRadius: 8, marginBottom: 16}} />

| 同步对象 | 实测偏差 |
|-|-|
| 前置双目两路 | < 30 µs |
| 6 路摄像头之间 | < 1 ms |

### 为操作场景设计的视野

<div style={{background: '#fff', borderRadius: 8, padding: 12, marginBottom: 16}}>
  <img src={`${IMG}/%E7%9B%B8%E6%9C%BA%E6%A8%A1%E7%BB%84%E5%80%BE%E8%A7%92%E8%AE%BE%E8%AE%A1.png`} alt="EgoSense H6 摄像头倾角设计" style={{display: 'block', width: '100%'}} />
</div>

前置双目平视前方（0° 倾角），其余四路向下倾斜 20°。佩戴者低头操作时，双手和工作台面始终在画面内，不会因为抬头、转头丢失手部动作。

## 从采集到训练

| 步骤 | 做什么 |
|-|-|
| **1. 佩戴采集** | 按机身采集键开始 / 停止，带语音提示；数据直接写入设备内的 Micro SD 卡 |
| **2. 现场检查** | 需要时用 EGOTool 上位机实时预览六路画面、录入采集信息、查看设备状态 |
| **3. 数据回收** | 取出 Micro SD 卡拷贝录制文件 |
| **4. 回放检查** | 用 Foxglove Studio 打开 `.mcap`，逐帧查看图像与 IMU |
| **5. 进入训练流程** | MCAP 是 ROS 2 rosbag2 的默认存储格式，提供 C++ / Python 等官方 SDK，可直接读入自有数据管线 |

操作细节见 [EgoSense H6 使用说明](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual)。

## 规模化采集

- **不依赖电脑与场地**：采集全程脱机，适合多名采集员、多台设备在不同现场并行作业。
- **续航与换电**：单块电池约 3 小时，卡扣式磁吸电池，更换快捷。
- **采集信息管理**：EGOTool 支持录入采集信息，便于后续按场景、人员、任务整理数据。
- **头手联合采集**：可与 [UMI 夹爪 / 手环](/zh-Hans/docs/6_3_Data_Collection_Device/UMI-Camera) 组合，同时采集头部视角与手部操作。

## 应用场景

| 场景 | 采集内容 |
|-|-|
| **具身智能 / VLA 训练** | 真实操作过程的第一视角画面与头部姿态，用于模仿学习与世界模型 |
| **人形机器人技能学习** | 人类示范动作与视觉数据 |
| **多模态感知研究** | 视觉、惯性、音频同步数据 |
| **作业流程分析** | 工厂、仓储、服务场景中的操作流程与行为习惯 |

## 常见采购问题

#### 能先看看样例数据吗？

样例数据可在 [附件下载](/zh-Hans/docs/6_3_Data_Collection_Device/EgoSense-H6/User_Manual#附件下载) 获取，用 Foxglove Studio 直接打开。

#### 可以定制吗？

可以。整机、主板与摄像头均可定制：
- 2 / 3 / 4 / 5 / 6 目配置自由组合；
- 可选不同分辨率、视场角、曝光方式的摄像头，详见 [Ego 定制双目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Stereo-Camera) 与 [Ego 定制单目摄像头](/zh-Hans/docs/6_3_Data_Collection_Device/Ego-Mono-Camera)；
- 提供驱动、应用程序与 ISP 调试服务。

#### 数据存在哪里？

录制数据直接保存在设备内的 Micro SD 卡，由客户自行管理。

## 技术规格

<details>
<summary>展开查看完整技术规格</summary>

| 类别 | 参数项 | 参数值 |
|-|-|-|
| **物理** | 尺寸 | 268 × 223 × 92 mm |
| | 重量 | 350 g |
| | 防护等级 | IP52 |
| | 散热方式 | 风扇散热 |
| **摄像头** | 数量 | 6 路（前置双目 + 左右侧各 2 路单目） |
| | 曝光方式 | 全局曝光 |
| | 分辨率 / 帧率 | 1600 × 1300 @ 30 fps（60 fps 可选） |
| | 单路视场角 | H160° × V130° |
| | 组合视场角 | 270° |
| | 安装倾角 | 前置双目 0°，其余四路向下 20° |
| **其他传感器** | IMU | 六轴，200 Hz |
| | 音频 | 麦克风 |
| **存储与录制** | 存储 | Micro SD，最高 256 GB |
| | 录制格式 | `.mcap`（H.265 编码） |
| **通信** | 有线 | USB Type-C |
| | 无线 | Wi-Fi 6、蓝牙 5.3 |
| **电源** | 电池 | 10000 mAh 卡扣式磁吸电池，续航约 3 小时 |
| | 充电 | Type-C，支持 PD 快充 |
| | 典型功耗 | < 10 W |
| **配套软件** | EGOTool（Windows） | 实时预览、录制控制、采集信息录入、设备状态 |
| | Foxglove Studio | 回放与查看 `.mcap` |

</details>

## 联系我们

:::note 联系方式
- **销售咨询**：[Sales@sensing-world.com](mailto:Sales@sensing-world.com)
- **技术支持**：[support@sensing-world.com](mailto:support@sensing-world.com)
- **电话**：+86-755-28990915
- **官网**：[www.sensing-world.com](https://sensing-world.com/)

**工作时间**：周一至周五，9:00 - 18:00（GMT+8）
:::
