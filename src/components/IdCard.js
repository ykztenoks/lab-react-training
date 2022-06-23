import style from '../styles/IdCard.module.css';

export function IdCard(props) {
  return (
    <div className={style.card}>
      <img src={props.picture} alt="User" />
      <div className={style.content}>
        <p>
          <strong>First name:</strong>
          <span>{props.firstName}</span>
        </p>
        <p>
          <strong>Last name:</strong>
          <span>{props.lastName}</span>
        </p>
        <p>
          <strong>Gender:</strong>
          <span>{props.gender}</span>
        </p>
        <p>
          <strong>Height:</strong>
          <span>{props.height / 100}m</span>
        </p>
        <p>
          <strong>Birth:</strong>
          <span>{props.birth.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
