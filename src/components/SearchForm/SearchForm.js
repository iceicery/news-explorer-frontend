import "./SearchForm.css";

export default function SearchForm({ topic, handleSearch, handleSearchSubmit }) {
    function onChangeTopic(e) {
        handleSearch(e.target.value);
    }
    function onClickSubmit(e) {
        e.preventDefault();
        handleSearchSubmit(topic);
    }
    return (
        <form className="search">
            <input className="search__input" placeholder="Enter topic" onChange={onChangeTopic} />
            <button className="search__button" onClick={onClickSubmit}>Search</button>
        </form>
    )
}