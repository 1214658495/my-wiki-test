---
sidebar_position: 1
title: Development Environment Setup
description: Setting up your development environment for Qualcomm platforms
---

# Setting Up Your Qualcomm Development Environment

This guide will walk you through the process of setting up a development environment for computer vision applications on Qualcomm platforms.

## System Requirements

| Component | Minimum Requirements | Recommended |
|-----------|----------------------|------------|
| Operating System | Ubuntu 18.04/20.04, Windows 10 | Ubuntu 20.04 LTS |
| RAM | 8GB | 16GB or higher |
| Storage | 128GB SSD | 256GB SSD or higher |
| CPU | Intel/AMD x86_64, 4 cores | 8+ cores |
| GPU | NVIDIA GTX 1060 or equivalent | NVIDIA RTX series |

## Software Installation

### 1. Install the Qualcomm Neural Processing SDK

```bash
# Download the SDK from Qualcomm Developer Network
# Extract and install
tar -xzf qnnsdk-v2.x.x.tar.gz
cd qnnsdk-v2.x.x
./setup.sh
```

### 2. Install Required Dependencies

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y build-essential cmake libopencv-dev python3-dev python3-pip
pip3 install numpy tensorflow torch

# Include Qualcomm-specific packages
pip3 install snpe-sdk
```

### 3. Configure Development Tools

```bash
# Set up environment variables
echo 'export SNPE_ROOT=/path/to/snpe/installation' >> ~/.bashrc
echo 'export PATH=$PATH:$SNPE_ROOT/bin/x86_64-linux-clang' >> ~/.bashrc
source ~/.bashrc
```

## IDE Setup

We recommend using one of the following IDEs for Qualcomm vision application development:

1. **Visual Studio Code**
   - Install C/C++ extension
   - Install Python extension
   - Configure include paths for Qualcomm SDK headers

2. **Qt Creator**
   - Particularly useful for applications with GUI components
   - Configure the kit to use the appropriate compiler

3. **Android Studio**
   - For Android-based Qualcomm device development
   - Install the NDK for native code development

## Verifying Your Installation

Run the following test to verify your installation is working correctly:

```bash
cd $SNPE_ROOT/examples/NativeCpp/SampleApp
make
./bin/x86_64-linux-clang/snpe-sample
```

If the test runs successfully, you should see output demonstrating that the SDK can properly initialize and run a simple inference task.

<!-- ## Next Steps

Now that your development environment is set up, you can proceed to:

1. [Camera Integration Guide](./camera-integration)
2. [Vision Processing Pipeline](./vision-pipeline)

If you encounter any issues during setup, please refer to our [Troubleshooting FAQ](/docs/2_3_Qualcomm_Platform/FAQ/installation-issues) or contact our support team.  -->