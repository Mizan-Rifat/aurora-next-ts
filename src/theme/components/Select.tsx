import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import IconifyIcon from 'components/base/IconifyIcon';

const Select: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  defaultProps: {
    size: 'medium',
    IconComponent: (props) => (
      <IconifyIcon
        icon="material-symbols:keyboard-arrow-down-rounded"
        {...props}
        sx={(theme) => ({ color: `${theme.palette.text.secondary} !important`, fontSize: 24 })}
      />
    ),
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&::before': {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
    }),
    select: {
      '&:focus': {
        backgroundColor: 'transparent',
        borderRadius: 8,
      },
      // minHeight: '1.375rem',
      // lineHeight: 1.2,
      // paddingTop: 6,
      // paddingBottom: 8,
      '&.MuiInputBase-inputSizeSmall': {
        // minHeight: '1.125rem',
        // paddingTop: 6,
        // paddingBottom: 8,
      },
    },
    outlined: {
      minHeight: 24,
      paddingTop: 6,
      paddingBottom: 6,
      '&.MuiSelect-select': {
        '&.MuiInputBase-inputSizeSmall': {
          minHeight: 20,
          paddingTop: 5,
          paddingBottom: 5,
          lineHeight: 1,
        },
      },
    },
  },
};

export default Select;
