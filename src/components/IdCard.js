import style from '../styles/IdCard.module.css';

export function IdCard(props) {
  return (
    <div className={style.card}>
      <img src={props.picture} alt="User" />
      <div className={style.content}>
        <strong>First name:</strong>
        <p>{props.firstName}</p>
        <strong>Last name:</strong>
        <p>{props.lastName}</p>
        <strong>Gender:</strong>
        <p>{props.gender}</p>
        <strong>Height:</strong>
        <p>{props.height / 100}m</p>
        <strong>Birth:</strong>
        <p>{props.birth.toDateString()}</p>
      </div>
    </div>
  );
}
