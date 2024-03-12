import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface StyledTextFieldProps {
  disabledSpinButton?: boolean;
}

const StyledTextField = styled(
  ({ ...rest }: StyledTextFieldProps & TextFieldProps) => (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      sx={{}}
      {...rest}
    />
  ),
  {
    shouldForwardProp: (prop) => prop !== 'disabledSpinButton',
  },
)(({ theme, disabledSpinButton }) => ({
  '& .MuiFormLabel-root': {
    fontWeight: theme.typography.fontWeightMedium,
    transform: 'none',
    position: 'static',
    marginBottom: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    '&.MuiInputLabel-shrink': {
      transform: 'none !important',
    },
  },
  '& .MuiInputBase-root': {
    '& .MuiInputBase-input': {
      paddingTop: 8,
      paddingBottom: 8,
      height: '1.25rem',
      lineHeight: 1.45,
      fontSize: 14,
      '&::placeholder': {
        opacity: '1 !important',
        color: theme.palette.text.disabled,
      },
      ...(disabledSpinButton && {
        '&[type=number]': {
          MozAppearance: 'textfield',
        },
        '&[type=number]::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
          display: 'none',
        },
        '&[type=number]::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
          display: 'none',
        },
      }),
    },
    '& .MuiInputBase-inputSizeSmall': {
      paddingTop: 6,
      paddingBottom: 6,
      height: '1.125rem',
      fontSize: 14,
    },
    '&.MuiInputBase-sizeLarge': {
      '& .MuiInputBase-input': {
        paddingTop: 6,
        paddingBottom: 6,
        height: '1.875rem',
        fontSize: 16,
      },
    },
    '&.Mui-focused': {
      outline: 'none !important',
      backgroundColor: theme.palette.primary.lighter,
    },
  },
}));

export default StyledTextField;
