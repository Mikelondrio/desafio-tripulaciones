import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import Header from './Header/Header.jsx';
import Footer from './footer/footer.jsx';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;

  const transitions = useTransition(location, {
    from: () => {
      switch (pathname) {
        case '/':
        case '/inicio':
          return { opacity: 0, transform: 'translate3d(-10%,0,0)' };
        case '/contactar':
          return { opacity: 0, transform: 'translate3d(10%,0,0)' };
        default:
          return { opacity: 0 };
      }
    },
    enter: () => {
      switch (pathname) {
        case '/':
        case '/inicio':
          return { opacity: 1, transform: 'translate3d(0%,0,0)' };
        case '/contactar':  
          return { opacity: 1, transform: 'translate3d(0%,0,0)' };
        default:
          return { opacity: 1 };
      }
    },
    leave: () => {
      switch (pathname) {
        case '/':
        case '/inicio':
          return { opacity: 0, transform: 'translate3d(10%,0,0)' };
        case '/contactar':
          return { opacity: 0, transform: 'translate3d(-10%,0,0)' };
        default:
          return { opacity: 0 };
      }
    },
    config: { duration: 280 },
  });

  return (
    <div className="layout">

      <Header />
      <main style={{ position: 'relative' }}>
        {transitions((props, item) => (
          <animated.div key={item.key} style={{ ...props, position: 'absolute', width: '100%' }}>
            <Outlet />
          </animated.div>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
