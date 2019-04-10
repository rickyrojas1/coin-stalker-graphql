import React, { Component } from "react";
import SuggestionItem from "../SuggestionItem/SuggestionItem";
import { filterList } from "../../../../functions";
import "./SuggestionPanel.css";

class SuggestionPanel extends Component {
  handleKeyPress(event) {
    console.log("event :", event);
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  }

  render() {
    const { filtered, filterRule } = this.props;

    if (filtered) {
      let filteredList = filtered;
      if (filterRule) {
        console.log("RULE HERE");
        filteredList = filterList(filtered, filterRule);
      }

      let arr = filteredList.slice(0, 15);
      console.log("this :", this);
      return (
        <div className="panel-container">
          <ul
            style={{
              listStyleType: "none",
              padding: "none",
              marginLeft: -40
            }}
            ref="dropdown"
            onKeyPress={this.handleKeyPress(this)}
          >
            {arr.map((v, i) => {
              return (
                <li key={i} style={{ width: "100%" }}>
                  <SuggestionItem key={i} coin={v} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div>Nothing found</div>;
    }
  }
}

export default SuggestionPanel;
SuggestionPanel.defaultProps = {
  filtered: ""
};
