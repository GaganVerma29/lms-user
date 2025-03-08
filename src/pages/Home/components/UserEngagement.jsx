import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { styles } from '../styles/dashboardStyles';
import { userEngagementData, topCoursesData } from '../data/mockData';

const UserEngagement = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={styles.chartContainer}>
          <Typography variant="h6" sx={{ mb: 2 }}>Daily User Engagement (Hours)</Typography>
          <BarChart
            dataset={userEngagementData}
            xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
            series={[{ dataKey: 'hours', color: '#4caf50' }]}
            height={300}
            margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
            barLabel="value"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={styles.chartContainer}>
          <Typography variant="h6" sx={{ mb: 2 }}>Top Courses</Typography>
          <BarChart
            xAxis={[{ scaleType: 'band', data: topCoursesData.map(item => item.name) }]}
            series={[
              { data: topCoursesData.map(item => item.enrollments), label: 'Enrollments' },
              { data: topCoursesData.map(item => item.completions), label: 'Completions' }
            ]}
            height={300}
            margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserEngagement; 