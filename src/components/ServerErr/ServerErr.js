import ill from '../../images/not-found_v1.png';
import './ServerErr.css';

export default function ServerErr({ isServerErr }) {
    const serverErrClass = !isServerErr ? "serverErr-hidden" : "serverErr";
    return (
        <section className={serverErrClass}>
            <img src={ill} alt="sad face" className="serverErr__img" />
            <h4 className="serverErr__text">Sorry, something went wrong during the&nbsp;request. There may be a connection issue or the server may be down. Please&nbsp;try&nbsp;again&nbsp;later.</h4>
        </section>
    )
}
