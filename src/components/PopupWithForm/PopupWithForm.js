import './PopupWithForm.css';

export default function PopupWithForm({ isOpen, withForm, title, children, link }) {
    const text = withForm ? "or " : "";
    const linkClass = withForm ? "popup__text" : "popup__text-left";
    const overlayClass = isOpen ? "overlay" : "hidden";
    const popupClass = isOpen ? "popup" : "hidden"
    return (
        <>
            <div className={overlayClass}></div>
            <section className={popupClass}>
                <button className="popup__close"></button>
                <form className="popup__form">
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <p className={linkClass}>{text}<a href="https://trello.com/b/qiFDqZ8g/the-final-project-news-explorer" className="popup__link">{link}</a></p>
                </form>
            </section>
        </>
    )
}