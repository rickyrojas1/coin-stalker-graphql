import React, { Component } from "react";
import ReactTable from "react-table";
import scientificToDecimal from "scientific-to-decimal";
var numeral = require("numeral");
var FontAwesome = require("react-fontawesome");
class CoinExchanges extends Component {
  render() {
    if (this.props.exchangeList == "") {
      return <div>not filled</div>;
    } else {
      const columns = [
        {
          Header: "Exchange",
          accessor: "MARKET", // String-based value accessors!
          sortMethod: (a, b) => {
            return parseFloat(a) - parseFloat(b);
          },
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Price",
          accessor: "PRICE", // String-based value accessors!

          Cell: props => {
            let price = scientificToDecimal(props.value);

            return (
              <span>
                <FontAwesome className="super-crazy-colors" name="btc" />
                {price}
              </span>
            );
          }, // Custom cell components!

          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Open Price",
          accessor: "OPEN24HOUR",
          Cell: props => {
            let price = scientificToDecimal(props.value);

            return (
              <span>
                <FontAwesome className="super-crazy-colors" name="btc" />
                {price}
              </span>
            );
          },

          style: {
            textAlign: "center"
          }
        },
        {
          Header: "Low Price",
          accessor: "LOW24HOUR", // String-based value accessors!
          sortMethod: (a, b) => {
            return parseFloat(a) - parseFloat(b);
          },
          Cell: props => {
            let price = scientificToDecimal(props.value);

            return (
              <span>
                <FontAwesome className="super-crazy-colors" name="btc" />
                {price}
              </span>
            );
          },
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "High Price",
          accessor: "HIGH24HOUR",
          sortMethod: (a, b) => {
            return parseInt(b) - parseInt(a);
          },
          Cell: props => {
            let price = scientificToDecimal(props.value);

            return (
              <span>
                <FontAwesome className="super-crazy-colors" name="btc" />
                {price}
              </span>
            );
          },
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "24Hr Volume",
          accessor: "VOLUME24HOUR",
          sortMethod: (a, b) => {
            if (a == null) {
              a = 0;
            }
            if (b == null) {
              b = 0;
            }
            return parseFloat(b) - parseFloat(a);
          },
          Cell: props => {
            let vol = numeral(props.value).format("$0,0.00");
            return <span>{vol}</span>;
          },
          style: {
            textAlign: "center"
          }
        },
        {
          Header: "24Hr Change",
          accessor: "CHANGEPCT24HOUR",
          sortMethod: (a, b) => {
            if (a == null) {
              a = 0;
            }
            if (b == null) {
              b = 0;
            }
            return parseFloat(b) - parseFloat(a);
          },
          Cell: props => {
            let cap = numeral(props.value).format("0,0.00");
            return <span>{cap}%</span>;
          },
          style: {
            textAlign: "center"
          }
        }
      ];

      let { width } = this.props.window;
      return (
        <div className="exchangeTable" style={{ width: width }}>
          <ReactTable
            data={this.props.exchangeList}
            className="-striped -highlight -exchangeTable"
            columns={columns}
            defaultPageSize={this.props.exchangeList.length}
          />
        </div>
      );
    }
  }
}

export default CoinExchanges;
