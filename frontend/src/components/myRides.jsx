import React, { Component } from "react";
import Table from "./common/table";
import { getRides } from "../services/userService";
import auth from "../services/authService";
import { Link } from "react-router-dom";

const user = auth.getCurrentUser();
// let user1 = user.name.slice(0,1).toUpperCase() + user.name.slice(1,user.name.length);
let user1 = "";
if (user != null) {
    user1 = user.name.slice(0, 1).toUpperCase() + user.name.slice(1, user.name.length);
}

class MyRides extends Component {
    state = {vId: "", Origin: "", vPspace: "", Destination: "",};

    columns = [
        { path: "vId", label: "Vehicle Id" },
        { path: "Origin", label: "Origin Location" },
        { path: "Passengers", label: "Vehicle Passenger Space" },
        { path: "Destination", label: "Destintaion Location" },
        { path: "Status", label: "Status" },
      ];

      async componentDidMount() {
        const { data: vehicles } = await getRides();
        console.log("Made it: ", vehicles);
        const data1 = [];
        // vechiles.map((item) => {
        //     data1.push({g
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
                        {user1 + "'s Ride History"}</h1>
                </div>
                <Link
                    className="btn btn-info"
                    to={{
                        pathname: "/mySchedule",
                    }}
                >Schedule a Ride</Link>
                <p></p>
                <Table data={vehicles} columns={this.columns} keyAtt="vId" ></Table>
                
            </React.Fragment>
        );
    }
}

export default MyRides;