import React from "react";
import "./CoinHeader.css";
const FontAwesome = require("react-fontawesome");
const numeral = require("numeral");

const CoinHeader = props => {
  let { symbol, name } = props.coin;
  let { ImageUrl } = props.coinInfo;

  const imgPath = "https://www.cryptocompare.com" + ImageUrl;
  let {
    price_usd,
    price_btc,
    percent_change_24h,
    rank,
    volume,
    market_cap_usd,
    total_supply
  } = props.coin;

  return (
    <div className="coin-card-container">
      <div className="coincard">
        <div className="left-container">
          <div className="left-flex">
            <div className="logo-container">
              <img src={imgPath} alt="logo" className="img-responsive" />
            </div>
            <div className="coinName">
              <h2>
                <strong>{name}</strong>
              </h2>
              <div className="middleLine">
                <h3>{numeral(price_usd).format("$0,0.00")}</h3>
                <h3 className={percent_change_24h > 0 ? "green" : "red "}>
                  &nbsp; ({percent_change_24h}%)
                </h3>
                <span style={{ paddingTop: "3px", paddingLeft: "15px" }}>
                  ({symbol})
                </span>
              </div>

              <h5>
                <FontAwesome className="super-crazy-colors" name="btc" />
                {price_btc}
              </h5>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="rank">
            <h3>Rank</h3>

            <p />
            <h4>{rank}</h4>
          </div>
          <div className="marketCap">
            <h3>Market Cap</h3>

            <p />
            <h4>{numeral(market_cap_usd).format("$0,0.00")}</h4>
          </div>
          <div className="dailyVolume">
            <h3>24H Volume</h3>

            <p />
            <h4>{numeral(volume).format("$0,0.00")}</h4>
          </div>
          <div className="percent">
            <h3>Total Supply</h3>
            <p />
            <h4>{numeral(total_supply).format("0,0.00")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinHeader;
