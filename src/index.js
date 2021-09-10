import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
// ---------------------
import { createStore } from "redux";
import { Provider } from "react-redux";
// ---------------------
import allReducers from "./reducers";
// Provider attaches our store to entire app components(parent,child,siblings).
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
// ------------------REDUX in Vanilla JS---------------------
// let state = 1;
// You can use Redux stand alone in Vanilla js Or either react and other js frameworks.
// ACTION : Describes what you gonna do? Just give a "name" to our action.
// It is actually a simple js function that returns an object.
// const add = () => {
//   return {
//     type: "ADD",
//   };
// };
// const sub = () => {
//   return {
//     type: "SUB",
//   };
// };
// /* REDUCER : Describes how your actions transform state
//  into the next state and returns the updated state*/
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       state = state + 1;
//       break;
//     case "SUB":
//       state = state - 1;
//       break;
//     default:
//       console.log("No action");
//   }
//   return state;
// };
// // STORE -> globalized state :
// const store = createStore(reducer, state);
// store.subscribe(() => {
//   console.log("State updated : ", store.getState());
// });
// // DISPATCH : Will dispatch the ACTION to the REDUCER and executes the action,
// store.dispatch(add());
// store.dispatch(sub());
