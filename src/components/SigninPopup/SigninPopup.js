import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';

export default function SigninPopup({ isSigninOpen, email, password, handleSignupOpen, handlePopupClose, handleLogin, handleEmail, handlePwd }) {
    const [errMessageEmail, setErrMessageEmail] = useState('');
    const [errMessagePwd, setErrMessagePwd] = useState('');
    function onClickLogin() {
        handlePopupClose();
        handleLogin();
    }
    function onChangeEmail(e) {
        if (!e.target.validity.valid) {
            setErrMessageEmail(e.target.validationMessage);
        } else {
            setErrMessageEmail('');
        }
        handleEmail(e.target.value);
    }
    function onChangePwd(e) {
        if (!e.target.validity.valid) {
            setErrMessagePwd(e.target.validationMessage);
        } else {
            setErrMessagePwd('');
        }
        handlePwd(e.target.value);
    }
    const disableButton = (errMessageEmail !== "" || errMessagePwd !== "" ? true : false);
    const buttonClass = disableButton ? "signin__button-diable" : "signin__button";
    const buttonTextClass = disableButton ? "signin__button-text-diable" : "signin__button-text";

    return (
        < PopupWithForm isOpen={isSigninOpen} handleOpen={handleSignupOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign in" link="Sign up" >
            <p className="signin__input-title" >Email</p>
            <input className="signin__input" required name="email" type="email" placeholder="Enter email" onChange={onChangeEmail} value={email} />
            <span className="signin__input-err">{errMessageEmail}</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" required name="password" type="password" placeholder="Enter password" onChange={onChangePwd} value={password} />
            <span className="signin__input-err">{errMessagePwd}</span>
            <button className={buttonClass} onClick={onClickLogin} type="button" disabled={disableButton}><p className={buttonTextClass}>Sign in</p></button>
        </PopupWithForm >
    )
}