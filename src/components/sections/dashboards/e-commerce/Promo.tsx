import { Box, Paper, Stack, Typography } from '@mui/material';
import promo_bg from 'assets/illustrations/promo_bg.webp';
import promo_parachute from 'assets/illustrations/promo_parachute.webp';
import Image from 'components/base/Image';

interface PromoProps {
  title: string;
  subtitle: string;
}

const Promo = ({ title, subtitle }: PromoProps) => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, height: 1 }}>
      <Stack
        justifyContent="space-between"
        rowGap={2}
        direction="column"
        sx={{
          backgroundImage: `url(${promo_bg.src})`,
          backgroundSize: 'cover',
          borderRadius: 3,
          padding: 4,
          height: 1
        }}
      >
        <Box
          sx={{
            width: { xs: '9.2rem', lg: '11rem' }
          }}
        >
          <Image
            src={promo_parachute}
            priority
            alt="promo-img"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <div>
          <Typography variant="h5" color="success.dark" fontWeight={700} mb={0.5}>
            {title}
          </Typography>
          <Typography
            sx={{ typography: { xs: 'h3', lg: 'h2' } }}
            color="success.dark"
            fontWeight={800}
          >
            {subtitle}
          </Typography>
        </div>
      </Stack>
    </Paper>
  );
};

export default Promo;
