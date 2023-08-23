import './JoinUs.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="wrapper">
        <div className="left">
          <span>Don't Late, Contact Us Today!</span>
          <p>Explore Select, Our Premimum Solution For Branding & Business.</p>
        </div>
        <div className="right">
          <div className="contact-btn">
            Contact Now
            <TrendingFlatIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs