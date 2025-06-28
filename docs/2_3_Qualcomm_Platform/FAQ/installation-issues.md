---
sidebar_position: 1
title: Installation Issues
description: Troubleshooting common installation problems with Qualcomm development environments
---

# Troubleshooting Installation Issues

This guide addresses common issues encountered when setting up Qualcomm development environments for vision applications.

## SDK Installation Problems

### Issue: Failed to install Neural Processing SDK

**Symptoms:**
- Error messages during `setup.sh` execution
- Missing components after installation
- Permission errors

**Solutions:**

1. **Check system requirements:**
   ```bash
   # Verify Python version (requires 3.6+)
   python3 --version
   
   # Check for required libraries
   pip3 list | grep -E 'numpy|tensorflow'
   ```

2. **Fix permission issues:**
   ```bash
   sudo chmod +x setup.sh
   sudo ./setup.sh
   ```

3. **Install missing dependencies:**
   ```bash
   sudo apt update
   sudo apt install -y build-essential cmake python3-dev python3-pip
   pip3 install -r requirements.txt
   ```

### Issue: Cannot find SNPE tools in PATH

**Symptoms:**
- "Command not found" errors when running SNPE tools
- SDK appears to be installed but tools are inaccessible

**Solution:**
```bash
# Add to your ~/.bashrc file
echo 'export SNPE_ROOT=/path/to/snpe/installation' >> ~/.bashrc
echo 'export PATH=$PATH:$SNPE_ROOT/bin/x86_64-linux-clang' >> ~/.bashrc
source ~/.bashrc
```

## Driver and Dependency Issues

### Issue: FastCV library not found

**Symptoms:**
- `error: fastcv.h: No such file or directory`
- Linker errors with missing FastCV functions

**Solution:**
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

### Issue: DSP drivers not loading properly

**Symptoms:**
- Applications fail with "Failed to initialize DSP"
- Cannot offload computation to Hexagon DSP

**Solution:**
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

## Tool Configuration Issues

### Issue: Model conversion fails

**Symptoms:**
- Errors during ONNX to DLC conversion
- Unsupported layer or operation messages

**Solution:**
```bash
# Check for supported operations
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc --debug

# For unsupported layers, try conversion with CPU fallback
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc --allow_unconsumed_nodes
```

### Issue: Device not detected by Snapdragon Profiler

**Symptoms:**
- No devices shown in Snapdragon Profiler
- Cannot connect to target device for profiling

**Solution:**
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

## Cross-Compilation Issues

### Issue: Cross-compilation errors for target platform

**Symptoms:**
- Build errors when compiling for ARM architecture
- Library incompatibilities

**Solution:**
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

## Environment Setup Issues

### Issue: OpenCV not properly configured with SNPE

**Symptoms:**
- Build errors related to OpenCV when using with SNPE
- Incompatible versions

**Solution:**
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

1. Check our [Developer Forums](https://developer.qualcomm.com/forums) for community support
2. Review the [Software Compatibility Matrix](/docs/2_3_Qualcomm_Platform/FAQ/compatibility-matrix) for version requirements
3. Contact [Technical Support](https://developer.qualcomm.com/support) with detailed error logs and system information  -->