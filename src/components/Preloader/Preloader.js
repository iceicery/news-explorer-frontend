import './Preloader.css';

export default function Preloader() {
    return (
        <section className='preloader'>
            <i class="preloader__circle"></i>
            <p class="preloader__text">Searching for news...</p>
        </section>
    )
};