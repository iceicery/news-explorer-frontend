import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';
import { CurrenUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function SaveNews({ handleLogout, isLogin, savedCards, handleNavOpen }) {
    const currentUser = useContext(CurrenUserContext);
    return (
        <section>
            <SaveNewsHeader isLogin={isLogin} name={currentUser.name} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <NewsCardList isLogin={isLogin} isSavedPage={true} cards={savedCards} />
            <Footer />
        </section>
    )
}