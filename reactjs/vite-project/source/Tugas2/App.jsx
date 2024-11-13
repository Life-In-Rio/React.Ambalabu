// import React from "react";
import person from "./Utama";
export default function App() {
  return (
    <div>
      <h1 style={{ color: "green " }}>
        Hallo every body
      </h1>
    <p>Hai  {person.name}, aku berasal dari {person.country}</p>
    </div>
  );
}