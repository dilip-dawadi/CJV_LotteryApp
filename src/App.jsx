import React, { useState } from "react";
import {
  NumberGrid,
  BetAmounts,
  BtnControls,
  SelectedNumbers,
} from "./components";

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalBet, setTotalBet] = useState(0);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        alert("You can only select up to 5 numbers.");
      }
    }
  };

  const handleBetClick = (amount) => {
    if (selectedNumbers.length === 5) {
      setTotalBet(totalBet + amount);
    } else {
      alert("Please select 5 numbers before placing a bet.");
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setTotalBet(0);
  };

  const handleRandom = () => {
    const randomNums = [];
    while (randomNums.length < 5) {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum);
      }
    }
    setSelectedNumbers(randomNums);
  };

  const handleCash = () => {
    if (selectedNumbers.length !== 5) {
      alert("Please select 5 numbers before cashing out.");
      return;
    }
    if (totalBet === 0) {
      alert("Please place a bet before cashing out.");
      return;
    }
    alert(
      `Numbers Selected: ${selectedNumbers.join(", ")}\nTotal Bet: $${totalBet}`
    );
  };

  return (
    <div className="app-container">
      <div>
        <h1>WHE WHE on D' Avenue</h1>
        <NumberGrid
          selectedNumbers={selectedNumbers}
          onNumberClick={handleNumberClick}
        />
        <BetAmounts onBetClick={handleBetClick} />
        <BtnControls
          onClear={handleClear}
          onRandom={handleRandom}
          onCash={handleCash}
        />
      </div>
      <SelectedNumbers selectedNumbers={selectedNumbers} totalBet={totalBet} />
    </div>
  );
};

export default App;
