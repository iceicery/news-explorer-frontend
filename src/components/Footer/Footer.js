import github from '../../images/github_icon.png';
import fb from '../../images/fb_icon.png';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">© 2020 Supersite, Powered by News API</p>
            <div className="footer__link-box">
                <Link to="/" className="link"><p className="footer__link">Home</p></Link>
                <p className="footer__link">Practicum by Yandex</p>
            </div>
            <div className="footer__icon-box">
                <img src={github} alt="github icon" className="footer__icon" />
                <img src={fb} alt="facebook icon" className="footer__icon" />
            </div>
        </footer>
    )
}