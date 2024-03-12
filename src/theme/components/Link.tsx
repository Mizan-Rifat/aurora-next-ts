import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { forwardRef } from 'react';

const Link: Components<Omit<Theme, 'components'>>['MuiLink'] = {
  defaultProps: {
    // component: LinkBehavior,
    underline: 'hover'
  },
  styleOverrides: {
    underlineHover: ({ theme }) => ({
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '1px',
        backgroundColor: theme.palette.primary.main,
        transformOrigin: 'top left',
        transform: 'scaleX(0)',
        opacity: 0,
        transition: 'all 0.25s ease-in'
      },
      '&:hover': {
        textDecoration: 'none',
        '&:after': {
          opacity: 1,
          transform: 'scaleX(1)'
        }
      }
    })
  }
};

export default Link;
