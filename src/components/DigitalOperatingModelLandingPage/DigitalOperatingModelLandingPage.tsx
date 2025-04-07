import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { signIn } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getCurrentUser } from 'aws-amplify/auth';

// Amplify configuration
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "us-east-1_Basdm0H5E",
      userPoolClientId: "2rhkd8jll6e63f2aijec2gslb5",
      identityPoolId: "76b331e8-c46b-409d-8f56-40f119740c2d",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
});

const DigitalOperatingModelLandingPage = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const { username, password } = formData;
      const { isSignedIn, nextStep } = await signIn({
        username,
        password,
      });

      if (isSignedIn) {
        console.log('Successfully signed in');
        const { username, userId, signInDetails } = await getCurrentUser();

        console.log("username", username);
        console.log("user id", userId);
        console.log("sign-in details", signInDetails);      
      
        if (username.startsWith('potential-102')) { // 201
          window.location.href = 'https://www.pipeline1.greycell.com/';
        } else if (username.startsWith('potential-213')) { // 312
          window.location.href = 'https://www.pipeline2.greycell.com/';
        } else if (username.startsWith('potential-324')) { // 423
          window.location.href = 'https://www.pipeline3.greycell.com/';
        } else if (username.startsWith('potential-435')) { // 534
          window.location.href = 'https://www.pipeline4.greycell.com/';
        } else if (username.startsWith('potential-546')) { // 645
          window.location.href = 'https://www.pipeline5.greycell.com/';
        } else if (username.startsWith('potential-657')) { // 756
          window.location.href = 'https://www.pipeline6.greycell.com/';
        } else if (username.startsWith('potential-768')) { // 867
          window.location.href = 'https://www.pipeline7.greycell.com/';
        } else if (username.startsWith('potential-879')) { // 978
          window.location.href = 'https://www.pipeline8.greycell.com/';
        } else if (username.startsWith('potential-980')) { // 089
          window.location.href = 'https://www.pipeline9.greycell.com/';
        } else if (username.startsWith('potential-101')) { // 101
          window.location.href = 'https://www.pipeline10.greycell.com/';
        } else if (username.startsWith('potential-112')) { // 211
          window.location.href = 'https://www.pipeline11.greycell.com/';
        } else if (username.startsWith('potential-123')) { // 321
          window.location.href = 'https://www.pipeline12.greycell.com/';
        } else if (username.startsWith('potential-144')) { // 441
          window.location.href = 'https://www.pipeline14.greycell.com/';
        } else if (username.startsWith('potential-155')) { // 551
          window.location.href = 'https://www.pipeline15.greycell.com/';
        } else if (username.startsWith('potential-166')) { // 661
          window.location.href = 'https://www.pipeline16.greycell.com/';
        } else if (username.startsWith('potential-177')) { // 771
          window.location.href = 'https://www.pipeline17.greycell.com/';
        } else if (username.startsWith('potential-188')) { // 881
          window.location.href = 'https://www.pipeline18.greycell.com/';
        } else if (username.startsWith('potential-199')) { // 991
          window.location.href = 'https://www.pipeline19.greycell.com/';
        } else if (username.startsWith('potential-200')) { // 002
          window.location.href = 'https://www.pipeline20.greycell.com/';
        } else if (username.startsWith('potential-211')) { // 112
          window.location.href = 'https://www.pipeline21.greycell.com/';
        } else if (username.startsWith('potential-222')) { // 222
          window.location.href = 'https://www.pipeline22.greycell.com/';
        } else if (username.startsWith('potential-233')) { // 332
          window.location.href = 'https://www.pipeline23.greycell.com/';
        } else if (username.startsWith('potential-244')) { // 442
          window.location.href = 'https://www.pipeline24.greycell.com/';
        } else if (username.startsWith('potential-255')) { // 552
          window.location.href = 'https://www.pipeline25.greycell.com/';
        } else if (username.startsWith('potential-266')) { // 662
          window.location.href = 'https://www.pipeline26.greycell.com/';
        } else if (username.startsWith('potential-277')) { // 772
          window.location.href = 'https://www.pipeline27.greycell.com/';
        } else if (username.startsWith('potential-288')) { // 882
          window.location.href = 'https://www.pipeline28.greycell.com/';
        } else if (username.startsWith('potential-299')) { // 992
          window.location.href = 'https://www.pipeline29.greycell.com/';
        } else if (username.startsWith('potential-300')) { // 003
          window.location.href = 'https://www.pipeline30.greycell.com/';
        } else if (username.startsWith('potential-311')) { // 113
          window.location.href = 'https://www.pipeline31.greycell.com/';
        } else {
          window.location.href = `/users/${username}`; // Regular user dashboard
        }
      } else {
        console.log('Additional steps required:', nextStep);
        // Handle additional authentication steps if needed
      }
      } catch (error) {
        console.error('Error signing in:', error);
        setError('Invalid username or password');
      }
      };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', // Prevent scrollbars if content overflows
        position: 'relative', // Ensure the content is positioned relative to the background
      }}
    >
      {/* Full-page background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url("https://assets.greycell.com/images/homepage.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1, // Place the background behind the content
        }}
      />

      {/* Topbar */}
      <AppBar
        position="sticky" // Ensure the AppBar remains visible when scrolling
        sx={{
          width: '100vw', // Ensure the AppBar spans the full width
          backgroundColor: theme.palette.mode === 'light' 
            ? theme.palette.grey[200] 
            : theme.palette.grey[900], // Match the footer's background color
          boxShadow: theme.shadows[4], // Add shadow for better visibility
          zIndex: 3, // Ensure the AppBar is above the background and content
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="Greycell"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Box
              component={'img'}
              src="https://assets.greycell.com/images/Greycell.png"
              alt="Greycell"
              sx={{
                height: 40,
              }}
            />
          </Box>

          {/* Login Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <TextField
              size="small"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              error={!!error}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
              }}
            />
            <TextField
              size="small"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              error={!!error}
              sx={{
                backgroundColor: 'rgba(11, 11, 11, 0.9)',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgb(128, 131, 230)',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Centered Content */}
      <Box
        data-aos={'fade-up'}
        zIndex={3}
        position={'relative'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 2, // Ensure the content is above the background
        }}
      >
        <Box
          sx={{
            width: '100%',
            textAlign: 'center', // Center the text content
          }}
        >
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              align={'center'}
              sx={{
                fontWeight: 100,
                color: theme.palette.common.white,
              }}
            >
              Confidential Proprietary Deal Flow Specialist <br />
              for the Financial and Fintech Sectors
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
              As an intermediary with deep industry relationships, I focus on relationship-based deal sourcing. <br />
              Providing synergistic off-market opportunities and deal origination services. Through the application of <br />
              highly curated sourcing mandates, I develop M&A pipelines and provide a steady stream of potential targets. <br />
              Which include but are not limited to traditional community banks, specialized financial services firms and <br />
              innovative cutting-edge AI driven disrupters. All within a confidential deal exploration framework.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DigitalOperatingModelLandingPage;