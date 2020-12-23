import { useState } from "react";
import { useFormWithValidation } from "../../utils/FormValidation";
import "./SearchForm.css";

export default function SearchForm({ disable, handleSearch, handleSearchSubmit, handleHindMore }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    const [errMessage, setErrMessgae] = useState('');
    function onChangeTopic(e) {
        handleChange(e);
        setErrMessgae('');
    }
    function onClickSubmit(e) {
        e.preventDefault();
        if (!isValid) {
            setErrMessgae("Please enter a keyword");
            return;
        }
        handleSearchSubmit(values.topic);
        handleSearch(values.topic);
        handleHindMore();
        resetForm();
    }

    return (
        <form className="search">
            <input className="search__input" placeholder="Enter topic" onChange={onChangeTopic} name="topic" value={values.topic || ""} required disabled={disable} />
            <span className="search__err">{errors.topic}</span>
            <button className="search__button" onClick={onClickSubmit} disabled={disable}>Search</button>
            <span className="search__err-click">{errMessage}</span>
        </form>
    )
}