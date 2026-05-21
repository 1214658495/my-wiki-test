import React from 'react';
import {Redirect} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const isZh = i18n?.currentLocale === 'zh-Hans';

  return <Redirect to={isZh ? '/zh-Hans/docs/home' : '/docs/home'} />;
}
