import './ServicePage.scss';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { AddBusinessSharp, AppShortcutSharp, BubbleChartSharp, BusinessCenter, BusinessCenterSharp, EngineeringSharp, PlayArrow, SourceSharp, TrendingFlatSharp, WebSharp, WebhookSharp } from '@mui/icons-material';
import WebIcon from '@mui/icons-material/Web';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from 'react-router-dom';
import { Slide, Zoom } from 'react-awesome-reveal';
import VideoModal from '../../components/videoModal/VideoModal';
import { useState } from 'react';

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="service-page">
      <div className="top">
        <div className="left">
          <h1><span>//</span> OUR SERVICES <span>//</span></h1>
        </div>
        <div className="right">
          <img src="/services-1-1.jpg" alt="" />
        </div>
      </div>
      <div className="middle">
        <span className='h1'> What we’re offering <br />to our customers</span>
        <div className="service-card">
          <Link to='/service/webdev' className='card-box link'>
            <WebSharp />
            <span>Website solutions</span>
            <TrendingFlatSharp className='arrow' />
          </Link>
          <Link to='/service/graphic' className='card-box link'>
            <BubbleChartSharp />
            <span>Graphic solutions</span>
            <TrendingFlatSharp className='arrow' />
          </Link>
          <Link to='/service/marketing' className='card-box link'>
            <AddBusinessSharp />
            <span>Marketing Solutions</span>
            <TrendingFlatSharp className='arrow' />
          </Link>
          <Link to='/service/content' className='card-box link'>
            <SourceSharp />
            <span>Content Solutions</span>
            <TrendingFlatSharp className='arrow' />
          </Link>
          <Link to='/service/appdevelop' className='card-box link'>
            <AppShortcutSharp />
            <span>Application Solutions</span>
            <TrendingFlatSharp className='arrow' />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <Slide direction='up' triggerOnce>

            <span className='h1'>Why you should choose our agency</span>
            <span className='span'>Proin est lacus, sagittis lobortis iaculise get.</span>
            <p>There are many variations of passages of available but the majority have suffered. Alteration in some form, lipsum is simply free text by injected humou or randomised words even believable.</p>
            <div className="info">
              <div className="info-details">
                <EngineeringSharp />
                <span >Leader of creative agency</span>
              </div>
              <div className="info-details">
                <WebhookSharp />
                <span>Highest quality development</span>
              </div>
            </div>
          </Slide>
        </div>
        <div className="right">
          <img src="/why-choose.jpg" alt="" />
        </div>
      </div>

      <div className="bottom1">
        <div className="img">
          <Zoom triggerOnce>
            <img src="/team-laptop.jpg" alt="" />
          </Zoom>
          <div className="play-btn" onClick={openModal}>
            <PlayArrow />
          </div>
        </div>
        {modalOpen && (
          <VideoModal videoSrc="/PromoVideo.mp4" onClose={closeModal} />
        )}
      </div>
      <div className="clients-logo">
        <h3>Trusted By</h3>
        <div className="client-logo-container">
          <img src="/Client-Logo-02.svg" alt="" />
          <img src="/Client-Logo-03.svg" alt="" />
          <img src="/Client-Logo-04.svg" alt="" />
          <img src="/Client-Logo-05.svg" alt="" />
          <img src="/Client-Logo-03.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ServicePage