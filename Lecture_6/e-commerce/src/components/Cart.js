import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const products = useSelector(state => state.cart)
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0)

  return <div>
    <h3>Cart</h3>

    <ul className="list-group">
      {products.map(product => <li className="list-group-item">
        {product.name} - Rs. {product.price}
      </li>)}
    </ul>

    <span>Total Price: {totalPrice}</span>
  </div>
}
