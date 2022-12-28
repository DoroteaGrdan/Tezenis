import './App.css';
import Die from './Die';
import React, { useState, useEffect } from 'react';

function App() {
  const [dice, setDice] = useState(getNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(()=>{
      const allEqualNumbers = arr => arr.every(val => val === arr[0]);
      const resultNum = allEqualNumbers(dice.map(die=>die.value))
      const allHeld = arr => arr.every(val => val === arr[0]);
      const isAllHeld = allHeld(dice.map(die=>die.isHeld))
      if(resultNum && isAllHeld){
        setTenzies(true)
      }
    },[dice])
  
  function getRandomNum() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  }

  function getNewDice() {
    const arrayOfNumbers = [];
    for (let i = 0; i < 10; i++) {
      arrayOfNumbers.push({
        value: getRandomNum(),
        isHeld: false
      })
    }
    return arrayOfNumbers;
  }

  function displayDie() {
    return dice.map((die, index) => {
      return (
        <Die value={die.value} key={index} isHeld={die.isHeld}
          handleClick={() => { setHeldDie(index) }} />
      )
    })
  }

  function rollAgain() {
    setDice(prevDice=>{
      return prevDice.map(prevDie=>{
        if(!prevDie.isHeld){
          return {
            ...prevDie,
            value: getRandomNum()
          }
        } 
        return prevDie;
      })
    });
  }

  function setHeldDie(id) {
    setDice(prevDice => {
      return prevDice.map((die, index) => {
          if (index === id) {
            return {
              ...die,
              isHeld: !die.isHeld
            }
          }
          return die
        })
    })
  }

  const gameText = 
  <><h2>Tenzies</h2>
  <p>Roll a dice until you have all the same numbers.</p>
  <p>To save the dice click on it!</p></>;
  const gameWon = <>
  <h2>You won!</h2>
  <p>You rolled the same number.</p>
  <p>Congrats!</p>
  </>; 

  return (
    <div className="App">
      {tenzies ? gameWon : gameText}
      <div id="dice">
        {displayDie()}
      </div>
      <button id="rollBtn" onClick={tenzies ? ()=>{setDice(getNewDice); setTenzies(false);} : rollAgain}>{tenzies ? "Next game" : "Roll Again"}</button>
    </div>
  );
}

export default App;
