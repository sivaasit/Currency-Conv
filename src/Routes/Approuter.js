import React from "react";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Notfound from "../Pages/Notfound";
import PrivateRoute from "./PrivateRoutes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Masterlayout from "../Layout/Masterlayout";

const Approuter=()=>{
  return( <div>
  <Router>
    <Switch>
    <Route path="/" component={Login} exact/>
       <PrivateRoute path="/Dashboard" component={Dashboard}/>
    <PrivateRoute path="/Profile" component={Profile}/>
    <Route component={Notfound}/>
    </Switch>
    </Router>

    </div>)
  
}

export default Approuter;