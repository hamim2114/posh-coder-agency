import './Service.scss';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DifferenceIcon from '@mui/icons-material/Difference';
import WebIcon from '@mui/icons-material/Web';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const Service = () => {
  return (
    <div className="service">
      <div className="top">
        <h1>Our Services</h1>
      </div>
      <div className="bottom">
        <div className="service-card">
          <div className="card-top">
            <BusinessCenterIcon />
            <span>01</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Online Business <br /> Create</span>
            <p>We create online platforms account as per your business requirements.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-top">
            <DifferenceIcon />
            <span>02</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Content Create and <br /> Designing</span>
            <p>We creates contents for your website of other social media accounts.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-top">
            <WebIcon />
            <span>03</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Website Design and <br /> Development</span>
            <p>We developed website for your business. You can customize as you want.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-top">
            <AddBusinessIcon />
            <span>04</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Online Marketing and <br /> SEO</span>
            <p>We provide online marketing and SEO services.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-top">
            <AppShortcutIcon />
            <span>05</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Softwere Design and <br /> Development</span>
            <p>We develops softwares to make your business more easier and faster to handle.</p>
          </div>
        </div>
        <div className="service-card">
          <div className="card-top">
            <BubbleChartIcon />
            <span>06</span>
          </div>
          <div className="card-bottom">
            <span className='card-title'>Graphic Design and <br /> Branding</span>
            <p>We Design brand identity like company logo, Business card, Banner, Poster etc</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service