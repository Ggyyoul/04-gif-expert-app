import { useState } from "react";

export const App = () => {
  // const categories = ["Lilac", "Twice", "BTS", "SevenTeen"];
  const [categories, setCategories] = useState(["Lilac", "Twice", "BTS", "SevenTeen", 'Stray kids'])

  const handleAdd = ()  => {
    // Tener en cuenta la importancia de las llaves cuadradas para declarar el arreglo
    setCategories( [...categories, 'Monsta X'])
  }
  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
