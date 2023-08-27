import './Achive.scss';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import VideoModal from '../videoModal/VideoModal';
import { Slide, Zoom } from 'react-awesome-reveal';

const Achive = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="achive">
      <div className="achive-wrapper">
        <div className="left">
          <div className="left-container">
            <Slide direction='up' triggerOnce>
              <div className="achive-grid">
                <Groups2OutlinedIcon />
                <span>20+</span>
                <p>Expert People</p>
              </div>
              <div className="achive-grid">
                <SentimentVerySatisfiedOutlinedIcon />
                <span>70+</span>
                <p>Satisfied Client</p>
              </div>
              <div className="achive-grid">
                <FileDownloadOutlinedIcon />
                <span>200+</span>
                <p>Downloaded</p>
              </div>
              <div className="achive-grid">
                <AppsOutlinedIcon />
                <span>30+</span>
                <p>Unique Product</p>
              </div>
            </Slide>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <Zoom triggerOnce>
              <img src="/laptop.jpg" alt="" />
            </Zoom>
            <div className="play-btn" onClick={openModal}>
              <PlayArrowIcon />
            </div>
          </div>
          {modalOpen && (
            <VideoModal videoSrc="/PromoVideo.mp4" onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Achive