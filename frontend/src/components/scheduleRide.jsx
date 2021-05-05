// import React from "react";
import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { scheduleRide } from "../services/userService";
import Select from "react-dropdown-select";

<<<<<<< HEAD
import { Button } from 'reactstrap';
import { set } from "lodash";


=======
>>>>>>> fa9fb49caf46507da1fd8dc35d436374d0d4c757
class ScheduleRide extends Form {
  state = {
    data: { vId: "", Origin: "", Passengers: "", Destination: "" },
    errors: {},
  };

  schema = {
    vId: Joi.string().required().label("Vehicle ID"),
    Origin: Joi.string().required().label("Origin"),
    Passengers: Joi.string().required().label("Passengers"),
    Destination: Joi.string().required().label("Destination"),
  };

  doSubmit = async () => {
<<<<<<< HEAD

    try{
        console.log("Submitted");
        const { vId, Origin, Passengers, Destination, } = this.state.data;
        // const { paymentType } = this.state.data;
        const scheduleData = {
            vId, Origin, Passengers, Destination,
        };
        console.log(this.state.data);
        console.log("Submitted1");
        console.log(scheduleData);
        console.log("Submitted2");
        await scheduleRide(scheduleData);
        this.props.history.push("/myRides");
    }
    catch(ex){
        if (ex.response && ex.response.status === 400) {
            console.log("CAUGHT HERE");
            const errors = this.state.errors;
            errors.vId = ex.response.data;
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
=======
    console.log("Submitted");
    const { vId, Origin, Passengers, Destination } = this.state.data;
    // const { paymentType } = this.state.data;
    const scheduleData = {
      vId,
      Origin,
      Passengers,
      Destination,
    };

    console.log(this.state.data);
    console.log("Submitted1");
    console.log(scheduleData);
    console.log("Submitted2");
    await scheduleRide(scheduleData);
    this.props.history.push("/myRides");
  };

  //   async componentDidMount() {
  //     const { data: vechiles } = await getVechiles();
  //     console.log("Made it: ", vechiles);
  //     this.setState({vechiles});
  // {this.renderButton("Submit")}
  //   }
>>>>>>> fa9fb49caf46507da1fd8dc35d436374d0d4c757


  render() {
    // const user = auth.getCurrentUser();
<<<<<<< HEAD
    const {vehicles} = this.state;
    
    return(
        <React.Fragment>
=======
    const { vehicles } = this.state;
    return (
      <React.Fragment>
>>>>>>> fa9fb49caf46507da1fd8dc35d436374d0d4c757
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
            {this.renderButton("Submit")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ScheduleRide;
