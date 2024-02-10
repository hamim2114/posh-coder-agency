import { Stack, Typography } from '@mui/material';
import './JoinUs.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Link } from 'react-router-dom';
import { SlideAnimation } from '../animations/animations';

const JoinUs = () => {
  return (
    <>
      <div className="join-us">
        <div className="wrapper">
          <div className="left">
            <SlideAnimation direction='up'>
              <span>Don't Late, Contact Us Today!</span>
              <p>Explore Select, Our Premimum Solution For Branding & Business.</p>
            </SlideAnimation>
          </div>
          <div className="right">
            <SlideAnimation direction='right'>
              <Link href='/contact' className="contact-btn link">
                Contact Now
                <TrendingFlatIcon />
              </Link>
            </SlideAnimation>
          </div>
        </div>
      </div>
      <div className="client-logo">
        {/* <h3>Trusted By</h3> */}
        <div className="client-logo-container">
          <SlideAnimation direction='up'>
            <img src="/Client-Logo-02.svg" alt="" />
            <img src="/Client-Logo-03.svg" alt="" />
            <img src="/Client-Logo-04.svg" alt="" />
            <img src="/Client-Logo-05.svg" alt="" />
            <img src="/Client-Logo-03.svg" alt="" />
          </SlideAnimation>
        </div>
      </div>
    </>
  )
}

export default JoinUs