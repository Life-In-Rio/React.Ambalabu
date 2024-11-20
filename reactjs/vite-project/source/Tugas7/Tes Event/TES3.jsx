export default function Signup() {
  return (
    <form
      className="bg-gray-200 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
    <input/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send
      </button>
    </form>
  );
}
