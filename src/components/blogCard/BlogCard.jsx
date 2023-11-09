import { Person2 } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <Link to='/blog/25372' className='link'>
      <Stack gap={1.5} sx={{
        width: '350px',
        cursor: 'pointer'
      }}>
        <Box sx={{
          width: '350px',
          height: '250px'
        }}>
          <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px'
          }} src="/blog-3.jpg" alt="" />
        </Box>
        <Stack direction='row' gap={2}>
          <Stack direction='row' gap={1} alignItems='center'>
            <Person2 />
            <Typography>Admin</Typography>
          </Stack>
          <Typography sx={{
            fontSize: '12px',
            bgcolor: 'gray',
            p: '3px 10px',
            borderRadius: '5px'
          }}>Web Artical</Typography>
        </Stack>
        <Typography variant='h5' sx={{ fontSize: '22px' }}>ডোমেইন এবং হোস্টিং কেনার আগে অবশ্যই মনে রাখবেন</Typography>
        <Typography variant='body2'>ডোমেইন এবং হোস্টিং কেনার আগে যে সব বিষয় অবশ্যই খেয়াল রাখবেন ব্যবসায়িক বা ব্যক্তিগত প্রয়োজনে ওয়েবসাইট তৈরী করতে হয়। <span style={{
          color: 'lightblue'
        }}>Read More</span></Typography>
      </Stack>
    </Link>
  )
}

export default BlogCard