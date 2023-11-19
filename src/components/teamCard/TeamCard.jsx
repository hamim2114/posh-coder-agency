import React from 'react'
import './TeamCard.scss'

const TeamCard = () => {
  return (
    <div className="team-card">
      <img src="/team-1-1.jpg" alt="" />
      <div className="card-bottom">
        <span>Senior Developer</span>
        <div className='card-title'>Mike Hardson</div>
      </div>
    </div>
  )
}

export default TeamCard