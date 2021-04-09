import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const UserRoute = ({ path, component: Component, render, ...rest }) => {
  const user = auth.getCurrentUser();

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (user) {
          if (!user.isAdmin) {
            return Component ? (
              <Component {...props}></Component>
            ) : (
              render(props)
            );
          } else if (user.isAdmin) return <h1>Forbidden</h1>;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            ></Redirect>
          );
        }
      }}
    ></Route>
  );
};

export default UserRoute;
