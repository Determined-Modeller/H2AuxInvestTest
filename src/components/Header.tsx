import * as React from 'react';
import { useColorScheme as useJoyColorScheme } from '@mui/joy/styles';
import { useColorScheme as useMaterialColorScheme } from '@mui/material/styles';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ProjectLogo2 from '../assets/ProjectLogo2.png';

import GitHubIcon from '@mui/icons-material/GitHub';

import TeamNav from './Navigation';
import ROUTE_CONSTANTS from '../routing/routeConstants';

function ColorSchemeToggle() {
  const { mode, setMode: setMaterialMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ alignSelf: 'center' }}
        onClick={() => {
          if (mode === 'light') {
            setMaterialMode('dark');
            setJoyMode('dark');
          } else {
            setMaterialMode('light');
            setJoyMode('light');
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <IconButton
          size="md"
          color="neutral"
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            borderRadius: '50%',
          }}
        >
          <img src={ProjectLogo2} height={'50px'} alt="" />
        </IconButton>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="https://www.calculateh2.org/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          H2AuxInvest
        </Button>

      </Stack>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
          <MenuRoundedIcon />
        </IconButton>
        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>H2AuxInvest</DialogTitle>
          <Box sx={{ px: 1 }}>
            <TeamNav />
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="https://www.gchydrogen.co.uk/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Green Cat Hydrogen
        </Button>
        <Tooltip title="Github" variant="outlined">
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href='https://github.com/bystran/H2AuxInvestTest/tree/master'
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Documentation" variant="outlined">
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href={ROUTE_CONSTANTS.DOCS}
            sx={{ alignSelf: 'center' }}
          >
            <BookRoundedIcon />
          </IconButton>
        </Tooltip>
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
