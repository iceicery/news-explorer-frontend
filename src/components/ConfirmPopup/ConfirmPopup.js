import "./ConfirmPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmPopup() {
    return (
        <PopupWithForm withForm={false} title="Registration successfully completed!" link="Sign in" />
    )
}