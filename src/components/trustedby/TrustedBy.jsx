import './TrustedBy.scss'
import { trustedby } from '../../data/trustedByData';
import Marquee from "react-fast-marquee";
import { FadeAnimation } from '../animations/animations';

const TrustedBy = () => {
  return (
    <div className="trustedby">
      <h1>Trusted <span><FadeAnimation cascade='cascade' damping={.1}>By</FadeAnimation> </span></h1>
        <Marquee autoFill gradient gradientColor={[0,0,0]}>
          {trustedby.map((data, i) => (
            <img style={{marginRight: '30px'}} key={i} src={data.img} alt="" />
          ))}
        </Marquee>
    </div>
  )
}

export default TrustedBy