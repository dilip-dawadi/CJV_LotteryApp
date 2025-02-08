import React from "react";
const BetAmounts = ({ onBetClick }) => {
  const amounts = [1, 5, 10, 20];
  return (
    <div className="bet-amounts">
      {amounts.map((amount) => (
        <button key={amount} onClick={() => onBetClick(amount)}>
          ${amount}
        </button>
      ))}
    </div>
  );
};
export default BetAmounts;
