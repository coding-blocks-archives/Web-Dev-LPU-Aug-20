import React from 'react';

import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return <>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ProductList />
        </div>
        <div className="col-6">
          <Cart />
        </div>
      </div>
    </div>
  </>
}

export default App
