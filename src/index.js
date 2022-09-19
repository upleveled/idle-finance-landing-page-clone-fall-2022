import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #081336;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
          font-size: 14px;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        h1 {
          font-size: 76px;
          line-height: 83px;
          font-weight: normal;
          margin: 0 0 24px;
        }

        h2 {
          font-size: 36px;
          line-height: 48px;
        }

        h3 {
          font-size: 28px;
          line-height: 44px;
        }

        h4 {
          font-size: 20px;
          line-height: 32px;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);
