import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MeetingSchedule, Stat } from 'data/e-commerce/greetings';
import dayjs from 'dayjs';

interface GreetingProps {
  stats: Stat[];
  meetingSchedules: MeetingSchedule[];
}

const Greeting = ({ stats, meetingSchedules }: GreetingProps) => {
  return (
    <Paper background={1} sx={{ p: { xs: 3, md: 5 }, height: 1 }}>
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
        <Grid item xs={12}>
          <Stack direction="column" spacing={1}>
            <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
              {dayjs(new Date()).format('dddd, MMM DD, YYYY')}
            </Typography>
            <Stack gap={1} flexWrap="wrap">
              <Typography variant="h4">Good morning,</Typography>
              <Typography variant="h4">Captain!</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="text.secondary" fontWeight={500} mb={2}>
            Here’s what happening with your store today
          </Typography>
          <Stack
            rowGap={2}
            columnGap={2}
            direction={{ xs: 'column', sm: 'row', md: 'column' }}
            justifyContent="space-between"
          >
            {stats.map(({ icon, subtitle, value }) => (
              <Stack
                key={subtitle}
                gap={1}
                flexWrap="wrap"
                direction={{ xs: 'row', sm: 'column', md: 'row' }}
                alignItems={{ xs: 'center', sm: 'start', md: 'center' }}
                sx={{
                  flex: 1,
                  px: { sm: 3, md: 0 },
                  borderLeft: { sm: 1, md: 'none' },
                  borderColor: { sm: 'grey.300' },
                }}
              >
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <IconifyIcon icon={icon} sx={{ fontSize: 24 }} />
                </Avatar>
                <Stack
                  gap={0.5}
                  flexWrap="wrap"
                  alignItems="baseline"
                  direction={{ xs: 'row', sm: 'column', md: 'row' }}
                >
                  <Typography variant="h4">{value}</Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {subtitle}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="text.secondary" fontWeight={500} mb={2}>
            You have 3 meetings today.
          </Typography>
          <List component={Stack} gap={2} direction={{ xs: 'column', sm: 'row', md: 'column' }}>
            {meetingSchedules.map(({ title, time, attendants }) => (
              <ListItemButton
                key={title}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  p: 2,
                  bgcolor: 'neutral.lighter',
                  borderRadius: 2,
                  gap: 1,
                  flex: 1,
                  '&:hover': {
                    backgroundColor: 'grey.200',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  fontSize={16}
                  color="text.primary"
                  sx={{
                    lineClamp: 1,
                  }}
                >
                  {title}
                </Typography>
                <Stack
                  flex={1}
                  gap={2}
                  flexWrap="wrap"
                  direction={{ xs: 'row', sm: 'column', md: 'row' }}
                  alignItems={{ xs: 'end', sm: 'start', md: 'end' }}
                  justifyContent="space-between"
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    {time}
                  </Typography>
                  <AvatarGroup
                    max={3}
                    sx={{
                      mr: 1,
                      '& .MuiAvatar-root': {
                        width: 24,
                        height: 24,
                        fontSize: '0.6rem',
                        '&:first-of-type': {
                          backgroundColor: 'primary.main',
                        },
                      },
                    }}
                  >
                    {attendants.map((attendant) => (
                      <Avatar alt={attendant.name} key={attendant.name} src={attendant.avatar} />
                    ))}
                  </AvatarGroup>
                </Stack>
              </ListItemButton>
            ))}
          </List>

          <Box textAlign="right">
            <Button
              variant="text"
              color="primary"
              size="small"
              endIcon={
                <IconifyIcon
                  icon="material-symbols:open-in-new-rounded"
                  sx={{ height: 18, width: 18 }}
                />
              }
            >
              Open Schedule
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Greeting;
