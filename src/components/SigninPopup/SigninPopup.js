import './SigninPopup.css';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function SigninPopup() {
    return (
        <PopupWithForm withForm={true} title="Sign in" link="Sign up">
            <p className="signin__input-title">Email</p>
            <input className="signin__input" />
            <span className="signin__input-err">error</span>
            <p className="signin__input-title">Password</p>
            <input className="signin__input" />
            <span className="signin__input-err">error</span>
            <button className="signin__button"><p className="signin__button-text">Sign in</p></button>
        </PopupWithForm>
    )
}