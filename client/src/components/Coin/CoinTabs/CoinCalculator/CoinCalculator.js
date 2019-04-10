import React, { Component } from "react";
import "./CoinCalculator.css";
var numeral = require("numeral");

class CoinCalculator extends Component {
  constructor() {
    super();
    this.state = {
      price: ""
    };

    this.calculate = this.calculate.bind(this);
  }

  calculate(value) {
    let val = this.refs.coinNum.value;
    let answer = parseFloat(val) * parseFloat(this.props.coin.price_usd);
    this.setState({ price: answer });
  }

  render() {
    console.log("props :", this.props);
    let { ImageUrl, Name } = this.props.props.coinSnapFull;
    let imageUrl = "https://www.cryptocompare.com" + ImageUrl;
    return (
      <div className="calc-container">
        <div className="card-header">
          <img src={imageUrl} className="img-about" alt="icon" />
          <h1>
            <strong>
              {Name}
              &nbsp;Calculator
            </strong>
          </h1>
        </div>

        <div className="calc-body">
          <input
            type="number"
            ref="coinNum"
            defaultValue="0"
            onChange={e => this.calculate(e)}
            name=""
            id=""
          />
          <div className="total-container">
            <h1>&nbsp;{this.props.coin.symbol}&nbsp;</h1>
            <br />
            <h1>= &nbsp;{numeral(this.state.price).format("$0,0.00")}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinCalculator;
