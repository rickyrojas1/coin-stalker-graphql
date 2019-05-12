import React, { Component } from "react";
import SuggestionItem from "../SuggestionItem/SuggestionItem";
import { filterList } from "../../../../functions";
import "./SuggestionPanel.css";

class SuggestionPanel extends Component {
  handleKeyPress(event) {
    if (event.key === "Enter") {
    }
  }

  render() {
    const { filtered, filterRule } = this.props;

    if (filtered) {
      let filteredList = filtered;
      if (filterRule) {
        filteredList = filterList(filtered, filterRule);
      }

      let arr = filteredList.slice(0, 15);
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
