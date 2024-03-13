import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import illustration6 from 'assets/illustrations/6.webp';
import illustration7 from 'assets/illustrations/7.webp';
import Image from 'components/base/Image';

const ComingSoon = () => {
  return (
    <Grid container height={1}>
      <Grid item xs={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Stack direction="column" sx={{ height: 1 }}>
          <Paper sx={{ flex: 2 }} />
          <Paper background={1} sx={{ flex: 1 }} />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: {
              xs: 'auto max-content 100px max-content',
              md: 'max-content auto 144px 80px',
              xl: 'max-content auto 144px 144px'
            },
            height: 1
          }}
        >
          <Paper
            sx={{
              gridColumn: 'span 2',
              gridRow: 'span 1',
              py: { xs: 3, xl: 6 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography fontWeight="light" variant="h1" fontSize={{ xs: 42, lg: 56 }}>
              Coming Soon!
            </Typography>
          </Paper>

          <Paper sx={{ gridColumn: '1/2', gridRow: '2/4' }} />
          <Paper sx={{ gridColumn: '2/3', gridRow: '2/3' }} />
          <Paper sx={{ gridColumn: '1/2', gridRow: '4/5' }} />
          <Paper
            sx={{
              gridColumn: '2/3',
              gridRow: '3/5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3
            }}
          >
            <Image
              src={illustration7}
              alt="coming-soon"
              priority
              sx={{ maxHeight: '100%', width: 'auto' }}
            />
          </Paper>
          <Box sx={{ gridColumn: '1/3', gridRow: '2/4', p: 5, textAlign: 'center' }}>
            <Image
              src={illustration6}
              alt="coming-soon"
              priority
              sx={{ maxHeight: { sm: 370, md: 330, xl: 400 }, maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Stack direction="column" sx={{ height: 1 }}>
          <Paper sx={{ flex: 1 }} />
          <Paper background={5} sx={{ flex: 1 }} />
          <Paper sx={{ flex: 1 }} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ComingSoon;
