import { useState } from 'react';
import { AddCategory } from './components/AddCategory/AddCategory';
import { GifGrid } from './components/GifGrid/GifGrid';

export const App = ( {defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
