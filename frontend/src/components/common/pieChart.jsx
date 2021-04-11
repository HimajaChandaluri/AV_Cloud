import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

class CustomPieChart extends Component {
  state = {};

  defaultLabelStyle = {
    fontSize: "9px",
    fontFamily: "sans-serif",
    fill: "white",
  };

  render() {
    return (
      <PieChart
        data={this.props.data}
        radius={50}
        viewBoxSize={[100, 100]}
        label={({ dataEntry }) => dataEntry.label}
        labelStyle={this.defaultLabelStyle}
      ></PieChart>
    );
  }
}

export default CustomPieChart;
