import { InputAdornment, Paper } from '@mui/material';
import ProductsTable from './ProductsTable';
import SectionHeader from 'components/common/SectionHeader';
import StyledTextField from 'components/styled/StyledTextField';
import IconifyIcon from 'components/base/IconifyIcon';
import { useGridApiRef } from '@mui/x-data-grid';
import { ChangeEvent, useCallback } from 'react';

const TopProducts = () => {
  const apiRef = useGridApiRef();

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      apiRef.current.setQuickFilterValues([e.target.value]);
    },
    [apiRef],
  );

  return (
    <Paper sx={{ px: { xs: 3, md: 5 }, pt: { xs: 3, md: 5 }, pb: 1, height: '100%' }}>
      <SectionHeader
        flexWrap="wrap"
        title="Top products"
        subTitle="Detail informations of the products"
        actionComponent={
          <StyledTextField
            id="search-box"
            type="search"
            placeholder="Search"
            sx={{ minWidth: 260 }}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="material-symbols:search-rounded" sx={{ fontSize: 24 }} />
                </InputAdornment>
              ),
            }}
          />
        }
      />
      <ProductsTable apiRef={apiRef} />
    </Paper>
  );
};

export default TopProducts;
