import React, { Component } from "react";
import withCardView from "./common/withCardView";
import CustomPieChart from "./common/pieChart";

class StatesOfConnectedAVs extends Component {
  state = {};

  data = [
    { title: "One", value: 10, color: "#E38627", label: "active" },
    { title: "Two", value: 15, color: "#C13C37", label: "inactive" },
    {
      title: "Three",
      value: 20,
      color: "#6A2135",
      label: "connected",
    },
  ];

  render() {
    return (
      <React.Fragment>
        <h1> States of connected AVs</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <div style={{ height: "250px" }}>
          <CustomPieChart data={this.data}></CustomPieChart>
        </div>
      </React.Fragment>
    );
  }
}

export default withCardView(StatesOfConnectedAVs);
