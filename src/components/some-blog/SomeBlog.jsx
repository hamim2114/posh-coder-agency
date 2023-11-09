import React from 'react'
import './SomeBlog.scss'
import { Stack, Typography } from '@mui/material'
import BlogCard from '../blogCard/BlogCard'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal';

const SomeBlog = () => {
  return (
    <Stack className="some-blog">
        <h1 className='h1'>Some From <span><Fade cascade triggerOnce damping={.1}>Blogs</Fade> </span></h1>
        <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Stack>
        <Link to='/blog' className='link' style={{
          marginTop: '5rem',
          textAlign: 'center',
          border: '1px solid gray',
          width: '200px',
          padding: '5px 10px',
          alignSelf: 'center'
        }}>All Blogs</Link>
      </Stack>
  )
}

export default SomeBlog