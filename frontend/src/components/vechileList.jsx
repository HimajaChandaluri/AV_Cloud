import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import auth from "../services/authService";
import { getVechiles } from "../services/userService";
import Table from "./common/table";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
    user1 = user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class VechileList extends Component {
    state = {vId: "", vColor: "", vMake: "", vModel: "", vMileage: "", vPspace: ""};

    columns = [
        { path: "vId", label: "Vechile Id" },
        { path: "vColor", label: "Vechile Color" },
        { path: "vMake", label: "Vechile Make" },
        { path: "vModel", label: "Vechile Model" },
        { path: "vMileage", label: "Vechile Mileage" },
        { path: "vPspace", label: "Vechile Passenger Space" },
      ];

    async componentDidMount() {
        const { data: vechiles } = await getVechiles();
        console.log("Made it: ", vechiles);
        const data1 = [];
        // vechiles.map((item) => {
        //     data1.push({
        //       vId: item.vId,
        //       vColor: item.vColor,
        //       vMake: item.vMake,
        //     });
        // });
        console.log(vechiles.length);
        console.log(vechiles[0].vId);


        this.setState({vechiles});
        //console.log(this.state[0].vColor);
        console.log(this.state.vechiles);
    }

    render() {
     
        const {vechiles} = this.state;
        // console.log(y);
        
        return (
            <React.Fragment>
                <div>
                    <h1 className="text-center" style={{ marginBottom: "25px" }}>
                        {user1 + "'s Vechiles"}</h1>
                </div>
                <Link
                    className="btn btn-info"
                    to={{
                        pathname: "/myVechiles/addVechile",
                    }}
                >Add Vechile</Link>
                <p></p>
                <Table data={vechiles} columns={this.columns} keyAtt="vId"></Table>
            </React.Fragment>
        );
    }

}

export default VechileList;