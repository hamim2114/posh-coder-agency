import './App.scss'
import Navbar from './components/navbar/Navbar'
import { useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import ServicePage from './pages/servicePage/ServicePage';
import WebsiteDev from './pages/servicePage/websiteDev/WebsiteDev';
import Graphic from './pages/servicePage/graphic/Graphic';
import Marketing from './pages/servicePage/marketing/Markating';
import AppDevelop from './pages/servicePage/appDevelop/AppDevelop';
import Content from './pages/servicePage/content/Content';
import Business from './pages/servicePage/business/Business';
import AboutPage from './pages/aboutPage/AboutPage';

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
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'service', element: <ServicePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'service/business', element: <Business /> },
        { path: 'service/webdev', element: <WebsiteDev /> },
        { path: 'service/graphic', element: <Graphic /> },
        { path: 'service/marketing', element: <Marketing /> },
        { path: 'service/appdevelop', element: <AppDevelop /> },
        { path: 'service/content', element: <Content /> },
        { path: 'contact', element: <Contact /> },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
