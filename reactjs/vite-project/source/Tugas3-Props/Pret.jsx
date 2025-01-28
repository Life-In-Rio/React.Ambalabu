import { User, UserProfile, Message } from "./sambung";

const person = {
  name: "Abyan",
  age: 16,
  country: "IDN",
};

export default function Pret() {
  // PRAKTEK
  Message("Abyan", "Selamat pagi");
  const userInfo = {
    username: "KSI",
    age: 25,
    location: "New York",
  };
  return (
    <div>
      <div>
        <h1 style={{ color: "blue" }}>Pengguna</h1>
        <User {...person} />
      </div>
      <p style={{ color: "green" }}>Thick Of It</p>
      <UserProfile {...userInfo} />
    </div>
  );
}