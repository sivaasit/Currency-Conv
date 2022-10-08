import React from "react";
import Input from "./Input";
import List from "./List";
import "./currency.css"
import Cookies from "js-cookie";


class Container extends React.Component{

  // constructor(){
  //   super();

  //   this.state={
  //     value:"",
  //     currencies:[]
  //   }
  // }

  // handleValue=(e)=>{
  //   console.log("Handle value");
  //   this.setState({...this.state,value : e.target.value})
  // }




render(){

 //console.log("state",this.state)

  return <div style={{border:"1px solid #c7c7c7",width:"50%",margin:"auto",padding:"10px"}}> 
  <Input/>
  {/* <Input value={this.state.value} handleValue={this.handleValue}/>
  <List currencies={this.state.currencies} value={this.state.value}/> */}
  <List/>
  </div>
}


async componentDidMount(){
  const res=await fetch('https://webmaster-fake-api.herokuapp.com/currencies',{
    method:"GET",
    headers:{
      Authorization:`Bearer ${Cookies.get("token")}`,
    }
  })
  const result=await res.json();
  //console.log("Result",result);
this.setState({...this.state,currencies:result})


}


}

export default Container;