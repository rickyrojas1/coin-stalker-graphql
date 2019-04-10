import React from "react";
import "./Footer.css";
import { white } from "material-ui/styles/colors";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h4 style={{ color: "white", textAlign: "center" }}>
          Data Pulled from:
        </h4>
        <div className="data-pulled">
          <div className="crypto-compare">
            <img
              src={require("../../assets/img/Cryptocompare.png")}
              alt="cryptocompare"
              className="crypto-compare-logo"
            />
            <h6>
              <a href="https://min-api.cryptocompare.com/">CryptoCompare</a>
            </h6>
          </div>
          <div className="coinmarketcap">
            <img
              src={require("../../assets/img/coin-market-cap-logo.png")}
              alt="cryptocompare"
              className="coinmarketcap-logo"
            />
            <h6>
              <a href="https://coinmarketcap.com/api/">CoinMarketCap</a>
            </h6>
          </div>
        </div>
      </div>
      <div className="footer-logo">
        <img
          src={require("../../assets/img/footerImg.png")}
          alt="coinStalker"
          className="footer-logo"
        />
        <p className="copyright">© 2019 CoinStalker</p>
      </div>
      <div className="donations">
        <h4>Donations: </h4>
        <h6>BTC: 3KSZkpLxD91rT4576FfMp2t5XDdYzhqbas</h6>
        <h6>BCH: 1LLAWSoUGGhZZxRdK76oeRb33HJxTYJcpZ</h6>
        <h6>ETH: 0x401b40483D81564F4b882f7f846F0fCa513eCA98</h6>
        <h6>LTC: LehYMJjDU1j95qqEms1PFMf6v7UTindefR</h6>
      </div>
    </div>
  );
};

export default Footer;
