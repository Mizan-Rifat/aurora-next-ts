import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from '@mui/lab';
import { Box, Paper, Stack, Typography } from '@mui/material';
import SectionHeader from 'components/common/SectionHeader';
import { grey } from 'theme/colors';
import DashboardSelectMenu from 'components/common/DashboardSelectMenu';
import IconifyIcon from 'components/base/IconifyIcon';
import { activities } from 'data/e-commerce/activities';

const RecentActivities = () => {
  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, height: 1 }}>
      <Stack direction="column" sx={{ height: 1 }}>
        <SectionHeader
          title="Recent activities"
          subTitle="Details on shopping competion"
          actionComponent={<DashboardSelectMenu defaultValue={1} />}
        />

        <Box
          sx={{
            flexGrow: 1,
            flexBasis: { md: 0, xl: '100%' },
            height: '100%',
            overflowY: { md: 'scroll' },
            maxHeight: { xl: 540 },
          }}
        >
          <Timeline
            sx={{
              p: 0,
              m: 0,
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {activities.map((activity, index) => (
              <TimelineItem sx={{ mb: 1 }} key={activity.id}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      mt: 0,
                      mb: 1,
                      boxShadow: 'none',
                      border: 0,
                      p: 1,
                      backgroundColor: 'primary.lighter',
                    }}
                  >
                    <IconifyIcon
                      icon={activity.icon}
                      sx={{ fontSize: 16, color: 'primary.dark' }}
                    />
                  </TimelineDot>
                  {index !== activities.length - 1 && (
                    <TimelineConnector sx={{ backgroundColor: grey[200], width: '1px' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent
                  sx={{ pb: index !== activities.length - 1 ? { xs: 3, xl: 5 } : 0, pt: 0 }}
                >
                  <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5 }}>
                    {activity.title}
                  </Typography>
                  <Stack
                    justifyContent="space-between"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineClamp: 2 }}>
                      {activity.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="medium"
                      sx={{ color: 'text.disabled', flexShrink: 0 }}
                      noWrap
                    >
                      {activity.time}
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Stack>
    </Paper>
  );
};

export default RecentActivities;
