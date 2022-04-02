import { Link, Outlet, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const navigateToProductsHandler = () => {
    navigate('/products');
  };
  return (
    <>
      <h1>Welcome Page</h1>
      <button onClick={navigateToProductsHandler}>Navigate to Prducts</button>
      <Link to='new-user'> Show New User </Link>
      {/* <Routes>
        <Route path='new-user' element={<h2> New User </h2>} />
      </Routes> */}
      <Outlet />
    </>
  );
};

export default Welcome;
