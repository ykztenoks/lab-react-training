import { useState } from 'react';

export function LikeButton() {
  const [counter, setCounter] = useState(0);
  //   const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  //   let color = colors[0]
  function like() {
    setCounter(counter + 1);
    // color = colors[i] + 1
  }

  return <button onClick={like}>Like {counter}</button>;
}
