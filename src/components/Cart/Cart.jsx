/* eslint-disable react/prop-types */

// const Cart = () => {

//   return (
//     <div className="container mx-auto mt-12">
//       <div className="flex justify-between">
//         <h1 className="text-3xl font-bold">Cart</h1>
//         <div className="flex items-center gap-6">
//           <h3 className="text-2xl font-bold">Total Cost:</h3>
//           <button className="btn btn-outline text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white ">
//             Sort by Price<i className="fa-solid fa-sliders fa-beat"></i>
//           </button>
//           <button className="btn rounded-4xl bg-[#9538E2] hover:bg-[#9b5dce] text-white border-0 ">
//             Purchase
//           </button>
//         </div>
//       </div>
//       {/* cards */}
//       <div>

//       </div>
//     </div>
//   );
// };

// export default Cart;

import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  return (
    <div className="pt-12 pb-8 bg-[#ECECEC]">
      <div className="container mx-auto ">
        <h2 className="text-xl font-bold mb-8">Cart Items</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.product_id}
                className="rounded-2xl bg-white gap-8 p-8 flex mb-6"
              >
                <div className="w-[200px] h-[125px]">
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-5">
                      {item.product_title}
                    </h3>
                    <p className="opacity-70 mb-5">{item.description}</p>
                    <p className="font-semibold">Price: $ {item.price}</p>
                  </div>
                  <button className="cursor-pointer">
                    <i className="text-4xl text-red-400 fa-regular fa-circle-xmark"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
