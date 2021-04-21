import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MDXProvider } from '@mdx-js/tag';
import './markdown.css';
import React, { memo } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const Content = lazy(() => importMDX('./Content.mdx'));

const App = () => (
  <>
    <CssBaseline />
    <MDXProvider components={{CardHeader, Card, CardContent}}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    </MDXProvider>
  </>
);

export default App;