import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="diplay-4 my-3">Launches</h1>
        <MissionKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>LOADING...</h4>;
            if (error) console.error(error);
            console.log("data :", data);

            return (
              <Fragment>
                {data
                  ? data.launches.map(launch => (
                      <LaunchItem key={launch.flight_number} launch={launch} />
                    ))
                  : "LOADING..."}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
