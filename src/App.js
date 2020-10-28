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

function App() {
  return (
    <div id="home-page">
      <div id="navbar-box">
        <NavigationBar />
      </div>

      <Header_additional />
      <DesktopContainer />
      <ScreenContainer />
      <CameraContainer />
      <StreamContainer />
      <NetworkContainer />
      <div id="footer-box">
        <Footer />
      </div>
    </div>
  );
}

export default App;
