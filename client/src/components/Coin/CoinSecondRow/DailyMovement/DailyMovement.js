import React from "react";
import scientificToDecimal from "scientific-to-decimal";
import "./DailyMovement.css";
const FontAwesome = require("react-fontawesome");

const DailyMovement = props => {
  console.log("props :", props);
  let { percent_change_1h, percent_change_24h, percent_change_7d } = props.coin;
  let { OPENDAY, HIGHDAY, LOWDAY } = props.aggregatedData;
  return (
    <div>
      <div className="secondrowstats">
        <div className="title">
          <h1>Changes</h1>
        </div>
        <div className="percents left">
          <h3>
            1h
            <FontAwesome
              className={percent_change_1h < 0 ? "red" : "green"}
              name={percent_change_1h < 0 ? "arrow-down" : "arrow-up"}
            />
          </h3>
          <h2 className={percent_change_1h < 0 ? "red" : "green"}>
            {percent_change_1h + "%"}
          </h2>
        </div>
        <div className="percents">
          <h3>
            24h
            <FontAwesome
              className={percent_change_24h < 0 ? "red" : "green"}
              name={percent_change_24h < 0 ? "arrow-down" : "arrow-up"}
            />
          </h3>
          <h2 className={percent_change_24h < 0 ? "red" : "green"}>
            {percent_change_24h + "%"}
          </h2>
        </div>
        <div className="percents">
          <h3>
            7d
            <FontAwesome
              className={percent_change_7d < 0 ? "red" : "green"}
              name={percent_change_7d < 0 ? "arrow-down" : "arrow-up"}
            />
          </h3>
          <h2 className={percent_change_7d < 0 ? "red" : "green"}>
            {percent_change_7d + "%"}
          </h2>
        </div>
        <div className="title">
          <h1>Daily Movement</h1>
        </div>
        <div className="movements">
          <h3>Open</h3>
          <h4>
            <FontAwesome className="super-crazy-colors" name="btc" />
            {scientificToDecimal(OPENDAY)}
          </h4>
        </div>
        <div className="movements">
          <h3>Low Day</h3>
          <h4>
            <FontAwesome className="super-crazy-colors" name="btc" />
            {scientificToDecimal(LOWDAY)}
          </h4>
        </div>
        <div className="movements">
          <h3>High Day</h3>
          <h4>
            <FontAwesome className="super-crazy-colors" name="btc" />
            {scientificToDecimal(HIGHDAY)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DailyMovement;
