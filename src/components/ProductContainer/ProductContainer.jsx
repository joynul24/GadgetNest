import { Outlet } from "react-router-dom";
import CategoriesBtn from "../CategoriesBtn/CategoriesBtn";

const ProductContainer = () => {
    return (
        <div className="container mx-auto mt-24">
              <h1 className="text-center text-4xl font-bold mt-24 mb-12">Explore Cutting-Edge Gadgets</h1>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-1">
            <div className="rounded-2xl p-5 bg-gray-200"><CategoriesBtn></CategoriesBtn></div>
            </div>

            <div className="col-span-3">
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default ProductContainer;