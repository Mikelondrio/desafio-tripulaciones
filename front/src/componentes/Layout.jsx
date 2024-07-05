import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './footer/footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
