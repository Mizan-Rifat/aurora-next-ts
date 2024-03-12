import { Box, Stack, StackOwnProps } from '@mui/material';
import splash from 'assets/json/splash-loader.json';
import Lottie from 'lottie-react';

const Splash = (props: StackOwnProps) => {
  return (
    <Stack alignItems="center" justifyContent="center" height="100vh" {...props}>
      <Box height={50} width={50}>
        <Lottie animationData={splash} />
      </Box>
    </Stack>
  );
};

export default Splash;
