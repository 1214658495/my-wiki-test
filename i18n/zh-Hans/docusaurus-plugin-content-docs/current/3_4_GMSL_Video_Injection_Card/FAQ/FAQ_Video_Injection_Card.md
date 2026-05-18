---
sidebar_position: 1
---

# CIG4-8H 常见问题

本文包含与 CIG4-8H GMSL 视频注入卡相关的常见问题。

<!-- ![SENSING Logo](/img/SENSING_logo_en2.png) -->

### Q1: 如何处理 CIG4-8H 问题？

**A1:** 请按以下步骤系统排查：
- 确保所有 GMSL 线缆正确连接
- 检查板卡上的 LED 状态指示灯
- 确认驱动安装已完成
- 确认系统能够识别设备

### Q2: 视频注入卡的关键规格是什么？

**A2:** CIG4-8H 提供：
- **最大 GMSL 视频输出**: 最高支持 8 通道
- **分辨率与帧率**: 8MP@30fps 每通道
- **视频格式**: YUV422, RAW12, RAW10, RAW14
- **串行器**: GMSL2 MAX9295A，可定制配置
- **多卡支持**: 可支持 2 张或更多板卡以扩展容量

### Q3: 支持哪些 SOC 平台和解串器？

**A3:** 兼容平台：

| SOC 厂商 | SOC 型号 | 解串器 |
|------------|-----------|--------------|
| Nvidia | Jetson AGX Orin | MAX9296A |
| Nvidia | Jetson AGX Orin | MAX96712 |
| Nvidia | Drive Orin | MAX96712 |
| Horizon | J5 | MAX9296A |
| Horizon | J5 | MAX96712 |
| TI | TDA4VM | MAX96724 |
| 其他 | 多种 SOC | 兼容解串器 |

**注意：** 其他 SOC 和解串器也可能兼容。具体兼容性验证和配置支持请联系技术支持。

### Q4: 视频注入卡如何与其他传感器同步？

**A4:**

• **数据采集阶段:** 原始传感器数据（摄像头 RAW/YUV、LiDAR 点云、CAN 消息）会使用 UTC 时间戳进行对齐。

• **视频注入卡** 通常基于视频帧生成时间戳运行；LiDAR 点云数据自带时间信息，CAN 总线消息也具备自身时间标记。为了实现精确同步，必须建立统一时间参考。

• **仿真阶段:** 支持用户在 PC 侧读取各传感器时间戳，并基于绝对时间计算回放时序。

### Q5: 是否可以配置外部触发和延迟？

**A5:** 可以，支持完整触发配置：
- 支持外部触发或固定帧率内部触发。
- 外部触发功能可完整模拟摄像头触发。
- 支持可调触发延迟。延迟时间可按需设置。

配置文件： `fun_fpga_cfg.sh` 

```bash
./tools/reg_rw /dev/xdma0_user 0x30044 w 100  # 100 represents 100us delay
./tools/reg_rw /dev/xdma0_user 0x30048 w 100  
./tools/reg_rw /dev/xdma0_user 0x3004c w 100  
./tools/reg_rw /dev/xdma0_user 0x30050 w 100  
./tools/reg_rw /dev/xdma0_user 0x30054 w 100  
./tools/reg_rw /dev/xdma0_user 0x30058 w 100  
./tools/reg_rw /dev/xdma0_user 0x3005c w 100  
./tools/reg_rw /dev/xdma0_user 0x30060 w 100  
```

### Q6: 视频通道之间的同步精度是多少？

**A6:** 同步性能出色：
- 同步精度：多通道之间小于 1μs
<!-- - Precise timing coordination across all active channels -->

### Q7: 视频注入卡是否支持摄像头 I2C 配置？

**A7:** 支持，具备完整 I2C 能力：
- 完整仿真摄像头 I2C 地址
- 支持寄存器读写

### Q8: 支持哪些 Ubuntu 系统版本？

**A8:** 支持的 Ubuntu 版本：
- Ubuntu 18.04、20.04 及更高版本
- 针对支持版本的内核兼容性进行优化

### Q9: 完整技术规格是什么？

**A9:** CIG4-8H 技术规格：
- **接口**: PCIe Gen3 x8
- **功耗**: 最大 12W
- **工作温度**: -40°C 至 +85°C
- **最大通道数**: 8 路并发 GMSL 通道
- **分辨率支持**: 最高 8MP 每通道
- **帧率**: 最高 30fps 每通道
- **GMSL 兼容性**: 支持 GMSL1 和 GMSL2
- **线缆长度**: 同轴线缆最长 15 米
- **连接器类型**: FAKRA 连接器

### Q10: 在哪里可以获取更多支持和文档？

**A10:** SENSING 支持资源：
- **技术文档**: 完整用户手册与 API 文档
- **软件开发套件**: 包含示例和教程的完整 SDK
- **技术支持**: 可直接联系工程支持团队
- **社区资源**: 用户论坛和知识库

如需即时帮助，请联系技术支持团队或访问文档门户。

### Q11: 自定义应用可使用哪些 SDK 和 API 接口？

**A11:** API 接口包括：
- **发送接口**: `int send_one_frame(unsigned char* buffer);`
- **寄存器读写接口**: `static int reg_rw(int addr, int write, int value);`

这些 API 可直接实现视频注入逻辑。使用寄存器读写接口配置并保存寄存器设置，再使用发送接口实现视频注入功能。

### Q12: 仿真软件如何配合 GPU 加速工作？

**A12:** 仿真软件通过虚拟传输通道利用 GPU 加速生成数据，然后通过优化的视频注入 API 将处理后的数据高效传输到 CPU 内存，实现流畅的视频注入功能。

---

*本文档会定期更新，以反映 CIG4-8H 视频注入卡的最新功能与能力。*


