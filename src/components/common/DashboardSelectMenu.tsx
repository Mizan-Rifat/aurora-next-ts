import { MenuItem } from '@mui/material';
import StyledFormControl from 'components/styled/StyledFormControl';
import StyledSelect from 'components/styled/StyledSelect';

interface DashboardSelectMenuProps {
  options?: {
    value: string | number;
    label: string;
  }[];
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
}
const defaultOptions = [
  {
    value: 1,
    label: 'last month',
  },
  {
    value: 6,
    label: 'last 6 months',
  },
  {
    value: 12,
    label: 'last 12 months',
  },
];

const DashboardSelectMenu = ({
  options = defaultOptions,
  onChange,
  defaultValue,
}: DashboardSelectMenuProps) => {
  const handleChange = (value: string | number) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <StyledFormControl sx={{ width: 150 }} size="small" variant="filled">
      <StyledSelect
        defaultValue={defaultValue}
        onChange={({ target: { value } }) => handleChange(value as string)}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default DashboardSelectMenu;
