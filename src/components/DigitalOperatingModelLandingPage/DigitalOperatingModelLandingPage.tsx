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
      userPoolId: "us-east-1_Ct47tGkRJ",
      userPoolClientId: "1f9t4vh1cv2qn5hhprhsopsn8i",
      identityPoolId: "us-east-1:608bdca2-c24a-4ff5-9cd8-2c55ea9b658d",
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
      
        if (username.startsWith('7488a448-2071-7017-a88b-0fd8a8d06ce2')) {
          window.location.href = 'https://www.google.com';
        } else if (username.startsWith('manager')) {
          window.location.href = 'https://www.bing.com';
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