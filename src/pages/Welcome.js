import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Link to='/welcome/new-user'>Activate New User</Link>
      <Route path='/welcome/new-user'>
        <p> Welcome New User </p>
      </Route>
    </>
  );
};

export default Welcome;
