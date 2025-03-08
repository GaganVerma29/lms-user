import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { LineChart, PieChart } from '@mui/x-charts';
import { styles } from '../styles/dashboardStyles';
import { courseCompletionData, courseCategoryData } from '../data/mockData';

const CourseCharts = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={styles.chartContainer}>
          <Typography variant="h6" sx={{ mb: 2 }}>Course Completions Over Time</Typography>
          <LineChart
            dataset={courseCompletionData}
            xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
            series={[{ dataKey: 'completions', color: '#2196f3' }]}
            height={300}
            margin={{ left: 40, right: 40, top: 20, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={styles.chartContainer}>
          <Typography variant="h6" sx={{ mb: 2 }}>Course Categories</Typography>
          <PieChart
            series={[
              {
                data: courseCategoryData,
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 2,
                cornerRadius: 4,
                startAngle: -90,
                endAngle: 270,
              },
            ]}
            height={300}
            margin={{ left: 0, right: 100, top: 20, bottom: 30 }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CourseCharts; 