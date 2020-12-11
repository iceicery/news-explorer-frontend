import './Preloader.css';

export default function Preloader({ isLoading }) {
    const preloaderClass = isLoading ? "preloader" : "preloader-hidden";
    return (
        <section className={preloaderClass}>
            <div className="preloader__circle"></div>
            <p className="preloader__text">Searching for news...</p>
        </section>
    )
};