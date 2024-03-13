import { Box, BoxProps, SxProps } from '@mui/material';
import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {
  sx?: SxProps;
}

const Image = ({ ...props }: ImageProps) => {
  return <Box component={NextImage} {...props} />;
};

export default Image;
