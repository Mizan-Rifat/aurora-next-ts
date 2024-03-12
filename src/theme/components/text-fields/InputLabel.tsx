import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ ownerState }) => {
      return {
        //@ts-ignore
        left: ownerState.formControl.adornedStart && ownerState.variant !== 'outlined' ? 30 : 0,
      };
    },
    sizeSmall: ({ ownerState }) => ({
      //@ts-ignore
      left: ownerState.formControl.adornedStart && ownerState.variant !== 'outlined' ? 24 : 0,
    }),
    filled: ({ ownerState }) => {
      const applyShrink =
        //@ts-ignore
        !ownerState.formControl.adornedStart || ownerState.focused || ownerState.formControl.filled;

      return {
        transform: 'translate(12px, 14px) scale(1)',
        lineHeight: 1.3,
        '&.MuiInputLabel-shrink': {
          transform: applyShrink ? 'translate(12px, 6px) scale(.7)' : undefined,
        },
        '&.MuiInputLabel-sizeSmall': {
          transform: 'translate(12px, 11px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: applyShrink ? 'translate(12px, 4px) scale(.65)' : undefined,
          },
        },
        '&.MuiInputLabel-sizeLarge': {
          transform: 'translate(12px, 17px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: applyShrink ? 'translate(12px, 6px) scale(.75)' : undefined,
          },
        },
      };
    },
    outlined: () => {
      return {
        transform: 'translate(12px, 7px) scale(1)',
        lineHeight: 1.3,
        '&.MuiInputLabel-shrink': {
          fontWeight: 500,
          transform: 'translate(14px, -7px) scale(.7)',
        },
        '&.MuiInputLabel-sizeSmall': {
          fontSize: '14px',
          transform: 'translate(12px, 4px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -7px) scale(.75)',
          },
        },
        '&.MuiInputLabel-sizeLarge': {
          transform: 'translate(12px, 11px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -7px) scale(.75)',
          },
        },
      };
    },
    standard: () => {
      return {
        '&.MuiInputLabel-shrink': {
          transform: 'translate(0, 0) scale(.75)',
        },
      };
    },
  },
};

export default InputLabel;
