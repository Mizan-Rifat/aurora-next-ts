import { SxProps, useTheme } from '@mui/material';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { numberFormat } from 'helpers/utils';
import { blue } from 'theme/colors';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { useCallback } from 'react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import ReactEchart from 'components/base/ReactEchart';
import { ClientLocation } from 'data/e-commerce/dashboard';
import { plusJakartaSans } from 'theme/typography';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

interface LocationChartProps {
  data: ClientLocation[];
  sx: SxProps;
}

const LocationChart = ({ data, sx }: LocationChartProps) => {
  const theme = useTheme();
  const { up, currentBreakpoint } = useBreakpoints();
  const upMd = up('md');

  const getOptions = useCallback(
    () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        axisPointer: {
          type: 'none'
        },
        textStyle: {
          fontFamily: plusJakartaSans.style.fontFamily,
          fontWeight: 400,
          fontSize: 12,
          color: theme.palette.common.white
        },
        backgroundColor: theme.palette.text.primary,
        borderWidth: 0,
        extraCssText: 'box-shadow: none;',
        transitionDuration: 0
      },
      xAxis: {
        type: 'category',
        data: data.map(item => item.name),
        axisLabel: {
          color: theme.palette.text.secondary,
          fontSize: 12,
          fontFamily: plusJakartaSans.style.fontFamily,
          interval: currentBreakpoint === 'md' ? 'auto' : 0,
          rotate: upMd ? 0 : 70
        },
        min: 'dataMin',
        max: 'dataMax',

        axisLine: {
          lineStyle: {
            color: theme.palette.grey[300]
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: theme.palette.grey[200]
          }
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      series: [
        {
          type: 'bar',
          data: data.map(item => item.value),
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: blue[300]
          },
          barWidth: currentBreakpoint === 'md' ? 8 : 24,
          label: {
            show: true,
            position: 'outside',
            formatter: (params: CallbackDataParams) =>
              numberFormat(Number(params.value), 'compact'),
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: 12
          }
        }
      ],
      grid: {
        containLabel: true,
        right: 0,
        left: 0,
        bottom: 2,
        top: 15
      }
    }),
    [currentBreakpoint]
  );

  return <ReactEchart echarts={echarts} option={getOptions()} sx={sx} />;
};

export default LocationChart;
