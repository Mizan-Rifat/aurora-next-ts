import { Box, Stack, StackOwnProps } from '@mui/material';
import Lottie from 'lottie-react';
import loader from 'assets/json/loader.json';

const PageLoader = (props: StackOwnProps) => {
  return (
    <Stack alignItems="center" justifyContent="center" height={1} {...props}>
      <Box height={'25vw'} width={'25vw'}>
        <Lottie animationData={loader} />
      </Box>
    </Stack>
  );
};

export default PageLoader;
