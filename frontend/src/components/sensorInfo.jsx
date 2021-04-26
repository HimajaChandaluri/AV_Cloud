import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";

const avData1 = [
  {
    vC: "1",
    vU: "2",
    vA: "3",
    vB: "3",
    vD: "3",
  },
];

const avData2 = [
  {
    vC: "ON",
    vU: "ON",
    vA: "Activated",
    vB: "32 psi",
    vD: "32 psi",
  },
];

class SensorInfo extends Component {
    state = {};

    columns = [
      { path: "vC", label: "Vehicle Headlights" },
      { path: "vU", label: "Vehicle Taillights" },
      { path: "vA", label: "Vehicle Brakes" },
      { path: "vB", label: "Vehicle Right Tire" },
      { path: "vD", label: "Vehicle Left Tire" },
    ];

    render() {
      return (
        <React.Fragment>
          <h1 className="text-center" style={{ marginBottom: "25px" }}>
            Additional Sensor Information
          </h1>
          
           <Table data={avData1} columns={this.columns} keyAtt="vC" ></Table>
           <Table data={avData2} columns={this.columns} keyAtt="vC" ></Table>
        </React.Fragment>
      );
    }
  }
  
  export default SensorInfo;
  