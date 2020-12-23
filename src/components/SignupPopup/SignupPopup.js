import './SignupPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from '../../utils/FormValidation';


export default function SignupPopup({ disable, isSignupOpen, errMsg, handleErrMsg, handleSignupSubmit, handleSigninOpen, handlePopupClose }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function onChange(e) {
        handleChange(e);
        handleErrMsg('');
    }

    function onClickSubmit(e) {
        e.preventDefault();
        handleSignupSubmit({ email: values.email, password: values.password, name: values.name });
        resetForm();
    }
    const disableButton = isValid && errMsg === "" ? false : true;
    const buttonClass = disableButton ? "signup__button-diable signup__button-text-diable" : "signup__button signup__button-text";
    return (
        <PopupWithForm isOpen={isSignupOpen} handleErrMsg={handleErrMsg} handleOpen={handleSigninOpen} handlePopupClose={handlePopupClose} withForm={true} title="Sign up" link="Sign in">
            <p className="signup__input-title">Email</p>
            <input className="signup__input" required name="email" type="email" placeholder="Enter email" value={values.email || ""} onChange={onChange} disabled={disable} />
            <span className="signup__input-err">{errors.email}</span>
            <p className="signup__input-title" >Password</p>
            <input className="signup__input" required name="password" type="password" placeholder="Enter password" value={values.password || ""} onChange={onChange} disabled={disable} />
            <span className="signup__input-err">{errors.password}</span>
            <p className="signup__input-title">Username</p>
            <input className="signup__input" required name="name" placeholder="Enter your username" value={values.name || ""} minLength="2" maxLength="30" onChange={onChange} disabled={disable} />
            <span className="signup__input-err">{errors.name}</span>
            <span className="signup__input-err">{errMsg}</span>
            <button className={buttonClass} onClick={onClickSubmit} type="button" disabled={disableButton || disable}>Sign up</button>
        </PopupWithForm>
    )
}