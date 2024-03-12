import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import CheckBoxBlankIcon from 'components/icons/CheckBoxBlankIcon';
import CheckBoxCheckedIcon from 'components/icons/CheckBoxCheckedIcon';
import CheckBoxIndeterminateIcon from 'components/icons/CheckBoxIndeterminateIcon';

const Checkbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    size: 'small',
    icon: <CheckBoxBlankIcon sx={{ color: 'grey.200' }} viewBox="0 0 16 16" />,
    checkedIcon: <CheckBoxCheckedIcon viewBox="0 0 16 16" />,
    indeterminateIcon: <CheckBoxIndeterminateIcon viewBox="0 0 16 16" />,
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
export default Checkbox;
