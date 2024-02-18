import './App.css'
import { Box, CssVarsProvider } from '@mui/joy';
import { CssBaseline } from '@mui/material';
// import HeroLeft01 from './blocks/HeroLeft01';
import defualtTheme from './theme';

import '@fontsource/inter';
import { Navigation } from '@mui/icons-material';
import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import HeroLeft01 from './blocks/HeroLeft01';


function App() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <CssVarsProvider disableTransitionOnChange theme={defualtTheme}>
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
          <Box
            sx={{
              height: '100vh',
            }}
          >
            <HeroLeft01 />
          </Box>
        </Layout.Main>
      </Layout.Root>
    </CssVarsProvider>
  );
}

export default App
