import { useParams } from "react-router-dom";

const Cards = () => {
  const params = useParams();
  //   console.log(params.category);
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  );
};

export default Cards;
