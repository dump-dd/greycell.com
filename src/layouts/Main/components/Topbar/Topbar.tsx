import React from 'react';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';


interface Props {
  colorInvert?: boolean;
}

const Topbar = ({ colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Greycell"
        width={{ xs: 100, md: 50 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.greycell.com/images/Greycell.png'
              : 'https://assets.greycell.com/images/Greycell.png'
          }
          height={1}
          width={1}
        />
      </Box>
    </Box>
  );
};

export default Topbar;