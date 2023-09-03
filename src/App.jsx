import './App.scss'
import Navbar from './components/navbar/Navbar'
import { useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import ServicePage from './pages/servicePage/ServicePage';

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const Layout = () => {
    return (
      <div>
        <ScrollToTop/>
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
          path: 'service',
          element: <ServicePage/>
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
