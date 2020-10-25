import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";


const countReducer=(prevState=0,action)=>{
  switch(action.type) ///
  {
    case "increment":
      return prevState+1;
    case "decrement":
      return prevState-1;
    default:
      return prevState;
  }
}

const store=createStore(countReducer);

//Callback fires when an action is dispatched and state changes
store.subscribe(()=>{
  console.log("State update--",store.getState());
})

store.subscribe(()=>{
  console.log("State update--2",store.getState());
})


window.store=store;

console.log("Initial State-",store.getState());

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
