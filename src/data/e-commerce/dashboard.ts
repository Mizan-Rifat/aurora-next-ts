export interface Storage {
  label: string;
  value: number;
}

export interface ClientLocation {
  name: string;
  value: number;
}

export interface ComparisonChartData {
  currentYear: number[];
  lastYear: number[];
}

export const generatedRevenueData: ComparisonChartData = {
  currentYear: [
    200000, 120000, 160000, 140000, 260000, 160000, 175000, 180000, 110000, 130000, 80000, 160000,
    160000, 150000, 90000,
  ],
  lastYear: [
    100000, 150000, 95000, 95000, 98000, 140000, 130000, 150000, 150000, 160000, 255000, 140000,
    140000, 160000, 160000,
  ],
};

export const storages: Storage[] = [
  { label: 'Bed', value: 20 },
  { label: 'Table', value: 30 },
  { label: 'Couch', value: 40 },
  { label: 'Unoccupied', value: 10 },
];

export const clientLocations: ClientLocation[] = [
  { name: 'Japan', value: 44000 },
  { name: 'Greenland', value: 41000 },
  { name: 'India', value: 38000 },
  { name: 'Egypt', value: 27000 },
  { name: 'Mexico', value: 19000 },
  { name: 'Angola', value: 13000 },
  { name: 'Colombia', value: 11000 },
  { name: 'Finland', value: 7000 },
];

export const visitorRevenueChartData: ComparisonChartData = {
  currentYear: [600, 400, 530, 210, 300, 400, 600],
  lastYear: [500, 480, 200, 250, 250, 280, 280],
};

export const monthlyProfitChartData: ComparisonChartData = {
  currentYear: [0, 400, 250, 300, 80, 600],
  lastYear: [100, 250, 150, 200, 400, 250],
};
