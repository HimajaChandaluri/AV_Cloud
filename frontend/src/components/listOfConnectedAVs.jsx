import React, { Component } from "react";

import withCardView from "./common/withCardView";
import Table from "./common/table";

class ListOfConnectedAVs extends Component {
  state = {};

  columns = [
    { path: "carnumber", label: "AV Number" },
    { path: "state", label: "AV State" },
  ];

  render() {
    return (
      <React.Fragment>
        <h1>List of connected AVs</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <Table
          data={this.props.data}
          columns={this.columns}
          keyAtt="number"
        ></Table>
      </React.Fragment>
    );
  }
}

export default withCardView(ListOfConnectedAVs);
