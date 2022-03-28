import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to='/products/book'>Book</Link>
        </li>
        <li>
          <Link to='/products/laptop'>Laptop</Link>
        </li>
        <li>
          <Link to='/products/table'>Table</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
