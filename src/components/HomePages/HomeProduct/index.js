import React from "react";
import './Style/index.css'
import img1 from '../../../assets/images/docker.png'
function Products() {
  return (
    <div className="product">
      <h4>Our Products</h4>
      <br />
      <h2>Products in Market</h2>
      <hr />
      <br />
      <p>
        We focused to make technology simple for you, and affordable for your
        business. Check out our mobile apps on the App Store or contact us to
        build one for your business
      </p>

      <div className="product-item">
        <div className="item">
          <img src={img1} alt="" />
          <h4>Product 1</h4>
        </div>
        <div className="item">
          <img src={img1} alt="" />
          <h4>Product 2</h4>
        </div>
      </div>

    </div>
  );
}

export default Products;
