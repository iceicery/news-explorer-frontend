import { useCallback, useEffect } from 'react';
import './PopupWithForm.css';

export default function PopupWithForm({ isOpen, handleOpen, handlePopupClose, withForm, title, children, link }) {
    const text = withForm ? "or " : "";
    const linkClass = withForm ? "popup__text" : "popup__text-left";
    const overlayClass = isOpen ? "overlay" : "hidden";
    const popupClass = isOpen ? "popup" : "hidden";
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            handlePopupClose();
        }
    }, [handlePopupClose]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    function onClickClose() {
        handlePopupClose();;
    }

    function onClickOpen() {
        handlePopupClose();
        handleOpen();
    }
    return (
        <>
            <div className={overlayClass}></div>
            <section className={popupClass}>
                <div className="navpopup__container popup__mobile">
                    <p className="navpopup__title">NewsExplorer</p>
                    <button className="navpopup__close" onClick={onClickClose}></button>
                </div>
                <div className="popup__container-mobile">
                    <button className="popup__close" onClick={onClickClose}></button>
                    <form className="popup__form">
                        <h2 className="popup__title">{title}</h2>
                        {children}
                        <p className={linkClass}>{text}<button type="button" className="popup__link" onClick={onClickOpen}>{link}</button></p>
                    </form>
                </div>
            </section>
        </>
    )
}