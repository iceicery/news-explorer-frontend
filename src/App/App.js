import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../components/SaveNews/SaveNews';
import Main from '../components/Main/Main';
import PopupWithForm from '../components/PopupWithForm/PopupWithForm';
import SigninPopup from '../components/SigninPopup/SigninPopup';
import SignupPopup from '../components/SignupPopup/SignupPopup';
import ConfirmPopup from '../components/ConfirmPopup/ConfirmPopup';

function App() {
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
            <Main />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
