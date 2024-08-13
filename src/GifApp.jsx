import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifApp = () => {
  const [categories, setCategories] = useState([
    "Naruto shippuden",
    "Dragon Ball",
  ]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => {
          return <ul key={category}>{category}</ul>;
        })}
      </ol>
    </>
  );
};
