import React, { Component } from "react";
import withCardView from "./common/withCardView";
import PastPlansTable from "./pastPlansTable";

class PastPlans extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> Past Plan</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <PastPlansTable></PastPlansTable>
      </React.Fragment>
    );
  }
}

export default withCardView(PastPlans);
