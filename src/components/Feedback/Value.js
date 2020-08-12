import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <ul>
      <li>good:{good}</li>
      <li>neutral:{neutral}</li>
      <li>bad:{bad}</li>
    </ul>
    <span>total:{total}</span>
    <span>positive feedback:{positivePercentage}</span>
  </>
);
export default Statistics;
