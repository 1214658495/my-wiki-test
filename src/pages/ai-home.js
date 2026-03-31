import React from 'react';
import Layout from '@theme/Layout';
import AIHomePanel from '@site/src/components/AIHomePanel';

export default function AIHomePage() {
  return (
    <Layout title="AI" description="SENSING Wiki AI Home">
      <main
        style={{
          minHeight: 'calc(100vh - var(--ifm-navbar-height))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          background: 'linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%)',
        }}>
        <section
          style={{
            width: '100%',
            maxWidth: 900,
            textAlign: 'center',
          }}>
          <AIHomePanel />
        </section>
      </main>
    </Layout>
  );
}
