import { Fade, Slide } from 'react-awesome-reveal';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h1 className='experience-title'><Fade cascade damping={0.1} triggerOnce>Experience</Fade></h1>
      <div className="skills" id='experience'>
        <div className="left">
          <div className="left-container">
            <Slide triggerOnce direction='up'>
              <div className='h4'>Professional Skills</div>
              <div className='skills-h1'>We are disitally led, full-service creative agency</div>
              <p>Our long experience at the top of the events business means we have expertise which reaches across a number of sectors, as well as knowledge of specific protocol and local.</p>
              <div className="skills-score">
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className='score-title'>Branding Design</div>
                </div>
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className='score-title'>Digital Marketing</div>
                </div>
                <div className="skills-score-item">
                  <div className="score">
                    <span>100%</span>
                  </div>
                  <div className='score-title'>Web Development</div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
        <div className="right">
          <Slide triggerOnce>
            <img src="/abt2.jpg" alt="" />
          </Slide>
        </div>
      </div>
    </>
  )
}

export default Skills