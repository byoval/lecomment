import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="shell" aria-labelledby="site-title">
      <section className="panel">
        <p className="eyebrow">LE'COMMENT</p>
        <h1 id="site-title">Commentary, ready for the web.</h1>
        <p className="lede">
          The application shell is configured for Netlify with Vite, React, and
          TypeScript.
        </p>
      </section>
    </main>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
