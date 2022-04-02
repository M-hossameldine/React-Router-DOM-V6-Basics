import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Link to='new-user'> Show New User </Link>
      <Routes>
        <Route path='new-user' element={<h2> New User </h2>} />
      </Routes>
    </>
  );
};

export default Welcome;
