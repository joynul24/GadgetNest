import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Cards = () => {
  const products = useLoaderData();
  const params = useParams();
  const [allProduct, setAllProduct] = useState([])
  useEffect(()=> {
     if(params.category){
      const filterByCategory = [...products].filter(product => product.category === params.category)
      
      setAllProduct(filterByCategory)
     }
     else{
       setAllProduct(products.slice(0,8))
     }
  }, [products, params.category])
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProduct.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
      </div>
    </div>
  );
};

export default Cards;
