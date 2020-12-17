import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';
import { mainApi } from '../../utils/utils';

export default function SigninPopup({ isSigninOpen, email, password, handleSignupOpen, handlePopupClose, handleLogin, handleEmail, handlePwd }) {
    const [errMessageEmail, setErrMessageEmail] = useState('');
    const [errMessagePwd, setErrMessagePwd] = useState('');

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
    function onClickLogin(e) {
        e.preventDefault();
        mainApi.authorize({ email, password })
            .then((data) => {
                if (!data) {
                    throw new Error("User Doesn't exist or wrong password.")
                }
                if (data.token) {
                    handlePopupClose();
                    handleLogin();
                }
            })
            .catch((err) => {
                setErrMessagePwd(err);
            });
    }

    const disableButton = (errMessageEmail !== "" || errMessagePwd !== "" || email === "" || password === "" ? true : false);
    const buttonClass = disableButton ? "signin__button-diable signin__button-text-diable" : "signin__button signin__button-text";

    return (
        < PopupWithForm isOpen={isSigninOpen} handleOpen={handleSignupOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign in" link="Sign up" >
            <p className="signin__input-title" >Email</p>
            <input className="signin__input" required name="email" type="email" placeholder="Enter email" onChange={onChangeEmail} />
            <span className="signin__input-err">{errMessageEmail}</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" required name="password" type="password" placeholder="Enter password" onChange={onChangePwd} />
            <span className="signin__input-err">{errMessagePwd}</span>
            <button className={buttonClass} onClick={onClickLogin} type="button" disabled={disableButton}>Sign in</button>
        </PopupWithForm >
    )
}