import alligator from 'assets/icons/alligator.webp';
import check_mark from 'assets/icons/check_mark.webp';
import head_mead from 'assets/icons/head_mead.webp';
import stripes from 'assets/icons/stripes.webp';
import { blue, grey } from 'theme/colors';

export interface Share {
  id: number;
  icon: string;
  brand: string;
  revenue: number;
  growth: number;
}

export const shares: Share[] = [
  {
    id: 1,
    icon: alligator,
    brand: 'Alligator',
    revenue: 32.2,
    growth: 6.01,
  },
  {
    id: 2,
    icon: check_mark,
    brand: 'CheckMark',
    revenue: 30.1,
    growth: 4.12,
  },
  {
    id: 3,
    icon: stripes,
    brand: 'Stripes',
    revenue: 22.1,
    growth: -3.91,
  },
  {
    id: 4,
    icon: head_mead,
    brand: 'Head & Mead',
    revenue: 15.6,
    growth: 0.01,
  },
];

export const brandColorMap: { [key: string]: string } = {
  Alligator: blue[300],
  CheckMark: grey[300],
  Stripes: grey[500],
  'Head & Mead': blue[500],
};
