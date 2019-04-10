import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { filterList } from "../../../functions";
import "./MainTable.css";
const numeral = require("numeral");

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
  }

  render() {
    const columns = [
      {
        Header: "Rank",
        accessor: "rank", // String-based value accessors!
        sortMethod: (a, b) => {
          return parseFloat(a) - parseFloat(b);
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Name",
        accessor: "name", // String-based value accessors!

        Cell: props => {
          let symbol = props.original.symbol;
          let ImageUrl = props.original.ImageUrl;
          let Original = props.original;

          let imgPath =
            "https://www.cryptocompare.com" + props.original.ImageUrl;

          const newTo = {
            pathname: "/coins/" + symbol,
            imageUrl: ImageUrl,
            original: Original
          };
          return (
            <div className="tablePic">
              <img src={imgPath} alt={"icon"} className="img" />
              <Link to={newTo}>{props.value}</Link>
            </div>
          );
        }, // Custom cell components!

        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Symbol",
        accessor: "symbol",

        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Price",
        accessor: "price_usd", // String-based value accessors!
        sortMethod: (a, b) => {
          return parseFloat(a) - parseFloat(b);
        },
        Cell: props => {
          let price = numeral(props.value).format("$0,0.00");
          return <span>{price}</span>;
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Market Cap",
        accessor: "market_cap_usd",
        sortMethod: (a, b) => {
          return parseInt(b) - parseInt(a);
        },
        Cell: props => {
          let cap = numeral(props.value).format("$0,0.00");
          return <span>{cap}</span>;
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "24Hr Volume",
        accessor: "volume",
        sortMethod: (a, b) => {
          return parseInt(b) - parseInt(a);
        },
        Cell: props => {
          let cap = numeral(props.value).format("$0,0.00");
          return <span>{cap}</span>;
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Hourly Change",
        accessor: "percent_change_1h",
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
          let color = "black";
          if (props.value > 0) {
            color = "green";
          } else if (props.value < 0) {
            color = "red";
          }

          return <span className={color}>{props.value}%</span>;
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Daily Change",
        accessor: "percent_change_24h",
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
          let color = "black";
          if (props.value > 0) {
            color = "green";
          } else if (props.value < 0) {
            color = "red";
          }

          return <span className={color}>{props.value}%</span>;
        },
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "Weekly Change",
        accessor: "percent_change_7d",
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
          let color = "black";
          if (props.value > 0) {
            color = "green";
          } else if (props.value < 0) {
            color = "red";
          }

          return <span className={color}>{props.value}%</span>;
        },
        style: {
          textAlign: "center"
        }
      }
    ];
    let filtered = filterList(this.props.filtered, this.props.filterRule);
    return (
      <div>
        <ReactTable
          data={filtered}
          className="-striped -highlight"
          columns={columns}
          defaultPageSize={25}
          pageSizeOptions={[10, 25, 50, 100]}
        />
      </div>
    );
  }
}

export default MainTable;
