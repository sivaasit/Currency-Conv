import React from "react"
import Item from "./Item";
import {StoreCurrencies} from "./actions"
import {connect} from "react-redux"

import Cookies from "js-cookie"



// const List =(props)=>{
//   return <div> 
//    { 
//    props.currencies.map((currency) =>
//     {
//       return <Item currency={currency} value={props.value} key={currency.symbol}/>
//     })
    
//     }

// </div>
// }

class List extends React.Component{

  constructor(props){
    super(props);
    console.log("List Props",props);

      }
      render() {
        return (
          <div>
            {this.props.currencies.map((currency) => {
              return (
                <Item
                  currency={currency}
                  value={this.props.value}
                  key={currency.symbol}
                />
              );
            })}
          </div>
        );
      }




async componentDidMount() {
  const res = await fetch(
    "https://webmaster-fake-api.herokuapp.com/currencies",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  const result = await res.json();
  // console.log("result", result);
  this.props.StoreCurrencies(result);
}
}

const mapStateToProps = (state) => {
return {
  value: state.currency.value,
  currencies: state.currency.currencies,
};
};

const mapDispatchToProps = 
{
StoreCurrencies: StoreCurrencies,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);







