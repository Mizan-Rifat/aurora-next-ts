import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Accordion: Components<Omit<Theme, 'components'>>['MuiAccordion'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: '1rem !important',
      '&:before': {
        display: 'none',
      },

      '&.Mui-expanded': {
        backgroundColor: theme.palette.grey[100],
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    }),
  },
};

export const AccordionSummary: Components<Omit<Theme, 'components'>>['MuiAccordionSummary'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      gap: '0.5rem',
      flexDirection: 'row-reverse',
      padding: '0 1.5rem',
    },
    expandIconWrapper: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
    content: {
      margin: '1.5rem 0',
      '&.Mui-expanded': {
        margin: '1.5rem 0',
      },
    },
  },
};

export const AccordionDetails: Components<Omit<Theme, 'components'>>['MuiAccordionDetails'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: '0 1.5rem 1.5rem 3.5rem',

      '& .MuiTypography-root': {
        fontWeight: 500,
        color: theme.palette.text.secondary,
      },
    }),
  },
};

export default Accordion;
