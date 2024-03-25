import React, { ReactElement } from 'react';
import SearchTextField from './SearchTextField';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { Button, Dialog, Fade, Popover } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import SearchResult from './SearchResult';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Fade ref={ref} {...props} />;
});

const SearchBox = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { useUp } = useBreakpoints();
  const upMd = useUp('md');

  const open = Boolean(anchorEl);

  return (
    <div>
      {upMd ? (
        <>
          <SearchTextField
            InputProps={{
              onClick: handleClick,
            }}
          />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            elevation={3}
            transitionDuration={150}
            TransitionComponent={Transition}
            slotProps={{
              paper: {
                variant: 'elevation',
                sx: {
                  width: { xs: 300, sm: 480 },
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                },
              },
              root: {
                slotProps: {
                  backdrop: {
                    invisible: false,
                  },
                },
              },
            }}
          >
            <SearchResult handleClose={handleClose} />
          </Popover>
        </>
      ) : (
        <>
          <Button color="neutral" shape="circle" onClick={handleClick}>
            <IconifyIcon icon="material-symbols:search-rounded" sx={{ fontSize: 20 }} />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            PaperProps={{
              sx: {
                width: '100%',
                borderRadius: 2,
                outline: 'none',
              },
            }}
          >
            <SearchResult handleClose={handleClose} />
          </Dialog>
        </>
      )}
    </div>
  );
};

export default SearchBox;
