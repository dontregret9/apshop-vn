import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/Header';
import Footer from './components/Footer';
import Header_additional from './components/Header-additional';

function App() {
  return (
    <div >
      <NavigationBar />
      <Header_additional/>
      <Footer />
    </div>

  );
}

export default App;
