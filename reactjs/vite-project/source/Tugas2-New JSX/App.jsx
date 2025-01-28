// import React from "react";
import person from "./Utama";
function App() {
  return (
    <div>
      <h1 style={{ color: "green " }}>Hallo every body</h1>
      <p>
        Hai {person.name}, aku berasal dari {person.country}
      </p>
    </div>
  );
}

export default App;
