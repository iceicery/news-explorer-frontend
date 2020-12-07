import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchNews from "../SearchNews/SearchNews";

export default function Main({ handleSigninOpen, isLogin, handleLogout }) {
    return (
        <section className="main">
            <Header isLogin={isLogin} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} />
            <SearchNews isLogin={isLogin} />
            <About />
            <Footer />
        </section>
    )
}