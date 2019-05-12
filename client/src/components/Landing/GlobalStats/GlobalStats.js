import React, { Component } from "react";
import { FormattedNumber } from "react-intl";
import "./GlobalStats.css";

class GlobalStats extends Component {
  render(props) {
    const {
      active_assets,
      active_currencies,
      bitcoin_percentage_of_market_cap,
      total_24h_volume_usd,
      total_market_cap_usd
    } = this.props.stats;
    return (
      <div className="searchStats">
        <h5 className="border-right">
          BTC Dominance:
          <br />
          &nbsp;
          <strong>{bitcoin_percentage_of_market_cap}%</strong>
        </h5>
        <h5>
          Total Market Cap:
          <br />
          &nbsp;
          <strong>
            {" "}
            <FormattedNumber
              value={total_market_cap_usd}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              currency="USD"
            />
          </strong>
        </h5>
        <h5 className="border-right">
          24Hr Volume:
          <br />
          &nbsp;
          <strong>
            <FormattedNumber
              value={total_24h_volume_usd}
              // eslint-disable-next-line react/style-prop-object
              style="currency"
              currency="USD"
            />
          </strong>
        </h5>
        <h5>
          Cryptocurrencies:
          <br />
          &nbsp;
          <strong>
            {parseInt(active_currencies) + parseInt(active_assets)}
          </strong>
        </h5>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Filter..."
            ref="myValue"
            onInput={e => this.props.updateFilterKey(this.refs.myValue.value)}
          />
        </div>
      </div>
    );
  }
}

export default GlobalStats;
