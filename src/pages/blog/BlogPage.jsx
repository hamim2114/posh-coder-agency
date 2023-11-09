import React from 'react'
import './BlogPage.scss'
import BlogCard from '../../components/blogCard/BlogCard'
import { Stack } from '@mui/material'

const BlogPage = () => {
  return (
    <div className="blog">
      <div className="top">
        <div className="left">
          <h1><span>//</span> OUR BLOG <span>//</span></h1>
        </div>
        <div className="right">
          <img src="/blog-4.jpg" alt="" />
        </div>
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