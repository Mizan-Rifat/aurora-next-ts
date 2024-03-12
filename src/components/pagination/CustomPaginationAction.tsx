import * as React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import IconifyIcon from 'components/base/IconifyIcon';

interface CustomPaginationActionProps extends TablePaginationActionsProps {
  onNextClick?: () => void;
  onPrevClick?: () => void;
  onShowAllClick?: () => void;
  showAllHref?: string;
}

const CustomPaginationAction = ({
  page,
  rowsPerPage,
  count,
  onNextClick,
  onPrevClick,
  onShowAllClick,
  showAllHref,
}: CustomPaginationActionProps) => {
  const isShowingAll = React.useMemo(() => rowsPerPage === count, [rowsPerPage, count]);

  return (
    <Stack alignItems="flex-end" sx={{ flex: 1, ml: 1 }}>
      <Button
        variant="text"
        color="primary"
        size="small"
        onClick={onShowAllClick}
        sx={{ fontSize: 12 }}
        href={showAllHref}
      >
        {isShowingAll ? 'View less' : 'Show all'}
      </Button>

      <Button
        variant="text"
        color="primary"
        size="small"
        startIcon={<IconifyIcon icon="material-symbols:arrow-back-ios-rounded" />}
        disabled={page === 0}
        onClick={onPrevClick}
        sx={{
          ml: 'auto',
          minWidth: 'auto',
          '& .MuiButton-startIcon': {
            mr: { xs: 0, sm: 0.5 },
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
          Previous
        </Box>
      </Button>
      <Button
        disabled={(page + 1) * rowsPerPage >= count}
        onClick={onNextClick}
        variant="text"
        color="primary"
        size="small"
        endIcon={<IconifyIcon icon="material-symbols:arrow-forward-ios-rounded" />}
        sx={{
          minWidth: 'auto',
          '& .MuiButton-endIcon': {
            ml: { xs: 0, sm: 0.5 },
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
          Next
        </Box>
      </Button>
    </Stack>
  );
};

export default CustomPaginationAction;
