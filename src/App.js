import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          {/* redirect */}
          <Route path='/' element={<Navigate to='/welcome' />} />
          {/* <Route path='/' element={<Navigate replace to='/welcome' />} /> */}

          {/* The * to match the nested routes */}
          <Route path='/welcome/*' element={<Welcome />}>
            <Route path='new-user' element={<p> New User Profile </p>} />
          </Route>

          <Route path='/products' element={<Products />} />

          <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// domain.com/welcome -> Welcome page
// domain.com/products -> Products page
