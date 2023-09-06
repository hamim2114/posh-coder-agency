import './Intro.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { PermPhoneMsg } from '@mui/icons-material';


const Intro = () => {
  return (
    <div className="intro">
      <div className="darkbg"></div>
      <div className="bgc">
        <img src="/bg.jpg" alt="" />
      </div>
      <div className="intro-container">
        <div className="text">
          <Fade cascade triggerOnce className="heading">
            <span className='t1'><Fade cascade triggerOnce damping={.1}>We Are</Fade></span>
            <span className='t2'><Zoom triggerOnce>CREATIVE BRANDING</Zoom></span>
            <Fade cascade triggerOnce damping={.3} className='t3'>AGENCY.</Fade>
          </Fade>
          <div className="btn-txt">
            <Slide cascade triggerOnce direction='up'>
              <Link to='/contact' className="readmore-btn link"> <PermPhoneMsg />Contact Us</Link>
              <p>We can help you channel your potential implementing your idea. We take care of all your needs, crafting specific and targeted solutions.</p>
            </Slide>
          </div>
        </div>
        <div className="icons">
          <Fade cascade triggerOnce>
            <a href="https://www.facebook.com/poshcoderbd" target='blank' className='link'><FacebookIcon /></a>
            {/* <LinkedInIcon />
            <TwitterIcon /> */}
            <a className='link' href="mailto: poshcoderbd@gmail.com"><EmailIcon /></a>
            <a className='link' href="tel: 01790862914"> <PhoneIcon /></a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Intro