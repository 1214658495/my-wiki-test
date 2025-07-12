import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';

// 简约现代的SVG图标
const CameraSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="65" width="120" height="90" rx="8" fill="#E3F2FD" />
    <circle cx="100" cy="110" r="30" fill="#BBDEFB" />
    <circle cx="100" cy="110" r="20" fill="#2196F3" />
    <circle cx="100" cy="110" r="10" fill="#0D47A1" />
    <rect x="45" y="50" width="110" height="20" rx="4" fill="#2196F3" />
    <circle cx="140" cy="78" r="6" fill="#0D47A1" />
  </svg>
);

const PlatformSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="40" height="40" rx="4" fill="#C8E6C9" />
    <rect x="110" y="50" width="40" height="40" rx="4" fill="#C8E6C9" />
    <rect x="50" y="110" width="40" height="40" rx="4" fill="#C8E6C9" />
    <rect x="110" y="110" width="40" height="40" rx="4" fill="#C8E6C9" />
    <path d="M90 70H110" stroke="#388E3C" strokeWidth="4" />
    <path d="M70 90V110" stroke="#388E3C" strokeWidth="4" />
    <path d="M130 90V110" stroke="#388E3C" strokeWidth="4" />
    <path d="M90 130H110" stroke="#388E3C" strokeWidth="4" />
    <circle cx="70" cy="70" r="10" fill="#4CAF50" />
    <circle cx="130" cy="70" r="10" fill="#4CAF50" />
    <circle cx="70" cy="130" r="10" fill="#4CAF50" />
    <circle cx="130" cy="130" r="10" fill="#4CAF50" />
  </svg>
);

const DataSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 150V60C50 55.5817 53.5817 52 58 52H150V150H58C53.5817 150 50 146.418 50 142V142" stroke="#9C27B0" strokeWidth="4" />
    <path d="M60 120H150" stroke="#9C27B0" strokeWidth="4" />
    <path d="M60 90H150" stroke="#9C27B0" strokeWidth="4" />
    <circle cx="85" cy="75" r="10" fill="#E1BEE7" />
    <circle cx="85" cy="105" r="10" fill="#E1BEE7" />
    <circle cx="85" cy="135" r="10" fill="#E1BEE7" />
    <rect x="105" y="65" width="35" height="20" rx="4" fill="#CE93D8" />
    <rect x="105" y="95" width="35" height="20" rx="4" fill="#CE93D8" />
    <rect x="105" y="125" width="35" height="20" rx="4" fill="#CE93D8" />
  </svg>
);

const FeatureList = [
  {
    title: 'Advanced Camera Technologies',
    Svg: CameraSvg,
    description: (
      <>
        SENSING offers comprehensive solutions in cutting-edge camera technologies,
        including Global Shutter, Event-Based, Depth, Night Vision, and specialized 
        cameras for various industrial applications.
      </>
    ),
  },
  {
    title: 'Platform Integration',
    Svg: PlatformSvg,
    description: (
      <>
        Seamlessly integrate with leading platforms including NVIDIA Jetson, 
        NVIDIA Drive AGX Orin, and Qualcomm. Our solutions are designed for 
        optimal performance across embedded vision systems.
      </>
    ),
  },
  {
    title: 'Data Collection & Playback',
    Svg: DataSvg,
    description: (
      <>
        Enhance your projects with advanced data collection tools including 
        GMSL Camera Grabbers, Repeaters, and Splitters. Our ecosystem provides 
        comprehensive support for the entire vision pipeline.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureImageContainer}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.featuresTitle}>
          Key Features
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
