import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { grey } from 'theme/colors';

const OutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  variants: [
    {
      props: { size: 'large' },
      style: {
        '& .MuiOutlinedInput-input': {
          paddingTop: 6,
          paddingBottom: 6,
        },
      },
    },
  ],

  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 4,

      ':hover': {
        '&:not(&.Mui-focused,.Mui-disabled,.Mui-error)': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: grey[400],
          },
        },
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[200],
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: grey[300],
        },
      },
    }),

    input: () => ({
      paddingTop: 3,
      paddingBottom: 3,
      height: '1.875rem',
    }),
    inputSizeSmall: {
      paddingTop: 6,
      paddingBottom: 6,
      height: '1.125rem',
      fontSize: 14,
    },
    notchedOutline: {
      borderStyle: 'solid',
      borderColor: `${grey[300]}`,
      borderWidth: '1px !important',
    },
  },
};

export default OutlinedInput;
