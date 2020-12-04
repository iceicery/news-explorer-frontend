import React from 'react';
import './App.css';
import SaveNews from '../components/SaveNews/SaveNews';
import Main from '../components/Main/Main';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm';
import SigninPopup from '../components/SigninPopup/SigninPopup';
import SignupPopup from '../components/SignupPopup/SignupPopup';

function App() {
  return (
    <div className="app">
      <PopupWithForm withForm={false} title="Registration successfully completed!" link="Sign in" />
      <Main />
      <SaveNews />
    </div>
  );
}

export default App;
