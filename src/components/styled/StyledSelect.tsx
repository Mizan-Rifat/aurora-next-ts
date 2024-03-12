import { Select, SelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSelect = styled((props: SelectProps) => <Select {...props} />)(({ theme }) => ({
  '&.MuiInputBase-root': {
    '& .MuiInputBase-input': {
      paddingTop: 8,
      paddingBottom: 8,
      minHeight: '1.25rem',
      lineHeight: 1.2,
      fontSize: 14,
      '&::placeholder': {
        opacity: '1 !important',
        color: theme.palette.text.disabled,
      },
    },
    '& .MuiInputBase-inputSizeSmall': {
      paddingTop: 6,
      paddingBottom: 6,
      minHeight: '1.125rem',
      fontSize: 14,
    },
    '&.MuiInputBase-sizeLarge': {
      '& .MuiInputBase-input': {
        paddingTop: 6,
        paddingBottom: 6,
        minHeight: '1.875rem',
        fontSize: 16,
      },
    },
    '&.Mui-focused': {
      outline: 'none !important',
      backgroundColor: theme.palette.primary.lighter,
    },
  },
}));

export default StyledSelect;
