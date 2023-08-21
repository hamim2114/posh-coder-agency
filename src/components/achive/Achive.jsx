import './Achive.scss';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SentimentVerySatisfiedOutlinedIcon from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import VideoModal from '../videoModal/VideoModal';

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

          </div>
        </div>
        <div className="right">
          <div className="img">
            <img src="/laptop.jpg" alt="" />
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