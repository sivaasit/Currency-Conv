import React from "react";
import { Link } from "react-router-dom";

const Masterlayout=(props)=>{
   return( 
    <div >
  <header>
    <Link to="/Dashboard" alt="Dashboard">Dashboard </Link>
    <Link to="/Profile" alt="Profile">Profile </Link>
  </header>
<section>
{props.children}
</section>
<footer>
  &copy; Siva
</footer>
  </div>
  )
}
export default Masterlayout;