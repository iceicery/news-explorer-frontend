import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchNews from "../SearchNews/SearchNews";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

export default function Main({ handleSigninOpen, isLogin, topic, isSearchDone, isFound, isLoading, cards, isMore, savedCards,
    handleHindMore, handleShowMore, handleSearch, handleSearchSubmit, handleLogout, handleNavOpen, handleSaveCards }) {
    return (
        <section className="main">
            <Header isLogin={isLogin} topic={topic} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} handleHindMore={handleHindMore} />
            <Preloader isLoading={isLoading} />
            <NotFound isFound={isFound} />
            <SearchNews isLogin={isLogin} isSearchDone={isSearchDone} cards={cards} isMore={isMore} topic={topic} savedCards={savedCards} handleShowMore={handleShowMore} handleSaveCards={handleSaveCards} />
            <About />
            <Footer />
        </section>
    )
}