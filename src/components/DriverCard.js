export function DriverCard(props) {
  let driverRating;
  if (props.rating < 0.49) {
    driverRating = '☆☆☆☆☆';
  }
  if (props.rating < 1.49) {
    driverRating = '★☆☆☆☆';
  }
  if (props.rating < 2.49) {
    driverRating = '★★☆☆☆';
  }
  if (props.rating < 3.49) {
    driverRating = '★★★☆☆';
  }
  if (props.rating < 4.49) {
    driverRating = '★★★★☆';
  }
  if (props.rating >= 4.5) {
    driverRating = '★★★★★';
  }

  return (
    <div>
      <img src={props.img} alt="owner" />
      <h2>{props.name}</h2>
      <p>{driverRating}</p>
      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}
