import './Team.scss';

const Team = () => {
  return (
    <div className="team">
      <span className='team-title'>Our Teams</span>
      <div className="team-card-container">
        <div className="team-card">
          <img src="/team-1-1.jpg" alt="" />
          <div className="card-bottom">
            <span>Senior Developer</span>
            <div className='card-title'>Mike Hardson</div>
          </div>
        </div>
        <div className="team-card">
          <img src="/team-1-2.jpg" alt="" />
          <div className="card-bottom">
            <span>Content Writer</span>
            <div className='card-title'>Aleesha brown</div>
          </div>
        </div>
        <div className="team-card">
          <img src="/team-1-3.jpg" alt="" />
          <div className="card-bottom">
            <span>Junior Developer</span>
            <div className='card-title'>Kevin martin</div>
          </div>
        </div>
        <div className="team-card">
          <img src="/team-1-4.jpg" alt="" />
          <div className="card-bottom">
            <span>Senior Designer
</span>
            <div className='card-title'>Sarah albert</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team