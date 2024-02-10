import './Team.scss';
import TeamCard from '../teamCard/TeamCard';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { FadeAnimation, SlideAnimation } from '../animations/animations';

const Team = () => {
  return (
    <Stack className="team">
      <span className='team-title'><FadeAnimation damping={0.1} cascade={'cascade'}>Our Teams</FadeAnimation> </span>
      <Stack direction={'row'} justifyContent={'center'} gap={2} mt={5} flexWrap={'wrap'}>
        <SlideAnimation direction='up' damping={0.1} cascade={'cascade'}>
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </SlideAnimation>
      </Stack>
      <Link to='/teams' className='link' style={{
        marginTop: '5rem',
        textAlign: 'center',
        border: '1px solid gray',
        width: '200px',
        padding: '5px 10px',
        alignSelf: 'center'
      }}>All Teams</Link>
    </Stack>
  )
}

export default Team