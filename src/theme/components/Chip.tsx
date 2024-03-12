import { ChipProps, ComponentsVariants, Palette, PaletteColor, Theme, alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import IconifyIcon from 'components/base/IconifyIcon';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    soft: true;
  }
}

const chipColors: (keyof Palette)[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
];

//Button soft variants
const chipSoftVariants: ComponentsVariants['MuiChip'] = chipColors.map((color) => ({
  props: { variant: 'soft', color: color as ChipProps['color'] },
  style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
    const paletteColor = theme.palette[color] as PaletteColor;
    return {
      background: alpha(paletteColor.light, 0.1),
      color: paletteColor.dark,
      '&.MuiChip-clickable': {
        '&:hover': {
          background: alpha(paletteColor.light, 0.2),
        },
      },
    };
  },
}));

const Chip: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  variants: [
    ...chipSoftVariants,
    {
      props: { variant: 'soft', color: 'default' },
      style: ({ theme }: { theme: Omit<Theme, 'components'> }) => {
        const paletteColor = theme.palette.neutral;
        return {
          background: alpha(paletteColor.light, 0.1),
          color: paletteColor.dark,
          '&:hover': {
            background: alpha(paletteColor.light, 0.2),
          },
        };
      },
    },
  ],
  defaultProps: {
    deleteIcon: <IconifyIcon icon="material-symbols:close-rounded" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&.MuiChip-filledDefault': {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.common.white,
        '.MuiChip-deleteIcon': {
          color: alpha(theme.palette.common.white, 0.7),
          '&:hover': {
            color: theme.palette.common.white,
          },
        },
      },
    }),
    icon: {
      margin: 0,
    },
    clickable: ({ theme }) => ({
      '&.MuiChip-filledDefault': {
        '&:hover': {
          backgroundColor: theme.palette.grey[900],
        },
      },
      '&.MuiChip-outlinedDefault': {
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },
      },
    }),
    sizeSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    }),
    labelSmall: ({ theme }) => ({
      paddingLeft: theme.spacing(0.75),
      paddingRight: theme.spacing(0.75),
      ...theme.typography.subtitle2,
    }),
    sizeMedium: ({ theme }) => ({
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    }),
    labelMedium: ({ theme }) => ({
      paddingLeft: theme.spacing(0.75),
      paddingRight: theme.spacing(1),
      ...theme.typography.subtitle2,
    }),
    avatar: {
      margin: 0,
    },
  },
};

export default Chip;
