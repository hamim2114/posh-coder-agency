import React from 'react'
import './TeamPage.scss'
import { Stack } from '@mui/material'
import TeamCard from '../../components/teamCard/TeamCard'

const TeamPage = () => {
  return (
    <div className="teams">
      <div className="top">
        <span className='top-title'>OUR TEAMS</span>
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