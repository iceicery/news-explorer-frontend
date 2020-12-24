import "./Navigation.css";
import logoutIcon from '../../images/logout.png';
import logoutIconLight from '../../images/logout-light.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrenUserContext } from "../../contexts/CurrentUserContext";

export default function Navigation({ isLight, isLogin, handleSigninOpen, handleLogout, handleNavOpen }) {
    const currentUser = useContext(CurrenUserContext);
    const navClass = isLight ? "nav nav__light" : "nav";
    const titleClass = isLight ? "nav__title nav__login" : "nav__title";
    const placeClass = isLight ? "nav__place nav__login" : "nav__place";
    const signClass = isLight ? "nav__signin nav__signined" : "nav__signin";
    const placeClassSelect = isLight ? "nav__place-select" : "nav__place-select-light";
    const logoutImg = isLight ? logoutIcon : logoutIconLight;
    const menuClass = isLight ? "nav__menu nav__menu-dark" : "nav__menu";
    function onClickSignin() {
        handleSigninOpen();
    }

    function onClickLogout() {
        handleLogout();
        localStorage.removeItem('token');
    }
    function onClickNavOpen() {
        handleNavOpen();
    }

    return (
        <nav className={navClass}>
            <div className="nav__container">
                <Link to="/" className="nav__link"><p className={titleClass}>NewsExplorer</p></Link>
                <div className="nav__box">
                    {isLogin ?
                        <div className="nav__place-box">
                            <Link to="/" className="nav__link">
                                <p className={placeClass}>Home</p>
                            </Link>
                            <Link to="/saved-news" className="nav__link">
                                <p className={placeClassSelect}>Saved articles</p>
                            </Link>
                        </div>
                        : <p className={placeClass}>Home</p>}
                    {isLogin ?
                        <div className={signClass}>
                            <p className="nav__login-text">{currentUser.name}</p>
                            <Link to="/" className="nav__link"><img src={logoutImg} alt="logout icon" className="nav__icon" onClick={onClickLogout} /></Link>
                        </div> :
                        <button className={signClass} onClick={onClickSignin}>Sign In</button>
                    }
                </div>
                <button className={menuClass} onClick={onClickNavOpen}></button>
            </div>
        </nav>
    )
}