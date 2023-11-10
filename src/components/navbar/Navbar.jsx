import './Navbar.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SegmentIcon from '@mui/icons-material/Segment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { Box, Button, Menu, MenuItem, MenuList, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import styled from '@emotion/styled';

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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div ref={navbarRef} className="navbar">
      <Link to='/' className="left link">
        <img src="/logo.png" alt="" />

      </Link>
      <div className={`middle ${nav && 'active'}`}>
        <Slide>
          <Link to='/' style={{ color: pathname === '/' ? 'red' : '' }} onClick={() => setNav(false)} className='link'>Home</Link>
          {/* <Link className='link' to='service' style={{ color: pathname === '/service' ? 'red' : '' }} onClick={() => setNav(false)}>Services</Link> */}

          <div>
            <Button
              sx={{
                color: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                p: 0,
                color: pathname === '/service' ? 'red' : 'inherit'
              }}
              endIcon={<KeyboardArrowDown />}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Services
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuList sx={{
                bgcolor: '#17181A',
                color: '#fff',
              }}>
                <Link className='link' to='service' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>All Services</MenuItem>
                </Link>
                <Link className='link' to='service/webdev' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>
                    Website Development
                  </MenuItem>
                </Link>
                <Link className='link' to='service/graphic' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>
                    Graphic Design
                  </MenuItem>
                </Link>
                <Link className='link' to='service/marketing' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>
                    Online Marketing
                  </MenuItem>
                </Link>
                <Link className='link' to='service/content' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>
                    Content Creation
                  </MenuItem>
                </Link>
                <Link className='link' to='service/appdevelop' onClick={() => setNav(false)}>
                  <MenuItem onClick={handleClose}>
                    Softwere Development
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>

          <Link to='/about' style={{ color: pathname === '/about' ? 'red' : '' }} className='link' onClick={() => setNav(false)}>About Us</Link>
          <Link to='/blog' style={{ color: pathname === '/blog' ? 'red' : '' }} className='link' onClick={() => setNav(false)}>Blog</Link>
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