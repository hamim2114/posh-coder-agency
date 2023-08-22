import './Testimonial.scss';
import GradeIcon from '@mui/icons-material/Grade';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useRef } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from '../../data/testimonialData';

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
    ]
  }
  const Card = ({ data }) => {
    return (
      <div className="t-card">
        <div className="t-img">
          <img src={data.img} alt="" />
          <FormatQuoteIcon />
        </div>
        <div className="t-text">
          <p><i>{data.desc}</i></p>
          <div className="t-title">
            <span className='name'>{data.name}</span>
            <span className='title'>-- {data.title}</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="testimonial">
      <h1>Client Feedback</h1>
      <Slider {...settings}>
        {
          testimonialData.map(d => (
            <Card key={d} data={d} />
          ))
        }
      </Slider>

    </div>
  )
}

export default Testimonial