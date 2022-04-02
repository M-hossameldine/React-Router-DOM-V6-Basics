import { useParams, useNavigate } from 'react-router-dom';
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <button onClick={navigateBackHandler}>Navigate Back to Products</button>
    </>
  );
};

export default ProductDetails;
