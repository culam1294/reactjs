import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action/Counter";
import { isLoad } from "./action/isLoad";
import ManagerProducts from "./container/ManagerProducts/index";


function App() {
  const counter = useSelector((state) => state.count);
  const load = useSelector((state) => state.load);
  

  const dispatch = useDispatch();

  return (
    <>
      {load ? (
        <button onClick={() => dispatch(isLoad())}>load</button>
      ) : (
        <button onClick={() => dispatch(isLoad())}>logout</button>
      )}
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      My counter is {counter}
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <ManagerProducts/>
    </>
  );
}

export default App;
