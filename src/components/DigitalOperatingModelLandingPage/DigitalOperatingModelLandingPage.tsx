import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Container from '../Container';

const DigitalOperatingModelLandingPage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box
      position={'relative'}
      sx={{
        backgroundImage:
          'url("https://assets.greycell.com/images/homepage.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:after': {
          position: 'absolute',
          content: '" "',
          width: '100%',
          height: '100%',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1,
          background: '#161c2d',
          opacity: 0.001,
        },
      }}
    >
      <Container
        data-aos={'fade-up'}
        zIndex={3}
        position={'relative'}
        minHeight={{ xs: 300, sm: 400, md: 900 }}
        maxHeight={600}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              align={'center'}
              sx={{
                fontWeight: 100,
                color: theme.palette.common.white,
              }}
            >
              Confidential Proprietary Deal Flow Specialist <br /> for the Financial and Fintech Sectors
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              align={'center'}
              sx={{
                color: theme.palette.common.white,
              }}
            >
                As an intermediary with deep industry relationships, I focus on relationship-based deal sourcing. <br /> Providing synergistic off-market opportunities and deal origination services. Through the application of <br /> highly curated sourcing mandates, I develop M&A pipelines and provide a steady stream of potential targets. <br /> Which include but are not limited to traditional community banks, specialized financial services firms and <br /> innovative cutting-edge AI driven disrupters. All within a confidential deal exploration framework. 
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalOperatingModelLandingPage;
