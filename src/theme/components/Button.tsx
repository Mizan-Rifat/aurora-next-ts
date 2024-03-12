import {
  ButtonProps,
  ComponentsVariants,
  Palette,
  PaletteColor,
  Theme,
  alpha
} from '@mui/material';
import { Components } from '@mui/material/styles/components';
import { grey } from 'theme/colors';
// import { LinkBehavior } from './Link';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
    dashed: true;
  }

  interface ButtonPropsColorOverrides {
    neutral: true;
  }
  interface IconButtonPropsColorOverrides {
    neutral: true;
  }

  interface ButtonClasses {
    outlinedNeutral: true;
  }

  interface ButtonOwnProps {
    shape?: 'square' | 'circle';
  }
}

const btnColors: (keyof Palette)[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error'
];

//Button soft variants
const btnCustomVariants: ComponentsVariants['MuiButton'] = btnColors.map(color => ({
  props: { variant: 'soft', color: color as ButtonProps['color'] },
  style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
    const paletteColor = theme.palette[color] as PaletteColor;
    return {
      background: alpha(paletteColor.light, 0.1),
      color: paletteColor.dark,
      '&:hover': {
        background: alpha(paletteColor.light, 0.2)
      }
    };
  }
}));

//Button soft neutral variant
btnCustomVariants.push({
  props: { variant: 'soft', color: 'neutral' },
  style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
    const paletteColor = theme.palette.neutral;
    return {
      background: paletteColor.lighter,
      color: paletteColor.dark,
      '&:hover': {
        background: grey[200]
      }
    };
  }
});

const shapes = ['circle', 'square'];
const sizes: {
  [key: string]: number;
} = { small: 30, medium: 36, large: 42 };

const btnShapeVariants: ComponentsVariants['MuiButton'] = [];

shapes.forEach(shape => {
  Object.keys(sizes).forEach(size => {
    btnShapeVariants.push({
      props: { shape: shape as ButtonProps['shape'], size: size as ButtonProps['size'] },
      style: {
        height: sizes[size],
        minWidth: sizes[size],
        padding: 0,
        borderRadius: shape === 'circle' ? '50%' : undefined
      }
    });
  });
});

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  variants: [...btnCustomVariants, ...btnShapeVariants],
  defaultProps: {
    disableElevation: true
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: '14px',
      borderRadius: '8px',
      padding: theme.spacing(1, 2),
      lineHeight: 1.429
    }),
    sizeLarge: {
      fontSize: '16px',
      padding: '10px 22px',
      lineHeight: 1.375
    },
    sizeSmall: {
      padding: '6px 10px',
      lineHeight: 1.286
    },
    outlinedSizeLarge: {
      paddingTop: '9px',
      paddingBottom: '9px'
    },
    outlinedSizeMedium: {
      paddingTop: '7px',
      paddingBottom: '7px'
    },
    outlinedSizeSmall: {
      paddingTop: '5px',
      paddingBottom: '5px'
    },

    startIcon: {
      '& > *:first-of-type': {
        fontSize: 14
      }
    },
    endIcon: {
      '& > *:first-of-type': {
        fontSize: 14
      }
    },
    iconSizeLarge: {
      '& > *:first-of-type': {
        fontSize: 16
      }
    },
    outlinedNeutral: ({ theme }) => ({
      borderColor: grey[500],
      '&:hover': {
        backgroundColor: theme.palette.neutral.lighter
      }
    })
  }
};

export const ButtonBase: Components<Omit<Theme, 'components'>>['MuiButtonBase'] = {
  defaultProps: {
    // LinkComponent: LinkBehavior,
  }
};
export default Button;
