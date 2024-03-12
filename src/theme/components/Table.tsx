import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import IconifyIcon from 'components/base/IconifyIcon';

const Table: Components<Omit<Theme, 'components'>>['MuiTable'] = {
  defaultProps: {},
  styleOverrides: {},
};

export const TableContainer: Components<Omit<Theme, 'components'>>['MuiTableContainer'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      marginLeft: -9,
      paddingLeft: 9,
    },
  },
};

export const TableCell: Components<Omit<Theme, 'components'>>['MuiTableCell'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      '& .MuiCheckbox-root': {
        marginLeft: -9,
      },
    }),
    paddingCheckbox: {
      paddingLeft: 0,
    },
  },
};
export const TableSortLabel: Components<Omit<Theme, 'components'>>['MuiTableSortLabel'] = {
  defaultProps: {
    IconComponent: (props) => <IconifyIcon icon="material-symbols:sort-rounded" {...props} />,
  },
  styleOverrides: {
    icon: {
      transition: 'none',
    },
    iconDirectionAsc: {
      transform: 'rotateX(180deg)',
    },
  },
};

export default Table;
