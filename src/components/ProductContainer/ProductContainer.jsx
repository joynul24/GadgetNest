import { Outlet } from "react-router-dom";
import CategoriesBtn from "../CategoriesBtn/CategoriesBtn";

const ProductContainer = () => {
    return (
        <div className="bg-[#09080F0D] container mx-auto mt-24">
              <h1 className="text-center text-4xl font-bold mt-24 mb-12 pt-5">Explore Cutting-Edge Gadgets</h1>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-1">
            <div className="rounded-2xl p-5 bg-gray-200"><CategoriesBtn></CategoriesBtn></div>
            </div>

            <div className="col-span-3">
            <div id="error" className="hidden">
               <div className="flex flex-col text-center h-[390px] gap-4">
               <p className="mt-30"><i className="fa-solid fa-ban text-6xl text-red-400"></i></p>
               <h2 className="text-2xl font-bold">No Data Available</h2>
               </div>
            </div>
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default ProductContainer;