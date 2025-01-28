export default function PreventDefaultExample() {
  return (
    <form
      className="bg-gray-300 w-[600px] h-[150px] mx-auto mt-20 rounded-md"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <h1 className="text-[30px] font-bold text-blue-500 text-center ">
        Prevent Default
      </h1>
      <p className="text-[15px] font-bold text-center">Enter any text</p>

      <input type="text" className="w-[300px] ml-[100px] mt-[20px] mr-[20px]" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
        Submit
      </button>
    </form>
  );
}
