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
  function handleErrMsg(err) {
    setErrMsg(err);
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
    localStorage.setItem('isMoreLocal', JSON.stringify(false));
    newsApi.requeireNews(topic)
      .then((data) => {
        setIsLoading(true);
        if (data.err) {
          setIsLoading(false);
          setIsServerErr(true);
          setIsSearchDone(false);
          localStorage.setItem('isServerErrLocal', JSON.stringify(true));
          localStorage.setItem('isSearchDoneLocal', JSON.stringify(false));
          return;
        }
        if (data.totalResults === 0) {
          setTimeout(() => {
            setIsLoading(false);
            setIsSearchDone(false);
            setIsFound(false);
            localStorage.setItem('isFoundLocal', JSON.stringify(false));
            localStorage.setItem('isSearchDoneLocal', JSON.stringify(false));
          }, 1000)
          return;
        }
        setTimeout(() => {
          setIsLoading(false);
          setIsSearchDone(true);
          setIsFound(true);
          setIsServerErr(false);
          setCards(data.articles.slice(0, 6));
          localStorage.setItem('cards', JSON.stringify(data.articles.slice(0, 6)));
          localStorage.setItem('topic', topic);
          localStorage.setItem('isSearchDoneLocal', JSON.stringify(true));
          localStorage.setItem('isServerErrLocal', JSON.stringify(false));
          localStorage.setItem('isFoundLocal', JSON.stringify(true));
        }, 1000);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsServerErr(true);
        localStorage.setItem('isServerErrLocal', JSON.stringify(true));
      })
  }

  function handleApiSaveCard({ keyword, title, text, date, source, link, image, handleSaveState, handleCardId }) {
    const token = localStorage.getItem('token');
    return mainApi.postSavedCard({ token, keyword, title, text, date, source, link, image })
      .then((data) => {
        handleSaveState(true);
        handleCardId(data._id);
        handleSaveCards([...savedCards, data]);
      })
      .catch((err) => console.log(err))
  }
  function handleApiUnSaveCard({ articlesId, handleSaveState }) {
    const token = localStorage.getItem('token');

    return mainApi.deleteSavedCard({
      token,
      articlesId,
    })
      .then((data) => {
        handleSaveState(false);
        const newSavedCards = savedCards.filter(c => c._id !== data._id);
        handleSaveCards(newSavedCards);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteCard({ articlesId }) {
    const token = localStorage.getItem('token');
    mainApi.deleteSavedCard({
      token,
      articlesId,
    })
      .then((data) => {
        const newSavedCards = savedCards.filter(c => c._id !== data._id);
        handleSaveCards(newSavedCards);
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    const token = localStorage.getItem('token');
    const localCards = JSON.parse(localStorage.getItem('cards'));
    const isFoundLocal = localStorage.getItem('isFoundLocal') === "true";
    const isServerErrLocal = localStorage.getItem('isServerErrLocal') === "true";
    const isSearchDoneLocal = localStorage.getItem('isSearchDoneLocal') === "true";
    const isMoreLocal = localStorage.getItem('isMoreLocal') === "true";
    setIsMore(isMoreLocal);
    setIsFound(isFoundLocal);
    setIsServerErr(isServerErrLocal);
    setIsSearchDone(isSearchDoneLocal);
    if (localCards) {
      setCards(localCards);
    }
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
              <ProtectedRoute Component={SaveNews} handleLogout={handleLogout} isLogin={isLogin} savedCards={savedCards} handleNavOpen={handleNavOpen} handleDeleteCard={handleDeleteCard} />
            </section>
          </Route>
          <Route exact path="/">
            <section className="app">
              <NavPopup isOpen={isNavOpen} isLogin={isLogin} handleSigninOpen={handleSigninOpen} handlePopupClose={handleNavClose} handleLogout={handleLogout} />
              <SigninPopup isSigninOpen={isSigninOpen} errMsg={errMsg} handleErrMsg={handleErrMsg} handleLoginSubmit={handleLoginSubmit} handlePopupClose={handleSigninClose} handleSignupOpen={handleSignupOpen} />
              <SignupPopup isSignupOpen={isSignupOpen} errMsg={errMsg} handleErrMsg={handleErrMsg} handleSignupSubmit={handleSignupSubmit} handlePopupClose={handleSignupClose} handleSigninOpen={handleSigninOpen} />
              <ConfirmPopup isConfirmOpen={isConfirmOpen} handlePopupClose={handleConfirmClose} handleSigninOpen={handleSigninOpen} />
              <Main isLogin={isLogin} topic={topic} isServerErr={isServerErr} isSearchDone={isSearchDone} isFound={isFound} isLoading={isLoading} cards={cards} savedCards={savedCards} isMore={isMore} isSigninOpen={isSigninOpen}
                handleApiUnSaveCard={handleApiUnSaveCard} handleApiSaveCard={handleApiSaveCard} handleHindMore={handleHindMore} handleSaveCards={handleSaveCards} handleShowMore={handleShowMore} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    </CurrenUserContext.Provider>
  );
}

export default App;
