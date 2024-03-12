import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import fallbackAvatarIcon from 'assets/avatar/avatar_fallback.webp';

export const Avatar: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey[300],
      fontWeight: 500,
      lineHeight: 1.2,
    }),
    colorDefault: ({ theme }) => ({
      backgroundColor: theme.palette.neutral.main,
    }),
    fallback: {
      background: `url(${fallbackAvatarIcon}) center bottom no-repeat`,
      backgroundSize: 'contain',
      width: '62%',
      height: '100%',
      path: {
        display: 'none',
      },
    },
  },
};

export const AvatarGroup: Components<Omit<Theme, 'components'>>['MuiAvatarGroup'] = {
  defaultProps: {},
  styleOverrides: {
    avatar: {
      marginLeft: 0,
      marginRight: -8,
    },
  },
};
