import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Header';
import Footer from './components/Footer';
import Header_additional from './components/Header-additional';
import Product from './components/Product';
import DesktopContainer from './components/DesktopContainer';
import ScreenContainer from './components/ScreenContainer';
import CameraContainer from './components/CameraContainer';
import StreamContainer from './components/StreamContainer';
import NetworkContainer from './components/NetworkContainer';
import Dropdown from './components/MyDropdown';
import Advert from './components/Advert';

function App() {
  return (
    <div id="home-page">

      <NavigationBar />

      <Header_additional />
      <DesktopContainer />
      <ScreenContainer />
      <CameraContainer />
      <StreamContainer />
      <NetworkContainer />

      <Advert href="https://apshop.vn/blogs/thong-tin-chung/mien-phi-giao-hang-noi-thanh-hcm-voi-don-hang-tu-300-000d"
        position="left" img_link="https://theme.hstatic.net/1000129940/1000623473/14/banner_fixed_1.png?v=166" />
      <Advert href="https://apshop.vn/blogs/tin-khuyen-mai/khuyen-mai-mua-may-tinh-tang-man-hinh-aps-gtx-1660-super-gold"
        position="right" img_link="https://theme.hstatic.net/1000129940/1000623473/14/banner_fixed_2.png?v=166" />

      <Footer />
    </div>
  );
}

export default App;
