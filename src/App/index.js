import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Login from "../components/Login";
import Notes from "../components/Notes";

const App = () => {
  const isAuthenticated = useSelector((state) => state.User?.isAuthenticated);

  const PrivateRoute = (props) => {
    return isAuthenticated ? (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    ) : (
      <Redirect to="/login" />
    );
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/notes" component={Notes} />
      </Fragment>
    </BrowserRouter>
  );
};
export default App;
