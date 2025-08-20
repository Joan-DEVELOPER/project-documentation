// Import de iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCoins,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

function NavBtn() {
  return (
    <>
      <div className="navBtn">
        <div className="btnTitle">
          <p>Profile</p>
        </div>
        <div className="btnIcon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>

      <div className="navBtn">
        <div className="btnTitle">
          <p>Stocks</p>
        </div>
        <div className="btnIcon">
          <FontAwesomeIcon icon={faCoins} />
        </div>
      </div>

      <div className="navBtn">
        <div className="btnTitle">
          <p>ETFs</p>
        </div>
        <div className="btnIcon">
          <FontAwesomeIcon icon={faChartLine} />
        </div>
      </div>

      <div className="navBtn">
        <div className="btnTitle">
          <p>Cryptocurrencies</p>
        </div>
        <div className="btnIcon">
          <FontAwesomeIcon icon={faBitcoin} />
        </div>
      </div>
    </>
  );
}

// Estilo del componente
import "./nav_btn.css"; //Import del css

export default NavBtn;
