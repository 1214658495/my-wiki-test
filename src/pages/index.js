import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect } from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackgroundOverlay} />
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroTextContent}>
              <Heading as="h1" className={styles.heroTitle}>
                {siteConfig.title}
              </Heading>
              <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
              <div className={styles.heroButtons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/1_0_Camera">
                  Get Started
                </Link>
                <Link
                  className={clsx('button button--outline button--lg', styles.secondaryButton)}
                  to="https://github.com/SENSING-Technology">
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img 
                src={require('@site/static/img/SENSING_logo_Homepage.png').default} 
                alt="SENSING Wiki" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  // 在组件挂载时立即预加载背景图片
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/img/SENSING_Homepage_bg.png';
    link.as = 'image';
    document.head.appendChild(link);

    // 同时使用 Image 对象预加载
    const img = new Image();
    img.src = '/img/SENSING_Homepage_bg.png';

    return () => {
      // 清理
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="SENSING Wiki - Professional documentation and knowledge base">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
