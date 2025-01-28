import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const id = parseInt(productId)
  const data = useLoaderData()
  
  const products = data.find(product => product.product_id === id)
  console.log(products);
  const{product_image,product_title,price,  description, specification, rating} = products;

  return (
    <div className="container mx-auto bg-[#9538E2] pt-10 rounded-xl">
      <div className="text-white">
        <h1 className="text-3xl font-bold text-center mb-3">Product Details</h1>
        <p className="opacity-70 w-3xl mx-auto text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      {/* Details */}
      <div className="flex gap-8 rounded-3xl w-[1000px] mx-auto bg-white p-6">
        <div className="">
           <img
           className="w-[300px] rounded-2xl object-cover"
            src={product_image} alt="" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold">{product_title}</h1>
          <p className="text-xl font-semibold opacity-70">Price: $ {price}</p>
          <button className="btn btn-outline text-[#309C08] btn-sm rounded-4xl">In Stock</button>
          <p className="opacity-70">{description}</p>
          <p className="font-bold">Specification:</p>
          <div className="pl-4 opacity-70">
          {
            specification.map((item, idx) => <p key={idx}>{idx + 1+'.'} {item}</p>)
          }
          </div>
          <h4 className="font-bold">Rating:{rating}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
