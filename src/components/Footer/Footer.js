import github from '../../images/github_icon.png';
import fb from '../../images/fb_icon.png';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">© 2020 Supersite, Powered by News API</p>
            <div className="footer__container">
                <nav className="footer__link-box">
                    <Link to="/" className="link"><p className="footer__link">Home</p></Link>
                    <a href="https://practicum.yandex.com/" target="_blank" rel="noreferrer" className="link" ><p className="footer__link">Practicum by Yandex</p></a>
                </nav>
                <nav className="footer__icon-box">
                    <a href="https://github.com/iceicery" target="_blank" rel="noreferrer" className="link" ><img src={github} alt="github icon" className="footer__icon" /></a>
                    <a href="https://www.facebook.com/YPracticum" target="_blank" rel="noreferrer" className="link" ><img src={fb} alt="facebook icon" className="footer__icon" /></a>
                </nav>
            </div>
        </footer>
    )
}