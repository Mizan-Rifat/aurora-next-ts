import { Box, Stack, StackOwnProps, Typography } from '@mui/material';
import { ReactElement } from 'react';

interface SectionHeaderProps extends StackOwnProps {
  title: string;
  subTitle: string;
  actionComponent?: ReactElement;
}

const SectionHeader = ({ title, subTitle, actionComponent, ...rest }: SectionHeaderProps) => {
  return (
    <Stack
      spacing={2}
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ mb: 4 }}
      {...rest}
    >
      <Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" fontWeight="regular" sx={{ color: 'text.secondary' }}>
          {subTitle}
        </Typography>
      </Box>
      {actionComponent}
    </Stack>
  );
};

export default SectionHeader;
