import './Experience.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Experience = () => {
  return (
    <div className="experience">
      <div className="left">
        <div className="left-container">
          <div className='h4'>About Posh Coder</div>
          <div className='experience-h1'>We drive experiences for brands with purpose.</div>
          <p>We're west coast change-makers, in a complex world. The brands we support are positioned to be purposeful and powerful while also fluid.</p>
          <div className="experience-skills">
            <div className="item">
              <TrendingFlatIcon/>
              <span>Creating with a Special or Unique Process</span>
            </div>
            <div className="item">
              <TrendingFlatIcon/>
              <span>A Radical Change</span>
            </div>
            <div className="item">
              <TrendingFlatIcon/>
              <span>Possessing Special Skill or Knowledge</span>
            </div>
          </div>
          <div className="read-more">Read More<TrendingFlatIcon/></div>
        </div>
      </div>
      <div className="right">
        <img src="/abt1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Experience