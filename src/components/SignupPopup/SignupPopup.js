import './SignupPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';

export default function SignupPopup({ isSignupOpen, email, password, name, handleSigninOpen, handlePopupClose, handleConfirmOpen, handleEmail, handlePwd, handleName }) {
    const [errMessageEmail, setErrMessageEmail] = useState('');
    const [errMessagePwd, setErrMessagePwd] = useState('');
    const [errMessageName, setErrMessageName] = useState('');
    function onClickSubmit() {
        handlePopupClose();
        handleConfirmOpen();
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
    function onChangeName(e) {
        if (!e.target.validity.valid) {
            setErrMessageName(e.target.validationMessage);
        } else {
            setErrMessageName('');
        }
        handleName(e.target.value);
    }
    const disableButton = (errMessageEmail !== "" || errMessagePwd !== "" || errMessageName !== "" ? true : false);
    const buttonClass = disableButton ? "signup__button-diable" : "signup__button";
    const buttonTextClass = disableButton ? "signup__button-text-diable" : "signup__button-text";
    return (
        <PopupWithForm isOpen={isSignupOpen} handleOpen={handleSigninOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign up" link="Sign in">
            <p className="signup__input-title">Email</p>
            <input className="signup__input" required name="email" type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} />
            <span className="signup__input-err">{errMessageEmail}</span>
            <p className="signup__input-title" >Password</p>
            <input className="signup__input" required name="password" type="password" placeholder="Enter password" value={password} onChange={onChangePwd} />
            <span className="signup__input-err">{errMessagePwd}</span>
            <p className="signup__input-title">Username</p>
            <input className="signup__input" required name="name" placeholder="Enter your username" minLength="2" maxLength="30" value={name} onChange={onChangeName} />
            <span className="signup__input-err">{errMessageName}</span>
            <button className={buttonClass} onClick={onClickSubmit} type="button"><p className={buttonTextClass}>Sign up</p></button>
        </PopupWithForm>
    )
}