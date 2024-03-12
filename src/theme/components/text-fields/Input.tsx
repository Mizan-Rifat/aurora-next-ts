import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Input: Components<Omit<Theme, 'components'>>['MuiInput'] = {
  variants: [
    {
      props: { size: 'large' },
      style: {
        '& .MuiInput-input': {
          paddingTop: 6,
          paddingBottom: 8,
          height: '1.375rem',
        },
      },
    },
  ],
  styleOverrides: {
    underline: ({ theme }) => ({
      '&::before': {
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
      },
      '&:hover, &:focus': {
        '&:not(.Mui-disabled, .Mui-error)': {
          '&::before': {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          },
        },
      },
    }),
    sizeSmall: {
      fontSize: '14px',
    },
    input: {
      height: '1.375rem',
      padding: '6px 0 8px',
    },
    inputSizeSmall: {
      height: '1.125rem',
      padding: '6px 0 8px',
      lineHeight: 1.2,
    },
  },
};

export default Input;
