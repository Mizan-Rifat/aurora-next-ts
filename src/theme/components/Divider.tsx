import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { grey } from 'theme/colors';

const Divider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: {
      borderColor: grey[300],
    },
  },
};

export default Divider;
