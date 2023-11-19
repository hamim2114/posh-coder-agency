import React from 'react'
import './TeamPage.scss'
import { Stack } from '@mui/material'
import TeamCard from '../../components/teamCard/TeamCard'

const TeamPage = () => {
  return (
    <div className="teams">
      <div className="top">
        <div className="left">
          <h1><span>//</span> OUR TEAMS <span>//</span></h1>
        </div>
        <div className="right">
          <img style={{opacity: '.9'}} src="/agency-about.jpg" alt="" />
        </div>
      </div>
      <Stack direction={'row'} flexWrap={'wrap'} gap={6} justifyContent={'center'} className="middle">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </Stack>
    </div>
  )
}

export default TeamPage