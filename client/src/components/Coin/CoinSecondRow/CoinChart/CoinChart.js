import React from "react";
import { findExchange } from "../../../../functions";
import TradingViewWidget from "react-tradingview-widget";

const tradingViewExchanges = [
  "Binance",
  "Bitfinex",
  "bitFlyer",
  "Bithumb",
  "BitMEX",
  "bitso",
  "Bitstamp",
  "BitTrex",
  "BTCYou",
  "BX.in.th",
  "CEX.IO",
  "Coinbase",
  "Coinfloor",
  "FoxBit",
  "Gemini",
  "Gocio",
  "itBit",
  "Korbit",
  "Kraken",
  "Mercado",
  "Okcoin",
  "Poloniex",
  "Wex"
];

const CoinChart = props => {
  let { tradingviewSymbol } = props.overrideData;
  let propperExchange = findExchange(tradingViewExchanges, props.exchanges);
  let widgetId = propperExchange + ":" + props.symbol + "BTC";

  console.log("widgetId :", widgetId);
  console.log("overrideDate :", tradingviewSymbol);

  return (
    <div>
      <div className="tradingview">
        <TradingViewWidget
          symbol={tradingviewSymbol ? tradingviewSymbol : widgetId}
          height={props.windowWidth.width > 400 ? "600" : "300"}
          width="100%"
          theme="dark"
          hide_side_toolbar="false"
        />
      </div>
    </div>
  );
};

export default CoinChart;
