import './SignupPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';
import { mainApi } from '../../utils/utils';
import { useFormWithValidation } from '../../utils/FormValidation';


export default function SignupPopup({ isSignupOpen, email, password, name, handleSigninOpen, handlePopupClose, handleConfirmOpen, handleEmail, handlePwd, handleName }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [errMessage, setErrMessage] = useState('');

    function onChange(e) {
        handleChange(e);
        setErrMessage('');
    }

    function onClickSubmit(e) {
        e.preventDefault();
        mainApi.register({ email: values.email, password: values.password, name: values.name })
            .then((res) => {
                if (res.message) {
                    throw new Error(res.message);
                }
                handlePopupClose();
                handleConfirmOpen();
                resetForm();
            })
            .catch((err) => {
                setErrMessage(err.message);
            });
    }
    const disableButton = isValid && errMessage === "" ? false : true;
    const buttonClass = disableButton ? "signup__button-diable signup__button-text-diable" : "signup__button signup__button-text";
    return (
        <PopupWithForm isOpen={isSignupOpen} handleOpen={handleSigninOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign up" link="Sign in">
            <p className="signup__input-title">Email</p>
            <input className="signup__input" required name="email" type="email" placeholder="Enter email" value={values.email || ""} onChange={onChange} />
            <span className="signup__input-err">{errors.email}</span>
            <p className="signup__input-title" >Password</p>
            <input className="signup__input" required name="password" type="password" placeholder="Enter password" value={values.password || ""} onChange={onChange} />
            <span className="signup__input-err">{errors.password}</span>
            <p className="signup__input-title">Username</p>
            <input className="signup__input" required name="name" placeholder="Enter your username" value={values.name || ""} minLength="2" maxLength="30" onChange={onChange} />
            <span className="signup__input-err">{errors.name}</span>
            <span className="signup__input-err">{errMessage}</span>
            <button className={buttonClass} onClick={onClickSubmit} type="button" disabled={disableButton}>Sign up</button>
        </PopupWithForm>
    )
}