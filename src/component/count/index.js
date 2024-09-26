import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/slice/counterSlice";

const Count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState();

  return (
    <div>
      <div>
        <button
          aria-label="increament value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
          {/* <button
            aria-label="Increment By Amount"
            onClick={() => dispatch(incrementByAmount({ payload: 10 }))}
          >
            <input type="number" value={amount} onChange={amount} />
          </button> */}
      </div>
    </div>
  );
};

export default Count;
