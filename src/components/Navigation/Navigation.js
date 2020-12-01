import "./Navigation.css";
export default function Navigation() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <p className="nav__title">NewsExplorer</p>
                <div className="nav__box">
                    <p className="nav__place">Home</p>
                    <botton className="nav__signin">Sign in</botton>
                </div>
            </div>
        </nav>
    )
}