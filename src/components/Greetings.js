export function Greetings(props) {
  let greet = '';
  if (props.lang === 'de') {
    greet = 'Hallo';
  }
  if (props.lang === 'pt') {
    greet = 'Olá';
  }
  if (props.lang === 'fr') {
    greet = 'Bonjour';
  }

  return (
    <p>
      {greet} {props.children}
    </p>
  );
}
