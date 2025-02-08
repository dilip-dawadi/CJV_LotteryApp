import React from "react";
export const SelectedNumbers = ({ selectedNumbers, totalBet }) => {
  return (
    <div className="selected-numbers">
      <h2>Numbers Selected</h2>
      <div className="selected-list">
        {selectedNumbers.length > 0 ? (
          selectedNumbers.map((num) => (
            <p key={num}>
              <span>Marked:</span>
              <span>{num}</span>
            </p>
          ))
        ) : (
          <p className="empty">No numbers selected.</p>
        )}
      </div>
      <h3>Total: ${totalBet}</h3>
    </div>
  );
};
