import React from 'react'
import Intro from '../components/intro/Intro'
import Service from '../components/service/Service'
import Skills from '../components/skills/Skills'
import Experience from '../components/experience/Experience'
import Slidetext from '../components/slideText/Slidetext'
import Achive from '../components/achive/Achive'
import Team from '../components/team/Team'
import Testimonial from '../components/testimonial/Testimonial'
import AskedQ from '../components/askedQ/AskedQ'
import JoinUs from '../components/joinUs/JoinUs'
import SomeBlog from '../components/some-blog/SomeBlog'

const HomePage = () => {
  return (
    <div>
      <Intro />
      <Service />
      <Skills />
      <Experience />
      <Slidetext />
      <Achive />
      <Team />
      <Testimonial />
      <AskedQ />
      <SomeBlog/>
      <JoinUs />
    </div>
  )
}

export default HomePage