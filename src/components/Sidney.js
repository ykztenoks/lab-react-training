import { useState } from 'react';
import Sidney1 from '../assets/images/sidneyy.jpeg';
import Sidney2 from '../assets/images/invertido.jpeg';

export function ThemeButton() {
  const [sidney, setSidney] = useState(Sidney1);
  function changeSidney() {
    sidney === Sidney1 ? setSidney(Sidney2) : setSidney(Sidney1);
  }
  return (
    <div>
      <img src={sidney} alt="sidneyzao" onClick={() => changeSidney()} />
      {/* <button onClick={() => changeSidney()}>Dança gatinho, dança</button> */}
    </div>
  );
}
