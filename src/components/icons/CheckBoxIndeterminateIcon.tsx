import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxIndeterminateIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <rect width="16" height="16" rx="4" fill="currentColor" />
      <path
        d="M3.83424 8.56693C3.67869 8.56693 3.54536 8.51137 3.43424 8.40026C3.32313 8.28915 3.26758 8.15582 3.26758 8.00026C3.26758 7.83359 3.32313 7.69748 3.43424 7.59193C3.54536 7.48637 3.67869 7.43359 3.83424 7.43359H12.1676C12.3231 7.43359 12.4565 7.48915 12.5676 7.60026C12.6787 7.71137 12.7342 7.84471 12.7342 8.00026C12.7342 8.16693 12.6787 8.30304 12.5676 8.40859C12.4565 8.51415 12.3231 8.56693 12.1676 8.56693H3.83424Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default CheckBoxIndeterminateIcon;
