import { useLoaderData,useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Cards = () => {
  const products = useLoaderData();
  const params = useParams();
  // console.log(params.category);
  const [allProduct, setAllProduct] = useState([])
  useEffect(()=> {
    if(params.category === 'Accessories') {
      document.getElementById('error').classList.remove('hidden')
      setAllProduct([])
    }
    else{
      if(params.category === 'All Product'){
        setAllProduct(products)
      }
       else if(params.category){
        const filterByCategory = [...products].filter(product => product.category === params.category)
        
        setAllProduct(filterByCategory)
       }
       else{
         setAllProduct(products.slice(0,8))
       }
       document.getElementById('error').classList.add('hidden')
    }
  }, [products, params.category])
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProduct.map((product) => (
        <Card key={product.product_id} product={product}></Card>
      ))}
      </div>
    </div>
  );
};

export default Cards;
