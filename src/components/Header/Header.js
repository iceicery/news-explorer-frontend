import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

export default function Header({ isLogin, name, topic, handleSearch, handleSearchSubmit, handleSigninOpen, handleLogout, handleNavOpen }) {
    return (
        <header className="header">
            <Navigation isLogin={isLogin} isLight={false} name={name} handleSigninOpen={handleSigninOpen} handleLogout={handleLogout} handleNavOpen={handleNavOpen} />
            <div className="header__title-box"><h1 className="header__title">What's going on in the&nbsp;world?</h1></div>
            <div className="header__subtitle-box"><h3 className="header__subtitle">Find the latest news on any topic and save them in your personal account.</h3></div>
            <SearchForm topic={topic} handleSearch={handleSearch} handleSearchSubmit={handleSearchSubmit} />
        </header>
    )
}