import React, { Component } from "react";
import CurrentState from "./currentState";
import ServiceState from "./serviceStatus";
import CurrentLocation from "./currentLocation";
import RoadService from "./roadService";
import auth from "../services/authService";
import { Link } from "react-router-dom";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if(user != null)
{
    user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
}

class UserDashboard extends Component {
    state = {};
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
                >Additional Sensor Info</Link>
        <CurrentState
          style={{ marginTop: "30px" }}
        ></CurrentState>
        <ServiceState
          style={{ marginTop: "35px" }}
        ></ServiceState>
        <CurrentLocation
          style={{ marginTop: "35px" }}
        ></CurrentLocation>
        <RoadService
          style={{ marginTop: "35px" }}
        ></RoadService>
        </React.Fragment>
      );
    }
  }
  
  export default UserDashboard;
  