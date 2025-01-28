/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ product }) => {
    // console.log(product);
  const {product_id, product_image, product_title, price } = product || {};
  return (
    <div className="card rounded-2xl p-7 shadow-lg bg-white mb-5">
        <figure className="bg-gray-300 flex justify-center w-[280] h-[200px]">
            <img
            className="w-full h-full "
             src={product_image} alt="" />
        </figure>
        <div className="mt-6 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{product_title}</h1>
            <p className="text-xl font-medium opacity-70">{price} $</p>
            <div className="">
                <Link to={`/product/${product_id}`}><button className="btn btn-outline text-[#9538E2] rounded-4xl">View Details</button></Link>
            </div>
        </div>
    </div>
  );
};

export default Card;
