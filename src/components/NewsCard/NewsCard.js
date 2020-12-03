import newsImg from '../../images/image_08.png';
import './NewsCard.css';

export default function NewsCard() {
    return (
        <li className="newscard">
            <div className="newscard__icon"></div>
            <p className="newscard__popup">Sign in to save articles</p>
            <img src={newsImg} alt="news" className="newscard__img" />
            <div className="newscard__text-box">
                <p className="newscard__date">November 4, 2020</p>
                <h3 className="newscard__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
                <p className="newscard__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className="newscard__sourse">treehugger</p>
            </div>
        </li>
    )
}