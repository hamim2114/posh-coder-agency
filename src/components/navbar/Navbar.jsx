import './Navbar.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SegmentIcon from '@mui/icons-material/Segment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { pathname } = useLocation();

  const navbarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef} className="navbar">
      <Link to='/' className="left link">
        <img src="/logo.png" alt="" />
        
      </Link>
      <div className={`middle ${nav && 'active'}`}>
        <Slide>
          <Link to='/' style={{ color: pathname === '/' ? 'red' : '' }} onClick={() => setNav(false)} className='link'>Home</Link>
          <Link className='link' to='service' style={{ color: pathname === '/service' ? 'red' : '' }} onClick={() => setNav(false)}>Services</Link>
          <Link to='/about' className='link' href='#experience' onClick={() => setNav(false)}>About Us</Link>
          <Link to='/contact' style={{ color: pathname === '/contact' ? 'red' : '' }} onClick={() => setNav(false)} className='link'>Contact Us</Link>
        </Slide>
      </div>
      <div className="right">
        <Link to='contact' className={`btn link ${nav && 'active'}`}> Start Project <Slide><TrendingFlatIcon /></Slide></Link>
      </div>
      <div className="nav-btn" onClick={() => setNav(p => !p)}><SegmentIcon /></div>
      <div className={`nav-btn-x ${nav && 'active'}`} onClick={() => setNav(p => !p)}><Slide><ArrowBackIosIcon /></Slide></div>
    </div>
  )
}

export default Navbar