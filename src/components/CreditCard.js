import visa from '../assets/images/visa.png';
import master from '../assets/images/mastercardlogo.png';

export function CreditCard(props) {
  let flag = '';
  if (props.type === 'Master Card') {
    flag = master;
  }
  if (props.type === 'Visa') {
    flag = visa;
  }
  let month = '';
  if (props.expirationMonth < 10) {
    month = `0${props.expirationMonth}`;
  } else {
    month = props.expirationMonth;
  }

  let expYear = props.expirationYear.toString().slice(2, 4);
  let lastNumbers = props.number.slice(12, 16);
  let bgcolor = { backgroundColor: `${props.bgColor}` };
  let textColor = { color: `${props.color}` };

  return (
    <div style={bgcolor}>
      <img src={flag} alt="companylogo" />
      <p style={textColor}>.... .... ....{lastNumbers}</p>
      <p style={textColor}>
        {month}/{expYear}
      </p>
      <p style={textColor}>{props.bank}</p>
      <p style={textColor}>{props.owner}</p>
    </div>
  );
}
