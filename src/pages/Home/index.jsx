import React, { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  Toolbar, 
  Typography 
} from '@mui/material';
import { styles } from './styles/dashboardStyles';
import StatsCards from './components/StatsCards';
import CourseCharts from './components/CourseCharts';
import UserEngagement from './components/UserEngagement';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="bold">
            Learning Management Dashboard
          </Typography>
        </Toolbar>
        <Box sx={{ px: 2, pb: 2 }}>
          <Button 
            variant={activeTab === 'overview' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('overview')}
            sx={styles.tabButton}
          >
            Overview
          </Button>
          <Button 
            variant={activeTab === 'courses' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('courses')}
            sx={styles.tabButton}
          >
            Courses
          </Button>
          <Button 
            variant={activeTab === 'users' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setActiveTab('users')}
            sx={styles.tabButton}
          >
            Users
          </Button>
        </Box>
      </AppBar>
      <Container maxWidth="xl" sx={{ py: 4, flexGrow: 1 }}>
        {activeTab === 'overview' && (
          <>
            <StatsCards />
            <CourseCharts />
            <UserEngagement />
          </>
        )}
        {activeTab === 'courses' && (
          <>
            <CourseCharts />
            <UserEngagement />
          </>
        )}
        {activeTab === 'users' && (
          <>
            <StatsCards />
            <UserEngagement />
          </>
        )}
      </Container>
    </Box>
  );
};

export default Dashboard;