import { Box, Paper, Stack, Typography } from '@mui/material';
import { brandColorMap, shares } from 'data/e-commerce/marketShare';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import MarketShareList from './MarketShareList';
import MarketShareChart from './MarketShareChart';

const MarketShare = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, height: '100%' }} background={1}>
      <SectionHeader
        title="Market Share"
        subTitle="Amount of revenue in one month"
        actionComponent={<DashboardMenu />}
      />

      <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} gap={4} alignItems="center">
        <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <Box sx={{ width: 'fit-content', position: 'relative' }}>
            <MarketShareChart
              data={shares}
              bgColorMap={brandColorMap}
              sx={{ height: '230px !important', width: '230px' }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
              }}
            >
              <Typography variant="h3" sx={{ mb: 1 }}>
                $6,322.32
              </Typography>
              <Typography variant="subtitle2" align="center" fontWeight="regular">
                Total transactions
              </Typography>
            </Box>
          </Box>
        </Box>

        <MarketShareList shares={shares} bgColorMap={brandColorMap} />
      </Stack>
    </Paper>
  );
};

export default MarketShare;
