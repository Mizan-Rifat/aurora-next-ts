import { Paper } from '@mui/material';
import StorageBar from './StorageBar';
import DashboardMenu from 'components/common/DashboardMenu';
import SectionHeader from 'components/common/SectionHeader';
import { storages } from 'data/e-commerce/dashboard';

const StorageUsage = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 } }}>
      <SectionHeader
        title="Storage Usage"
        subTitle=" Product categories occupying warehouse space"
        actionComponent={<DashboardMenu />}
      />
      <StorageBar storages={storages} />
    </Paper>
  );
};

export default StorageUsage;
