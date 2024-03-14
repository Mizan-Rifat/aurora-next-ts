import { useCallback } from 'react';
import { SxProps, useTheme } from '@mui/material';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { Share } from 'data/e-commerce/marketShare';
import ReactEchart from 'components/base/ReactEchart';
import { plusJakartaSans } from 'theme/typography';

echarts.use([TooltipComponent, PieChart, CanvasRenderer, GridComponent, LegendComponent]);

interface MarketShareChartProps {
  data: Share[];
  bgColorMap: { [key: string]: string };
  sx: SxProps;
}

const MarketShareChart = ({ data, bgColorMap, sx }: MarketShareChartProps) => {
  const theme = useTheme();

  const getOptions = useCallback(
    () => ({
      color: Object.keys(bgColorMap).map(key => bgColorMap[key]),

      tooltip: {
        trigger: 'item',
        textStyle: {
          fontFamily: plusJakartaSans.style.fontFamily,
          fontWeight: 400,
          fontSize: 12,
          color: theme.palette.common.white
        },
        backgroundColor: theme.palette.text.primary,
        borderWidth: 0,
        extraCssText: 'box-shadow: none;',
        transitionDuration: 0,
        formatter: (params: CallbackDataParams) =>
          `<strong>${params.name}:</strong> ${params.percent}%`
      },
      legend: { show: false },
      series: [
        {
          type: 'pie',
          radius: ['100%', '92%'],
          avoidLabelOverlap: false,
          emphasis: {
            scale: false,
            itemStyle: {
              color: 'inherit'
            }
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: theme.palette.common.white
          },
          label: {
            show: false
          },
          data: data.map(share => ({ name: share.brand, value: share.revenue }))
        }
      ],
      grid: { containLabel: true }
    }),
    []
  );

  return <ReactEchart echarts={echarts} option={getOptions()} sx={sx} />;
};

export default MarketShareChart;
