import { Theme, alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import DataGridPaginationAction from 'components/pagination/DataGridPaginationAction';
import IconifyIcon from 'components/base/IconifyIcon';

const DataGrid: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    disableRowSelectionOnClick: true,
    disableColumnMenu: true,
    slots: {
      columnSortedDescendingIcon: (props) => (
        <IconifyIcon icon="material-symbols:sort-rounded" {...props} />
      ),
      columnSortedAscendingIcon: (props) => (
        <IconifyIcon
          icon="material-symbols:sort-rounded"
          {...props}
          sx={{ transform: 'rotateX(180deg)' }}
        />
      ),
    },
    slotProps: {
      pagination: {
        ActionsComponent: DataGridPaginationAction,
      },
    },
  },
  styleOverrides: {
    root: {
      border: 'none',
    },
    main: {
      marginLeft: -9,
    },
    columnHeaders: {
      left: 9,
      overflow: 'unset',
      '& .MuiDataGrid-checkboxInput': {
        left: -9,
      },
    },
    columnHeaderTitleContainer: {
      overflow: 'unset',
      '& .MuiDataGrid-columnHeaderTitleContainerContent': {
        overflow: 'unset',
      },
    },
    row: ({ theme }) => ({
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.light, 0.04),
      },
      '&.Mui-selected': {
        backgroundColor: alpha(theme.palette.primary.light, 0.08),
      },
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.grey[200],
    }),
    columnHeader: {
      '&.action': {
        justifyContent: 'end',
        '& .MuiDataGrid-columnHeaderTitleContainer ': {
          justifyContent: 'end',
        },
      },
      '&:focus': {
        outline: 'none',
      },
      '&:focus-within': {
        outline: 'none',
      },
    },
    columnSeparator: {
      display: 'none',
    },
    cell: {
      '&:focus': {
        outline: 'none',
      },
      '&:focus-within': {
        outline: 'none',
      },
      '&.Mui-checked': {},
    },
    cellCheckbox: {
      justifyContent: 'flex-start',
      minWidth: '40px !important',
      overflow: 'unset !important',
      '& .MuiButtonBase-root': {
        left: -9,
      },
    },
    virtualScroller: {
      '&::-webkit-scrollbar-track': {
        marginLeft: 9,
      },
      '@supports (-moz-appearance:none)': {
        scrollbarWidth: 'thin',
        overflowY: 'hidden',
      },
    },
    virtualScrollerRenderZone: {
      paddingLeft: 9,
    },
    columnHeaderCheckbox: {
      minWidth: '40px !important',
      width: '40px !important',
      '& .MuiDataGrid-columnHeaderTitleContainer': {
        justifyContent: 'flex-start',
        overflow: 'unset',
        '& .MuiDataGrid-columnHeaderTitleContainerContent': {
          overflow: 'unset',
        },
      },
    },
    sortIcon: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
    selectedRowCount: { display: 'none' },
    footerContainer: {
      border: 'none',
      '& .MuiTablePagination-root': {
        flex: 1,
      },
    },
  },
};

export default DataGrid;
