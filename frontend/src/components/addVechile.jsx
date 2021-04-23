import React, { Component } from "react";
import auth from "../services/authService";
import Joi from "joi-browser";
import Form from "./common/form";
import { Redirect } from "react-router";
import { addVechile } from "../services/userService";


class AddVechile extends Form {
    state = {
    data: { vId: "", vColor: "", vMake: "", vModel: "", vMileage: "", vPspace: ""},
    errors: {},
  };

  schema = {
    vId: Joi.string().required().label("Vechile ID"),
    vColor: Joi.string().required().label("Vechile Color"),
    vMake: Joi.string().required().label("Vechile Make"),
    vModel: Joi.string().required().label("Vechile Model"),
    vMileage: Joi.string().required().label("Vechile Mileage"),
    vPspace: Joi.string().required().label("Vechile Passenger Space"),
  };
  // adding
  doSubmit = async () => {
    console.log("Submitted");
    const { vId, vColor, vMake, vModel, vMileage, vPspace } = this.state.data;
    // const { paymentType } = this.state.data;
    const vechileData = {
       vId,
       vColor,
       vMake,
       vModel,
       vMileage,
       vPspace,
    };
    
    console.log(this.state.data);
    console.log("Submitted1");
    console.log(vechileData);
    console.log("Submitted2");
    await addVechile(vechileData);
    this.props.history.push("/myVechiles");
  };


  render() {
    // const user = auth.getCurrentUser();
    return(
        <React.Fragment>
        <div>
             <h1 className="text-center" style={{ marginBottom: "25px" }}>
          Add a Vechile</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("vId", "VID")}
            {this.renderInput("vColor", "Vechile Color")}
            {/* <p>Vechile Color</p> */}
            {/* <select value={this.state.vColor}>
                <option value="">Please Choose A Color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
             </select>
             <p></p> */}
            {this.renderInput("vMake", "Vechile Make")}
            {this.renderInput("vModel", "Vechile Model")}
            {this.renderInput("vMileage", "Vechile Mileage")}
            {this.renderInput("vPspace", "Vechile Passengers Space")}
            {this.renderButton("Submit")}
          </form>
        </div>
        </React.Fragment>
        );
       
    }
}

export default AddVechile;