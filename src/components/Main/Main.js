import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchNews from "../SearchNews/SearchNews";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import ServerErr from "../ServerErr/ServerErr";

export default function Main({ handleApiSaveCard, handleSigninOpen, isLogin, isServerErr, isSearchDone, isFound, isLoading, cards, isMore,
    handleApiUnSaveCard, handleHindMore, handleShowMore, handleSearch, handleSearchSubmit, handleLogout, handleNavOpen }) {
    return (
        <section className="main">
            <Header isLogin={isLogin} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} handleHindMore={handleHindMore} />
            <ServerErr isServerErr={isServerErr} />
            <Preloader isLoading={isLoading} />
            <NotFound isFound={isFound} />
            <SearchNews handleApiUnSaveCard={handleApiUnSaveCard} handleApiSaveCard={handleApiSaveCard} isLogin={isLogin} isSearchDone={isSearchDone} cards={cards} isMore={isMore} handleShowMore={handleShowMore} />
            <About />
            <Footer />
        </section>
    )
}