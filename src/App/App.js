import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';
import SaveNews from '../components/SaveNews/SaveNews';

function App() {
  return (
    <div className="App">
      <Header />
      <SaveNews />
      <About />
      <Footer />
    </div>
  );
}

export default App;
