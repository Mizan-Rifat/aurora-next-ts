import { Tooltip, useTheme } from '@mui/material';
import { Box, Stack, Typography, capitalize } from '@mui/material';
import { Storage } from 'data/e-commerce/dashboard';
import { blue, grey } from 'theme/colors';

interface StorageBarProps {
  storages: Storage[];
}

const getBgColor = (value: number): string => {
  let bgColor = blue[500];

  if (value <= 10) {
    bgColor = blue[500];
  } else if (value <= 20 && value > 10) {
    bgColor = blue[200];
  } else if (value <= 30 && value > 20) {
    bgColor = grey[300];
  } else if (value <= 40 && value > 30) {
    bgColor = grey[200];
  } else if (value <= 50 && value > 40) {
    bgColor = blue[400];
  }

  return bgColor;
};

const StorageBar = ({ storages }: StorageBarProps) => {
  const theme = useTheme();
  return (
    <div>
      <Stack alignItems="center" height={10} sx={{ mb: 2 }}>
        {storages.map((storage, index) => (
          <Tooltip title={storage.label} arrow key={storage.label}>
            <Box
              sx={{
                width: `${storage.value + 8}%`,
                background: theme.palette.common.white,
                p: 0.5,
                mx: -0.5,
                '&:hover': {
                  borderRadius: 2,
                  zIndex: 1,
                  boxShadow: theme.shadows[1],
                  '& .MuiBox-root': {
                    borderRadius: 2,
                    height: 10,
                  },
                },
              }}
            >
              <Box
                sx={[
                  {
                    height: 8,
                  },
                  {
                    width: 1,
                    background: getBgColor(storage.value),
                  },
                  index === 0 && {
                    borderRadius: '8px 0 0 8px',
                  },
                  index === storages.length - 1 && {
                    borderRadius: '0 8px 8px 0',
                  },
                ]}
              />
            </Box>
          </Tooltip>
        ))}
      </Stack>
      <Stack spacing={3} sx={{ height: 8 }}>
        {storages.map((storage) => (
          <Stack spacing={0.5} alignItems="center" key={storage.label}>
            <Box
              sx={[
                {
                  width: 8,
                  height: 8,
                  backgroundColor: getBgColor(storage.value),
                  borderRadius: 0.5,
                },
              ]}
            />
            <Typography variant="caption" fontWeight="medium" sx={{ color: 'text.secondary' }}>
              {capitalize(storage.label)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </div>
  );
};

export default StorageBar;
