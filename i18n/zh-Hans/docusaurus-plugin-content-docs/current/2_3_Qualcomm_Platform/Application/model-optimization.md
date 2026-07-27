---
sidebar_position: 1
title: Qualcomm 模型优化
description: Qualcomm 平台神经网络模型优化技术
---

# Qualcomm 平台神经网络优化

本指南介绍如何在 Qualcomm 异构计算架构上优化深度学习模型，以获得更高性能和效率。

## 模型转换流程

面向 Qualcomm 硬件转换模型通常包括以下关键步骤：

1. **从训练框架导出**：从 PyTorch、TensorFlow 或其他框架导出模型
2. **转换为 ONNX**: 使用对应框架的导出工具生成 ONNX 表示
3. **转换为 DLC**: 使用 SNPE 工具将 ONNX 转换为 Qualcomm DLC 格式
4. **Quantize**: 可选择转换为 INT8 精度以提升性能
5. **Deploy**: 在目标设备上加载优化后的模型

## 转换示例

### TensorFlow 转 DLC

```bash
# 1. Export SavedModel from TensorFlow
python -c "import tensorflow as tf; model = tf.keras.applications.MobileNetV2(); model.save('model_tf')"

# 2. Convert to ONNX using tf2onnx
python -m tf2onnx.convert --saved-model model_tf --output model.onnx

# 3. Convert to DLC
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc
```

### PyTorch 转 DLC

```bash
# 1. Export PyTorch model to ONNX
python -c "
import torch
import torchvision.models as models
model = models.resnet18(pretrained=True)
dummy_input = torch.randn(1, 3, 224, 224)
torch.onnx.export(model, dummy_input, 'model.onnx', verbose=True)
"

# 2. Convert to DLC
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc
```

## 量化

将模型从 FP32 量化到 INT8 可显著提升 Qualcomm 硬件上的性能：

```bash
# Generate calibration list (text file with paths to calibration images)
ls calibration_images/*.jpg > cal_list.txt

# Run quantization with calibration data
snpe-dlc-quantize --input_dlc model.dlc \
                  --output_dlc model_quantized.dlc \
                  --input_list cal_list.txt \
                  --use_enhanced_quantizer
```

### 量化感知训练

为获得最佳效果，建议使用量化感知训练：

```python
# TensorFlow example
import tensorflow as tf
import tensorflow_model_optimization as tfmot

# Apply quantization aware training
quantize_model = tfmot.quantization.keras.quantize_model

# Create a quantization aware model
q_aware_model = quantize_model(model)

# Train the model with quantization awareness
q_aware_model.compile(optimizer='adam',
                     loss='sparse_categorical_crossentropy',
                     metrics=['accuracy'])
q_aware_model.fit(train_data, train_labels, epochs=10)
```

## 层优化

部分层需要特殊处理才能获得最佳性能：

| Layer 类型 | 优化方式 |
|------------|-------------|
| Convolutions | 滤波器数量使用 8 的倍数 |
| 激活函数 | 优先使用 ReLU，避免 sigmoid/tanh |
| Pooling | 尽量使用固定尺寸池化 |
| Custom Ops | 替换为受支持的基础算子 |

## 架构建议

以下模型架构在 Qualcomm 平台上表现较好：

1. **MobileNet Family**: 面向移动端推理设计，采用深度可分离卷积
2. **EfficientNet**: 兼顾精度与效率的缩放设计
3. **MnasNet**: 针对移动设备优化的架构
4. **SqueezeNet**: 模型非常紧凑，同时具备有竞争力的精度

## 模型基准测试

使用 SNPE 基准测试工具测量性能：

```bash
snpe-net-run --container model.dlc \
             --input_list input_list.txt \
             --output_dir results \
             --perf_profile high_performance \
             --measure_performance
```

分析结果以识别瓶颈：

```bash
snpe-diagview --input_log results/logs/*.log
```

## 运行时选择

Qualcomm 平台支持多个运行时，不同运行时具有不同性能特征：

| 运行时 | 适用场景 |
|---------|----------|
| CPU | 兼容性与开发调试 |
| GPU | 多数视觉模型，兼顾性能与功耗 |
| DSP | 最高能效 |
| AIP | 最新平台和最高性能 |

## 示例：选择最佳运行时

```cpp
// Initialize SNPE with runtime selection
zdl::DlSystem::RuntimeList runtimeList;
runtimeList.add(zdl::DlSystem::Runtime_t::GPU);
runtimeList.add(zdl::DlSystem::Runtime_t::DSP);
runtimeList.add(zdl::DlSystem::Runtime_t::CPU);

// Create SNPE network with runtime failover
zdl::SNPE::SNPEFactory::Instance().CreateSNPE(
    zdl::DlSystem::PlatformConfig(),
    modelPath.c_str(),
    zdl::DlSystem::Runtime_t::GPU, // Preferred runtime
    runtimeList,                   // Fallback runtimes
    "output_layer"
);
```

## 高级优化技术

面向专家用户和生产部署：

1. **层融合**: 尽可能合并连续操作
2. **混合精度**: 为不同层使用不同精度
3. **自定义层**: 为自定义操作实现优化版本
4. **内存规划**: 控制大模型的内存分配
5. **Profile-Guided 优化方式**: 使用真实使用数据优化执行路径

<!-- ## Next Steps

- Explore [Vision Algorithm Acceleration](./vision-algorithm-acceleration)
- Learn about [Performance Benchmarking Techniques](./performance-benchmarking)
- Review [Production Deployment Strategies](./production-deployment) -->
