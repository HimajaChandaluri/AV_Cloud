import React, { Component } from "react";
import CurrentPlan from "./currentPlan";
import PastPlans from "./pastPlans";

class MyPlan extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" style={{ marginBottom: "25px" }}>
          MyPlan
        </h1>
        <CurrentPlan style={{ marginTop: "30px" }}></CurrentPlan>
        <PastPlans style={{ marginTop: "35px" }}></PastPlans>
      </React.Fragment>
    );
  }
}

export default MyPlan;
