import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchNews from "../SearchNews/SearchNews";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

export default function Main({ handleSigninOpen, isLogin, name, topic, handleSearch, handleSearchSubmit, handleLogout, handleNavOpen }) {
    return (
        <section className="main">
            <Header isLogin={isLogin} name={name} topic={topic} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <Preloader isLoading={false} />
            <NotFound isFound={true} />
            <SearchNews isLogin={isLogin} />
            <About />
            <Footer />
        </section>
    )
}