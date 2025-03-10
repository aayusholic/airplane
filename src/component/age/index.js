import React, { useReducer } from "react";
import { ageReducer } from "../../reducer/ageReducer";

const Age = () => {
  const [state, dispatch] = useReducer(ageReducer, { age: 24 });
  return (
    <div>
      <h1> Your age is : {state.age}</h1>
      <button onClick={() => dispatch({ type: "incremental_age" })}>
        Increment Age
      </button>
    </div>
  );
};

export default Age;

let ref = { current: 0 };
