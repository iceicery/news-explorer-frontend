import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SearchNews from "../SearchNews/SearchNews";

export default function Main({ handleSigninOpen }) {
    return (
        <section className="main">
            <Header handleSigninOpen={handleSigninOpen} />
            <SearchNews isLogin={false} />
            <About />
            <Footer />
        </section>
    )
}