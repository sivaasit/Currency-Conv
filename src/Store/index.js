import { createStore,combineReducers } from "redux"

import currencyReducer from './../Componenets/CurrencyCon/reducer'


const rootReducer=combineReducers({
  currency:currencyReducer, 
  
});
const store=createStore
(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 