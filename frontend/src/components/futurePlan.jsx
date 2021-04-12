import React, { Component } from "react";
import withCardView from "./common/withCardView";

class FuturePlan extends Component {
  state = {};
  render() {
    const { data: futurePlans } = this.props;

    return (
      <React.Fragment>
        <h1> Future Plans</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        {futurePlans &&
          futurePlans.length > 0 &&
          futurePlans.map((plan) => (
            <React.Fragment>
              <p>
                <strong>Future Cycle: </strong> {plan.startDate} -{" "}
                {plan.endDate}
              </p>
              <p>
                <strong>Amount: </strong>
                {plan.amount}
              </p>
              <p>
                <strong>Payment Type: </strong>
                {plan.paymentType}
              </p>
            </React.Fragment>
          ))}
        {futurePlans && futurePlans.length == 0 && (
          <p> No future plans at the moment</p>
        )}
      </React.Fragment>
    );
  }
}

export default withCardView(FuturePlan);
