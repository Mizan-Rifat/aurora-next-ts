import { Paper, Stack } from '@mui/material';
import MonthlyProfitChart from './MonthlyProfitChart';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import EcomStatSection from 'components/sections/common/EcomStatSection';
import { monthlyProfitChartData } from 'data/e-commerce/dashboard';

const MonthlyProfit = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, flex: 1 }}>
      <Stack direction="column" rowGap={2} height="100%" justifyContent="space-between">
        <SectionHeader
          title="Monthly Net Profit"
          subTitle=" Total profit gained"
          actionComponent={<DashboardMenu />}
          sx={{ mb: 0 }}
        />
        <EcomStatSection
          amount={25049}
          increment={4.33}
          chart={
            <MonthlyProfitChart
              data={monthlyProfitChartData}
              sx={{ height: '100% !important', width: '50%' }}
            />
          }
        />
      </Stack>
    </Paper>
  );
};

export default MonthlyProfit;
