import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="top-header">
          <div className="logo">
            <img
              alt="logo-app"
              width={"150px"}
              src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706161420-0-logo-white-text.svg"
            />
          </div>
          <div className="search">
            <div className="search-content">
              <FontAwesomeIcon
                color="grey"
                fontSize={"22px"}
                icon={faMagnifyingGlass}
              />
              <input
                className="search-input"
                placeholder="Tên thuốc, triệu chứng,..."
              />
            </div>
          </div>
          <div className="service">
            <FontAwesomeIcon color="white" fontSize={"21px"} icon={faBell} />
            <FontAwesomeIcon
              color="white"
              fontSize={"21px"}
              icon={faCartArrowDown}
            />
          </div>
          <div className="col-margin"> </div>
          <div className="account">
            <div className="account-wrapper">
              <FontAwesomeIcon icon={faCircleUser} />
              <div className="account-content">Đăng nhập / Đăng ký</div>
            </div>
          </div>
        </div>
        <div className="bot-header">
          <div className="category">
            <div className="category-content">
              <div className="category-name">
                <FontAwesomeIcon fontSize={"20px"} icon={faBars} />
                <div>Danh mục</div>
              </div>
              <div className="right-icon">
                <svg
                  height={"15px"}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7138 16.7077L21.7048 7.71374C22.0984 7.31909 22.0984 6.6797 21.7048 6.28406C21.3111 5.88941 20.6717 5.88941 20.2781 6.28406L12.0005 14.5646L3.72293 6.28505C3.32928 5.89041 2.68989 5.89041 2.29524 6.28505C1.90159 6.6797 1.90159 7.32009 2.29524 7.71474L11.2861 16.7087C11.6757 17.0973 12.3251 17.0973 12.7138 16.7077Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div>Thuốc</div>
          <div>Tra cứu bệnh</div>
          <div>Thực phẩm chức năng</div>
          <div>Chăm sóc cá nhân</div>
          <div>Thiết bị y tế</div>
          <div>Liên hệ</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
