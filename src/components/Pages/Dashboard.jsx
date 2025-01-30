/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import Heading from "../Heading/Heading";
// import Cart from "../Cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";

// const Dashboard = () => {
//   const [isActive, setIsActive] = useState({
//     cart: true,
//     status: "cart",
//   });

//   const handleIsActiveStatus = (status) => {
//     if (status === "cart") {
//       setIsActive({
//         cart: true,
//         status: "cart",
//       });
//     } else {
//       setIsActive({
//         cart: false,
//         status: "wislist",
//       });
//     }
//   };

//   return (
//     <div className="">
//       <div className="bg-[#9538E2] text-white">
//       <Heading
//         title={"Dashboard"}
//         subtitle={
//           "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
//         }
//       ></Heading>
//       <div className="flex justify-center gap-6 mt-8 pb-8">
//         <button
//          onClick={()=>handleIsActiveStatus('cart')}
//          className={isActive.cart? 'btn rounded-4xl btn-outline bg-white text-[#9538E2] border-0' : 'btn rounded-4xl btn-outline'}
//          >Cart</button>
//         <button 
//         onClick={()=> handleIsActiveStatus('wishlist')}
//         className={isActive.cart? 'btn rounded-4xl btn-outline' : 'btn rounded-4xl btn-outline bg-white text-[#9538E2] border-0'}
//         >Wishlist</button>
//       </div>
//       </div>

//       <div>
//          {isActive.cart? <Cart></Cart> : <Wishlist></Wishlist>}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









import { useState } from "react";
import Heading from "../Heading/Heading";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  const [isActive, setIsActive] = useState({ cart: true, status: "cart" });

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);


  const handleIsActiveStatus = (status) => {
    setIsActive({ cart: status === "cart", status });
  };

  return (
    <div>
      <div className="bg-[#9538E2] text-white">
        <Heading title="Dashboard" subtitle="Explore the latest gadgets that will take your experience to the next level." />
        <div className="flex justify-center gap-6 mt-8 pb-8">
          <button
            onClick={() => handleIsActiveStatus("cart")}
            className={isActive.cart ? "btn rounded-4xl btn-outline bg-white text-[#9538E2] border-0" : "btn rounded-4xl btn-outline"}
          >
            Cart
          </button>
          <button
            onClick={() => handleIsActiveStatus("wishlist")}
            className={isActive.cart ? "btn rounded-4xl btn-outline" : "btn rounded-4xl btn-outline bg-white text-[#9538E2] border-0"}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div>
        {isActive.cart ? <Cart items={cartItems}/> : <Wishlist items={wishlistItems} />}
      </div>
    </div>
  );
};

export default Dashboard;