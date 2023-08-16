import './Navbar.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SegmentIcon from '@mui/icons-material/Segment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  return (
    <div className="navbar">
      <div className="left">POSH CODER<span>.</span></div>
      <div className={`middle ${nav && 'active'}`}>
        <span style={{color: 'red'}}>Home</span>
        <span>About Us</span>
        <span>Projects</span>
        <span>Services</span>
        <span>Contact Us</span>
      </div>
      <div className="right">
        <div className={`btn ${nav && 'active'}`}>Start Project <TrendingFlatIcon/></div>
      </div>
      <div className="nav-btn" onClick={() => setNav(p => !p)}><SegmentIcon/></div>
      <div className={`nav-btn-x ${nav && 'active'}`} onClick={() => setNav(p => !p)}><ArrowBackIosIcon/></div>
    </div>
  )
}

export default Navbar