import { Theme, alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Pagination: Components<Omit<Theme, 'components'>>['MuiPagination'] = {
  defaultProps: {
    shape: 'rounded',
  },
};

export const PaginationItem: Components<Omit<Theme, 'components'>>['MuiPaginationItem'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const selectedBackgroundColor =
        ownerState.color && ownerState.color !== 'standard'
          ? {
              backgroundColor: alpha(theme.palette[ownerState.color].main, 0.36),
              color: theme.palette[ownerState.color].main,
            }
          : {};

      return {
        borderRadius: 8,
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },
        '&.Mui-selected, &.Mui-selected:hover': {
          backgroundColor: theme.palette.grey[300],
          color: theme.palette.text.primary,
          ...selectedBackgroundColor,
        },
      };
    },
    sizeSmall: {
      height: 24,
      minWidth: 24,
      borderRadius: 6,
    },
  },
};
export default Pagination;
