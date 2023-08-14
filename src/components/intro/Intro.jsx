import './Intro.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const Intro = () => {
  return (
    <div className="intro">
      <div className="darkbg"></div>
      <div className="bgc">
        <img src="/bg.jpg" alt="" />
      </div>
      <div className="intro-container">
        <div className="text">
          <h1><span className='t1'>We Are</span> <br />CREATIVE BRANDING <br /><span className='t2'>AGENCY.</span> </h1>
          <div className="btn-txt">
            <div className="readmore-btn"> <NorthEastIcon />Contact Us</div>
            <p>We can help you channel your potential implementing your idea. We take care of all your needs, crafting specific and targeted solutions.</p>
          </div>
        </div>
        <div className="icons">
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
          <EmailIcon />
          <PhoneIcon />
        </div>
      </div>
    </div>
  )
}

export default Intro