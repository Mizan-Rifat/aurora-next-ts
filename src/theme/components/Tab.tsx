import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const Tab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      padding: '8px',
      minHeight: '36px',
      minWidth: '36px',
      '.MuiSvgIcon-root': {
        fontSize: 20,
      },
    },
  },
};

export const Tabs: Components<Omit<Theme, 'components'>>['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      minHeight: '36px',
    },
    flexContainer: {
      gap: '8px',
    },
  },
};
