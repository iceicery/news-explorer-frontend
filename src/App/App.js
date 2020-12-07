import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../components/SaveNews/SaveNews';
import Main from '../components/Main/Main';
import SigninPopup from '../components/SigninPopup/SigninPopup';
import SignupPopup from '../components/SignupPopup/SignupPopup';
import ConfirmPopup from '../components/ConfirmPopup/ConfirmPopup';

function App() {
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
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

  function handleSigninClose() {
    setSigninOpen(false);
  }
  function handleSignupClose() {
    setSignupOpen(false);
  }
  function handleConfirmClose() {
    setConfirmOpen(false);
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
            <SaveNews handleLogout={handleLogout} isLogin={isLogin} />
          </div>
        </Route>
        <Route path="/">
          <div className="app">
            <SigninPopup isSigninOpen={isSigninOpen} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} handleLogin={handleLogin} />
            <SignupPopup isSignupOpen={isSignupOpen} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} handleConfirmOpen={handleConfirmOpen} />
            <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
            <Main isLogin={isLogin} handleSigninOpen={handleSigninOpen} isSigninOpen={isSigninOpen} handleLogout={handleLogout} />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
