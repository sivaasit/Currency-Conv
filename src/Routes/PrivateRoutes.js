import React from "react";
import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";


const PrivateRoute=(props)=>{

  const access=Cookies.get("token");
  const isAuthenticated=!!access;

  if(isAuthenticated){
   return <Route {...props}/>
  }
  else{
   return  <Redirect to='/'/>;
  }

  console.log(access)



}

export default PrivateRoute;