import React from 'react';
import './App.css';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Preloader from '../components/Preloader/Preloader';
import SearchNews from '../components/SearchNews/SearchNews';
import NotFound from '../components/NotFound/NotFound';
import SaveNewsHeader from '../components/SavedNewsHeader/SavedNewsHeader';

function App() {
  return (
    <div className="App">
      <SaveNewsHeader />
      <NotFound />
      <About />
      <Footer />
    </div>
  );
}

export default App;
