import { Chip, ChipOwnProps, styled } from '@mui/material';

interface StyledChipProps extends ChipOwnProps {
  iconPosition?: 'start' | 'end';
}

const StyledChip = styled((props: StyledChipProps) => <Chip {...props} />, {
  shouldForwardProp: (prop) => prop !== 'iconPosition',
})(({ iconPosition }) => ({
  ...(iconPosition === 'end' && {
    '& .MuiChip-icon': {
      order: 1,
    },
  }),
}));

export default StyledChip;
