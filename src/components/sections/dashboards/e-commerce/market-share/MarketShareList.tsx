import { Box, ChipOwnProps, Stack, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { Share } from 'data/e-commerce/marketShare';
import StyledChip from 'components/styled/StyledChip';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';

interface MarketShareListProps {
  shares: Share[];
  bgColorMap: { [key: string]: string };
}

const growthBadge = (val: number): { color: ChipOwnProps['color']; icon: ReactElement } => {
  if (val > 1) {
    return {
      color: 'success',
      icon: (
        <IconifyIcon icon="material-symbols:moving-rounded" sx={{ fontSize: '12px !important' }} />
      )
    };
  }
  if (val < 0) {
    return {
      color: 'error',
      icon: (
        <IconifyIcon
          icon="material-symbols:moving-rounded"
          sx={{ fontSize: '12px !important', transform: 'rotate(70deg)' }}
        />
      )
    };
  }
  return {
    color: 'warning',
    icon: (
      <IconifyIcon
        icon="material-symbols:trending-flat-rounded"
        sx={{ fontSize: '12px !important' }}
      />
    )
  };
};

const MarketShareList = ({ shares, bgColorMap }: MarketShareListProps) => {
  return (
    <Stack direction="column" gap={2} sx={{ flex: 1, alignSelf: 'stretch' }}>
      {shares.map((share, index) => (
        <Stack
          key={share.id}
          spacing={{ xs: 2, sm: 3 }}
          alignItems="stretch"
          sx={{
            pt: { xs: 2, sm: index === 0 ? 0 : 2, md: 2 },
            borderTop: { xs: 1, sm: index === 0 ? 0 : 1, md: 1 },
            borderColor: { xs: 'grey.200', sm: 'grey.200', md: 'grey.200' }
          }}
        >
          <Box
            sx={{
              height: { xs: 24, sm: 44, lg: 24 },
              width: 8,
              borderRadius: 2,
              background: bgColorMap[share.brand]
            }}
          />
          <Stack
            justifyContent="space-between"
            flex={1}
            direction={{ xs: 'row', sm: 'column', lg: 'row' }}
          >
            <Stack alignItems="center" gap={1} flex={1}>
              <Image src={share.icon} alt={share.brand} height={16} />
              <Typography variant="body2" sx={{ flex: 1 }}>
                {share.brand}
              </Typography>
            </Stack>
            <Stack justifyContent="space-between" flex={1}>
              <Typography variant="body1" fontWeight="bold">
                {share.revenue}%
              </Typography>
              <StyledChip
                label={share.growth}
                color={growthBadge(share.growth)?.color}
                icon={growthBadge(share.growth)?.icon}
                iconPosition="end"
                variant="soft"
                size="small"
              />
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default MarketShareList;
