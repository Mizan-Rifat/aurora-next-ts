import { ClickAwayListener, Fade, Paper, Popper } from '@mui/material';
import { PropsWithChildren } from 'react';

interface NavItemPopperProps {
  anchorEl: HTMLElement;
  handleClose: () => void;
  open: boolean;
  level: number;
}

const NavItemPopper = ({
  anchorEl,
  handleClose,
  open,
  children,
  level,
}: PropsWithChildren<NavItemPopperProps>) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="right-start"
      transition
      sx={{
        zIndex: 1201,
      }}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, level === 0 ? 20 : 8],
          },
        },
      ]}
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper
            sx={(theme) => ({
              boxShadow: theme.shadows[3],
              p: 1,
              position: 'relative',
              borderRadius: 2,
              '&:before': {
                content: '""',
                position: 'absolute',
                height: '100%',
                width: 20,
                left: -20,
              },
            })}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div>{children}</div>
            </ClickAwayListener>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default NavItemPopper;
