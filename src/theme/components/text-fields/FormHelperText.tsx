import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FormHelperText: Components<Omit<Theme, 'components'>>['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '&.Mui-error': {
        color: theme.palette.error.light,
      },
    }),
  },
};

export default FormHelperText;
