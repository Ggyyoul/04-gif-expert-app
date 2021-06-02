import { useState } from "react";
import "./AddCategory.css";
export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const hableInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmite = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmite}>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={hableInputChange}
      />
    </form>
  );
};
