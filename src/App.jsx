import { useState } from 'react';
import './App.scss'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Service from './components/service/Service'
import { useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="circle-container">
      <div
        className="circle"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
      <div className="App">
        <Navbar />
        <Intro />
        <Service />
      </div>
    </>
  )
}

export default App
