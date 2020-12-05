import "./SearchForm.css";

export default function SearchForm() {
    return (
        <form className="search">
            <input className="search__input" placeholder="Enter topic"></input>
            <botton className="search__button">Search</botton>
        </form>
    )
}