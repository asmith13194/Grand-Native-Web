import React from "react";
import { Route } from "react-router-dom";

import Landing from "./components/Landing";

const Routes = props => {
  return [<Route exact path={"/"} component={Landing} key={"Landing"} />];
};

export default Routes;
