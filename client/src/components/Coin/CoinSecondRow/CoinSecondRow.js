import React, { Component } from "react";
import DailyMovement from "./DailyMovement/DailyMovement";
import CoinChart from "./CoinChart/CoinChart";
import "./CoinSecondRow.css";

class CoinSecondRow extends Component {
  render() {
    let { symbol, exchanges, windowWidth, overrideData } = this.props;
    return (
      <div className={true ? "secondrow" : "secondrow-no-charts"}>
        <div>
          <DailyMovement
            coin={this.props.coin}
            aggregatedData={this.props.aggregatedData}
          />
        </div>
        <div className="tradingview">
          <CoinChart
            symbol={symbol}
            exchanges={exchanges}
            windowWidth={windowWidth}
            overrideData={overrideData}
          />
        </div>
      </div>
    );
  }
}

export default CoinSecondRow;
