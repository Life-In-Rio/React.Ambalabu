import Test from "./tes.jsx";
export default function Conditional() {
  return (
    <div>
      <ul>
        <Test name="satu" Benar={false} />
        <Test name="dua" Benar={true} />
        <Test name="tiga" Benar={false} />
        <Test name="empat" Benar={true} />
      </ul>
    </div>
  );
}
