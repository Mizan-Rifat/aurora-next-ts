'use client';

import * as React from 'react';
import { useGridApiContext } from '@mui/x-data-grid';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import CustomPaginationAction from './CustomPaginationAction';

interface DataGridPaginationActionProps extends TablePaginationActionsProps {
  showAllHref?: string;
}

const DataGridPaginationAction = ({ showAllHref, ...rest }: DataGridPaginationActionProps) => {
  const { page, rowsPerPage, count } = rest;
  const apiRef = useGridApiContext();
  const [defaultRowsPerPage] = React.useState(rowsPerPage);
  const isShowingAll = React.useMemo(() => rowsPerPage === count, [rowsPerPage, count]);

  return (
    <>
      <CustomPaginationAction
        onNextClick={() => {
          apiRef.current.setPage(page + 1);
        }}
        onPrevClick={() => {
          apiRef.current.setPage(page - 1);
        }}
        onShowAllClick={() => {
          if (showAllHref) {
            return;
          }
          if (isShowingAll) {
            apiRef.current.setPageSize(defaultRowsPerPage);
          } else {
            apiRef.current.setPageSize(count);
          }
        }}
        showAllHref={showAllHref}
        {...rest}
      />
    </>
  );
};

export default DataGridPaginationAction;
