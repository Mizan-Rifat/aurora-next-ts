import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
  fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
  h1: {
    fontWeight: 700,
    fontSize: '3rem', // 48px
    lineHeight: 1.16,
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.625rem', // 42px
    lineHeight: 1.15,
  },
  h3: {
    fontWeight: 700,
    fontSize: '2rem', // 32px
    lineHeight: 1.12,
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.75rem', // 28px
    lineHeight: 1.15,
  },
  h5: {
    fontWeight: 700,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.15,
  },
  h6: {
    fontWeight: 700,
    fontSize: '1.3125rem', // 21px
    lineHeight: 1.2,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.3,
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.3,
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.45,
  },
  button: {
    fontWeight: 700,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.286,
    textTransform: 'capitalize',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.2,
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.2,
    textTransform: 'uppercase',
  },
};

export default typography;
