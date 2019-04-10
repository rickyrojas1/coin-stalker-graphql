import React, { Component, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./CoinTabs.css";
import TechnicalInfo from "./TechnicalInfo/TechnicalInfo";
import SocialInfo from "./SocialInfo/SocialInfo";
import CoinCalculator from "./CoinCalculator/CoinCalculator";
import CoinExchanges from "./CoinExchanges/CoinExchanges";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Coin from "../../../Layouts/Coin";

const SOCIALDATA_QUERY = gql`
  query tabDataQuery($id: Int!) {
    socialSnap(id: $id) {
      Twitter {
        name
        favourites
        account_creation
        link
      }
      Facebook {
        name
        link
      }
      Reddit {
        subscribers
        Points
        link
      }
      CodeRepository {
        List {
          size
          stars
          forks
          url
        }
      }
    }
    coinSnapFull(id: $id) {
      Algorithm
      ProofType
      BlockNumber
      BlockReward
      DifficultyAdjustment
      Description
      NetHashesPerSecond
      StartDate
      TotalCoinsMined
      TotalCoinSupply
      WebsiteUrl
      ImageUrl
      Name
    }
  }
`;

class CoinTabs extends Component {
  render() {
    console.log("props FROM THE COIN TABZZZ :", this.props);

    return (
      <div>
        <Query
          query={SOCIALDATA_QUERY}
          variables={{ id: parseInt(this.props.id) }}
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Loading Data...</div>;
            if (error) console.error("ERR: ", error);
            console.log("TABS data From Graphql :", data);
            console.log("Tabs Props :", this.props);

            return (
              <Fragment>
                <Tabs className="tabs">
                  <TabList className="tab-list">
                    <Tab className="tab">About</Tab>
                    <Tab className="tab">Social</Tab>
                    <Tab className="tab">Calculator</Tab>
                    <Tab className="tab">Exchanges</Tab>
                  </TabList>

                  <TabPanel>
                    <div>
                      <TechnicalInfo props={data} />
                    </div>
                    {/* <Card info={this.props.info} bio={this.props.bio} /> */}
                  </TabPanel>
                  <TabPanel>
                    <SocialInfo
                      props={data}
                      overrideData={this.props.overrideData}
                    />
                  </TabPanel>
                  <TabPanel>
                    <CoinCalculator props={data} coin={this.props.coin} />
                  </TabPanel>
                  <TabPanel>
                    <CoinExchanges
                      className="exchangeContainer"
                      exchangeList={this.props.exchangeList}
                      window={this.props.windowWidth}
                    />
                  </TabPanel>
                </Tabs>
              </Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default CoinTabs;
