import './Navbar.scss';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">POSH CODER<span>.</span></div>
      <div className="middle">
        <span style={{color: 'red'}}>Home</span>
        <span>About Us</span>
        <span>Projects</span>
        <span>Services</span>
        <span>Contact Us</span>
      </div>
      <div className="right">
        <div className="btn">Start Project <TrendingFlatIcon/></div>
      </div>
    </div>
  )
}

export default Navbar