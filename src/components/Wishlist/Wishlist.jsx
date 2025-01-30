

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleRemoveWishlist = (id) => {
    const remainingWishlist = wishlistItems.filter(cart => cart.product_id !== id)
    localStorage.removeItem('wishlist', JSON.stringify(remainingWishlist))
    setWishlistItems(remainingWishlist)
    toast.success('Wishlist item delete done')
  }

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
  }, []);

  

  return (
    <div className="pt-12 pb-8 bg-[#ECECEC]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Wishlist Items</h2>
        {wishlistItems.length > 0 ? (
          <ul>
            {wishlistItems.map((item) => (
              <li className="p-8 rounded-2xl bg-white gap-8 mb-6 flex" key={item.product_id}>
                 <div className="w-[200px]">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-full items-center">

               <div>
               <h3 className="text-2xl font-bold mb-5">{item.product_title}</h3>
                <p className="mb-4"><span className="font-bold mr-1">Description:</span> <span className="opacity-70">{item.description}</span></p>
                <p className="font-semibold">Price: ${item.price}</p>
                <button className="btn bg-[#9538E2] text-white rounded-4xl border-0 mt-4">Add to Cart</button>
               </div>
                
                <button
                onClick={()=> handleRemoveWishlist(item.product_id)}
                className="cursor-pointer"
                ><i className="text-4xl text-red-400 fa-regular fa-circle-xmark"></i></button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
