import React, { Component } from "react";
import CurrentState from "./currentState";
import ServiceState from "./serviceStatus";
import CurrentLocation from "./currentLocation";
import RoadService from "./roadService";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import { socket } from "../App";

// import { getJwt } from "../services/authService";
import { getAvStates } from "../services/avService";

import _ from "lodash";

// import { io } from "socket.io-client";
// const socket = io("http://localhost:3900", {
//   query: {
//     jwtToken: getJwt(),
//   },
// });

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
  user1 =
    user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class UserDashboard extends Component {
  state = {
    currentState: "",
    serviceState: "",
    currentLocation: "",
    roadService: "",
  };

  componentDidMount() {
    this.populateAVStatusListData();
    console.log("MADE IT TO SOCKET");
    socket.on("activeVehicleData", this.reRenderAV);
    socket.on("activeVehicleLocation", this.reRenderAV1);
    console.log("MADE IT PAS SOCKET");
  }

  async populateAVStatusListData() {
    const { data: avStatus } = await getAvStates();
    console.log("MADE ", avStatus);
    // const avStatusd = [];
    // avStatus.map((item) => {
    //     avStatusd.push({
    //     state: item.state,
    //   });
    // });
    console.log("MADE ", avStatus);
    this.setState(avStatus);
    // const avState = await getAvStates();
    // console.log("LIST DATA: ", avStatus);
    // this.setState({ avStatus });
  }

  reRenderAV = (data) => {
    console.log("SOCKET INCOMING DATA: ", data);
    this.setState({
      currentState: data.currentState,
      serviceState: data.serviceState,
      roadService: data.roadService,
    });
    console.log("Populating count data");
  };

  reRenderAV1 = (data) => {
    console.log("SOCKET INCOMING DATA: ", data);
    this.setState({ currentLocation: data.currentLocation });
    console.log("Populating count data");
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center" style={{ marginBottom: "25px" }}>
          {user1 + "'s"} Dashboard
        </h1>
        <Link
          className="btn btn-info"
          to={{
            pathname: "/sensorinfo",
          }}
        >
          Additional Sensor Info
        </Link>
        <CurrentState
          style={{ marginTop: "30px" }}
          data={this.state.currentState}
        ></CurrentState>
        <ServiceState
          style={{ marginTop: "35px" }}
          data={this.state.serviceState}
        ></ServiceState>
        <CurrentLocation
          style={{ marginTop: "35px" }}
          data={this.state.currentLocation}
        ></CurrentLocation>
        <RoadService
          style={{ marginTop: "35px" }}
          data={this.state.roadService}
        ></RoadService>
      </React.Fragment>
    );
  }
}

export default UserDashboard;
