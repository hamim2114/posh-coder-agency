import './Footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Fade, Slide } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="top">
          <div className="logo"><Fade cascade damping={.1} triggerOnce>POSH CODER.</Fade> </div>
          <div className="icons">
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <EmailIcon />
            <PhoneIcon />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h4>Let's start working together</h4>
            <h1><Fade cascade damping={.1} triggerOnce>poshcoderbd@gmail.com</Fade></h1>
          </div>
          <div className="right">
            <div className="right1">
              <Slide direction='up' triggerOnce>
                <h1>Services</h1>
                <span>Branding & Identity</span>
                <span>Web Design & Development</span>
                <span>Mobile App Development</span>
                <span>UI & UX Designing</span>
                <span>Digital Marketing</span>
              </Slide>
            </div>
            <div className="right2">
              <Slide direction='up' triggerOnce>
                <h1>Contact Us</h1>
                <span>Bashundhara Residential Area, Dhaka, Bangladesh, 1229</span>
                <span>Phone : +88 01790-862914</span>
                <span>Mail :poshcoderbd@gmail.com</span>
                <span>Working Hours : 8hrs</span>
              </Slide>
            </div>
          </div>
        </div>
        <span className='copyright'>© Copyrights 2023 Posh Coder All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer