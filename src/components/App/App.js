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
  const [isServerErr, setIsServerErr] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [topic, setTopic] = useState('');
  const [currentUser, setCurretUser] = useState('');
  const [errMsg, setErrMsg] = useState('');

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
  }
  function handleSaveCards(card) {
    setSavedCards(card);
  }
  function handleSignupSubmit({ email, password, name }) {
    mainApi.register({ email, password, name })
      .then((res) => {
        if (res.message) {
          throw new Error(res.message);
        }
        handleSignupClose();
        handleConfirmOpen();
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  }
  function handleLoginSubmit({ email, password }) {
    mainApi.authorize({ email, password })
      .then((data) => {
        if (!data) {
          throw new Error("User Doesn't exist or wrong password.")
        }
        if (data.token) {
          handleSigninClose();
          handleLogin();
        }
      })
      .catch((err) => {
        setErrMsg(err);
      });
  }
  function handleSearchSubmit(topic) {
    setIsFound(true);
    setIsServerErr(false);
    newsApi.requeireNews(topic)
      .then((data) => {
        setIsLoading(true);
        if (data.err) {
          setIsLoading(false);
          setIsServerErr(true);
          return;
        }
        if (data.totalResults === 0) {
          setTimeout(() => {
            setIsLoading(false);
            setIsFound(false);
          }, 1000)
          return;
        }
        setTimeout(() => {
          setIsLoading(false);
          setIsSearchDone(true);
          setCards(data.articles.slice(0, 6));
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsServerErr(true);
      })
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
              <SigninPopup isSigninOpen={isSigninOpen} errMsg={errMsg} handleLoginSubmit={handleLoginSubmit} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} handleLogin={handleLogin} />
              <SignupPopup isSignupOpen={isSignupOpen} errMsg={errMsg} handleSignupSubmit={handleSignupSubmit} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} handleConfirmOpen={handleConfirmOpen} />
              <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
              <Main isLogin={isLogin} topic={topic} isServerErr={isServerErr} isSearchDone={isSearchDone} isFound={isFound} isLoading={isLoading} cards={cards} savedCards={savedCards} isMore={isMore} isSigninOpen={isSigninOpen}
                handleHindMore={handleHindMore} handleSaveCards={handleSaveCards} handleShowMore={handleShowMore} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    </CurrenUserContext.Provider>
  );
}

export default App;
