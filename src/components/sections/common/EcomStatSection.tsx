import { Box, Chip, Stack, Typography } from '@mui/material';
import { currencyFormat } from 'helpers/utils';
import { ReactElement } from 'react';

interface EcomStatSectionProps {
  amount: number;
  increment: number;
  chart: ReactElement;
}

const EcomStatSection = ({ amount, increment, chart }: EcomStatSectionProps) => {
  return (
    <Stack alignItems="end" justifyContent="space-between">
      <Box>
        <Typography
          sx={{ typography: { xs: 'h5', lg: 'h4', xl: 'h3' }, mb: 1 }}
          color="text.secondary"
        >
          {currencyFormat(amount)}
        </Typography>
        <Chip
          label={`${increment}%`}
          color="success"
          size="small"
          sx={{
            bgcolor: increment > 0 ? 'success.lighter' : 'warning.lighter',
            color: increment > 0 ? 'success.dark' : 'warning.dark',
          }}
        />
        <Typography
          variant="body2"
          whiteSpace="nowrap"
          color="text.secondary"
          ml={0.5}
          display="inline"
        >
          vs last month
        </Typography>
      </Box>
      {chart}
    </Stack>
  );
};

export default EcomStatSection;
