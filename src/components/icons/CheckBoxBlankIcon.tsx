import { SvgIcon, SvgIconProps } from '@mui/material';

const CheckBoxBlankIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="currentColor" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="currentColor" />
    </SvgIcon>
  );
};

export default CheckBoxBlankIcon;
