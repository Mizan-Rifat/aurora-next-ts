import { Box, Theme, Typography } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import CustomPaginationAction from 'components/pagination/CustomPaginationAction';

const TablePagination: Components<Omit<Theme, 'components'>>['MuiTablePagination'] = {
  defaultProps: {
    rowsPerPageOptions: [],
    labelDisplayedRows: ({ from, to, count }) => {
      return (
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
            Showing
          </Box>
          <Typography variant="caption" sx={{ fontWeight: 'bold', mx: 0.5 }}>
            {from}-{to} out of {count}
          </Typography>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
            items
          </Box>
        </Typography>
      );
    },
    ActionsComponent: CustomPaginationAction,
  },
  styleOverrides: {
    toolbar: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    spacer: {
      display: 'none',
    },
    actions: {
      marginLeft: 8,
      flex: 1,
    },
  },
};

export default TablePagination;
