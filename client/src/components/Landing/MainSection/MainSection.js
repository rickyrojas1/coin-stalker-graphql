import React, { Component } from "react";
import "./MainSection.css";
import logo from "../../../assets/img/cs2.png";
import SuggestionPanel from "./SuggestionPanel/SuggestionPanel";

var FontAwesome = require("react-fontawesome");

class MainSection extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filterRule: ""
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let val = this.refs.myValue.value;
    this.setState({ filterRule: val });
  }

  render() {
    return (
      <div className="search-container">
        <div className="main-container">
          <img src={logo} alt="coinStalker" className="main-section-logo" />
        </div>
        <input
          type="text"
          className="main-search"
          ref="myValue"
          onInput={e => this.handleInput(e)}
        />

        <span>
          <FontAwesome className="search-icon" name="search" size="2x" />
        </span>

        <div className={this.state.filterRule ? "auto-complete" : "hidden"}>
          <SuggestionPanel
            filtered={this.props.filtered}
            filterRule={this.state.filterRule}
          />
        </div>
      </div>
    );
  }
}

export default MainSection;
