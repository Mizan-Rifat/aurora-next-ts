import { Divider, Link, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Divider />
      <Stack
        sx={{
          height: { sm: 56 },
          // py: { xs: 1, sm: 2.75 },
          py: 1,
          px: 5,
          textAlign: { xs: 'center', sm: 'left' }
        }}
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'center', sm: 'space-between' }}
        alignItems="center"
      >
        <Typography
          variant="caption"
          lineHeight={1.6}
          component="p"
          fontWeight="light"
          color="grey.700"
        >
          Thank you for creating with
          <Typography variant="caption" fontWeight="bold" sx={{ mx: 0.5 }}>
            Aurora
          </Typography>
          | 2024 ©
          <Link
            href="https://themewagon.com/"
            target="_blank"
            sx={{ textDecoration: 'none', mx: 0.5 }}
          >
            Themewagon
          </Link>
        </Typography>

        <Typography variant="caption" component="p" fontWeight="light" color="text.secondary">
          v0.0.0
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
