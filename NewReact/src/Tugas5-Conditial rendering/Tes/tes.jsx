function Test({ name, Benar }) {
  if (Benar) {
    return <li>{name} True</li>;
  } else {
    return <li>{name} False</li>;
  }
}
export default Test;
