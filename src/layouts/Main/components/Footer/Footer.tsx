import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing(1), // Adjust padding for spacing
        minHeight: '1px', // Set a minimum height for the footer
        backgroundColor: mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[900], 
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        &copy; Greycell. 2025. All Rights Reserved. 8 The Green STE A, Dover, DE 19901 United States. E: nelson@greycell.com P: 703-844-0818
      </Typography>
    </Box>
  );
};

export default Footer;