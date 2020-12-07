import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../components/SaveNews/SaveNews';
import Main from '../components/Main/Main';
import SigninPopup from '../components/SigninPopup/SigninPopup';
import SignupPopup from '../components/SignupPopup/SignupPopup';
import ConfirmPopup from '../components/ConfirmPopup/ConfirmPopup';
import NavPopup from '../components/NavPopup/NavPopup';

function App() {
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  function handleSigninOpen() {
    setSigninOpen(true);
  }
  function handleSignupOpen() {
    setSignupOpen(true);
  }
  function handleConfirmOpen() {
    setConfirmOpen(true);
  }
  function handleNavOpen() {
    setNavOpen(true);
  }
  function handleSigninClose() {
    setSigninOpen(false);
  }
  function handleSignupClose() {
    setSignupOpen(false);
  }
  function handleConfirmClose() {
    setConfirmOpen(false);
  }
  function handleNavClose() {
    setNavOpen(false);
  }

  function handleLogin() {
    setIsLogin(true);
    console.log('handleLogin');
  }
  function handleLogout() {
    setIsLogin(false);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/saved-news">
          <div className="app">
            <NavPopup isOpen={isNavOpen} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
            <SaveNews handleLogout={handleLogout} isLogin={isLogin} handleNavOpen={handleNavOpen} />
          </div>
        </Route>
        <Route path="/">
          <div className="app">
            <NavPopup isOpen={isNavOpen} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
            <SigninPopup isSigninOpen={isSigninOpen} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} handleLogin={handleLogin} />
            <SignupPopup isSignupOpen={isSignupOpen} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} handleConfirmOpen={handleConfirmOpen} />
            <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
            <Main isLogin={isLogin} handleSigninOpen={handleSigninOpen} isSigninOpen={isSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
