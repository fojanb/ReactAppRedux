import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Selector refers to states in stores
import "./App.css";
import {increment,decrement} from "../actions";
function App() {
  const state1 = useSelector((state) => state.state1);
  const state2 = useSelector((state) => state.state2);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {state1}</h1>
      {state2 ? <h3>You are not logged in yet.</h3> : ""}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
export default App;
