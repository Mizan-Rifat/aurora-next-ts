/* eslint-disable react/display-name */
// 'use client';

import { Box, BoxProps } from '@mui/material';
import { Icon, IconProps } from '@iconify/react';
import { forwardRef } from 'react';

interface IconifyProps extends BoxProps {
  icon: IconProps['icon'];
}

const IconifyIcon = forwardRef<SVGElement, IconifyProps>(({ icon, ...rest }, ref) => {
  return <Box ref={ref} className="iconify-icon" component={Icon} icon={icon} {...rest} />;
});

export default IconifyIcon;
