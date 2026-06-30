// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
  "6_0_Robotics",
  {
    "type": "category",
    "label": "摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "双目摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "6_1_Camera/Binocular_Camera/S56",
          "6_1_Camera/Binocular_Camera/S36"
        ]
      },
      {
        "type": "category",
        "label": "单目摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "6_1_Camera/Monocular_Camera/SHW3H",
          "6_1_Camera/Monocular_Camera/SHF3L",
          "6_1_Camera/Monocular_Camera/M3A",
          "6_1_Camera/Monocular_Camera/SHW5G_SHF5G",
          "6_1_Camera/Monocular_Camera/SHW3G_SHF3G"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "视觉解决方案",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "6_2_Vision_Solution/Humanoid_Reference_Design_Vision_Solution",
      "6_2_Vision_Solution/Robotic_Camera_Application",
      "6_2_Vision_Solution/NRDCK"
    ]
  },
  "1_0_Camera",
  {
    "type": "category",
    "label": "SerDes 摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "GMSL 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_1_Serdes_Camera/GMSL_Camera/Camera_Selection",
          "1_1_Serdes_Camera/GMSL_Camera/List_of_Platform_Compatible_with_Camera",
          "1_1_Serdes_Camera/GMSL_Camera/Getting_Camera_Information",
          {
            "type": "category",
            "label": "快速入门",
            "collapsed": true,
            "collapsible": true,
            "items": [
              "1_1_Serdes_Camera/GMSL_Camera/Getting_Started/Hardware_Checking",
              "1_1_Serdes_Camera/GMSL_Camera/Getting_Started/Installation_Instruction",
              "1_1_Serdes_Camera/GMSL_Camera/Getting_Started/Employing_Camera",
              "1_1_Serdes_Camera/GMSL_Camera/Getting_Started/Camera_Triggering_and_Synchronization",
              "1_1_Serdes_Camera/GMSL_Camera/Getting_Started/Camera_Intrinsic_Parameters"
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "FPDLINK 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_1_Serdes_Camera/FPDLINK_Camera/Camera_Selection",
          "1_1_Serdes_Camera/FPDLINK_Camera/List_of_Platform_Compatible_with_Camera",
          "1_1_Serdes_Camera/FPDLINK_Camera/Getting_Camera_Information",
          {
            "type": "category",
            "label": "快速入门",
            "collapsed": true,
            "collapsible": true,
            "items": [
              "1_1_Serdes_Camera/FPDLINK_Camera/Getting_Started/Installation_Instruction",
              "1_1_Serdes_Camera/FPDLINK_Camera/Getting_Started/Employing_Camera",
              "1_1_Serdes_Camera/FPDLINK_Camera/Getting_Started/Camera_Triggering_and_Synchronization"
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "MIPI CSI-2 摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "1_2_MIPI_CSI-2_Camera/SG2-IMX662C-MIPI",
      "1_2_MIPI_CSI-2_Camera/SG3-ISX031C-MIPI",
      "1_2_MIPI_CSI-2_Camera/SG8-IMX678C-MIPI",
      "1_2_MIPI_CSI-2_Camera/SG12-IMX577C-MIPI",
      "1_2_MIPI_CSI-2_Camera/SG20-IMX283C-MIPI"
    ],
    "link": {
      "type": "doc",
      "id": "1_2_MIPI_CSI-2_Camera/MIPI_CSI-2_Camera"
    }
  },
  {
    "type": "category",
    "label": "全局曝光摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "MIPI CSI-2 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_3_Global_Shutter_Camera/MIPI_CSI-2_Camera/SG3-IMX900C-MIPI"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "低延迟摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "GMSL 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_6_Low_Latency_Camera/GMSL_Camera/SH3-S11A60-G2A",
          "1_6_Low_Latency_Camera/GMSL_Camera/SH2-N1B60-G2A"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "事件相机",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "1_7_Event_Based_Camera/SE1-S4-USB",
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_7_Event_Based_Camera/Getting_Started/NVIDIA_Jetson_Platform_Integration",
          "1_7_Event_Based_Camera/Getting_Started/Window_System_Integration",
          "1_7_Event_Based_Camera/Getting_Started/Ubuntu_System_Integration"
        ]
      },
      "1_7_Event_Based_Camera/Application",
      "1_7_Event_Based_Camera/FAQ"
    ]
  },
  {
    "type": "category",
    "label": "夜视摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "Starvis 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_9_Night_Vision_Camera/Starvis_Camera/SN2M4EFGD",
          "1_9_Night_Vision_Camera/Starvis_Camera/Application"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "座舱摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "OMS 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_11_Cockpit_Camera/OMS_Camera/OMSBDAAN",
          "1_11_Cockpit_Camera/OMS_Camera/Application"
        ]
      },
      {
        "type": "category",
        "label": "DMS 摄像头",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "1_11_Cockpit_Camera/DMS_Camera/DMSBBFAN",
          "1_11_Cockpit_Camera/DMS_Camera/Application"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "自动除雾摄像头",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "1_12_Automatic_Defogging_Camera/RedFox-D3Gx",
      "1_12_Automatic_Defogging_Camera/RedFox-D3Gx_Application"
    ]
  },
  "intro",
  {
    "type": "category",
    "label": "NVIDIA® Jetson™",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          {
            "type": "category",
            "label": "NVIDIA Jetson AGX Orin",
            "collapsed": true,
            "collapsible": true,
            "items": [
              {
                "type": "category",
                "label": "快速入门",
                "collapsed": true,
                "collapsible": true,
                "items": [
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-AGON-G2Y-A1",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG10A-AGON-G2M-A1",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/GMSL_adapter_board/SG8A-ORIN-GMSL2"
                ]
              },
              {
                "type": "category",
                "label": "快速入门",
                "collapsed": true,
                "collapsible": true,
                "items": [
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_AGX_Orin/AI_Box/congratulations"
                ]
              }
            ]
          },
          {
            "type": "category",
            "label": "NVIDIA Jetson Orin Nano&NX",
            "collapsed": true,
            "collapsible": true,
            "items": [
              {
                "type": "category",
                "label": "GMSL 转接板",
                "collapsed": true,
                "collapsible": true,
                "items": [
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/Adapter_Board/SG4A-NONX-G2Y-A1"
                ]
              },
              {
                "type": "category",
                "label": "MIPI 摄像头",
                "collapsed": true,
                "collapsible": true,
                "items": [
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/MIPI_Camera/SG2-IMX662C-MIPI",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/MIPI_Camera/SG3-ISX031C-MIPI",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/MIPI_Camera/SG8-IMX678C-MIPI",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/MIPI_Camera/SG12-IMX577C-MIPI",
                  "2_1_NVIDIA_Jetson/Getting_Started/NVIDIA_Jetson_Orin_Nano_NX/MIPI_Camera/SG20-IMX283C-MIPI"
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_1_NVIDIA_Jetson/Application/How toBuild 8 - 12 - cam computing for robot proto"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_1_NVIDIA_Jetson/FAQ/FAQ_jetson"
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "2_1_NVIDIA_Jetson/NVIDIA_Jetson"
    }
  },
  {
    "type": "category",
    "label": "NVIDIA® DRIVE AGX Orin",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_2_NVIDIA_Drive_AGX_Orin/Getting_Started/GMSL2_Camera_YUV_for_Developer_Kit",
          "2_2_NVIDIA_Drive_AGX_Orin/Getting_Started/GMSL2_Camera_RAW_for_Developer_Kit"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_2_NVIDIA_Drive_AGX_Orin/Application/congratulations"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_2_NVIDIA_Drive_AGX_Orin/FAQ/congratulations"
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "2_2_NVIDIA_Drive_AGX_Orin/NVIDIA_Drive_AGX_Orin"
    }
  },
  {
    "type": "category",
    "label": "NVIDIA® Jetson™ AGX Thor",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_4_NVIDIA_Jetson_AGX_Thor/Getting_Started/TRD1_G2A",
          "2_4_NVIDIA_Jetson_AGX_Thor/Getting_Started/TRD1_G3A",
          "2_4_NVIDIA_Jetson_AGX_Thor/Getting_Started/TRD1_F4B"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_4_NVIDIA_Jetson_AGX_Thor/Application/congratulations"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_4_NVIDIA_Jetson_AGX_Thor/FAQ/congratulations"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "NVIDIA® Holoscan Sensor Bridge",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_5_NVIDIA_Holoscan_Sensor_Bridge/Getting_Started/HSBKITxM"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_5_NVIDIA_Holoscan_Sensor_Bridge/Application/congratulations"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_5_NVIDIA_Holoscan_Sensor_Bridge/FAQ/congratulations"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "Qualcomm 平台",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "Getting Started",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_3_Qualcomm_Platform/Getting_Started/RB3_Gen2_Getting_Started",
          "2_3_Qualcomm_Platform/Getting_Started/RB8_Core_Getting_Started"
        ]
      },
      {
        "type": "category",
        "label": "应用（即将推出）",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_3_Qualcomm_Platform/Application/model-optimization",
          "2_3_Qualcomm_Platform/Application/vision-algorithm-acceleration",
          "2_3_Qualcomm_Platform/Application/performance-benchmarking"
        ]
      },
      {
        "type": "category",
        "label": "常见问题（即将推出）",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "2_3_Qualcomm_Platform/FAQ/installation-issues"
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "2_3_Qualcomm_Platform/Qualcomm_Platform"
    }
  },
  "3_0_Data_collection_and_Playback",
  {
    "type": "category",
    "label": "CoaxCapture II",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_1_GMSL2_3_Camera_Grabber/Getting_Started/Product_Selection_Guide",
          "3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8H",
          "3_1_GMSL2_3_Camera_Grabber/Getting_Started/CCG3-8M"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_1_GMSL2_3_Camera_Grabber/Application/CCG3-8H_Application",
          "3_1_GMSL2_3_Camera_Grabber/Application/CCG3-8M_Application"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_1_GMSL2_3_Camera_Grabber/FAQ/FAQ_CCG3-8H",
          "3_1_GMSL2_3_Camera_Grabber/FAQ/FAQ_CCG3-8M"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "GMSL 视频注入卡",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_4_GMSL_Video_Injection_Card/Getting_Started/Product_Selection_Guide",
          "3_4_GMSL_Video_Injection_Card/Getting_Started/CIG4-8H"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_4_GMSL_Video_Injection_Card/Application/CIG4-8H_Application"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_4_GMSL_Video_Injection_Card/FAQ/FAQ_Video_Injection_Card"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "GMSL2 摄像头中继器",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "3_2_GMSL2_Camera_Repeater/GMSL2_Camera_Repeater",
      "3_2_GMSL2_Camera_Repeater/Application",
      "3_2_GMSL2_Camera_Repeater/FAQ"
    ]
  },
  {
    "type": "category",
    "label": "GMSL2 摄像头分流器",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "3_3_GMSL2_Camera_Splitter/GMSL2_Camera_Splitter",
      "3_3_GMSL2_Camera_Splitter/Application",
      "3_3_GMSL2_Camera_Splitter/FAQ"
    ]
  },
  {
    "type": "category",
    "label": "PANDA",
    "collapsed": true,
    "collapsible": true,
    "items": [
      {
        "type": "category",
        "label": "快速入门",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_5_PANDA/Getting_Started/PANDA"
        ]
      },
      {
        "type": "category",
        "label": "应用",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_5_PANDA/Application/PANDA_Application"
        ]
      },
      {
        "type": "category",
        "label": "常见问题",
        "collapsed": true,
        "collapsible": true,
        "items": [
          "3_5_PANDA/FAQ/FAQ_PANDA"
        ]
      }
    ]
  },
  "5_0_Vision_Core_SDK",
  {
    "type": "category",
    "label": "sDepth",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "5_1_sDepth/sDepth"
    ]
  },
  {
    "type": "category",
    "label": "sgMIX",
    "collapsed": true,
    "collapsible": true,
    "items": [
      "5_2_sgMIX/sgMIX"
    ]
  },
  "4_0_Resources"
]
};

export default sidebars;
