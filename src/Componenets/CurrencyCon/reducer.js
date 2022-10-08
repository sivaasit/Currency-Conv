
const intialstate={
  value:"",
  currencies:[],

}

const Reducer=(state=intialstate,action)=>{

  const newState=JSON.parse(JSON.stringify(state));
  switch(action.type)
  {

case "Store-Value":
    newState.value=action.payload;
      return newState;
case "Store-Currencies":
  newState.currencies=action.payload;
  return newState;
default:
  return state;
  }

}

export default Reducer;