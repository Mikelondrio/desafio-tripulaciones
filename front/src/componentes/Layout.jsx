import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './footer/footer.jsx';

import './Layout.css'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div id="footer-layout">
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
