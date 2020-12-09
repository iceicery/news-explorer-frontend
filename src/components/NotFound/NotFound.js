import ill from '../../images/not-found_v1.png';
import './NotFound.css';

export default function NotFound() {
    return (
        <section className="notfound">
            <img src={ill} alt="not-found face" className="notfound__img" />
            <h3 className="notfound__title">Nothing found</h3>
            <p className="notfound__text">Sorry, but nothing matched your&nbsp;search&nbsp;terms.</p>
        </section>
    )
}