---
sidebar_position: 5
title: 摄像头内参
description: GMSL 摄像头内参访问和使用指南
---

# 摄像头内参

本文全面介绍摄像头内参，包括获取方法、数据格式和应用方式。

## **Q1**: 可用性和识别方式

### 内参可用性

从 2023 年开始，所有 SENSING 摄像头都会在相机内预置已标定的内参。2023 年以前生产的摄像头仅在客户明确要求时才会进行内参标定。

### 识别摄像头生产年份

可以通过 SN 码识别摄像头的生产年份：

下图展示了一台摄像头的信息：
- **SN 码**: H190S-E01220525
- **产品型号**: SG3-ISX031C-GMSL2-H190S

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
 <img src="https://sgword-service.oss-cn-heyuan.aliyuncs.com/wiki-images/1_0_Camera/1_1_Serdes_Camera/SN/SN_code.png" alt="SN 码 示例" style={{maxWidth: '300px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}} />
</div>

<div style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>

| 前缀 | 生产年份 | 内参状态 |
|--------|-------------------|----------------------------|
| Dxxxxxx | 2021 | 默认未标定 |
| Exxxxxx | 2022 | 默认未标定 |
| Fxxxxxx | 2023 | 默认已标定 |
| Gxxxxxx | 2024 | 默认已标定 |
| Hxxxxxx | 2025 | 默认已标定 |

</div>

## **Q2**: 获取摄像头内参

### 方法 1: 按型号查看对应说明

以下列出部分型号及其对应的内参读取说明文档：

| # | 型号示例 | 说明文档 | 备注 |
|---|---------------|----------------------|-------|
| 1 | SG2-AR0233C-<span style={{color: 'red'}}>5200</span>-G2A-Hxxx <br/> SG2-IMX390C-<span style={{color: 'red'}}>5200</span>-GMSL2-Hxxx <br/> SG5-IMX490C-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx <br/> SG8-AR0820C-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx <br/> SG8-OX08BC-<span style={{color: 'red'}}>5300</span>-GMSL2-Hxxx | [内参读取说明： GW5200 & GW5300 ISP 型号](https://autosensee.feishu.cn/file/VP5xbaCuIofT2exvcV0cFoZZnid) | 型号中包含 <span style={{color: 'red'}}>5200</span> 或 <span style={{color: 'red'}}>5300</span> 字段 |
| 2 | SG2-AR0231C-<span style={{color: 'red'}}>0202</span>-GMSL-Hxxx | [内参读取说明： AP0101 & AP0202 ISP 型号](https://autosensee.feishu.cn/file/PTSHbJmdqobTULxRsWtcn9flnNf) | 型号中包含 <span style={{color: 'red'}}>0101</span> 或 <span style={{color: 'red'}}>0202</span> 字段 |
| 3 | SG3S-<span style={{color: 'red'}}>ISX031</span>-GMSL2F-Hxxx | [ISX031(IMX623) GMSL2 模组 内参读取说明](https://autosensee.feishu.cn/file/WnZ2bnD4dowVEYxLETjcnLo9nyg) | 型号中包含 <span style={{color: 'red'}}>ISX031</span> 或 <span style={{color: 'red'}}>IMX623</span> 字段 |
| 4 | SG2-AR0233C-GMSL2（RAW 摄像头） <br/> SG8-IMX728C-G2G-Hxxx（RAW） <br/> SG3S-OX03JC-G2F-Hxxx <br/> S56 / S56C 双目摄像头 | [内参读取说明：不带 ISP 的 GMSL2 和 FPDLINK III 系列模组](https://autosensee.feishu.cn/file/H1JXbplf5os6nZxTBcnc3N46nBb) | 型号中包含 GMSL2 或 FPDLINK，但不包含 ISP 型号编号 |
| 5 | SG1-<span style={{color: 'red'}}>OX01FC</span>-GMSL-Hxxx | [内参读取说明： OX01F10 SENSOR 型号](https://autosensee.feishu.cn/file/DCGXbjk1fowY0cxwstUcT8NjnWd) | 型号中包含 <span style={{color: 'red'}}>OX01FC</span> 字段 |

**数据格式参考**
- 标准摄像头请参考 [摄像头 OTP Data Format Definition_pub](https://autosensee.feishu.cn/file/XhCmbxWsWox4Pjx7joTcIY2rnrb) （密码：SensingOTP2024）
- 双目摄像头请参考 [Depth 摄像头 OTP Data Format Definition_pub](https://autosensee.feishu.cn/file/FUn3buZdqoa1urxQqRAc5uX7nlh) （密码：SensingOTP2024）

### 方法 2: 使用 SensingTech 在线服务平台

可以通过 SensingTech 客户自助信息查询平台单独下载内参。注意，需要提供摄像头 SN 码。
- <a href="../Getting_Camera_Information" target="_blank" rel="noopener noreferrer">获取摄像头信息</a>

## **Q3**: 摄像头模型类型

内参通常使用以下两类摄像头模型：

1. **针孔模型**：适用于视场角最高 120 度的镜头（包括 H120）
2. **鱼眼模型**：适用于视场角最高 190 度的镜头

### 针孔 摄像头 型号

带畸变校正的针孔相机模型可表示为：

```
[x']   [x(1 + k₁r² + k₂r⁴ + k₃r⁶)/(1 + k₄r² + k₅r⁴ + k₆r⁶) + 2p₁xy + p₂(r² + 2x²)]
[y'] = [y(1 + k₁r² + k₂r⁴ + k₃r⁶)/(1 + k₄r² + k₅r⁴ + k₆r⁶) + p₁(r² + 2y²) + 2p₂xy]
```

其中：
- (x, y) 为归一化图像坐标
- (x', y') 为畸变后的图像坐标
- r² = x² + y² 为半径平方
- k₁、k₂、k₃、k₄、k₅、k₆ 为径向畸变系数
- p₁、p₂ 为切向畸变系数

默认使用 K1-K6 参数进行畸变校正。

### 鱼眼 摄像头 型号

鱼眼相机模型可表示为：

```
r(θ) = k₁θ + k₂θ³ + k₃θ⁵ + k₄θ⁷
```

其中：
- θ 为入射光线与光轴之间的夹角
- r 为图像平面上到光学中心的距离
- k₁、k₂、k₃、k₄ 为鱼眼畸变系数

该模型专用于视场角超过 120° 的广角镜头。

## **Q4**: 在第三方平台读取内参

如果摄像头已完成内参标定，可以通过以下方式读取：

### 使用 I2C 工具

可以按照对应说明，使用平台自带的 I2C 工具读取内参。

**I2C 读取流程：**

1. 确认摄像头对应的 I2C 总线和设备地址（EEPROM 通常为 0x51）
2. 使用 I2C 命令读取存放内参的指定寄存器地址
3. 对于 Linux 系统：
 - 使用 `i2cdetect -r -y <bus_number>` 扫描可用设备
 - 使用 `i2ctransfer -y -f <bus_number> w2@<device_address> <reg_high> <reg_low> r<count>` 读取数据

**重要注意事项**：当多个模组同时连接到域控制器时，默认 I2C 地址必须重新映射为唯一地址，以确保读取到正确的模组。

### 使用平台提供的接口

部分平台可能已根据我们的文档实现了相关接口，具体使用方式请咨询平台供应商。

## **Q5**: 参数转换和使用

### 转换内参

**内参存储示例：**

下表展示焦距参数（fx）在寄存器中的存储示例：

| 寄存器 | 值 | 说明 | 类型和单位 | Flag |
|----------|-------|-------------|---------------|------|
| 0x0065 | 0x59 | | | |
| 0x0066 | 0xAD | | | |
| 0x0067 | 0xFE | | | |
| 0x0068 | 0xD6 | 1426.1570701402 | value：fx <br/> type: double <br/>unit: pixels | YES_CRC32_4 |
| 0x0069 | 0xA0 | | | |
| 0x006A | 0x48 | | | |
| 0x006B | 0x96 | | | |
| 0x006C | 0x40 | | | |

这些寄存器值可通过下方字符串转换方式还原为实际焦距参数（fx = 1426.1570701402 pixels）。

**字符串转换公式：**
```c
#include "stdio.h"

int main(void)
{
    unsigned char pMem[] = {0x59, 0xad, 0xfe, 0xd6, 0xa0, 0x48, 0x96, 0x40};
    double *p = (double*)pMem;
    printf("%.10f\r\n", *p);

    return 0;
}
```

### 转换浮点值

焦距转换示例：

| 地址 | 参数 | Hex 值 | 解码值 / 说明 | Status |
| :------- | :----------- | :-------- | :-------------------------- | :------- |
| `0x0021` | | `0xEC` | | YES_CRC32_4 |
| `0x0022` | 焦距 | `0x51` | 4.26 焦距 | YES_CRC32_4 |
| `0x0023` | | `0x88` | | YES_CRC32_4 |
| `0x0024` | | `0x40` | | YES_CRC32_4 |

使用以下代码进行转换：
```c
unsigned char ppm[] = { 0xEC, 0x51, 0x88, 0x40 };
float* m = (float*)ppm;
printf("%f\r\n", *m);
```

### 读取并转换 SN 码

SN 码作为模组 OTP 数据的一部分存储，格式与内参一致。

**SN 码转换流程：**

1. 从 SN 码寄存器（地址 0x0120-0x0133）读取十六进制值
2. 将每个十六进制值转换为对应的 ASCII 字符
3. 组合字符得到完整 SN 码
4. 遇到第一个 0xFF 时停止，该值表示 SN 字符串结束

**SN 码转换示例：**

<div style={{textAlign: 'center', margin: '1.5rem 0', overflowX: 'auto'}}>
 <table style={{borderCollapse: 'collapse', width: '100%'}}>
 <thead>
 <tr>
 <th>寄存器</th>
 <th>地址</th>
 <th>值</th>
 <th>Ref 序号</th>
 <th>备注</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td rowSpan="33">SN</td>
 <td>0x0120</td>
 <td>0x48</td>
 <td rowSpan="33">H60S-D11200036</td>
 <td rowSpan="33">型号编码共 32 字节，未使用位置填充 0xFF</td>
 </tr>
 <tr><td>0x0121</td><td>0x36</td></tr>
 <tr><td>0x0122</td><td>0x30</td></tr>
 <tr><td>0x0123</td><td>0x53</td></tr>
 <tr><td>0x0124</td><td>0x2D</td></tr>
 <tr><td>0x0125</td><td>0x44</td></tr>
 <tr><td>0x0126</td><td>0x31</td></tr>
 <tr><td>0x0127</td><td>0x31</td></tr>
 <tr><td>0x0128</td><td>0x32</td></tr>
 <tr><td>0x0129</td><td>0x30</td></tr>
 <tr><td>0x012A</td><td>0x30</td></tr>
 <tr><td>0x012B</td><td>0x30</td></tr>
 <tr><td>0x012C</td><td>0x33</td></tr>
 <tr><td>0x012D</td><td>0x36</td></tr>
 <tr><td>0x012E</td><td>0xFF</td></tr>
 <tr><td>0x012F</td><td>0xFF</td></tr>
 <tr><td>0x0130</td><td>0xFF</td></tr>
 <tr><td>0x0131</td><td>0xFF</td></tr>
 <tr><td>0x0132</td><td>0xFF</td></tr>
 <tr><td>0x0133</td><td>0xFF</td></tr>
 <tr><td>0x0134</td><td>0xFF</td></tr>
 <tr><td>0x0135</td><td>0xFF</td></tr>
 <tr><td>0x0136</td><td>0xFF</td></tr>
 <tr><td>0x0137</td><td>0xFF</td></tr>
 <tr><td>0x0138</td><td>0xFF</td></tr>
 <tr><td>0x0139</td><td>0xFF</td></tr>
 <tr><td>0x013A</td><td>0xFF</td></tr>
 <tr><td>0x013B</td><td>0xFF</td></tr>
 <tr><td>0x013C</td><td>0xFF</td></tr>
 <tr><td>0x013D</td><td>0xFF</td></tr>
 <tr><td>0x013E</td><td>0xFF</td></tr>
 <tr><td>0x013F</td><td>0xFF</td></tr>
 <tr><td>0x0140</td><td>0xFF</td></tr>
 </tbody>
 </table>
</div>

**SN 字符串转换代码：**

```c
#include <stdio.h>

int main() {
    unsigned char pMem[] = {0x48, 0x36, 0x30, 0x53, 0x2d, 0x44, 0x31, 0x31, 0x32, 0x30, 0x30, 0x33, 0x36};

    int arrayLength = sizeof(pMem) / sizeof(pMem[0]);

    char result[arrayLength + 1];

    for (int i = 0; i < arrayLength; i++) {
        result[i] = pMem[i];
    }
    result[arrayLength] = '\0';

    printf("SN: %s\n", result);

    return 0;
}
```

### 使用内参

内参可与 OpenCV 配合使用，具体实现代码需由客户自行开发。

参考文章： [OpenCV 摄像头 内参标定和使用](https://blog.csdn.net/qq_38429958/article/details/124125912)"

## **Q6**: 多摄像头读取

### 从多台摄像头读取参数

**适用于搭载 GW5200/GW5300 ISP 的摄像头**

1. **单摄像头连接：**
 - 在 Linux 环境中，使用 `i2cdetect -r -y` 扫描 EEPROM I2C 地址（0x51）
 - 使用以下命令读取寄存器值： `sudo i2ctransfer -y -f 1 w2@0x51 0x00 0x01 r1`

2. **多台同型号摄像头：**
 - 通过修改 9295/96717F 的 0x42 和 0x43 寄存器，将 EEPROM 地址 0x51（0xA2）重映射到不同地址
 - 向寄存器 0x43 写入原始地址 0x51（0xA2）
 - 根据设备树定义，向寄存器 0x42 写入目标地址（例如 0x54/0xA8、0x55/0xAA）

**地址重映射流程：**
1. 初始状态：所有摄像头默认使用相同的 I2C 地址（0x51）
2. 配置：写入 MAX9295/MAX96717F 的 0x42 和 0x43 寄存器
3. 结果：每台摄像头获得唯一地址（例如 0x54、0x55 等）
4. 读取：使用新的唯一地址分别读取每台摄像头的数据

**适用于搭载 ISX031 传感器的摄像头**

采用与上述相同的方法：
- 将原始地址 0x34 (0x1A) 写入寄存器 0x43
- 根据设备树定义，向寄存器 0x42 写入目标地址（例如 0x54/0xA8、0x55/0xAA）

## **Q7**: 技术规格

### 参数存储地址

针孔模型和鱼眼模型参数存储在不同地址：
- **针孔模式**: 地址 0x85-0xC4 存储 K1、K2、P1、P2、K3、K4、K5、K6 参数（FOV < 120°）
- **鱼眼模式**：地址 0xC5-0xE4 存储 K1、K2、K3、K4 参数（FOV > 120°）

**存储地址表：**

| 参数类型 | 模型类型 | 地址范围 | 参数 |
|----------------|------------|---------------|------------|
| 内参矩阵 | 两者 | 0x45-0x54 | Fx, Fy, Cx, Cy |
| 畸变参数 | 针孔 | 0x85-0xC4 | K1, K2, P1, P2, K3, K4, K5, K6 |
| 畸变参数 | 鱼眼 | 0xC5-0xE4 | K1, K2, K3, K4 |
| SN 码 | 两者 | 0x0120-0x0133 | ASCII 字符 |

### 标定精度

- **RMS 差异**: 不同批次摄像头的 RMS 计算公式可能有所差异
- **标定误差范围**:
 - COD 精度误差：AA 镜头有对应标准，螺纹镜头无对应标准
 - 等效焦距误差：按镜头设计公差控制
 - 重投影误差（RMS）：平均重投影误差为 0.25

### 标定标准和精度评估

评估标准包括：
- 重投影误差
- 内参和畸变参数稳定性
- 不同视角下的标定精度
- 畸变参数 correction effects
- 实际应用测试
