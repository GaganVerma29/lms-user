import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styles } from '../styles/dashboardStyles';
import { dashboardStats } from '../data/mockData';

const StatsCards = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={styles.statsCard}>
          <Typography sx={{ ...styles.statsNumber, color: '#2196f3' }}>
            {dashboardStats.activeUsers}
          </Typography>
          <Typography sx={styles.statsLabel}>Active Users</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={styles.statsCard}>
          <Typography sx={{ ...styles.statsNumber, color: '#4caf50' }}>
            {dashboardStats.coursesCompleted}
          </Typography>
          <Typography sx={styles.statsLabel}>Courses Completed</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={styles.statsCard}>
          <Typography sx={{ ...styles.statsNumber, color: '#ff9800' }}>
            {dashboardStats.avgCompletionRate}%
          </Typography>
          <Typography sx={styles.statsLabel}>Avg. Completion Rate</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper sx={styles.statsCard}>
          <Typography sx={{ ...styles.statsNumber, color: '#9c27b0' }}>
            {dashboardStats.totalCourses}
          </Typography>
          <Typography sx={styles.statsLabel}>Total Courses</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatsCards; 