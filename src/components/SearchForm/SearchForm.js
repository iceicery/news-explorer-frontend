import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ topic, handleSearch, handleSearchSubmit, handleHindMore }) {
    const [errMessage, setErrMessage] = useState('');
    function onChangeTopic(e) {
        if (!e.target.validity.valid) {
            setErrMessage(e.target.validationMessage)
        } else {
            setErrMessage("");
        }
        handleSearch(e.target.value);
    }
    function onClickSubmit(e) {
        e.preventDefault();
        handleSearchSubmit(topic);
        handleHindMore();
    }
    const diableButton = errMessage === "" && topic !== "" ? false : true;
    return (
        <form className="search">
            <input className="search__input" placeholder="Enter topic" onChange={onChangeTopic} required />
            <span className="search__err">{errMessage}</span>
            <button className="search__button" disabled={diableButton} onClick={onClickSubmit}>Search</button>
        </form>
    )
}