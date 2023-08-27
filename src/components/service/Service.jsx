import './Service.scss';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DifferenceIcon from '@mui/icons-material/Difference';
import WebIcon from '@mui/icons-material/Web';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Fade, Slide } from 'react-awesome-reveal'

const Service = () => {
  return (
    <div className="service">
      <div className="top">
        <Fade damping={0.1} className='our-service' cascade triggerOnce>Our Services</Fade>
      </div>
      <div className="bottom">
        <Slide cascade damping={0.1} triggerOnce>
          <div className="service-card">
            <div className="card-top">
              <span>01</span>
              <BusinessCenterIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Online Business <br /> Create</span>
              <p>We create online platforms account as per your business requirements.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>02</span>
              <DifferenceIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Content Create and <br /> Designing</span>
              <p>We creates contents for your website of other social media accounts.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>03</span>
              <WebIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Website Design and <br /> Development</span>
              <p>We developed website for your business. You can customize as you want.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>04</span>
              <AddBusinessIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Online Marketing and <br /> SEO</span>
              <p>We provide online marketing and SEO services.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>05</span>
              <AppShortcutIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Softwere Design and <br /> Development</span>
              <p>We develops softwares to make your business more easier and faster to handle.</p>
            </div>
          </div>
          <div className="service-card">
            <div className="card-top">
              <span>06</span>
              <BubbleChartIcon />
            </div>
            <div className="card-bottom">
              <span className='card-title'>Graphic Design and <br /> Branding</span>
              <p>We Design brand identity like company logo, Business card, Banner, Poster etc</p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Service