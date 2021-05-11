import React, { Component } from "react";
import withCardView from "./common/withCardView";
// import { getUserCount } from "../services/userService";

class ServiceState extends Component {
  state = {service: "Active"};

//   async componentDidMount() {
//     const { data: userCount } = await getUserCount();
//     this.setState({ userCount: userCount.count });
//   }

  render() {
    return (
      <React.Fragment>
        <h1>Service Status</h1>
        <div
          className="dropdown-divider"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "50px" }}>
          {this.props.data}
        </p>
        {!this.props.data  && (
           <p className="text-center" style={{ fontSize: "50px" }}>
           Inactive
           </p>
        )}
      </React.Fragment>
    );
  }
}

export default withCardView(ServiceState);