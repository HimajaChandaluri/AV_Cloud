import React, { Component } from "react";
import withCardView from "./common/withCardView";

class CurrentPlan extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> Current Plan</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <p>
          <strong>Current Cycle: </strong>31 March 2021 - 30 April 2021
        </p>
        <p>
          <strong>Amount: </strong>$20
        </p>
      </React.Fragment>
    );
  }
}

export default withCardView(CurrentPlan);
