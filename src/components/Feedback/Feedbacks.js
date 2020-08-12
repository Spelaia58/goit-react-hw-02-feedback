import React from "react";

const Controls = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  total,
}) => (
  <>
    <h1>Please leave feedback</h1>
    <button type="button" onClick={onIncrementGood}>
      good
    </button>
    <button type="button" onClick={onIncrementNeutral}>
      neutral
    </button>
    <button type="button" onClick={onIncrementBad}>
      bad
    </button>
  </>
);
export default Controls;
