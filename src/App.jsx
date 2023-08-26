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
import AskedQ from './components/askedQ/AskedQ';
import JoinUs from './components/joinUs/JoinUs';
import Footer from './components/footer/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/contact/Contact';

function App() {

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
