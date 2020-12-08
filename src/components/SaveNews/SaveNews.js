import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';

export default function SaveNews({ handleLogout, isLogin, name, handleNavOpen }) {
    return (
        <section>
            <SaveNewsHeader isLogin={isLogin} name={name} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <NewsCardList isLogin={isLogin} isSavedPage={true} />
            <Footer />
        </section>
    )
}