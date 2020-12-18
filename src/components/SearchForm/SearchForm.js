import { useFormWithValidation } from "../../utils/FormValidation";
import "./SearchForm.css";

export default function SearchForm({ handleSearch, handleSearchSubmit, handleHindMore }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();
    function onChangeTopic(e) {
        handleChange(e)
    }
    function onClickSubmit(e) {
        e.preventDefault();
        handleSearchSubmit(values.topic);
        handleSearch(values.topic);
        handleHindMore();
        resetForm();
    }
    const diableButton = isValid ? false : true;
    return (
        <form className="search">
            <input className="search__input" placeholder="Enter topic" onChange={onChangeTopic} name="topic" required />
            <span className="search__err">{errors.topic}</span>
            <button className="search__button" disabled={diableButton} onClick={onClickSubmit}>Search</button>
        </form>
    )
}