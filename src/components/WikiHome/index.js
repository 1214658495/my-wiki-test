import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const PAGE_CONTENT = {
  en: {
    heroEyebrow: 'Product documentation and technical support',
    heroTitle: 'SENSING WIKI',
    heroSubtitle:
      'Find product categories, platform bring-up guides, SDK workflows, downloads, and troubleshooting paths for SENSING vision systems.',
    primaryCta: 'Download Product Resources',
    secondaryCta: 'Ask Wiki AI',
    sections: {
      products: 'Main product categories',
      productsIntro:
        'Start from the product family that matches your project, then move into getting started, application, FAQ, and download pages.',
    },
    products: [
      {
        title: 'Robotics Cameras',
        path: '/docs/6_0_Robotics',
        summary:
          'Stereo and monocular camera families for embodied AI, humanoid robots, legged robots, and robotic perception.',
        tags: ['Astra S56 / S36', 'Monocular robot cameras', 'Robotic vision solutions'],
      },
      {
        title: 'Camera Technologies',
        path: '/docs/1_0_Camera',
        summary:
          'SerDes, MIPI CSI-2, global exposure, low latency, event-based, night vision, cockpit, and defogging camera documentation.',
        tags: ['GMSL / FPD-Link', 'MIPI CSI-2', 'Specialized sensors'],
      },
      {
        title: 'Embedded Vision Platforms',
        path: '/docs/intro',
        summary:
          'Platform integration guides for NVIDIA Jetson, NVIDIA DRIVE AGX Orin, Qualcomm, and Holoscan Sensor Bridge workflows.',
        tags: ['Jetson bring-up', 'DRIVE AGX', 'Qualcomm platform'],
      },
      {
        title: 'Data Collection & Simulation',
        path: '/docs/3_0_Data_collection_and_Playback',
        summary:
          'Camera grabbers, repeaters, splitters, video injection, and PANDA tools for capture, distribution, playback, and validation.',
        tags: ['Camera grabber', 'Video injection', 'Signal distribution'],
      },
      {
        title: 'VisionCore SDK',
        path: '/docs/5_0_Vision_Core_SDK',
        summary:
          'sDepth and sgMIX documentation for camera control, acquisition, calibration, ISP tuning, and stereo depth output.',
        tags: ['sDepth', 'sgMIX', 'Calibration and ISP'],
      },
      {
        title: 'Product Resources',
        path: '/docs/4_0_Resources',
        summary:
          'Search product models and serial numbers to retrieve datasheets, 3D models, initialization scripts, image samples, and calibration files.',
        tags: ['Datasheets', '3D models', 'Calibration files'],
      },
    ],
  },
  'zh-Hans': {
    heroEyebrow: '产品文档与技术支持入口',
    heroTitle: 'SENSING WIKI',
    heroSubtitle:
      '从这里进入 SENSING 视觉系统的产品品类、平台适配、视觉核心SDK、资源下载和问题排查文档。',
    primaryCta: '下载产品资源',
    secondaryCta: '询问 Wiki AI',
    sections: {
      products: '主要产品品类',
      productsIntro:
        '先从项目对应的产品族进入，再继续查看 Getting Started、Application、FAQ 和下载资源页面。',
    },
    products: [
      {
        title: '机器人相机',
        path: '/docs/6_0_Robotics',
        summary:
          '面向具身智能、人形机器人、足式机器人和机器人感知的双目与单目相机产品文档。',
        tags: ['Astra S56 / S36', '机器人单目相机', '机器人视觉方案'],
      },
      {
        title: '相机技术',
        path: '/docs/1_0_Camera',
        summary:
          '覆盖 SerDes、MIPI CSI-2、全局曝光、低延迟、事件相机、夜视、舱内相机和自动除雾相机。',
        tags: ['GMSL / FPD-Link', 'MIPI CSI-2', '专项传感器'],
      },
      {
        title: '嵌入式视觉平台',
        path: '/docs/intro',
        summary:
          '进入 NVIDIA Jetson、NVIDIA DRIVE AGX Orin、Qualcomm 和 Holoscan Sensor Bridge 等平台适配文档。',
        tags: ['Jetson Bring-up', 'DRIVE AGX', 'Qualcomm 平台'],
      },
      {
        title: '数据采集与仿真',
        path: '/docs/3_0_Data_collection_and_Playback',
        summary:
          '相机采集卡、Repeater、Splitter、视频注入卡和 PANDA 工具的采集、分发、回放和验证文档。',
        tags: ['相机采集卡', '视频注入', '信号分发'],
      },
      {
        title: 'VisionCore SDK',
        path: '/docs/5_0_Vision_Core_SDK',
        summary:
          'sDepth 与 sgMIX 文档，覆盖相机控制、图像采集、标定、ISP 调试和双目深度输出。',
        tags: ['sDepth', 'sgMIX', '标定与 ISP'],
      },
      {
        title: '下载与资源',
        path: '/docs/4_0_Resources',
        summary:
          '按产品型号或 SN 查询 Datasheet、3D 模型、初始化脚本、图像样张和专属标定文件。',
        tags: ['Datasheet', '3D 模型', '标定文件'],
      },
    ],
  },
};

function getContent(locale) {
  return PAGE_CONTENT[locale] || PAGE_CONTENT.en;
}

export default function WikiHome() {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n?.currentLocale || 'en';
  const content = getContent(currentLocale);
  const isZh = currentLocale === 'zh-Hans';
  const docLink = (path) => (isZh ? `/zh-Hans${path}` : path);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroShade} />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{content.heroEyebrow}</p>
          <h1>{content.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to={docLink('/docs/4_0_Resources')}>
              {content.primaryCta}
            </Link>
            <Link className={styles.secondaryButton} to={docLink('/docs/ai')}>
              {content.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>{content.sections.products}</h2>
          <p>{content.sections.productsIntro}</p>
        </div>
        <div className={styles.productGrid}>
          {content.products.map((item) => (
            <Link className={styles.productCard} to={docLink(item.path)} key={item.title}>
              <article>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
