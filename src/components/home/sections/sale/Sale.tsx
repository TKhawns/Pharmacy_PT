import "./Sale.scss";

function Sale() {
  return (
    <div className="sale-wrapper">
      <div className="top-banner">
        <div className="top-banner-content">
          <div className="under-left"></div>
          <div className="under-right"></div>
        </div>
      </div>

      <div className="sale-content">
        abc
        <div className="banner">
          <div>
            <img
              className="banner-image"
              src="https://prod-cdn.pharmacity.io/e-com/images/ecommerce/20240503093939-0-flash-sale-bg.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="product"></div>
      </div>
      <div className="bot-banner"></div>
    </div>
  );
}

export default Sale;
