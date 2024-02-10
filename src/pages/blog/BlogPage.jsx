import React from 'react'
import './BlogPage.scss'
import BlogCard from '../../components/blogCard/BlogCard'
import { Stack } from '@mui/material'

const BlogPage = () => {
  return (
    <div className="blog">
      <div className="top">
        <span className='top-title'>OUR BLOG</span>
      </div>
      <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} className="middle">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </Stack>
    </div>
  )
}

export default BlogPage