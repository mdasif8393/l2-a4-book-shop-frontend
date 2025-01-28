import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>ProductDetails ProductDetails: {productId}</h1>
    </div>
  );
};

export default ProductDetails;
