import style from '../styles/NumbersTable.module.css';

export function NumbersTable(props) {
  let htmlArr = [];
  for (let i = 0; i < props.limit; i++) {
    htmlArr.push(i + 1);
  }

  return (
    <div className={style.container}>
      {htmlArr.map((currentElement, i) => {
        return (
          <div className={i % 2 === 0 ? style.divcolor : style.divcolor2}>
            {currentElement}
          </div>
        );
      })}
    </div>
  );
}
