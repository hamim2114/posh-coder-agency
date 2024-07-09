import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import { AutoAwesomeOutlined, CampaignOutlined, DoneAllOutlined } from '@mui/icons-material';

const DigitalMarketing = () => {

  return (
    <Stack sx={{ height: '100vh' }} gap={3} mt={{ xs: 10, lg: 0 }}>
      <Typography mb={1} variant='h4'>Digital Marketing</Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Box />
        <Button variant='contained'>Contact us For your Marketing</Button>
      </Stack>
      <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
        Our digital marketing services are designed to boost your online presence and drive business growth. We specialize in creating and implementing effective marketing strategies that reach your target audience.
      </Typography>
      <Typography variant='h5' color='red'>Maximizing your online reach and impact</Typography>
      <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
        We use the latest digital marketing techniques to help you achieve your business goals. Our team is dedicated to delivering results and maximizing your return on investment.
      </Typography>
      <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
      <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={2}>
          <AutoAwesomeOutlined sx={{
            bgcolor: 'red',
            p: 1.5,
            borderRadius: '50%'
          }} fontSize='large' />
          <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Marketing <br /> Strategies</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' gap={2}>
          <DoneAllOutlined sx={{
            bgcolor: 'red',
            p: 1.5,
            borderRadius: '50%'
          }} fontSize='large' />
          <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Proven Results <br /> Record</Typography>
        </Stack>
        <Stack direction='row' alignItems='center' gap={2}>
          <CampaignOutlined sx={{
            bgcolor: 'red',
            p: 1.5,
            borderRadius: '50%'
          }} fontSize='large' />
          <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely <br /> Campaigns</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default DigitalMarketing