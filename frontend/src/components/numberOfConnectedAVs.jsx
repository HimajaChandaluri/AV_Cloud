import React, { Component } from "react";
import withCardView from "./common/withCardView";

class NumberOfConnectedAVs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> Number Of Connected AVs</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "50px" }}>
          13,250
        </p>
      </React.Fragment>
    );
  }
}

export default withCardView(NumberOfConnectedAVs);
