import { Grid, Paper } from '@mui/material';
import SectionHeader from 'components/common/SectionHeader';
import LocationChart from './LocationChart';
import LocationMap from './LocationMap';
import DashboardSelectMenu from 'components/common/DashboardSelectMenu';
import { clientLocations } from 'data/e-commerce/dashboard';

const ClientsLocations = () => {
  return (
    <Paper
      sx={{ p: { xs: 3, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column' }}
      background={1}
    >
      <SectionHeader
        title="Most clients across countries"
        subTitle="Our client number based on their primary location"
        actionComponent={<DashboardSelectMenu defaultValue={1} />}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} xl={12}>
          <LocationMap
            data={clientLocations}
            sx={{
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              height: { md: '260px !important', xl: '450px !important' },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} xl={12}>
          <LocationChart
            data={clientLocations}
            sx={{
              height: { md: '260px !important' },
              width: '100%',
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ClientsLocations;
