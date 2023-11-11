import './Navbar.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SegmentIcon from '@mui/icons-material/Segment';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import { Box, Button, Collapse, Menu, MenuList, Stack, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import styled from '@emotion/styled';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false)

  const { pathname } = useLocation();

  const navbarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setNav(false);
        setServiceMenu(false)
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
          {/* <Link className='link' to='service' style={{ color: pathname === '/service' ? 'red' : '' }} onClick={() => setNav(false)}>Services</Link> */}

          <div style={{ position: 'relative' }}>
            <Button
              sx={{
                color: 'inherit',
                fontSize: 'inherit',
                fontWeight: 'inherit',
                p: 0,
                color: pathname === '/service' ? 'red' : 'inherit'
              }}
              endIcon={<KeyboardArrowDown sx={{
                transform: serviceMenu ? 'rotate(-180deg)' : 'rotate(0)',
                transition: '.5s'
              }} />}
              onClick={() => setServiceMenu(!serviceMenu)}
            >
              Services
            </Button>
            <Collapse in={serviceMenu} ref={navbarRef} sx={{
              position: { xs: '', lg: 'absolute' },
              top: 30,
              bgcolor: '#17181A',
              color: '#fff',
              borderRadius: '5px',
              zIndex: 99999
            }}>
              <Stack gap={2} sx={{
                width: { xs: '150px', lg: '200px' },
                p: '25px 20px',
                fontSize: '15px',
                textTransform: 'none',
              }}>
                <Link className='link' to='service' style={{ borderBottom: '1px solid gray', paddingBottom: '5px', paddingLeft: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>All Services</li>
                </Link>
                <Link className='link' to='service/webdev' style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>
                    Website Development
                  </li>
                </Link>
                <Link className='link' to='service/graphic' style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>
                    Graphic Design
                  </li>
                </Link>
                <Link className='link' to='service/marketing' style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>
                    Online Marketing
                  </li>
                </Link>
                <Link className='link' to='service/content' style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>
                    Content Creation
                  </li>
                </Link>
                <Link className='link' to='service/appdevelop' style={{ borderBottom: '1px solid gray', paddingBottom: '5px' }} onClick={() => setNav(false)}>
                  <li onClick={() => setServiceMenu(!serviceMenu)}>
                    Softwere Development
                  </li>
                </Link>
              </Stack>
            </Collapse>
            {/* <Menu
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
                  <li onClick={handleClose}>All Services</li>
                </Link>
                <Link className='link' to='service/webdev' onClick={() => setNav(false)}>
                  <li onClick={handleClose}>
                    Website Development
                  </li>
                </Link>
                <Link className='link' to='service/graphic' onClick={() => setNav(false)}>
                  <li onClick={handleClose}>
                    Graphic Design
                  </li>
                </Link>
                <Link className='link' to='service/marketing' onClick={() => setNav(false)}>
                  <li onClick={handleClose}>
                    Online Marketing
                  </li>
                </Link>
                <Link className='link' to='service/content' onClick={() => setNav(false)}>
                  <li onClick={handleClose}>
                    Content Creation
                  </li>
                </Link>
                <Link className='link' to='service/appdevelop' onClick={() => setNav(false)}>
                  <li onClick={handleClose}>
                    Softwere Development
                  </li>
                </Link>
              </MenuList>
            </Menu> */}
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