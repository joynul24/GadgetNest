import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId);
  const data = useLoaderData();

  const products = data.find((product) => product.product_id === id);
  // console.log(products);
  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    rating,
  } = products;

  return (
    <div className="container mx-auto bg-[#9538E2] pt-10 h-[350px] rounded-xl">
      <div className="text-white">
        <h1 className="text-3xl font-bold text-center mb-3">Product Details</h1>
        <p className="opacity-70 w-3xl mx-auto text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      {/* Details */}
      <div className="mt-14 shadow-lg flex gap-8 rounded-3xl w-[1000px] mx-auto bg-white p-6">
        <div className="">
          <img
            className="w-[300px] h-full rounded-2xl object-cover"
            src={product_image}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{product_title}</h1>
          <p className="text-xl font-semibold opacity-70">Price: $ {price}</p>
          <button className="btn btn-outline text-[#309C08] btn-sm rounded-4xl">
            In Stock
          </button>
          <p className="opacity-70">{description}</p>
          <p className="font-bold">Specification:</p>
          <div className="pl-4 opacity-70">
            {specification.map((item, idx) => (
              <p key={idx}>
                {idx + 1 + "."} {item}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <i className="fa-solid fa-star text-yellow-400 hover:text-yellow-500 cursp"></i>
              <i className="fa-solid fa-star text-yellow-400 hover:text-yellow-500 cursp"></i>
              <i className="fa-solid fa-star text-yellow-400 hover:text-yellow-500 cursp"></i>
              <i className="fa-regular fa-star-half-stroke text-yellow-400 hover:text-yellow-500 cursp"></i>
            </div>
            <h5 className="font-medium">{rating}</h5>
          </div>
          {/* buttos */}
          <div className="flex items-center gap-4">
            <button className="btn bg-[#9538E2] text-white rounded-4xl font-bold">Add To Cart <i className="fa-solid fa-cart-shopping"></i></button>
            <button className="btn  rounded-full p-4"><i className="fa-regular fa-heart text-2xl hover:text-[#9538E2]"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
