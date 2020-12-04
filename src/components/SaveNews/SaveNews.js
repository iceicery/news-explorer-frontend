import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import SaveNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import './SaveNews.css';

export default function SaveNews() {
    return (
        <section>
            <SaveNewsHeader />
            <NewsCardList isLogin={true} />
            <Footer />
        </section>
    )
}