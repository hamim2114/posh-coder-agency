import { Stack, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useUserInfo } from '../../hook/useUserInfo';

const Dashboard = () => {
    const { userInfo } = useUserInfo();

    return (
        <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: '16px', minHeight: '100vh' }} maxWidth='xl'>
            {/* Welcome Section */}
            <Stack alignItems='center' mb={4} sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: '16px' }} direction='row' justifyContent='space-between'>
                <Box p={4} flex={2}>
                    <Typography variant='h4' mb={1}>
                        Hello, {userInfo?.username}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: '14px' }} mb={3}>
                        Let's make today productive!
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: '20px' }}>
                        Start planning and grow with PoshCoder!
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' }, pt: 2 }} flex={1}>
                    <img style={{ width: '300px', height: '250px' }} src="/about-img10.png" alt="Inspiration" />
                </Box>
            </Stack>

            {/* Daily Inspiration Section */}
            <Box mb={4}>
                <Typography variant='h5' mb={2}>
                    Daily Inspiration
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ bgcolor: 'primary.light', color: '#fff' }}>
                            <CardContent>
                                <Typography variant='h6' gutterBottom>
                                    Stay Motivated!
                                </Typography>
                                <Typography variant='body2'>
                                    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ bgcolor: 'secondary.light', color: '#fff' }}>
                            <CardContent>
                                <Typography variant='h6' gutterBottom>
                                    Keep Learning!
                                </Typography>
                                <Typography variant='body2'>
                                    "The only limit to our realization of tomorrow is our doubts of today."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ bgcolor: 'success.light', color: '#fff' }}>
                            <CardContent>
                                <Typography variant='h6' gutterBottom>
                                    Set Goals!
                                </Typography>
                                <Typography variant='body2'>
                                    "Setting goals is the first step in turning the invisible into the visible."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Quick Actions Section */}
            {/* <Box mb={4}>
                <Typography variant='h5' mb={2}>
                    Quick Actions
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' color='primary' sx={{ borderRadius: '8px' }}>
                        Start New Project
                    </Button>
                    <Button variant='contained' color='secondary' sx={{ borderRadius: '8px' }}>
                        View Your Orders
                    </Button>
                    <Button variant='contained' color='success' sx={{ borderRadius: '8px' }}>
                        Check Notifications
                    </Button>
                </Stack>
            </Box> */}

            {/* Progress Overview Section */}
            <Box>
                <Typography variant='h5' mb={2}>
                    Your Progress
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6'>Completed Order</Typography>
                                <Typography variant='h4'>
                                    {
                                        userInfo?.orders?.filter(item => item.status === 'delivered').length
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6'>Pending Order</Typography>
                                <Typography variant='h4'>
                                    {
                                        userInfo?.orders?.filter(item => (item.status === 'placed') || (item.status === 'confirmed') || (item.status === 'processing')).length
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6'>Cancelled Order</Typography>
                                <Typography variant='h4'>
                                    {
                                        userInfo?.orders?.filter(item => item.status === 'cancelled').length
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
