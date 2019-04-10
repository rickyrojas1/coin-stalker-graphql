import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import MainSection from "../components/Landing/MainSection/MainSection";
import GlobalStats from "../components/Landing/GlobalStats/GlobalStats";
import MainTable from "../components/Landing/MainTable/MainTable";
import Footer from "../components/Footer/Footer";
import { mergeList } from "../functions";

const MARKETDATA_QUERY = gql`
  query coinDataQuery {
    coinMarketCap {
      id
      name
      symbol
      rank
      volume
      price_usd
      market_cap_usd
      percent_change_1h
      percent_change_24h
      percent_change_7d
    }
    coinMarketCapGlobal {
      active_currencies
      active_assets
      bitcoin_percentage_of_market_cap
      total_market_cap_usd
      total_24h_volume_usd
    }
    cryptoCompare {
      Id
      Url
      ImageUrl
      Name
      Symbol
      CoinName
      FullName
    }
  }
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterKey: ""
    };
  }

  updateFilterKey(value) {
    this.setState({
      filterKey: value
    });
  }
  render() {
    return (
      <div>
        <Query query={MARKETDATA_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div id="preloader">
                  <div id="loader" />
                </div>
              );
            if (error) console.error("ERR: ", error);

            if (data) {
              let filtered = mergeList(data.coinMarketCap, data.cryptoCompare);
              let filterKey = this.state.filterKey;
              return (
                <Fragment>
                  <MainSection filtered={filtered} />
                  <GlobalStats
                    updateFilterKey={this.updateFilterKey.bind(this)}
                    stats={data.coinMarketCapGlobal}
                  />
                  <MainTable filtered={filtered} filterRule={filterKey} />
                  <Footer />
                </Fragment>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

export default Landing;
