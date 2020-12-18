import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import SaveNews from '../SaveNews/SaveNews';
import Main from '../Main/Main';
import SigninPopup from '../SigninPopup/SigninPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import ConfirmPopup from '../ConfirmPopup/ConfirmPopup';
import NavPopup from '../NavPopup/NavPopup';
import { newsApi, mainApi } from '../../utils/utils';
import { CurrenUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
  const [savedCards, setSavedCards] = useState([]);
  const [topic, setTopic] = useState('');
  const [currentUser, setCurretUser] = useState('user');

  function handleShowMore() {
    setIsMore(true);
  }
  function handleHindMore() {
    setIsMore(false);
  }

  function handleSearch(topic) {
    setTopic(topic)
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
    setIsSearchDone(false);
  }
  function handleSaveCards(card) {
    setSavedCards(card);
  }
  function handleSearchSubmit(topic) {
    setTimeout(() => {
      newsApi.requeireNews(topic)
        .then((data) => {
          if (data.totalResults === 0) {
            setIsFound(false);
            return;
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
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      mainApi.getUserInfo(token)
        .then((data) => {
          handleLogin();
          setCurretUser(data);
        })
        .catch((err) => console.log(err));
      mainApi.getSavedCard(token)
        .then((data) => {
          setSavedCards(data);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser._id, isLogin])
  return (
    <CurrenUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <Switch>
          <Route path="/saved-news">
            <section className="app">
              <ProtectedRoute Component={NavPopup} isOpen={isNavOpen} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
              <ProtectedRoute Component={SaveNews} handleLogout={handleLogout} isLogin={isLogin} savedCards={savedCards} handleNavOpen={handleNavOpen} handleSaveCards={handleSaveCards} />
            </section>
          </Route>
          <Route exact path="/">
            <section className="app">
              <NavPopup isOpen={isNavOpen} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
              <SigninPopup isSigninOpen={isSigninOpen} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} handleLogin={handleLogin} />
              <SignupPopup isSignupOpen={isSignupOpen} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} handleConfirmOpen={handleConfirmOpen} />
              <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
              <Main isLogin={isLogin} topic={topic} isSearchDone={isSearchDone} isFound={isFound} isLoading={isLoading} cards={cards} savedCards={savedCards} isMore={isMore} isSigninOpen={isSigninOpen}
                handleHindMore={handleHindMore} handleSaveCards={handleSaveCards} handleShowMore={handleShowMore} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    </CurrenUserContext.Provider>
  );
}

export default App;
