import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';

export default function SaveNews({ handleLogout, isLogin, savedCards, handleNavOpen, handleDeleteCard }) {
    return (
        <section>
            <SaveNewsHeader isLogin={isLogin} savedCards={savedCards} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <NewsCardList isLogin={isLogin} isSavedPage={true} cards={savedCards} handleDeleteCard={handleDeleteCard} />
            <Footer />
        </section>
    )
}