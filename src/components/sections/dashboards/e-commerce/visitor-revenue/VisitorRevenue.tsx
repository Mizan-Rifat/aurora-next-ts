import { Paper, Stack } from '@mui/material';
import VisitorRevenueChart from './VisitorRevenueChart';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import EcomStatSection from 'components/sections/common/EcomStatSection';
import { visitorRevenueChartData } from 'data/e-commerce/dashboard';

const VisitorRevenue = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, flex: 1 }}>
      <Stack direction="column" rowGap={2} height="100%" justifyContent="space-between">
        <SectionHeader
          title="Revenue per visitor"
          subTitle="Average income"
          actionComponent={<DashboardMenu />}
          sx={{ mb: 0 }}
        />

        <EcomStatSection
          amount={25049}
          increment={4.33}
          chart={
            <VisitorRevenueChart
              data={visitorRevenueChartData}
              sx={{ height: '100% !important', width: '50%' }}
            />
          }
        />
      </Stack>
    </Paper>
  );
};

export default VisitorRevenue;
