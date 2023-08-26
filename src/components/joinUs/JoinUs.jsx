import './JoinUs.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <>
      <div className="join-us">
        <div className="wrapper">
          <div className="left">
            <span>Don't Late, Contact Us Today!</span>
            <p>Explore Select, Our Premimum Solution For Branding & Business.</p>
          </div>
          <div className="right">
            <Link to='/contact' className="contact-btn link">
              Contact Now
              <TrendingFlatIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="client-logo">
      {/* <h3>Trusted By</h3> */}
        <div className="client-logo-container">
          <img src="/Client-Logo-02.svg" alt="" />
          <img src="/Client-Logo-03.svg" alt="" />
          <img src="/Client-Logo-04.svg" alt="" />
          <img src="/Client-Logo-05.svg" alt="" />
          <img src="/Client-Logo-03.svg" alt="" />
        </div>
      </div>
    </>
  )
}

export default JoinUs