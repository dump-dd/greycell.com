import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '../src/layouts/Main';
import Container from '../src/components/Container';
import {
    DigitalOperatingModelLandingPage
} from '../src/components';


const DigitalOperatingModel = (): JSX.Element => {
    return (
        <Main>
            <DigitalOperatingModelLandingPage />
        </Main>
    );
};

export default DigitalOperatingModel;
