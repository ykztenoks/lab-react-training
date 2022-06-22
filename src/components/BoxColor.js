export function BoxColor(props) {
  let color = { backgroundColor: `rgb(${props.r},${props.g},${props.b})` };
  return <div style={color}>{color.backgroundColor}</div>;
}
