import { NavLink, useLoaderData } from "react-router-dom";

const CategoriesBtn = () => {

  const categories = useLoaderData();

  return (
    <div className="flex flex-col text-center gap-6">
      {categories.map((category) => (
        <NavLink className={'bg-white rounded-4xl font-extrabold p-4'} key={category.category} to={`/category/${category.category}`}>{category.category}</NavLink>
      ))}
    </div>
  );
};

export default CategoriesBtn;
