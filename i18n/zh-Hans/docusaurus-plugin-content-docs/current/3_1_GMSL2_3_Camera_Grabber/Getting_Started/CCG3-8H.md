---
sidebar_position: 2
title: CCG3-8H 快速入门
---

# CCG3-8H 快速入门

## 概述
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem', marginBottom: '2rem'}}>
  <div style={{textAlign: 'center'}}>
    <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8H/CCG3-8H.png" alt="CCG3-8H" style={{maxWidth: '55%', height:'auto', borderRadius: '8px'}} />
  </div>
  <div style={{marginTop: '1rem', fontSize: '1.1em'}}>
    CoaxCapture II GMSL 视频采集卡（以下简称采集卡）<strong>CCG3-8H</strong> 是一款可连接 GMSL 摄像头的图像采集产品，具备高帧率、高速、低延迟等优势，广泛应用于无人车、自动驾驶、自主移动设备、数据采集等场景。
  </div>
  <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
    <a class="get_one_now_item" href="https://sensing-world.com/en/Coaxcapture_Card/" target="_blank" rel="noopener noreferrer">
      <span style={{backgroundColor: '#f0f0f0', padding: '10px 20px', display: 'inline-block', borderRadius: '5px', color: '#000', fontWeight: 600, fontSize: '1.1em'}}>了解更多</span>
    </a>
  </div>
</div>

## 快速入门

### 关键规格
<div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem'}}>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>型号：</strong> CCG3-8H<br/>
    <strong>摄像头输入：</strong> 8x GMSL2/GMSL<br/>
    <strong>分辨率:</strong> 1-8MP<br/>
    <strong>位深：</strong> 8/12-bit<br/>
    <strong>数据带宽：</strong> 6Gbps/cable
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>处理器：</strong> Xilinx ZU+<br/>
    <strong>PCIe：</strong> Gen3 x8 通道<br/>
    <strong>操作系统：</strong> Linux 64 位，Ubuntu 18.04/20.04/22.04/24.04<br/>
    <strong>SDK/API：</strong> V4L2, 文档<br/>
    <strong>触发：</strong> TTL, PPS
  </div>
  <div style={{flex: 1, minWidth: 260, background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', padding: '1rem'}}>
    <strong>工作温度：</strong> -20°C ~ +70°C<br/>
    <strong>存储温度：</strong> -40°C ~ +80°C<br/>
    <strong>供电输出：</strong> 4W/9V 每根线缆<br/>
    <strong>连接器：</strong> Min-fakra Dual<br/>
    <strong>尺寸：</strong> 167.64mm x 111.15mm
  </div>
</div>

### 框图
<div style={{textAlign: 'center', marginBottom: '2rem'}}>
  <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/3_1_GMSL2_3_Camera_Grabber/CCG3-8H/CCG3-8H_diagram.png" alt="CCG3-8H 框图" style={{maxWidth: '80%',  height:'auto', borderRadius: '8px'}} />
</div>

:::note 亮点
- 8 路 GMSL 摄像头输入，最高 8MP@30fps
- PCIe Gen3 x8 通道，超高带宽
- 支持外部触发与 PTP 时间同步
- 低延迟，高可靠性
:::

### 支持的摄像头列表

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| 序号 | 摄像头                      | 分辨率 | 输出数据 | Ubuntu18.04/20.04/22.04/24.04 |
|-----| --------------------------- | ---------- | ----------- | ------------- |
| 1   | SG1-OX01F10C-GMSL-Hxxx      | 1280H*720V | YUV422      | ✅           |
| 2   | SG1S-OX01F10C-G1G-Hxxx      | 1280H*960V | YUV422      | ✅           |
| 3   | SG2-AR0231C-0202-GMSL-Hxxx  | 1920H*1080V| YUV422      | ✅           |
| 4   | SG2-AR0233C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 5   | SG2-IMX390C-5200-G2A-Hxxx   | 1920H*1080V| YUV422      | ✅           |
| 6   | SG2-OX03CC-5200-GMSL2F-Hxxx | 1920H*1080V| YUV422      | ✅           |
| 7   | SG3S-ISX031C-GMSL2-Hxxx     | 1920H*1536V| YUV422      | ✅           |
| 8   | SG3S-ISX031C-GMSL2F-Hxxx    | 1920H*1536V| YUV422      | ✅           |
| 9   | SG3S-OX03JC-G2F-Hxxx        | 1920H*1536V| YUV422      | ✅           |
| 10  | SG5-IMX490C-5300-GMSL2-Hxxx | 2880H*1860H| YUV422      | ✅           |
| 11  | SG8S-AR0820C-5300-G2A-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 12  | SG8-OX08BC-5300-GMSL2-Hxxx  | 3840H*2160V| YUV422      | ✅           |
| 13  | SG8-IMX728C-G2G-Hxxx        | 3840H*2160V| RAW12       | ✅           |

</div>

## 硬件准备

#### 部件清单

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| 序号 | 产品型号                 | 数量 | 备注                |
|-----|-------------------------------|----------|-----------------------|
| 1   | 电源连接线         | 1        | 标准配置|
| 2   | CCG3-8H 采集卡          | 1        | 标准配置|
| 3   | Fakra 一分二转接线 | 4 | 标准配置|
| 4   | 航空插头转网线 | 1 | 标准配置|
| 5   | GPS 连接线           | 1        | 标准配置|

</div>



#### 请按以下步骤安装产品：

1. 将 CCG3-8H 插入主机 PCIe 插槽
2. 使用同轴线缆将 GMSL 摄像头连接到 CCG3-8H
3. 系统上电

<div style={{textAlign: 'center', position: 'relative', width: '95%', paddingBottom: '56.25%', marginBottom: '20px'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src="//player.bilibili.com/player.html?bvid=BV1aXDfBUEqC&page=1&high_quality=1&danmaku=0"
    scrolling="no"
    border="0"
    frameBorder="no"
    framespacing="0"
    allowFullScreen="true">
  </iframe>
</div>

---

## 软件准备

### 1. SDK 下载

<div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>

| 摄像头 | Linux 系统版本 | 驱动包下载链接 | 驱动包下载方式 |
|------------------------------|-------------------------|---------------------------|-------------------------------|
| GMSL2 摄像头 (YUV 数据)<br/>(例如： SG3S-ISX031C-GMSL2-Hxxx) | Ubuntu 18.04/20.04/22.04/24.04 | [链接](https://github.com/SENSING-Technology/CoaxCapture-CCG3/tree/main) | 复制完整链接地址到 [DownGit](https://minhaskamal.github.io/DownGit/#/home) 下载 |

</div>

## 详细使用说明

如需完整的软件安装、SDK 配置和视频传输协议说明，请参考详细应用指南：

**[📖 完整应用指南](../Application/CCG3-8H_Application)**


<br />


## FAQ
<div style={{background: 'var(--ifm-background-color)', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.2rem', marginBottom: '2rem', fontSize: '1.1em'}}>
更多信息请参考 <a href="../FAQ/FAQ_CCG3-8H" style={{color: 'var(--ifm-color-primary)', textDecoration: 'underline'}}>常见问题部分</a>.
</div>
