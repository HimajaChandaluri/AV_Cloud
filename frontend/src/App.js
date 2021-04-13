import React, { Component } from "react";
import NavBar from "./components/navBar";
import UserRoute from "./components/common/userRoute";
import AdminRoute from "./components/common/adminRoute";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import AddPlan from "./components/addPlan";
import MyPlan from "./components/myPlan";
import AdminDashboard from "./components/adminDashboard";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container" style={{ paddingTop: "80px" }}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={Register}></Route>
            <UserRoute path="/myPlan/addPlan" component={AddPlan}></UserRoute>
            <UserRoute path="/myPlan" component={MyPlan}></UserRoute>
            <AdminRoute
              path="/dashboard"
              component={AdminDashboard}
            ></AdminRoute>
            <Redirect from="/" exact to="/login"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
