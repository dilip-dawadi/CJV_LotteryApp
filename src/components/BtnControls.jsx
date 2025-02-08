import React from "react";
export const BtnControls = ({ onClear, onRandom, onCash }) => {
  return (
    <div className="controls">
      <button onClick={onRandom}>Random</button>
      <button onClick={onClear}>Clear</button>
      <button onClick={onCash}>Cash</button>
    </div>
  );
};
