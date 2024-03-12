import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const FilledInput: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  variants: [
    {
      props: { size: 'large' },
      style: {
        '& .MuiFilledInput-input': {
          paddingTop: 24,
          paddingBottom: 8,
        },
      },
    },
  ],
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: 8,
        backgroundColor: theme.palette.neutral.lighter,

        '&:before, &:after': {
          display: 'none',
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[200],
        },
        '&.Mui-focused': {
          backgroundColor: theme.palette.primary.lighter,
          outline: `1px solid ${theme.palette.primary.main}`,
        },
        '&.Mui-error': {
          backgroundColor: theme.palette.error.lighter,
          outline: `1px solid ${theme.palette.error.main}`,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      };
    },

    input: () => ({
      paddingTop: 19,
      paddingBottom: 5,
      height: '1.5rem',
      borderRadius: 8,
    }),
    inputSizeSmall: {
      paddingTop: 15,
      paddingBottom: 3,
      fontSize: '14px',
    },
  },
};

export default FilledInput;
