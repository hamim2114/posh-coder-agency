import { Fade, Slide } from 'react-awesome-reveal';
import './Team.scss';
import TeamCard from '../teamCard/TeamCard';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <Stack className="team">
      <span className='team-title'><Fade cascade triggerOnce damping={0.1}>Our Teams</Fade> </span>
      <Stack direction={'row'} justifyContent={'center'} gap={5} mt={5} flexWrap={'wrap'}>
        <Slide direction='up' triggerOnce damping={0.1} cascade>
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </Slide>
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