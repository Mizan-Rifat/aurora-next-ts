import { SvgIcon, SvgIconProps } from '@mui/material';

const RadioCheckedIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <circle cx="8" cy="8" r="3" fill="white" />
    </SvgIcon>
  );
};

export default RadioCheckedIcon;
