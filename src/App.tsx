import './App.css'

import '@fontsource/inter';
import { Navigation } from '@mui/icons-material';
import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import defualtTheme from './theme';
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/material/CssBaseline';

const materialTheme = materialExtendTheme();

function App() {

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider
        theme={defualtTheme}
      >
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
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider >


  );
}

export default App
