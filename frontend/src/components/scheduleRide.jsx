// import React from "react";
import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";


class ScheduleRide extends Form {
    state = {
    data: { vId: "", Origin: "", Passengers: "", Destination: ""},
    errors: {},
  };

  schema = {
    vId: Joi.string().required().label("Vechile ID"),
    Origin: Joi.string().required().label("Origin"),
    Passengers: Joi.string().required().label("Passengers"),
    Destination: Joi.string().required().label("Destination"),
  };

//   doSubmit = async () => {
//     try {
//       const { username, password } = this.state.data;
//       await auth.login(username, password);
//       const { state } = this.props.location;
//       window.location = state ? state.from.pathname : "/";
//     } catch (ex) {
//       if (ex.response && ex.response.status === 400) {
//         const errors = { ...this.state.errors };
//         errors.username = ex.response.data;
//         this.setState({ errors });
//       }
//     }
//   };

  render() {
    // const user = auth.getCurrentUser();
    return(
        <React.Fragment>
        <div>
             <h1 className="text-center" style={{ marginBottom: "25px" }}>
          Schedule Your Ride</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("vId", "VID")}
            {this.renderInput("Origin", "Origin")}
            {this.renderInput("Passengers", "# of passengers")}
            {this.renderInput("Destination", "Destination")}
            {this.renderButton("Submit")}
          </form>
        </div>
        </React.Fragment>
        );
       
    }   
}

export default ScheduleRide;
