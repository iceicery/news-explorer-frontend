import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';

export default function SaveNews({ handleLogout, isLogin, handleNavOpen }) {
    return (
        <section>
            <SaveNewsHeader isLogin={isLogin} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <NewsCardList isLogin={isLogin} isSavedPage={true} />
            <Footer />
        </section>
    )
}