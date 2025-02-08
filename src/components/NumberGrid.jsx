import React from "react";
export const NumberGrid = ({ selectedNumbers, onNumberClick }) => {
  return (
    <div className="number-grid">
      {[...Array(20).keys()].map((num) => {
        const number = num + 1;
        return (
          <button
            key={number}
            className={selectedNumbers.includes(number) ? "selected" : ""}
            onClick={() => onNumberClick(number)}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};
