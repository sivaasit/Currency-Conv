import React from "react"
import "./login.css"
import Cookies from 'js-cookie'


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      error:""
    };

    const isAuthenticated=!!Cookies.get("token")
    if(isAuthenticated){
      props.history.push("/Dashboard");
    }
  }

  handleemail=(e)=>
  {
    this.setState({...this.state,email : e.target.value});
  }

  handlepass=(e)=>{
    this.setState({...this.state,password : e.target.value});
  }

  handleLogin=async (e)=>{
    e.preventDefault();
   
    //hit API  get back access key
     const response=await fetch('https://webmaster-fake-api.herokuapp.com/auth/login',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
     }),
     });
    
     
     const result=await response.json();
     console.log("Result",result);
    //  Handle Error

    if(result.status == 401){
      this.setState({...this.state, error: result.message});
    }

    if(result.status !=401){
      // save the token 
        Cookies.set("token",result.access_token)
        this.props.history.push('/Dashboard');

      
      // Access the data
    }

// Clear text fields
   this.setState({...this.setState,email:"",password:""})

  }
  


 render(){
    const inputstyle={
      display:"block",
        margin:"10px",
      width:"80%",
      height:"30px"
    }
    
    return(
      <div style={{border:"1px solid #c7c7c7",width:"50%",margin:"auto",padding:"10px"}}>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleLogin}>
          
          <input type="text" name="email" placeholder="ENter Email" style={inputstyle} onChange={this.handleemail} value={this.state.email}/>
          <input type="text" name="password" placeholder="ENter Password" style={inputstyle}  onChange={this.handlepass} value={this.state.password}/>
          <button id="login-button">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;