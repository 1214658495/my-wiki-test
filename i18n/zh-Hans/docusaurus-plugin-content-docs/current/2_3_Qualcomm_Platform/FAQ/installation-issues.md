---
sidebar_position: 1
title: 安装问题
description: Qualcomm 开发环境常见安装问题排查
---

# 安装问题排查

本指南汇总了为视觉应用配置 Qualcomm 开发环境时常见的问题。

## SDK 安装问题

### 问题：Neural Processing SDK 安装失败

**现象：**
- 执行 `setup.sh` 时出现错误信息
- 安装后缺少组件
- 权限错误

**解决方案：**

1. **检查系统要求：**
   ```bash
   # Verify Python version (requires 3.6+)
   python3 --version

   # Check for required libraries
   pip3 list | grep -E 'numpy|tensorflow'
   ```

2. **修复权限问题：**
   ```bash
   sudo chmod +x setup.sh
   sudo ./setup.sh
   ```

3. **安装缺失依赖：**
   ```bash
   sudo apt update
   sudo apt install -y build-essential cmake python3-dev python3-pip
   pip3 install -r requirements.txt
   ```

### 问题：PATH 中找不到 SNPE 工具

**现象：**
- 运行 SNPE 工具时出现 “Command not found” 错误
- SDK 看似已安装，但工具无法访问

**解决方案：**
```bash
# Add to your ~/.bashrc file
echo 'export SNPE_ROOT=/path/to/snpe/installation' >> ~/.bashrc
echo 'export PATH=$PATH:$SNPE_ROOT/bin/x86_64-linux-clang' >> ~/.bashrc
source ~/.bashrc
```

## 驱动和依赖问题

### 问题：找不到 FastCV 库

**现象：**
- `error: fastcv.h: No such file or directory`
- 缺少 FastCV 函数导致链接错误

**解决方案：**
```bash
# Install FastCV dependencies
sudo apt install -y libprotobuf-dev protobuf-compiler

# Set environment variables
echo 'export FASTCV_DIR=/opt/qualcomm/fastcv' >> ~/.bashrc
echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$FASTCV_DIR/lib' >> ~/.bashrc
source ~/.bashrc

# Verify installation
ls $FASTCV_DIR/include/fastcv
```

### 问题：DSP 驱动无法正常加载

**现象：**
- 应用出现 "Failed to initialize DSP" 错误
- 无法将计算卸载到 Hexagon DSP

**解决方案：**
```bash
# Check DSP subsystem status
adb shell cat /sys/kernel/debug/msm_subsys/adsp

# If subsystem is not available, ensure proper drivers:
adb remount
adb push vendor/lib64/libadsprpc.so /vendor/lib64/
adb push vendor/lib/libadsprpc.so /vendor/lib/
adb reboot

# After reboot, verify subsystem is available
adb shell cat /sys/kernel/debug/msm_subsys/adsp
```

## 工具配置问题

### 问题：模型转换失败

**现象：**
- ONNX 到 DLC 转换过程中出现错误
- 出现不支持的层或操作提示

**解决方案：**
```bash
# Check for supported operations
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc --debug

# For unsupported layers, try conversion with CPU fallback
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc --allow_unconsumed_nodes
```

### 问题：Snapdragon Profiler 检测不到设备

**现象：**
- Snapdragon Profiler 中未显示设备
- 无法连接目标设备进行 profiling

**解决方案：**
```bash
# Check if device is visible via ADB
adb devices

# If visible but not in Profiler, restart ADB server
adb kill-server
adb start-server

# Enable USB debugging on device
# Settings > System > Developer Options > USB debugging

# For secure devices, verify RSA fingerprint on device screen
adb devices

# Install required packages on device
adb install -r SnapdragonProfilerApp.apk
```

## 交叉编译问题

### 问题：目标平台交叉编译错误

**现象：**
- 为 ARM 架构编译时出现构建错误
- 库不兼容

**解决方案：**
```bash
# Install cross-compilation toolchain
sudo apt install -y gcc-aarch64-linux-gnu g++-aarch64-linux-gnu

# Use CMake with proper toolchain file
cmake -DCMAKE_TOOLCHAIN_FILE=../toolchain-aarch64.cmake ..

# Example toolchain file content:
# SET(CMAKE_SYSTEM_NAME Linux)
# SET(CMAKE_SYSTEM_PROCESSOR aarch64)
# SET(CMAKE_C_COMPILER aarch64-linux-gnu-gcc)
# SET(CMAKE_CXX_COMPILER aarch64-linux-gnu-g++)
```

## 环境设置问题

### 问题：OpenCV 未正确配置用于 SNPE

**现象：**
- 使用 SNPE 时出现与 OpenCV 相关的构建错误
- 版本不兼容

**解决方案：**
```bash
# Build OpenCV with compatible settings
git clone https://github.com/opencv/opencv.git
cd opencv
mkdir build && cd build

cmake -D CMAKE_BUILD_TYPE=RELEASE \
      -D CMAKE_INSTALL_PREFIX=/usr/local \
      -D WITH_TBB=ON \
      -D WITH_V4L=ON \
      ..

make -j$(nproc)
sudo make install

# Update environment variables
echo 'export OpenCV_DIR=/usr/local/share/opencv4' >> ~/.bashrc
source ~/.bashrc
```

<!-- ## Next Steps

If you're still experiencing issues after trying these solutions:

1. Check our [Developer Forums](https://developer.qualcomm.com/forums) 用于 community 支持
2. Review [Software Compatibility Matrix](/zh-Hans/docs/2_3_Qualcomm_Platform/常见问题/compatibility-matrix) 用于 version requirements
3. Contact [技术支持](https://developer.qualcomm.com/support) 配合 detailed error logs 和 system information -->
