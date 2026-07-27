---
sidebar_position: 4
---

# 摄像头触发与同步指南

## 1. 系统 概述
系统由控制器（包括 SoC 和解串器）、摄像头（包括串行器和传感器）以及其他设备组成。SENSING 的主要产品是摄像头。


<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/Camera_Fsync.png" alt="Camera_Fsync" style={{width: 760, height:'auto'}} />
</div>

<br />
- 外部 Fsync 信号输入到控制器后，会经过控制器侧 Deserializer 透明转发到多路摄像头的 Serializer，从而实现多摄像头同时硬件触发。
- 解串器和串行器都必须正确配置，才能支持 Fsync 信号透传。
- 同一路 Fsync 信号也可以分配给 LiDAR 或其他传感器，实现多传感器硬件级同步。
- 由于这是基于硬件的同步方式，Fsync 信号传播延迟和数据传输延迟通常可忽略（一般在微秒级）。


## 2. 验证同步
- 推荐方法是在摄像头端或控制器端打印并比较每帧时间戳。
- 如果多路摄像头的时间戳高度接近（或相同），即可认为同步成功。

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/TimeStemp.png" alt="Camera_Fsync" style={{width: 460, height:'auto'}} />
</div>

## 3. Fsync 信号规格
- Fsync 信号需要满足电平、脉宽和频率等要求。详细参数请参考硬件文档。

<div style={{textAlign: 'center'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/TriggerFsync.png" alt="Camera_Fsync" style={{width: 460, height:'auto'}} />
</div>

## 4. 寄存器 配置 示例
下面是用于启用 Fsync 透传的典型寄存器配置。请根据硬件数据手册调整地址和值。
- 以下配置将 MAX9296A 的 MFP6 引脚设置为输入，并将 Fsync 信号透传到 MAX9295A 的 MFP7 和 MFP8 引脚。
```c
#!/bin/bash

#I2C总线号     16
#MAX9296A     I2CADDR= 0x48（7bit）
#MAX9295A     I2CADDR= 0x40（7bit）


#disable uart1（must）
i2ctransfer -y -f 16 w3@0x48 0x00 0x03 0x40

#MAX9296A MFP6 config, configure MFP6 pin of MAX9296A as input in passthrough mode
i2ctransfer -y -f 16 w3@0x48 0x02 0xC2 0x83
i2ctransfer -y -f 16 w3@0x48 0x02 0xC3 0xA7

sleep 0.2

#MAX9295A MFP7, MFP8 config, configure MFP7 and MFP8 pins of MAX9295A as output in passthrough mode
i2ctransfer -y -f 16 w3@0x40 0x02 0xD3 0x85
i2ctransfer -y -f 16 w3@0x40 0x02 0xD6 0x85
i2ctransfer -y -f 16 w3@0x40 0x00 0x10 0x21
sleep 0.3
#MAX9295A MFP7
i2ctransfer -y -f 16 w3@0x40 0x02 0xD3 0x84
i2ctransfer -y -f 16 w3@0x40 0x02 0xD5 0x07
#MAX9295A MFP8
i2ctransfer -y -f 16 w3@0x40 0x02 0xD6 0x84
i2ctransfer -y -f 16 w3@0x40 0x02 0xD8 0x07
```

> **注意：** 请始终参考器件数据手册，确认正确的寄存器地址和配置值。

:::tip
如需额外配置选项或有特定需求，请联系我们的技术支持团队获取帮助。
:::
