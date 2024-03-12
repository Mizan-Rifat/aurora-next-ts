import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import RadioCheckedIcon from 'components/icons/RadioCheckedIcon';
import IconifyIcon from 'components/base/IconifyIcon';

const Radio: Components<Omit<Theme, 'components'>>['MuiRadio'] = {
  defaultProps: {
    size: 'small',
    icon: <IconifyIcon icon="material-symbols:circle" sx={{ color: 'grey.200' }} />,
    checkedIcon: <RadioCheckedIcon viewBox="0 0 16 16" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '.MuiSvgIcon-fontSizeMedium': {
        fontSize: 20,
      },
      '.MuiSvgIcon-fontSizeSmall': {
        fontSize: 16,
      },
      '&.Mui-disabled': {
        '.MuiSvgIcon-root': {
          color: theme.palette.grey[100],
        },
      },
    }),
  },
};
export default Radio;
