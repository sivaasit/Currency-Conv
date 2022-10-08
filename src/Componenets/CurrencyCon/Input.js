import React from "react";
import { connect } from "react-redux";
import { StoreValue } from "./actions";

class Input extends React.Component{
 constructor(props){
  super(props);
  console.log("props",props);
 }
 
 handleValue=(e)=>{

  this.props.StoreValue(e.target.value);
 };



render(){
  return <div>
    <input type="text" name="curinr"  placeholder="Enter INR RS to Conv" onChange={this.handleValue} value={this.props.value}/>
  </div>
}


}

function mapStateToProps(state){

  return{ 
  value:state.currency.value,
  }
}

const mapDispatchToProps={
    StoreValue:StoreValue,
  }


export default connect(mapStateToProps,mapDispatchToProps)(Input);