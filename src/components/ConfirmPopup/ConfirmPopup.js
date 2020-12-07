import "./ConfirmPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmPopup({ isConfirmOpen, handleSigninOpen, handlePopupClose }) {
    return (
        <PopupWithForm isOpen={isConfirmOpen} handleOpen={handleSigninOpen} handlePopupClose={handlePopupClose} withForm={false} title="Registration successfully completed!" link="Sign in" />
    )
}