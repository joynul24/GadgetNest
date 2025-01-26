import { Link, useLoaderData } from "react-router-dom";

const CategoriesBtn = () => {

  const categories = useLoaderData();

  return (
    <div className="flex flex-col text-center gap-6">
      {categories.map((category) => (
        <Link key={category.category} to={`/category/${category.category}`}>{category.category}</Link>
      ))}
    </div>
  );
};

export default CategoriesBtn;
