import React, { Component, Fragment } from "react";
import CoinHeader from "../components/Coin/CoinHeader/CoinHeader";
import CoinTabs from "../components/Coin/CoinTabs/CoinTabs";
import CoinSecondRow from "../components/Coin/CoinSecondRow/CoinSecondRow";
import Footer from "../components/Footer/Footer";
import ReactResizeDetector from "react-resize-detector";
import gql from "graphql-tag";
import "./Coin.css";
import { Query } from "react-apollo";
import { getOverrideData } from "../functions";

// import { updateDimensions } from "../functions";

const COINDATA_QUERY = gql`
  query coinDataQuery($symbol: String!) {
    coinSnap(symbol: $symbol) {
      CoinInfo {
        Id
        Name
        FullName
        ImageUrl
      }
      AggregatedData {
        OPENDAY
        LOWDAY
        HIGHDAY
      }
      Exchanges {
        TYPE
        MARKET
        FROMSYMBOL
        TOSYMBOL
        FLAGS
        PRICE
        LASTUPDATE
        LASTVOLUME
        LASTVOLUMETO
        LASTTRADEID
        VOLUME24HOUR
        VOLUME24HOURTO
        OPEN24HOUR
        HIGH24HOUR
        LOW24HOUR
        CHANGE24HOUR
        CHANGEPCT24HOUR
        CHANGEDAY
        CHANGEPCTDAY
        SUPPLY
        MKTCAP
        TOTALVOLUME24H
        TOTALVOLUME24HTO
      }
    }
    coinMarketCap {
      name
      symbol
      rank
      price_usd
      price_btc
      market_cap_usd
      available_supply
      total_supply
      max_supply
      volume
      percent_change_1h
      percent_change_24h
      percent_change_7d
    }
  }
`;

class Coin extends Component {
  constructor(props) {
    super();
    this.state = {
      info: [],
      exchanges: [],
      coinCompare: [],
      coinMarket: "",
      coinId: "",
      general: "",
      symbol: "defaulted",
      name: "",
      height: window.innerHeight,
      width: window.innerWidth
    };
    // this.getData = this.getData.bind(this);
    // this.thisShit = this.thisShit.bind(this);
    // this.findExchange = this.findExchange.bind(this);
  }

  componentDidMount() {
    console.log("this.props :", this.props);
    let symbol = this.props.match.params.coinSymbol;

    this.setState({ symbol: symbol, overrideData: getOverrideData(symbol) });
  }

  render() {
    let { symbol, overrideData } = this.state;
    return (
      <div>
        <Query query={COINDATA_QUERY} variables={{ symbol: symbol }}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div id="preloader">
                  <div id="loader" />
                </div>
              );
            if (error) console.error("ERR: ", error);
            if (data) {
              let coin;
              data.coinMarketCap.map(v => {
                if (v.symbol === symbol) {
                  coin = v;
                }
                return "";
              });
              return (
                <div
                  onClick={() => {
                    console.log("this :", this);
                  }}
                >
                  <ReactResizeDetector handleWidth handleHeight>
                    {(width, height) => (
                      <div>
                        {console.log("width :", width, height)}{" "}
                        <CoinHeader
                          symbol={symbol}
                          coinInfo={data.coinSnap.CoinInfo}
                          coin={coin}
                        />
                        <CoinSecondRow
                          symbol={symbol}
                          aggregatedData={data.coinSnap.AggregatedData}
                          exchanges={data.coinSnap.Exchanges}
                          coin={coin}
                          windowWidth={width}
                          windowHeight={height}
                          overrideData={overrideData}
                        />
                        <div className="break" />
                        <CoinTabs
                          id={data.coinSnap ? data.coinSnap.CoinInfo.Id : ""}
                          symbol={symbol}
                          coin={coin}
                          windowWidth={width}
                          windowHeight={height}
                          exchangeList={data.coinSnap.Exchanges}
                          overrideData={overrideData}
                        />
                        <Footer />
                      </div>
                    )}
                  </ReactResizeDetector>
                </div>
              );
            }
          }}
        </Query>
      </div>
    );

    // Hi From {this.state.symbol}</div>;
  }
}

export default Coin;
