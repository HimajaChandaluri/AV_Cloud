// import React from "react";
import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { scheduleRide } from "../services/userService";

class ScheduleRide extends Form {
  state = {
    data: { vId: "", Origin: "", Passengers: "", Destination: "", Date: "" },
    errors: {},
  };

  schema = {

    vId: Joi.string().required().label("Vehicle ID"),
    Origin: Joi.string().regex(/^[a-zA-Z ]+$/).required().label("Origin"),
    Passengers:  Joi.number().integer().min(0).max(8).required().label("Vehicle Passenger Space"),
    // Destination: Joi.string().required().label("Destination"),
    Date: Joi.date().greater('1-1-2020'),
    Destination: Joi.string().regex(RegExp(/^[a-zA-Z ]+$/)).required().label("Destination"),
  };

  doSubmit = async () => {
    try {
      console.log("Submitted");
      const { vId, Origin, Passengers, Destination, Date} = this.state.data;
      // const { paymentType } = this.state.data;
      const scheduleData = {
        vId,
        Origin,
        Passengers,
        Destination,
        Date,
      };
      console.log(this.state.data);
      console.log("Submitted1");
      console.log(scheduleData);
      console.log("Submitted2");
      await scheduleRide(scheduleData);
      this.props.history.push("/myRides");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("CAUGHT HERE");
        const errors = this.state.errors;
        errors.vId = ex.response.data;
        errors.message = "TEST";
        this.setState({ errors });
      }
    }
  };

  //   async componentDidMount() {
  //     const { data: vechiles } = await getVechiles(email);
  //     console.log("Made it: ", vechiles);
  //     this.setState({vechiles});
  // {this.renderButton("Submit")}
  //   }

  render() {
    // const user = auth.getCurrentUser();
    const { vehicles } = this.state;

    return (
      <React.Fragment>
        <div>
          <h1 className="text-center" style={{ marginBottom: "25px" }}>
            Schedule Your Ride
          </h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("vId", "VID")}
            {this.renderInput("Origin", "Origin")}
            {this.renderInput("Passengers", "# of passengers")}
            {this.renderInput("Destination", "Destination")}
            {this.renderInput("Date", "Date")}
            {this.renderButton("Submit")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ScheduleRide;
