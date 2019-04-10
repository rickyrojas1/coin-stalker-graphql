import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Menu } from "antd";
import "antd/dist/antd.css";
import Landing from "./Layouts/Landing";
import logo from "./assets/img/cs2.png";
import { IntlProvider } from "react-intl";
import ReactGA from "react-ga";
import "./App.css";
import News from "./Layouts/News";
import Coin from "./Layouts/Coin";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

// const history = createBrowserHistory();

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
        <IntlProvider locale="en">
          <Router>
            <div className="container">
              <Menu mode="horizontal" style={{ height: 60 }} theme="dark">
                <Fragment>
                  {" "}
                  <Link to="/">
                    <img src={logo} alt="CoinStalker" className="logo" />
                  </Link>
                </Fragment>

                <Menu.Item
                  style={{
                    float: "right",
                    height: "inherit",
                    paddingTop: 6
                  }}
                >
                  <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item
                  style={{ float: "right", height: "inherit", paddingTop: 6 }}
                >
                  <Link to="/">Home</Link>
                </Menu.Item>
              </Menu>
              <Route exact path="/" component={Landing} />
              <Route exact path="/news" component={News} />
              <Route path="/coins" exact={true} component={Coin} />
              <Route exact path="/coins/:coinSymbol" component={Coin} />
            </div>
          </Router>
        </IntlProvider>
      </ApolloProvider>
    );
  }
}

export default App;
