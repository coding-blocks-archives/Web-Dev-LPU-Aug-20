import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  return <div>
    <h3>Products</h3>

    <ul className="list-group">
      {products.map(product => <li className="list-group-item">
        {product.name} - Rs. {product.price}
        <button onClick={() => {
          dispatch({
            type: 'ADD_TO_CART',
            product: product
          })
        }}> 
          Add to Cart 
        </button>
      </li>)}
    </ul>
  </div>
}
