import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const App = () => {
  const [categories, setCategories] = useState(["Lilac", "Twice", "BTS", "SevenTeen", 'Stray kids'])

  // const handleAdd = ()  => {
  //   // Tener en cuenta la importancia de las llaves cuadradas para declarar el arreglo
  //   setCategories( [...categories, 'Monsta X'])
  // }
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
