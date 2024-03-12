import { forwardRef, useCallback } from 'react';
import dayjs from 'dayjs';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { SxProps, useTheme } from '@mui/material';
import { getPastDates, rgbaColor } from 'helpers/utils';
import ReactEchart from 'components/base/ReactEchart';
import { ComparisonChartData } from 'data/e-commerce/dashboard';

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer, LegendComponent]);

interface GeneratedRevenueChartProps {
  sx: SxProps;
  data: ComparisonChartData;
}

const GeneratedRevenueChart = forwardRef<null | EChartsReactCore, GeneratedRevenueChartProps>(
  ({ sx, data }, ref) => {
    const theme = useTheme();

    const getOptions = useCallback(
      () => ({
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: theme.palette.grey[400],
              type: 'solid',
            },
            z: 1,
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
          valueFormatter: (value: string) => `$${Number(value) / 1000}K`,
        },
        legend: {
          data: ['lastYear', 'thisYear'],
          show: false,
        },
        xAxis: {
          type: 'category',
          data: getPastDates(15).map((date) => {
            return dayjs(date).format('MMM DD');
          }),
          boundaryGap: false,
          show: true,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            interval: 0,
            lineStyle: {
              color: theme.palette.grey[200],
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            fontFamily: 'Plus Jakarta Sans',
            color: theme.palette.text.secondary,
          },
        },
        yAxis: {
          show: false,
          type: 'value',
          boundaryGap: false,
        },
        series: [
          {
            name: 'This year',
            type: 'line',
            data: data.currentYear,
            showSymbol: false,
            symbolSize: 8,
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
              itemStyle: {
                borderWidth: 16,
                borderColor: rgbaColor(theme.palette.primary.main, 0.2),
                color: theme.palette.primary.darker,
              },
            },
            itemStyle: {
              color: theme.palette.primary.main,
            },
          },
          {
            type: 'line',
            name: 'Last year',
            data: data.lastYear,
            showSymbol: true,
            symbolSize: 8,
            symbol: 'circle',
            lineStyle: {
              width: 3,
              color: theme.palette.grey[300],
            },
            emphasis: {
              lineStyle: {
                color: theme.palette.grey[300],
              },
              itemStyle: {
                borderWidth: 16,
                borderColor: rgbaColor(theme.palette.text.primary, 0.2),
                color: theme.palette.text.primary,
              },
            },
            itemStyle: {
              color: theme.palette.grey[500],
            },
          },
        ],
        grid: { left: 20, right: 20, top: 0, bottom: 25 },
      }),
      [],
    );

    return <ReactEchart ref={ref} echarts={echarts} option={getOptions()} sx={sx} />;
  },
);

export default GeneratedRevenueChart;
