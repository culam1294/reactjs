import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action/Counter";
import { isLogin } from "./action/isLogin";
import ManagerUsers from "./container/ManagerProducts/index";

function App() {
  const counter = useSelector((state) => state.count);
  const login = useSelector((state) => state.login);
  

  const dispatch = useDispatch();

  return (
    <div className="App">
      {login ? (
        <button onClick={() => dispatch(isLogin())}>login</button>
      ) : (
        <button onClick={() => dispatch(isLogin())}>logout</button>
      )}
      <br />
      <button onClick={() => dispatch(increment())}>increment</button>
      My counter is {counter}
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <ManagerUsers/>
    </div>
  );
}

export default App;
