import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../components/SaveNews/SaveNews';
import Main from '../components/Main/Main';
import SigninPopup from '../components/SigninPopup/SigninPopup';

function App() {
  const [isSigninOpen, setSigninOpen] = useState(false);
  function handleSigninOpen() {
    setSigninOpen(true);
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/saved-news">
          <div className="app">
            <SaveNews />
          </div>
        </Route>
        <Route path="/">
          <div className="app">
            <SigninPopup isSigninOpen={isSigninOpen} />
            <Main handleSigninOpen={handleSigninOpen} isSigninOpen={isSigninOpen} />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
