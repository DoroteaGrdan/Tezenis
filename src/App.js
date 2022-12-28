import './App.css';
import Die from './Die';
import React, { useState } from 'react';

function App() {
  const [dice,setDice] = useState(getNewDice())
  function getRandomNum(){
    const randomNum = Math.floor(Math.random() * 6) + 1;
    return randomNum;
  }

  function getNewDice(){
    const arrayOfNumbers=[];
    for(let i=0; i<10; i++){
      arrayOfNumbers.push({
        value:getRandomNum(), 
        isHeld:false
      })
    }
    return arrayOfNumbers;
  }
  function displayDie(){
    return dice.map((die,index)=>{
      return(
        <Die value={die.value} key={index}/>
      )
    })
  }

  return (
    <div className="App">
      <h2>Tenzies</h2>
      <p>Roll a dice until you have all the same numbers.
          To save the dice click on it!
      </p>
      <div id="dice">
        {displayDie()}
      </div>
      <button id="rollBtn">Roll Again</button>
    </div>
  );
}

export default App;
