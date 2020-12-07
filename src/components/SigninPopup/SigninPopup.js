import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SigninPopup({ isSigninOpen, handleSignupOpen, handlePopupClose, handleLogin }) {
    function onClickLogin() {
        handlePopupClose();
        handleLogin();
    }
    return (
        < PopupWithForm isOpen={isSigninOpen} handleOpen={handleSignupOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign in" link="Sign up" >
            <p className="signin__input-title" >Email</p>
            <input className="signin__input" required name="email" type="email" placeholder="Enter email" />
            <span className="signin__input-err">error</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" required name="password" type="password" placeholder="Enter password" />
            <span className="signin__input-err">error</span>
            <button className="signin__button" onClick={onClickLogin} type="button"><p className="signin__button-text">Sign in</p></button>
        </PopupWithForm >
    )
}