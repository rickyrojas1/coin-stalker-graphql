import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.png";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import ReactGA from "react-ga";
import createBrowserHistory from "history/createBrowserHistory";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    this.initializeReactGA();
  }

  initializeReactGA() {
    ReactGA.initialize("UA-122479643-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(
      "Analytics Set Up",
      window.location.pathname + window.location.search
    );
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router history={history}>
          <div className="container">
            <img
              src={logo}
              alt="SpaceX"
              style={{ width: 500, display: "block", margin: "auto" }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
