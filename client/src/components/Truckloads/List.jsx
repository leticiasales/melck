import axios from "axios";
import React, { Component } from "react";

class TruckloadsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      truckloads: [],
    };
  }

  search() {
    axios
      .get("/api/truckloads")
      .then((res) => {
        this.setState({ truckloads: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.search();
  }

  render() {
    return (
      <ul className="listItems">
        {this.state.truckloads.map((truckload) => {
          return (
            <li className="item" truckload={truckload} key={truckload.id}>
              {truckload.truckload}<br/>
              {truckload.weight}<br/>
              {truckload.origin}
            </li>
          );
        })}
      </ul>
  );
  }
};

export default TruckloadsList;
