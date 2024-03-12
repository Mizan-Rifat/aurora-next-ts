import { FormControl, FormControlProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled((props: FormControlProps) => <FormControl {...props} />)(
  ({ theme }) => ({
    '& .MuiFormLabel-root': {
      fontWeight: theme.typography.fontWeightMedium,
      transform: 'none !important',
      position: 'static',
      marginBottom: theme.spacing(0.5),
      marginLeft: theme.spacing(1),
      '&.MuiInputLabel-shrink': {
        transform: 'none !important',
      },
    },
  }),
);

export default StyledFormControl;
