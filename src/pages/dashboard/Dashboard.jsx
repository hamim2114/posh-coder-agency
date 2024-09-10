import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useUserInfo } from '../../hook/useUserInfo'

const Dashboard = () => {
    const { userInfo } = useUserInfo()
    return (
        <Box sx={{
            bgcolor: '#fff',
            p: 3, borderRadius: '16px',
            minHeight: '100vh'
        }} maxWidth='lg'>

            <Stack alignItems='center' mb={4} sx={{
                bgcolor: 'primary.main',
                color: '#fff',
                borderRadius: '16px'
            }} direction='row' justifyContent='space-between'>
                <Box p={4} flex={2}>
                    <Typography variant='h4' mb={1}>
                        Hello,{' '}
                        {userInfo?.username}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: '14px' }} mb={3}>Lets do something today!</Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: '20px' }}>Set your marketing plan and growth with PoshCoder!</Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' }, pt: 2 }} flex={1}>
                    <img style={{ width: '200x', height: '250px' }} src="/about-img10.png" alt="" />
                </Box>
            </Stack>

        </Box>
    )
}

export default Dashboard