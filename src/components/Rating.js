export function Rating(props) {
  if (props.children <= 0.49) {
    return <div>'☆☆☆☆☆'</div>;
  }
  if (props.children <= 1.49) {
    return <div>'★☆☆☆☆'</div>;
  }
  if (props.children <= 2.49) {
    return <div>'★★☆☆☆'</div>;
  }
  if (props.children <= 3.49) {
    return <div>'★★★☆☆'</div>;
  }
  if (props.children <= 4.49) {
    return <div>'★★★★☆'</div>;
  }
  if (props.children >= 4.5) {
    return <div>'★★★★★'</div>;
  }
}
