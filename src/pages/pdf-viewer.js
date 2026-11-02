import React, {useEffect, useRef, useState} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

// 站内 PDF 预览页: /pdf-viewer?file=datasheet/huojiaDatasheet/<name>.pdf
// OSS 默认域名对 PDF 强制 Content-Disposition: attachment, 浏览器无法直接预览,
// 因此这里通过 CORS 拉取文件, 用 pdf.js 在页面内渲染.
// 只接受 OSS bucket 内的相对路径, 不接受任意外部 URL.
const OSS_BASE = 'https://sgword-service.oss-cn-heyuan.aliyuncs.com/';

const TEXT = {
  en: {
    title: 'Datasheet Preview',
    loading: 'Loading PDF…',
    missing: 'No file specified.',
    invalid: 'Invalid file path.',
    failed: 'Failed to load the PDF. Please try downloading it instead.',
    download: 'Download PDF',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    pages: (n) => `${n} page${n > 1 ? 's' : ''}`,
  },
  'zh-Hans': {
    title: '规格书预览',
    loading: '正在加载 PDF…',
    missing: '未指定文件.',
    invalid: '文件路径无效.',
    failed: 'PDF 加载失败, 请尝试直接下载.',
    download: '下载 PDF',
    zoomIn: '放大',
    zoomOut: '缩小',
    pages: (n) => `共 ${n} 页`,
  },
};

function resolveFile(search) {
  const file = new URLSearchParams(search).get('file');
  if (!file) return {error: 'missing'};
  // 仅允许 bucket 内的 .pdf 相对路径
  if (!/^[\w\-./%]+\.pdf$/i.test(file) || file.includes('..') || file.startsWith('/')) {
    return {error: 'invalid'};
  }
  return {url: OSS_BASE + file, name: decodeURIComponent(file.split('/').pop())};
}

export default function PdfViewer() {
  const {i18n} = useDocusaurusContext();
  const t = TEXT[i18n.currentLocale] || TEXT.en;
  const location = useLocation();
  // SSR 阶段拿不到 query, 挂载后再解析, 避免 hydration 不一致
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const {url, name, error} = mounted ? resolveFile(location.search) : {};

  const containerRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [status, setStatus] = useState('loading');
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (error) setStatus(error);
  }, [error]);

  // 加载文档
  useEffect(() => {
    if (!url) return undefined;
    let cancelled = false;
    let task;
    setStatus('loading');
    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
          import.meta.url,
        ).toString();
        task = pdfjs.getDocument({url});
        const doc = await task.promise;
        if (!cancelled) {
          setPdf(doc);
          setStatus('ready');
        }
      } catch (e) {
        console.error('[pdf-viewer]', e);
        if (!cancelled) setStatus('failed');
      }
    })();
    return () => {
      cancelled = true;
      if (task) task.destroy();
    };
  }, [url]);

  // 渲染所有页面, 宽度适配容器
  useEffect(() => {
    const container = containerRef.current;
    if (!pdf || !container) return undefined;
    let cancelled = false;
    const renderTasks = [];

    const render = async () => {
      container.innerHTML = '';
      const width = container.clientWidth;
      const dpr = window.devicePixelRatio || 1;
      for (let i = 1; i <= pdf.numPages && !cancelled; i += 1) {
        const page = await pdf.getPage(i);
        if (cancelled) return;
        const base = page.getViewport({scale: 1});
        const scale = (width / base.width) * zoom;
        const viewport = page.getViewport({scale: scale * dpr});
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
        canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto 16px';
        canvas.style.boxShadow = '0 1px 6px rgba(0,0,0,0.2)';
        canvas.style.background = '#fff';
        container.appendChild(canvas);
        const rt = page.render({canvasContext: canvas.getContext('2d'), viewport});
        renderTasks.push(rt);
        try {
          await rt.promise;
        } catch (e) {
          if (!cancelled) console.error('[pdf-viewer]', e);
        }
      }
    };
    render();

    return () => {
      cancelled = true;
      renderTasks.forEach((rt) => rt.cancel());
    };
  }, [pdf, zoom]);

  const message =
    status === 'loading' ? t.loading :
    status === 'missing' ? t.missing :
    status === 'invalid' ? t.invalid :
    status === 'failed' ? t.failed : null;

  const btn = {
    padding: '4px 12px',
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: 6,
    background: 'var(--ifm-background-surface-color)',
    color: 'var(--ifm-font-color-base)',
    cursor: 'pointer',
  };

  return (
    <Layout title={name ? `${name} - ${t.title}` : t.title} noFooter>
      <main style={{maxWidth: 1000, margin: '0 auto', padding: '16px'}}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 8,
            marginBottom: 16,
          }}>
          <h1 style={{fontSize: '1.25rem', margin: 0, flex: '1 1 auto', wordBreak: 'break-all'}}>
            {name || t.title}
          </h1>
          {pdf && <span style={{opacity: 0.7}}>{t.pages(pdf.numPages)}</span>}
          {pdf && (
            <>
              <button type="button" style={btn} title={t.zoomOut} aria-label={t.zoomOut}
                onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)))}>−</button>
              <span style={{minWidth: 48, textAlign: 'center'}}>{Math.round(zoom * 100)}%</span>
              <button type="button" style={btn} title={t.zoomIn} aria-label={t.zoomIn}
                onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}>+</button>
            </>
          )}
          {url && (
            <a className="button button--primary button--sm" href={url} download>
              {t.download}
            </a>
          )}
        </div>
        {message && <p>{message}</p>}
        <div ref={containerRef} style={{overflowX: 'auto'}} />
      </main>
    </Layout>
  );
}
