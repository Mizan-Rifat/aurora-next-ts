import { PropsWithChildren } from 'react';
import { Box, Grid } from '@mui/material';
import log from 'assets/illustrations/log.webp';
import Logo from 'components/common/Logo';

const DefaultAuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid container sx={{ height: { md: '100vh' } }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          borderRight: { md: 1 },
          borderColor: { md: 'grey.300' },
        }}
      >
        <Box
          sx={{
            height: 1,
            backgroundImage: { md: `url(${log})` },
            backgroundSize: '80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            p: { xs: 3, sm: 5 },
          }}
        >
          <Logo />
        </Box>
      </Grid>
      <Grid item md={6} xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default DefaultAuthLayout;
