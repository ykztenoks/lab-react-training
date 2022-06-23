import { useState } from 'react';
export function ClickablePicture(props) {
  const [image, setImage] = useState(props.img);
  function changeImg() {
    image === props.img ? setImage(props.imgClicked) : setImage(props.img);
  }
  return <img src={image} alt="guy" onClick={changeImg} />;
}
