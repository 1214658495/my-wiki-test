---
sidebar_position: 1
title: Model Optimization for Qualcomm
description: Techniques for optimizing neural network models for Qualcomm platforms
---

# Neural Network Optimization for Qualcomm Platforms

This guide covers techniques for optimizing deep learning models to achieve maximum performance and efficiency on Qualcomm's heterogeneous computing architecture.

## Model Conversion Workflow

Converting models for Qualcomm hardware involves these key steps:

1. **Export from Training Framework**: Save models from PyTorch, TensorFlow, or other frameworks
2. **Convert to ONNX**: Use framework-specific exporters to create ONNX representation
3. **Convert to DLC**: Use SNPE tools to convert ONNX to Qualcomm's DLC format
4. **Quantize**: Optionally convert to INT8 precision for improved performance
5. **Deploy**: Load the optimized model on the target device

## Conversion Examples

### TensorFlow to DLC

```bash
# 1. Export SavedModel from TensorFlow
python -c "import tensorflow as tf; model = tf.keras.applications.MobileNetV2(); model.save('model_tf')"

# 2. Convert to ONNX using tf2onnx
python -m tf2onnx.convert --saved-model model_tf --output model.onnx

# 3. Convert to DLC
snpe-onnx-to-dlc --input_network model.onnx --output_path model.dlc
```

### PyTorch to DLC

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

## Quantization

Quantizing models from FP32 to INT8 significantly improves performance on Qualcomm hardware:

```bash
# Generate calibration list (text file with paths to calibration images)
ls calibration_images/*.jpg > cal_list.txt

# Run quantization with calibration data
snpe-dlc-quantize --input_dlc model.dlc \
                  --output_dlc model_quantized.dlc \
                  --input_list cal_list.txt \
                  --use_enhanced_quantizer
```

### Quantization-Aware Training

For best results, train models with quantization awareness:

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

## Layer Optimization

Some layers require special handling for optimal performance:

| Layer Type | Optimization |
|------------|-------------|
| Convolutions | Use multiples of 8 for filter counts |
| Activations | Prefer ReLU over sigmoid/tanh |
| Pooling | Use fixed-size pooling when possible |
| Custom Ops | Replace with supported primitives |

## Architecture Recommendations

Model architectures that perform well on Qualcomm platforms:

1. **MobileNet Family**: Designed for mobile inference with depthwise separable convolutions
2. **EfficientNet**: Balanced accuracy/efficiency scaling
3. **MnasNet**: Architecture optimized for mobile devices
4. **SqueezeNet**: Very compact model with competitive accuracy

## Benchmarking Your Models

Use the SNPE benchmarking tool to measure performance:

```bash
snpe-net-run --container model.dlc \
             --input_list input_list.txt \
             --output_dir results \
             --perf_profile high_performance \
             --measure_performance
```

Analyze the results to identify bottlenecks:

```bash
snpe-diagview --input_log results/logs/*.log
```

## Runtime Selection

Qualcomm platforms support multiple runtimes with different performance characteristics:

| Runtime | Best For |
|---------|----------|
| CPU | Compatibility and development |
| GPU | Most vision models, balance of performance/power |
| DSP | Maximum power efficiency |
| AIP | Latest platforms, highest performance |

## Example: Selecting Optimal Runtime

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

## Advanced Optimization Techniques

For expert users and production deployment:

1. **Layer Fusion**: Merge sequential operations where possible
2. **Mixed Precision**: Use different precision for different layers
3. **Custom Layers**: Implement optimized versions of custom operations
4. **Memory Planning**: Control memory allocation for large models
5. **Profile-Guided Optimization**: Use actual usage data to optimize execution paths

<!-- ## Next Steps

- Explore [Vision Algorithm Acceleration](./vision-algorithm-acceleration)
- Learn about [Performance Benchmarking Techniques](./performance-benchmarking)
- Review [Production Deployment Strategies](./production-deployment)  -->