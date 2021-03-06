import { useState } from "react";
import PropTypes from 'prop-types';
import "./AddCategory.css";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const hableInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmite = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories( categories => [inputValue,...categories])
      setInputValue("")
    }
  };

  return (
    <form onSubmit={handleSubmite}>
      <p>{inputValue}</p>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={hableInputChange}
      />
    </form>
  );
};


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}