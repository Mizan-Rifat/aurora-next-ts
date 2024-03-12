import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Switch: Components<Omit<Theme, 'components'>>['MuiSwitch'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      height: 24,
      width: 36,
      padding: 0,
    },
    switchBase: {
      padding: 0,
      margin: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
      },
    },
    thumb: () => ({
      boxShadow: 'none',
    }),
    track: ({ theme }) => ({
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      borderRadius: 12,
    }),
  },
};

export default Switch;
