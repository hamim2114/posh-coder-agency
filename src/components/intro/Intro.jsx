import './Intro.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import { PermPhoneMsg } from '@mui/icons-material';
import {Box} from '@mui/material'
import { FadeAnimation, SlideAnimation } from '../animations/animations';


const Intro = () => {
  return (
    <div className="intro">
      <div className="darkbg"></div>
      <div className="bgc">
        <img src="/bg.jpg" alt="" />
      </div>
      <div className="intro-container">
        <div className="text">
          <div className="heading">
              <span className='t1'><FadeAnimation damping={.1} cascade={'cascade'}>We Are</FadeAnimation></span>
              <Box display={{xs: 'none',md: 'flex'}} className='t2'><FadeAnimation damping={.1} delay={100} cascade={'cascade'}>CREATIVE BRANDING</FadeAnimation></Box>
              <Box display={{xs: 'flex',md: 'none'}} className='t2'><FadeAnimation damping={.1} delay={500} cascade={'cascade'}>CREATIVE</FadeAnimation></Box>
              <Box display={{xs: 'flex',md: 'none'}} className='t4'><FadeAnimation damping={.1} delay={1000} cascade={'cascade'} >BRANDING</FadeAnimation></Box>
              <div className='t3'><FadeAnimation damping={.3} cascade={'cascade'} delay={1500}>AGENCY.</FadeAnimation></div>
          </div>
          <div className="btn-txt">
            <SlideAnimation cascade direction='up'>
              <Link to='' className="readmore-btn link"> <PermPhoneMsg />Contact Us</Link>
              <p>We can help you channel your potential implementing your idea. We take care of all your needs, crafting specific and targeted solutions.</p>
            </SlideAnimation>
          </div>
        </div>
        <div className="icons">
          <FadeAnimation>
            <a to="https://www.facebook.com/poshcoderbd" target='blank' className='link'><FacebookIcon /></a>
            <LinkedInIcon />
            <TwitterIcon />
            <a className='link' to="mailto: poshcoderbd@gmail.com"><EmailIcon /></a>
            <a className='link' to="tel: 01790862914"> <PhoneIcon /></a>
          </FadeAnimation>
        </div>
      </div>
    </div>
  )
}

export default Intro