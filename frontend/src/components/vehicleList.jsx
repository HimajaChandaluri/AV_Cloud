import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import auth from "../services/authService";
import { getVehicles } from "../services/userService";
import Table from "./common/table";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
    user1 = user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class VehicleList extends Component {
    state = {vId: "", vColor: "", vMake: "", vModel: "", vMileage: "", vPspace: ""};

    columns = [
        { path: "vId", label: "Vehicle Id" },
        { path: "vColor", label: "Vehicle Color" },
        { path: "vMake", label: "Vehicle Make" },
        { path: "vModel", label: "Vehicle Model" },
        { path: "vMileage", label: "Vehicle Mileage" },
        { path: "vPspace", label: "Vehicle Passenger Space" },
      ];

    async componentDidMount() {
        const { data: vehicles } = await getVehicles();
        console.log("Made it: ", vehicles);
        const data1 = [];
        // vechiles.map((item) => {
        //     data1.push({
        //       vId: item.vId,
        //       vColor: item.vColor,
        //       vMake: item.vMake,
        //     });
        // });
        this.setState({vehicles});
        console.log(this.state.vehicles);
    }

    render() {
     
        const {vehicles} = this.state;
        // console.log(y);
        return (
            
            <React.Fragment>
                <div>
                    <h1 className="text-center" style={{ marginBottom: "25px" }}>
                        {user1 + "'s Vehicles"}</h1>
                </div>
                <Link
                    className="btn btn-info"
                    to={{
                        pathname: "/myVehicles/addVehicle",
                    }}
                >Add Vehicle</Link>
                <p></p>
                <Table data={vehicles} columns={this.columns} keyAtt="vId" ></Table>
                
            </React.Fragment>
        );
    }

}

export default VehicleList;