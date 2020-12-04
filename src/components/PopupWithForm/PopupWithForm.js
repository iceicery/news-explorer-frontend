import './PopupWithForm.css';

export default function PopupWithForm({ withForm, title, children, link }) {
    const text = withForm ? "or " : "";
    const linkClass = withForm ? "popup__text" : "popup__text-left";
    return (
        <>
            <div className="overlay"></div>
            <section className="popup">
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