import { useState } from 'react';
export function Carousel(props) {
  const [curImg, setCurImg] = useState(0);
  function changeRight() {
    curImg < props.images.length - 1 ? setCurImg(curImg + 1) : setCurImg(0);
  }
  function changeLeft() {
    curImg > 0 ? setCurImg(curImg - 1) : setCurImg(3);
  }

  return (
    <div>
      <img src={props.images[curImg]} alt="person" />
      <button onClick={changeLeft}>Left</button>
      <button onClick={changeRight}>right</button>
    </div>
  );
}
