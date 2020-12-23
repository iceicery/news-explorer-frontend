import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from '../../utils/FormValidation';

export default function SigninPopup({ disable, isSigninOpen, errMsg, handleErrMsg, handleLoginSubmit, handleSignupOpen, handlePopupClose }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function onChange(event) {
        handleChange(event);
        handleErrMsg('');
    }
    function onClickLogin(e) {
        e.preventDefault();
        handleLoginSubmit({ email: values.email, password: values.password });
        resetForm();
    };
    const disableButton = isValid && errMsg === "" ? false : true;
    const buttonClass = disableButton ? "signin__button-diable signin__button-text-diable" : "signin__button signin__button-text";
    return (
        < PopupWithForm isOpen={isSigninOpen} handleErrMsg={handleErrMsg} handleOpen={handleSignupOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign in" link="Sign up" >
            <p className="signin__input-title" >Email</p>
            <input className="signin__input" required name="email" type="email" placeholder="Enter email" onChange={onChange} value={values.email || ''} disabled={disable} />
            <span className="signin__input-err">{errors.email}</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" required name="password" type="password" placeholder="Enter password" onChange={onChange} value={values.password || ''} disabled={disable} />
            <span className="signin__input-err">{errors.password}</span>
            <span className="signin__input-err">{errMsg}</span>
            <button className={buttonClass} onClick={onClickLogin} type="button" disabled={disableButton || disable}>Sign in</button>
        </PopupWithForm >
    )
}