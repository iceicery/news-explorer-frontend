import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../SaveNews/SaveNews';
import Main from '../Main/Main';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import NavPopup from '../NavPopup/NavPopup';
import { newsApi } from '../../utils/utils';

function App() {
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFound, setIsFound] = useState(true);
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('user');
  const [topic, setTopic] = useState('');

  function handleShowMore() {
    setIsMore(true);
  }

  function handleSearch(topic) {
    setTopic(topic)
  }

  function handleName(name) {
    setName(name);
  }
  function handleEmail(email) {
    setEmail(email);
  }

  function handlePwd(password) {
    setPassword(password);
  }

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
  }
  function handleLogout() {
    setIsLogin(false);
  }
  function handleSearchSubmit(topic) {
    setTimeout(() => {
      newsApi.requeireNews(topic)
        .then((data) => {
          if (!data) {
            setIsFound(false);
          }
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setIsSearchDone(true);
            setCards(data.articles.slice(0, 6));
          }, 1000);
        })
        .catch((err) => console.log(err))
    }, 1200);
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/saved-news">
          <section className="app">
            <NavPopup isOpen={isNavOpen} name={name} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
            <SaveNews handleLogout={handleLogout} name={name} isLogin={isLogin} handleNavOpen={handleNavOpen} />
          </section>
        </Route>
        <Route path="/">
          <section className="app">
            <NavPopup isOpen={isNavOpen} isLogin={isLogin} name={name} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
            <SigninPopup isSigninOpen={isSigninOpen} email={email} password={password} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} handleLogin={handleLogin} handleEmail={handleEmail} handlePwd={handlePwd} />
            <SignupPopup isSignupOpen={isSignupOpen} email={email} password={password} name={name} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} handleConfirmOpen={handleConfirmOpen} handleEmail={handleEmail} handlePwd={handlePwd} handleName={handleName} />
            <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
            <Main isLogin={isLogin} name={name} topic={topic} isSearchDone={isSearchDone} isFound={isFound} isLoading={isLoading} cards={cards} isMore={isMore}
              handleShowMore={handleShowMore} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} isSigninOpen={isSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
