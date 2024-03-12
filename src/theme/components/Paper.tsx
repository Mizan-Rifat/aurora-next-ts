import { PaperProps, Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { blue, grey } from 'theme/colors';

declare module '@mui/material' {
  interface PaperPropsVariantOverrides {
    default: true;
  }

  interface PaperOwnProps {
    background?: 1 | 2 | 3 | 4 | 5;
  }
}

const backgrounds: { [key: number]: string } = {
  1: grey[50],
  2: grey[100],
  3: grey[200],
  4: grey[300],
  5: blue[50],
};

const backgroundVariants = Object.keys(backgrounds).map((background) => ({
  props: { background: Number(background) as PaperProps['background'] },
  style: {
    '&.MuiPaper-root': {
      background: backgrounds[Number(background)],
    },
  },
}));

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  variants: [
    {
      props: { variant: 'default' },
      style: ({ theme }) => ({
        border: 'none',
        outline: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: 0,
      }),
    },
    ...backgroundVariants,
  ],
  defaultProps: {
    variant: 'default',
    elevation: 3,
  },
  styleOverrides: {
    root: {
      borderRadius: 8,
    },
  },
};

export default Paper;
