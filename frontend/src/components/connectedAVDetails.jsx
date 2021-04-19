import React, { Component } from "react";

import StatesOfConnectedAVs from "./statesOfConnectedAVs";
import ListOfConnectedAVs from "./listOfConnectedAVs";

import { getAVStateAndCount, getListOfAVs } from "../services/avService";

class ConnectedAVDetails extends Component {
  state = {};

  color = ["#E38627", "#C13C37", "#6A2135"];

  async componentDidMount() {
    const { data: avStates } = await getAVStateAndCount();
    console.log("AV STATES: ", avStates);
    const avStatusDistributionData = [];
    let count = 0;
    avStates.map((item) => {
      avStatusDistributionData.push({
        state: item.state,
        value: item.count,
        color: this.color[count],
      });
      count += 1;
    });
    const { data: avStatusList } = await getListOfAVs();
    console.log("LIST DATA: ", avStatusList);
    this.setState({ avStatusDistributionData, avStatusList });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-12">
            <StatesOfConnectedAVs
              style={{
                margin: "30px 10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              data={this.state.avStatusDistributionData}
            ></StatesOfConnectedAVs>
          </div>
        </div>
        <div className="row" style={{ margin: "0px" }}>
          <div className="col-12">
            <ListOfConnectedAVs
              style={{
                margin: "30px 10px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              data={this.state.avStatusList}
            ></ListOfConnectedAVs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConnectedAVDetails;
