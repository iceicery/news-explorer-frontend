import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';
import { mainApi } from '../../utils/utils';
import { useFormWithValidation } from '../../utils/FormValidation';

export default function SigninPopup({ isSigninOpen, handleSignupOpen, handlePopupClose, handleLogin }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [errMessage, setErrMessage] = useState('');
    function onChange(event) {
        handleChange(event);
        setErrMessage('');
    }
    function onClickLogin(e) {
        e.preventDefault();
        mainApi.authorize({ email: values.email, password: values.password })
            .then((data) => {
                if (!data) {
                    throw new Error("User Doesn't exist or wrong password.")
                }
                if (data.token) {
                    handlePopupClose();
                    handleLogin();
                    resetForm();
                }
            })
            .catch((err) => {
                setErrMessage(err);
            });
    };
    const disableButton = isValid && errMessage === "" ? false : true;
    const buttonClass = disableButton ? "signin__button-diable signin__button-text-diable" : "signin__button signin__button-text";
    return (
        < PopupWithForm isOpen={isSigninOpen} handleOpen={handleSignupOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign in" link="Sign up" >
            <p className="signin__input-title" >Email</p>
            <input className="signin__input" required name="email" type="email" placeholder="Enter email" onChange={onChange} value={values.email || ''} />
            <span className="signin__input-err">{errors.email}</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" required name="password" type="password" placeholder="Enter password" onChange={onChange} value={values.password || ''} />
            <span className="signin__input-err">{errors.password}</span>
            <span className="signin__input-err">{errMessage}</span>
            <button className={buttonClass} onClick={onClickLogin} type="button" disabled={disableButton}>Sign in</button>
        </PopupWithForm >
    )
}