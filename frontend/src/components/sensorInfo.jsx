import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";


class SensorInfo extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
          <h1 className="text-center" style={{ marginBottom: "25px" }}>
            Additional Sensor Information
          </h1>
          
        </React.Fragment>
      );
    }
  }
  
  export default SensorInfo;
  