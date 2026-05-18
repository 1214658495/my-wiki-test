---
sidebar_position: 2
---

# CCG3-8M 常见问题

本文包含与 CCG3-8M 相关的常见问题。如果你在使用 CCG3-8M 时遇到问题，可参考本文排查。

## 常见问题与解决方案

### Q1: 如何解决脚本执行错误？

**问题描述:**
模块加载过程中遇到 step1 超时错误时，可能会看到类似以下报错：
```
Loading PCIe driver...insmod: ERROR: could not insert module ../xdma_v412/xdma.ko: Invalid module format
Error: PCIe driver did not load properly.
FAILED
```

**解决方案:**
依次执行以下命令进行清理并重新构建：
```bash
make clean
make
```

**补充说明:**
- 确保所有依赖已正确安装
- 确认内核与驱动版本兼容
- 查看系统日志以获取详细错误信息

---

### Q2: 不同摄像头类型的初始化配置

**问题描述:**
连接不同类型摄像头时，需要根据具体摄像头型号配置初始化脚本参数。

**解决方案:**
根据摄像头类型修改配置文件 `pcie_init_cardx.sh`：

**配置参数：**
- `camera_serdes_type[0]` - 摄像头类型标识
- 取值：
  - `0`: GMSL 摄像头（表示连接的摄像头为 GMSL 类型）
  - `1`: GMSL2(6G) 摄像头（表示连接的摄像头为 GMSL2 6G 类型）
  - `2`: GMSL2F(3G) 摄像头（表示连接的摄像头为 GMSL2F 3G 类型）

**配置示例:**
```bash
# For GMSL camera configuration
camera_serdes_type[0]=1
camera_serdes_type[1]=1
camera_serdes_type[2]=1
camera_serdes_type[3]=1
camera_serdes_type[4]=1
camera_serdes_type[5]=1
camera_serdes_type[6]=1
camera_serdes_type[7]=1
```

---

### Q3: 图像采集卡如何实现同步？

<!-- **Answer:** -->

**方法 1（推荐）:** 详细说明请参考以下链接

-[网络拓扑图 1](https://autosensee.feishu.cn/docx/CKDYdlrlkoWvTpx39wvcSHzCnyf)

**连接要求:**
1. **主连接**: 主节点（IPC）的 ETH0 连接到 CCG3 采集卡（从节点）
2. **GPS 集成**: GPS 模块连接到采集卡用于时间同步
3. **PTP 协议**: 实现设备之间的精确时间同步
<br/>

**方法 2：** 详细说明请参考以下链接
<!-- ```
GPS → Time Synchronization Box → GMSL 摄像头 Array
 ↓                    ↓                    ↓
PTP →         Ethernet Switch  → Multiple Cameras
 ↓                    ↓                    ↓
Lidar →         PTP 同步       → Capture Card System
``` -->

-[网络拓扑图 2](https://autosensee.feishu.cn/docx/ErBzdsOkFowOt0xTc5ecdAvgnqe)

<!-- **Additional Resources:**
- [PTP Configuration Guide](../guides/ptp-configuration.md)
- [Troubleshooting Network Issues](../guides/network-troubleshooting.md) -->

---
<!--
### Q4: Time Synchronization and PTP Configuration

**System Architecture Diagram:**

```
GPS → Time Synchronization Box → GMSL 摄像头 Array
 ↓                    ↓                    ↓
PTP → Ethernet Switch → Multiple Cameras
 ↓                    ↓                    ↓
Lidar → PTP 同步 → Capture Card System
```

**Configuration Steps:**

1. **Hardware Setup:**
   - Connect GPS to Time Synchronization Box
   - Connect cameras to GMSL interface
   - Establish PTP network through Ethernet switch
   - Connect Lidar with PTP synchronization

2. **Software Configuration:**
   - Configure PTP master/slave relationships
   - Set up timing parameters
   - Validate synchronization accuracy

**Key Points:**
- Ensure all devices support PTP protocol
- Verify timing accuracy requirements
- Monitor synchronization status regularly

--- -->

### Q4: PPS 外部触发配置

**TTL 触发使用方法 1：**
采集卡的 [GPS] 接口定义了以下两个接口（红色和绿色），用于连接外部 TTL 触发方波，并配置对应脚本参数。

**Pin Configuration Table:**

| Red Pin | White Pin | Green Pin | Blue Pin | Black Pin | Black Pin |
|------------|-------------|---------|---------|------------|----------|
| PPS Pin    | UART_RX     | GND     | -  | UART_TX    | GND |

**TTL Trigger Configuration Details:**

<!-- When using GPS as the timing source, configure the following parameters: -->

```bash
<file name：pcie_init_cardx.sh>
# 触发模式 config {0:no trigger; 1:reserved; 2:inner trigger; 3:external trigger}
card_trigger_signal_mode               "3"

# Card external signal input fps config.
# 摄像头 external output fps config.
# The following two configurations are valid only when card_trigger_signal_mode is "3".
card_external_signal_input_fps         "1" Hz
camera_external_output_fps             "20" Hz

# 摄像头 inner output fps config
camera_inner_output_fps                "30" Hz
```
<br/>
**TTL 触发使用方法 2：**
如果没有外部 TTL 触发信号，采集卡可在内部生成可变 TTL 触发信号（仅适用于单张采集卡上的摄像头同步）。这些设置可通过脚本参数灵活配置（如下红色设置所示：表示由采集卡内部生成 30Hz 同步 TTL 信号）。

```bash
<file name：pcie_init_cardx.sh>
# 触发模式 config {0:no trigger; 1:reserved; 2:inner trigger; 3:external trigger}
card_trigger_signal_mode               "2"

# Card external signal input fps config.
# 摄像头 external output fps config.
# The following two configurations are valid only when card_trigger_signal_mode is "3".
card_external_signal_input_fps         "1" Hz
camera_external_output_fps             "20" Hz

# 摄像头 inner output fps config
camera_inner_output_fps                "30" Hz
```

---
