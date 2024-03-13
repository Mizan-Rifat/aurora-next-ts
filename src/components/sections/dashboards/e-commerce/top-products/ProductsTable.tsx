import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Avatar, AvatarGroup, ChipOwnProps, Stack, Tooltip, Typography } from '@mui/material';
import { Product, topProducts } from 'data/e-commerce/products';
import { currencyFormat, numberFormat } from 'helpers/utils';
import StyledChip from 'components/styled/StyledChip';
import IconifyIcon from 'components/base/IconifyIcon';
import DataGridPaginationAction from 'components/pagination/DataGridPaginationAction';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { MutableRefObject } from 'react';
import DashboardMenu from 'components/common/DashboardMenu';
import Image from 'components/base/Image';

const getStockBadge = (val: string): { color: ChipOwnProps['color']; icon: string } => {
  switch (val) {
    case 'In Stock':
      return {
        color: 'success',
        icon: 'ic:round-check'
      };
    case 'Low Stock':
      return {
        color: 'warning',
        icon: 'material-symbols:warning-outline-rounded'
      };
    case 'Stockout':
      return {
        color: 'error',
        icon: 'ic:round-do-not-disturb-alt'
      };

    default:
      return {
        color: 'primary',
        icon: 'material-symbols:check-small-rounded'
      };
      break;
  }
};

const columns: GridColDef<Product>[] = [
  {
    field: 'product',
    headerName: 'Product',
    width: 320,
    valueGetter: params => params.row.product.name,
    renderCell: params => {
      return (
        <Stack spacing={1.25} alignItems="center">
          <Image
            src={params.row.product.image}
            alt={params.row.product.name}
            height={48}
            width={48}
          />
          <Typography variant="body1">{params.row.product.name}</Typography>
        </Stack>
      );
    }
  },
  {
    field: 'vendor',
    headerName: 'Vendors',
    minWidth: 160,
    flex: 0.35,
    sortable: false,
    renderCell: params => (
      <AvatarGroup
        max={5}
        color="primary"
        sx={{
          '& .MuiAvatar-root': {
            width: 28,
            height: 28,
            fontSize: 12.8,
            fontWeight: 'medium',
            backgroundColor: 'primary.main'
          }
        }}
      >
        {params.row.vendors.map(v => (
          <Tooltip title={v.name} key={v.name}>
            <Avatar alt={v.name} src={v.avatar.src} />
          </Tooltip>
        ))}
      </AvatarGroup>
    )
  },
  {
    field: 'margin',
    headerName: 'Margin',
    flex: 0.2,
    minWidth: 110,
    align: 'right',
    headerAlign: 'right',
    valueGetter: params =>
      currencyFormat(params.row.margin, {
        minimumFractionDigits: 2
      })
  },
  {
    field: 'sold',
    headerName: 'Sold',
    minWidth: 110,
    flex: 0.2,
    align: 'right',
    headerAlign: 'right',
    valueGetter: params => numberFormat(params.row.sold)
  },
  {
    field: 'stock',
    headerName: 'Stock',
    minWidth: 120,
    flex: 0.25,
    align: 'center',
    headerAlign: 'center',
    renderCell: params => (
      <StyledChip
        label={params.row.stock}
        color={getStockBadge(params.row.stock)?.color}
        icon={
          <IconifyIcon
            icon={getStockBadge(params.row.stock).icon}
            sx={{ fontSize: '16px !important' }}
          />
        }
        iconPosition="end"
        variant="soft"
        size="small"
        sx={{ width: '100%', maxWidth: 100 }}
      />
    )
  },
  {
    field: 'action',
    renderHeader: () => <DashboardMenu />,
    sortable: false,
    width: 60,
    headerClassName: 'action',
    cellClassName: 'action',
    renderCell: () => <DashboardMenu />
  }
];

const ProductsTable = ({ apiRef }: { apiRef: MutableRefObject<GridApiCommunity> }) => {
  return (
    <Box sx={{ width: '100%', height: 498 }}>
      <DataGrid
        rowHeight={64}
        rows={topProducts}
        apiRef={apiRef}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6
            }
          }
        }}
        pageSizeOptions={[6]}
        checkboxSelection
        sx={{
          '& .MuiDataGrid-columnHeader--alignRight': {
            '& .MuiDataGrid-columnHeaderTitle ': {
              marginRight: 3
            }
          },
          '& .MuiDataGrid-cell--textRight': {
            '& .MuiDataGrid-cellContent': {
              marginRight: 3
            }
          },
          '& .action': {
            justifyContent: 'flex-end',
            paddingRight: 0
          },
          '& .MuiDataGrid-row': {
            '&.Mui-hovered': {
              backgroundColor: 'inherit'
            },
            '&:hover': {
              backgroundColor: 'inherit'
            }
          }
        }}
        slotProps={{
          pagination: {
            ActionsComponent: props => <DataGridPaginationAction showAllHref="#!" {...props} />
          }
        }}
      />
    </Box>
  );
};

export default ProductsTable;
