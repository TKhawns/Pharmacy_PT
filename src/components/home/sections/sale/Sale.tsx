import ProductList from "./Product.js";
import "./Sale.scss";

function Sale() {
  return (
    <div className="sale-wrapper">
      <div className="top-line"> </div>
      <div className="sale-container">

        <div className="sale-banner">
          <div className="under-left"></div>
          <div className="under-right"></div>
          <div className="banner">
            <img
              className="banner-image"
              src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240503093939-0-flash-sale-bg.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="banner-content">
  
              <img className="content-image" src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240325034338-0-Flashsale.png" alt=""/>
              <span className="content-time">
                <span className="square">10</span>
                <span className="text">:</span>
                <span className="square">50</span>
                <span className="text">:</span>
                <span className="square">20</span>
              </span>
          </div>
        </div>

        <div className="sale-product">
          <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default Sale;
