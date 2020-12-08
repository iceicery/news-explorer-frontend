import "./NavPopup.css";
import { Link } from "react-router-dom";
import { useCallback, useEffect } from "react";
import logoutIconLight from '../../images/logout-light.png';
export default function NavPopup({ isOpen, isLogin, name, handleSigninOpen, handlePopupClose, handleLogout }) {
    function onClickSignin() {
        handlePopupClose();
        handleSigninOpen();
    }
    function onClickClose() {
        handlePopupClose();
    }
    function onClickLogout() {
        handleLogout();
    }

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            handlePopupClose();
        }
    }, [handlePopupClose]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    const overlayClass = isOpen ? "overlay" : "hidden";
    const navpopupClass = isOpen ? "navpopup" : "hidden";

    return (
        <>
            <div className={overlayClass}></div>
            <nav className={navpopupClass}>
                <div className="navpopup__container">
                    <Link to="/" className="link"><p className="navpopup__title">NewsExplorer</p></Link>
                    <button className="navpopup__close" onClick={onClickClose}></button>
                </div>
                <div className="navpopup__box">
                    <Link to="/" className="link" onClick={onClickClose}>
                        <p className="navpopup__place">Home</p>
                    </Link>
                    {isLogin &&
                        <Link to="/saved-news" className="link" onClick={onClickClose}>
                            <p className="navpopup__place">Saved articles</p>
                        </Link>
                    }
                    {isLogin ?
                        <button className="navpopup__button">
                            <p className="nav__login-text">{name}</p>
                            <Link to="/" className="link" onClick={onClickClose}><img src={logoutIconLight} alt="logout icon" className="nav__icon" onClick={onClickLogout} /></Link>
                        </button> :
                        <button className="navpopup__button" onClick={onClickSignin}>Sign In</button>
                    }

                </div>
            </nav>
        </>
    )
}