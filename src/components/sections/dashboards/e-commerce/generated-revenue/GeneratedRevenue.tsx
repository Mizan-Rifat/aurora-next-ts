import { MouseEvent, useCallback, useRef } from 'react';
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import GeneratedRevenueChart from './GeneratedRevenueChart';
import DashboardSelectMenu from 'components/common/DashboardSelectMenu';
import IconifyIcon from 'components/base/IconifyIcon';
import { generatedRevenueData } from 'data/e-commerce/dashboard';

const GeneratedRevenue = () => {
  const chartRef = useRef<null | EChartsReactCore>(null);

  const handleLegendToggle = useCallback(
    (event: MouseEvent<HTMLButtonElement>, name: string) => {
      chartRef.current?.getEchartsInstance().dispatchAction({
        type: 'legendToggleSelect',
        name,
      });
      (event.target as HTMLElement).closest('button')?.classList.toggle('opacity-50');
    },
    [chartRef],
  );

  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, height: '100%' }}>
      <Stack rowGap={4} direction="column" height="100%">
        <Grid
          container
          spacing={2}
          alignItems={{ xs: 'start', lg: 'end' }}
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h6" mb={1}>
              Revenue Generated
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Amount of revenue in this month comparing to last year
            </Typography>
          </Grid>
          <Grid item sx={{ ml: { sm: 'auto', md: 0 }, order: { lg: 1 } }}>
            <DashboardSelectMenu defaultValue={1} />
          </Grid>
          <Grid item sm={12} md={12} lg="auto">
            <Stack gap={4} justifyContent="center">
              <Button
                variant="text"
                disableRipple
                size="small"
                sx={{
                  p: 0,
                  color: 'text.secondary',
                  fontWeight: 400,
                  '&:hover': {
                    backgroundColor: 'unset',
                  },
                }}
                startIcon={
                  <IconifyIcon
                    icon="material-symbols:square-rounded"
                    sx={{
                      height: 8,
                      width: 8,
                      color: 'grey.300',
                    }}
                  />
                }
                onClick={(event) => handleLegendToggle(event, 'Last year')}
              >
                Last year
              </Button>

              <Box>
                <Button
                  variant="text"
                  disableRipple
                  size="small"
                  sx={{
                    mr: 1,
                    p: 0,
                    color: 'text.secondary',
                    fontWeight: 400,
                    '&:hover': {
                      backgroundColor: 'unset',
                    },
                  }}
                  startIcon={
                    <IconifyIcon
                      icon="material-symbols:square-rounded"
                      sx={{
                        height: 8,
                        width: 8,
                        color: 'primary.main',
                      }}
                    />
                  }
                  onClick={(event) => handleLegendToggle(event, 'This year')}
                >
                  This year
                </Button>
                <Chip
                  label="+6.19%"
                  color="success"
                  size="small"
                  sx={{
                    bgcolor: 'success.lighter',
                    color: 'success.dark',
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            flex: 1,
            '& .echarts-for-react': {
              height: '100% !important',
            },
          }}
        >
          <GeneratedRevenueChart
            data={generatedRevenueData}
            sx={{ minHeight: '200px', width: '100%' }}
            ref={chartRef}
          />
        </Box>
      </Stack>
    </Paper>
  );
};

export default GeneratedRevenue;
