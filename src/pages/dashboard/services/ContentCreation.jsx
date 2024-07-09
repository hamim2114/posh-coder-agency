import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import { AutoAwesomeOutlined, CampaignOutlined, DoneAllOutlined } from '@mui/icons-material';

const ContentCreation = () => {

  return (
    <Stack sx={{ height: '100vh' }} gap={3} mt={{ xs: 10, lg: 0 }}>
      <Typography mb={1} variant='h4'>Content Writing</Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Box />
        <Button variant='contained'>Contact us For your Content</Button>
      </Stack>
      <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
        Our content writing services are designed to help you create engaging and informative content for your business. We specialize in producing high-quality articles, blogs, and more.
      </Typography>
      <Typography variant='h5' color='red'>Elevate your brand with compelling content</Typography>
      <Typography variant='body' sx={{ color: 'rgb(199, 199, 199)', fontWeight: '300' }}>
        We understand the power of words and use them to convey your message effectively to your target audience. Let us enhance your online presence with our content.
      </Typography>
      <Typography variant='h4' mt={6}>Why Choose Us?</Typography>
      <Stack direction={{ xm: 'column', md: 'row' }} gap={3} justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={2}>
          <AutoAwesomeOutlined sx={{
            bgcolor: 'red',
            p: 1.5,
            borderRadius: '50%'
          }} fontSize='large' />
          <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Creative Content <br /> Writing</Typography>
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
          <Typography variant='h6' sx={{ color: 'rgb(199, 199, 199)' }}>Timely Delivery</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ContentCreation