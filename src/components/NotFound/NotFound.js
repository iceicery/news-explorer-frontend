import ill from '../../images/not-found_v1.png';
import './NotFound.css';

export default function NotFound({ isFound }) {
    const notfoundClass = isFound ? "notfound-hidden" : "notfound";
    return (
        <section className={notfoundClass}>
            <img src={ill} alt="sad face" className="notfound__img" />
            <h3 className="notfound__title">Nothing found</h3>
            <p className="notfound__text">Sorry, but nothing matched your&nbsp;search&nbsp;terms.</p>
        </section>
    )
}