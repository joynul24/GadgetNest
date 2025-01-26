import { Outlet } from "react-router-dom";
import CategoriesBtn from "../CategoriesBtn/CategoriesBtn";

const ProductContainer = () => {
    return (
        <div className="grid grid-cols-4 gap-6 border-2 container mx-auto mt-24">
            <div className="border-red-500 border-2 col-span-1"><CategoriesBtn></CategoriesBtn></div>

            <div className="border-yellow-500 border-2 col-span-3">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductContainer;