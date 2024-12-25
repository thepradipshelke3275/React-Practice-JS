import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from "./redux/actions/index";

const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <>
      <div className="container">
        <div>
          <h1>Increment/Decrement counter</h1>
          <h4>using React and React Redux</h4>
          <div className="quantity">
            <button onClick={() => dispatch(decNumber())}>-</button>
            <input name="quantity" type="text" value={myState} />
            <button onClick={() => dispatch(incNumber(5))}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
