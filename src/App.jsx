import { useState } from 'react';
import './App.scss'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Service from './components/service/Service'
import { useEffect } from 'react';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Slidetext from './components/slideText/Slidetext';
import Achive from './components/achive/Achive';
import Team from './components/team/Team';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (event) => {
  //   setPosition({ x: event.clientX, y: event.clientY });
  // };

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  return (
    <>
      {/* <div className="circle-container">
      <div
        className="circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div> */}
      <div className="App">
        <Navbar />
        <Intro />
        <Service />
        <Skills/>
        <Experience/>
        <Slidetext/>
        <Achive/>
        <Team/>
        <Testimonial/>
      </div>
    </>
  )
}

export default App
