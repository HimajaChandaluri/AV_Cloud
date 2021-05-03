import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { addVehicle } from "../services/userService";

const user = auth.getCurrentUser();

class AddVehicle extends Form {
    state = {
    data: { vId: "", vColor: "", vMake: "", vModel: "", vMileage: "", vPspace: ""},
    errors: {},
  };

  schema = {
    vId: Joi.string().required().label("Vehicle ID"),
    vColor: Joi.string().required().label("Vehicle Color"),
    vMake: Joi.string().required().label("Vehicle Make"),
    vModel: Joi.string().required().label("Vehicle Model"),
    vMileage: Joi.string().required().label("Vehicle Mileage"),
    vPspace: Joi.string().required().label("Vehicle Passenger Space"),
  };
  // adding
  doSubmit = async () => {

    try{
      console.log("Submitted");
      const { vId, vColor, vMake, vModel, vMileage, vPspace } = this.state.data;
      // const { paymentType } = this.state.data;
      const vehicleData = {
        vId,
        vColor,
        vMake,
        vModel,
        vMileage,
        vPspace,
      };
    
      console.log(this.state.data);
      console.log("Submitted1");
      console.log(vehicleData);
      console.log("Submitted2");
      await addVehicle(vehicleData);
      this.props.history.push("/myVehicles");
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("CAUGHT HERE");
        const errors = this.state.errors;
        errors.vId = ex.response.data;
        this.setState({ errors });
      }
    }

  };


  render() {
    // const user = auth.getCurrentUser();
    return(
        <React.Fragment>
        <div>
             <h1 className="text-center" style={{ marginBottom: "25px" }}>
          Add a Vehicle</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("vId", "VID")}
            {this.renderInput("vColor", "Vehicle Color")}
            {/* <p>Vechile Color</p> */}
            {/* <select value={this.state.vColor}>
                <option value="">Please Choose A Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
             </select>
             <p></p> */}
            {this.renderInput("vMake", "Vehicle Make")}
            {this.renderInput("vModel", "Vehicle Model")}
            {this.renderInput("vMileage", "Vehicle Mileage")}
            {this.renderInput("vPspace", "Vehicle Passengers Space")}
            {this.renderButton("Submit")}
          </form>
        </div>
        </React.Fragment>
        );
       
    }
}

export default AddVehicle;