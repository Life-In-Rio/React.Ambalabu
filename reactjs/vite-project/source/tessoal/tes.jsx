function Message(props) {
    if (props.age < 18) {
      return <h1> is a minor</h1>;
    } else if (props.age >= 18 && props.age <= 60) {
      return <h1>you are an adult</h1>;
    } else {
      return <h1>you are a senior</h1>;
    }
  }

function App(){
    const userage = 25;
    return(<Message age={userage} />)
}
