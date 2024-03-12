import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

declare module '@mui/material' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

const TextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  defaultProps: {
    variant: 'filled',
  },
};

export default TextField;
