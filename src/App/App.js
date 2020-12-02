import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <Header />
      <Preloader />
      <About />
      <Footer />
    </div>
  );
}

export default App;
