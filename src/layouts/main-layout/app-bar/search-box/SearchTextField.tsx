import { InputAdornment, TextFieldProps } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';

const SearchTextField = (props: TextFieldProps) => {
  return (
    <StyledTextField
      id="search-box"
      size="large"
      placeholder="Search"
      sx={{ minWidth: 348 }}
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconifyIcon icon="material-symbols:search-rounded" sx={{ fontSize: 24 }} />
          </InputAdornment>
        ),
        ...props.InputProps,
      }}
    />
  );
};

export default SearchTextField;
