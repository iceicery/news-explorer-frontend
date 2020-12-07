import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';

export default function SaveNews({ handleLogout, isLogin }) {
    return (
        <section>
            <SaveNewsHeader handleLogout={handleLogout} />
            <NewsCardList isLogin={isLogin} isSavedPage={true} />
            <Footer />
        </section>
    )
}