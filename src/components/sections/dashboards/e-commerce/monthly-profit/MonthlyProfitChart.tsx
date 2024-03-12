import { useCallback } from 'react';
import dayjs from 'dayjs';
import { TooltipComponent, GridComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { SxProps, useTheme } from '@mui/material';
import { getPastDates } from 'helpers/utils';
import { tooltipFormatterList } from 'helpers/echart-utils';
import ReactEchart from 'components/base/ReactEchart';
import { ComparisonChartData } from 'data/e-commerce/dashboard';

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

interface MonthlyProfitChartProps {
  data: ComparisonChartData;
  sx: SxProps;
}

const MonthlyProfitChart = ({ data, sx }: MonthlyProfitChartProps) => {
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
        data: getPastDates(7).map((date) => dayjs(date).format('MMM DD')),
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
          type: 'line',
          data: data.currentYear,
          showSymbol: false,
          symbol: 'circle',
          zlevel: 1,
          lineStyle: {
            width: 3,
            color: theme.palette.primary.main,
          },
          emphasis: {
            lineStyle: {
              color: theme.palette.primary.main,
            },
          },
          itemStyle: {
            color: theme.palette.primary.main,
          },
        },
        {
          name: 'last year',
          type: 'line',
          data: data.lastYear,
          showSymbol: false,
          symbol: 'circle',
          lineStyle: {
            width: 1,
            color: theme.palette.grey[300],
          },
          emphasis: {
            lineStyle: {
              color: theme.palette.grey[300],
            },
          },
          itemStyle: {
            color: theme.palette.grey[300],
          },
        },
      ],
      grid: { left: 5, right: '-15%', top: 5, bottom: '5%' },
    }),
    [],
  );

  return <ReactEchart echarts={echarts} option={getOptions()} sx={sx} />;
};

export default MonthlyProfitChart;
