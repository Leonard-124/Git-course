
import React, { useState, useEffect } from "react";
import "./MindGame.css";

const symbols = ["🍎", "🍎", "🍌", "🍌", "🍒", "🍒", "🍇", "🍇"];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const MindGame = () => {
  const [cards, setCards] = useState(shuffleArray([...symbols]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  return (
    <div className="mind-game">
      <h1>Memory Matching Game</h1>
      <div className="game-board">
        {cards.map((symbol, index) => (
          <div
            key={index}
            className={`card ${flippedCards.includes(index) || matchedCards.includes(index) ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-front">{symbol}</div>
            <div className="card-back">❓</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindGame;
