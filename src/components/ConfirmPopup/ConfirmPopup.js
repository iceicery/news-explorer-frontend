import "./ConfirmPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function ConfirmPopup({ isConfirmOpen, handleErrMsg, handleSigninOpen, handlePopupClose }) {
    return (
        <PopupWithForm isOpen={isConfirmOpen} handleErrMsg={handleErrMsg} handleOpen={handleSigninOpen} handlePopupClose={handlePopupClose} withForm={false} title="Registration successfully completed!" link="Sign in" />
    )
}