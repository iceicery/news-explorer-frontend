import './SignupPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SignupPopup() {
    return (
        <PopupWithForm withForm={true} title="Sign up" link="Sign in">
            <p className="signup__input-title">Email</p>
            <input className="signup__input" required name="email" type="email" placeholder="Enter email" />
            <span className="signup__input-err">error</span>
            <p className="signup__input-title" >Password</p>
            <input className="signup__input" required name="password" type="password" placeholder="Enter password" />
            <span className="signup__input-err">error</span>
            <p className="signup__input-title">Username</p>
            <input className="signup__input" required name="name" placeholder="Enter your username" minLength="2" maxLength="30" />
            <span className="signup__input-err">error</span>
            <button className="signup__button"><p className="signup__button-text">Sign up</p></button>
        </PopupWithForm>
    )
}