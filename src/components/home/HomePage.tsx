import Header from "../share_cpn/header/Header";
import Advertise from "./sections/ads/ads";
import "./HomePage.scss";
import Category from "./sections/category/Category";
import Sale from "./sections/sale/Sale";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-wrapper">
        <div className="ads-section">
          <div className="left-ads">
            <img
              className="image"
              src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240708042155-0-SubHappy1107-389x144px.png"
            />
            <img
              className="image"
              src="https://prod-cdn.pharmacity.io/e-com/images/banners/20240705070436-0-PMC%20Summer%20collection_389%20x%20143%20%28x2%29.jpg"
            />
          </div>
          <div className="right-ads">
            <Advertise />
          </div>
        </div>
        <div className="category-section">
          <Category />
        </div>
        <div className="sale-section">
          <Sale />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
