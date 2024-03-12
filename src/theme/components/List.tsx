import { Theme, alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const ListItemButton: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '12px 16px',
      borderRadius: 8,
      color: theme.palette.text.secondary,
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus-visible': {
        backgroundColor: theme.palette.action.hover,
        outline: `1px solid ${theme.palette.primary.main}`,
      },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.light, 0.08),
        color: theme.palette.primary.main,
        // '& .MuiListItemIcon-root': {
        //   color: theme.palette.primary.main,
        // },
        // '& .MuiListItemText-primary': {
        //   color: theme.palette.primary.main,
        // },
      },
    }),
    dense: {
      padding: '6px 16px',
    },
  },
};

export const ListItemIcon: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  styleOverrides: {
    root: {
      color: 'inherit',
      minWidth: 20,
      '& .MuiSvgIcon-root': {
        fontSize: 14,
      },
    },
  },
};

export const ListItemText: Components<Omit<Theme, 'components'>>['MuiListItemText'] = {
  defaultProps: {
    primaryTypographyProps: {
      variant: 'subtitle1',
    },
  },
  styleOverrides: {
    dense: {
      '& .MuiListItemText-primary': {
        fontSize: 14,
      },
    },
  },
};
