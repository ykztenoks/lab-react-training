import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import { useState } from 'react';
export function Dice() {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [dice, setDice] = useState(diceArr[0]);
  function pickDice() {
    let rng = Math.floor(Math.random() * 6);
    setTimeout(() => {
      setDice(diceArr[rng]);
    }, 1000);
    setDice(diceEmpty);
  }

  return <img src={dice} alt="dice" onClick={pickDice} />;
}
