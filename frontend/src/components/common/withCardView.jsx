import React, { Component } from "react";

const withCardView = (CustomComponent) => {
  return class WithCardView extends Component {
    render() {
      return (
        <div className="card border-info mb-3" style={this.props.style}>
          <div className="card-body">
            <CustomComponent></CustomComponent>
          </div>
        </div>
      );
    }
  };
};

export default withCardView;
