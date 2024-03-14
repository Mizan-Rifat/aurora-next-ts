import { Box, Button, ButtonGroup, SxProps, useTheme } from '@mui/material';
import world from 'assets/json/world.json';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { MapChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { CallbackDataParams } from 'echarts/types/dist/shared';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useCallback, useEffect, useRef, useState } from 'react';
import ZoomInIcon from 'components/icons/ZoomInIcon';
import ZoomOutIcon from 'components/icons/ZoomOutIcon';
import ReactEchart from 'components/base/ReactEchart';
import { ClientLocation } from 'data/e-commerce/dashboard';
import { plusJakartaSans } from 'theme/typography';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  MapChart,
  CanvasRenderer,
  ToolboxComponent,
  LegendComponent,
  VisualMapComponent
]);

//@ts-ignore
echarts.registerMap('world', { geoJSON: world });

interface LocationMapProps {
  data: ClientLocation[];
  sx: SxProps;
}

const LocationMap = ({ data, sx }: LocationMapProps) => {
  const chartRef = useRef<null | EChartsReactCore>(null);
  const theme = useTheme();
  const { currentBreakpoint } = useBreakpoints();

  const [zoomLevel, setZoomLevel] = useState(1);
  const [maxZoomLevel] = useState(5);
  const [minZoomLevel] = useState(1);

  const getOptions = useCallback(
    () => ({
      tooltip: {
        trigger: 'item',
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
        transitionDuration: 0,
        formatter: (param: CallbackDataParams) =>
          `${param.name} : ${isNaN(Number(param.value)) ? 0 : param.value}`
      },
      toolbox: {
        show: false,
        feature: {
          restore: {}
        }
      },
      visualMap: {
        show: false,
        inRange: {
          color: [theme.palette.primary.main]
        }
      },
      series: [
        {
          type: 'map',
          map: 'world',
          data,
          selectedMode: false,
          zoom: zoomLevel,
          center:
            currentBreakpoint === 'xs'
              ? ['20%', '5%']
              : currentBreakpoint === 'sm'
              ? ['10%', '5%']
              : [0, 0],
          roam: 'move',
          scaleLimit: {
            min: 1
          },
          left: 0,
          right: 0,
          label: {
            show: false
          },
          itemStyle: {
            borderColor: 'transparent',
            areaColor: theme.palette.grey[200]
          },
          emphasis: {
            disabled: true
          }
        }
      ]
    }),
    [currentBreakpoint, zoomLevel]
  );

  const handleZoomIn = () => {
    if (zoomLevel < maxZoomLevel) {
      setZoomLevel(zoomLevel + 1);
    }
    chartRef.current?.getEchartsInstance().setOption({
      series: {
        zoom: zoomLevel + 1
      }
    });
  };
  const handleZoomOut = () => {
    if (zoomLevel > minZoomLevel) {
      setZoomLevel(zoomLevel - 1);
    }
    chartRef.current?.getEchartsInstance().setOption({
      series: {
        zoom: zoomLevel - 1
      }
    });
  };

  useEffect(() => {
    switch (currentBreakpoint) {
      case 'xs':
        setZoomLevel(3);
        break;
      case 'sm':
        setZoomLevel(2);
        break;
      default:
        setZoomLevel(1);
        break;
    }
  }, [currentBreakpoint]);

  return (
    <Box sx={{ position: 'relative', height: 1 }}>
      <ReactEchart
        className="echart-map"
        ref={chartRef}
        echarts={echarts}
        option={getOptions()}
        sx={sx}
      />
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          '& .MuiButtonGroup-grouped': {
            minWidth: 36
          }
        }}
      >
        <Button
          variant="soft"
          color="neutral"
          key="one"
          shape="square"
          sx={{ fontSize: 20, border: 1, borderColor: 'grey.200' }}
          onClick={handleZoomIn}
          disabled={maxZoomLevel === zoomLevel}
        >
          <ZoomInIcon />
        </Button>
        <Button
          variant="soft"
          color="neutral"
          key="two"
          shape="square"
          sx={{ fontSize: 20, border: 1, borderColor: 'grey.200' }}
          onClick={handleZoomOut}
          disabled={minZoomLevel === zoomLevel}
        >
          <ZoomOutIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default LocationMap;
