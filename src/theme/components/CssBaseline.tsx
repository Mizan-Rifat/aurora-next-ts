import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import simplebar from 'theme/styles/simplebar';
import scrollbar from 'theme/styles/scrollbar';
import echart from 'theme/styles/echart';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    body: {
      fontVariantLigatures: 'none',
      ...scrollbar(theme),
    },
    ...simplebar(theme),
    ...echart(),
  }),
};

export default CssBaseline;
