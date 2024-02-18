import './App.css'
import { CssVarsProvider } from '@mui/joy';
import { CssBaseline } from '@mui/material';
import defualtTheme from './theme';

import '@fontsource/inter';
import { Navigation } from '@mui/icons-material';
import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';


function App() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <CssVarsProvider defaultColorScheme={'dark'} disableTransitionOnChange theme={defualtTheme}>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Main>

          <RouterProvider router={router} />
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}

export default App
