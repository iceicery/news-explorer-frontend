import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';

export default function NewsCardList() {
    return (
        <ul className="newscardlist">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </ul>
    )
}