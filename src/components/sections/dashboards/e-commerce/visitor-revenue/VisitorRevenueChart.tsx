import { useCallback } from 'react';
import dayjs from 'dayjs';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { SxProps, useTheme } from '@mui/material';
import { getPastDates } from 'helpers/utils';
import { tooltipFormatterList } from 'helpers/echart-utils';
import ReactEchart from 'components/base/ReactEchart';
import { ComparisonChartData } from 'data/e-commerce/dashboard';

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

interface VisitorRevenueChartProps {
  data: ComparisonChartData;
  sx: SxProps;
}

const VisitorRevenueChart = ({ data, sx }: VisitorRevenueChartProps) => {
  const theme = useTheme();

  const getOptions = useCallback(
    () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        transitionDuration: 0,
        axisPointer: {
          type: 'none',
        },
        textStyle: {
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 400,
          fontSize: 12,
          color: theme.palette.common.white,
        },
        backgroundColor: theme.palette.text.primary,
        borderWidth: 0,
        extraCssText: 'box-shadow: none;',
        formatter: tooltipFormatterList,
      },
      xAxis: {
        type: 'category',
        data: getPastDates(8).map((date) => dayjs(date).format('MMM DD')),
        show: false,
        boundaryGap: false,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        show: false,
        type: 'value',
        boundaryGap: false,
      },
      series: [
        {
          name: 'current year',
          type: 'bar',
          data: data.currentYear,
          barWidth: '4px',
          barGap: 1,
          label: { show: false },
          itemStyle: {
            borderRadius: [10, 10, 0, 0],
            color: theme.palette.primary.main,
          },
        },
        {
          name: 'last year',
          type: 'bar',
          data: data.lastYear,
          barWidth: '4px',
          barGap: '100%',
          label: { show: false },
          itemStyle: {
            borderRadius: [10, 10, 0, 0],
            color: theme.palette.grey[300],
          },
        },
      ],
      grid: { left: 20, right: '-10%', top: 0, bottom: '5%' },
    }),
    [],
  );

  return <ReactEchart echarts={echarts} option={getOptions()} sx={sx} />;
};

export default VisitorRevenueChart;
