function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function EventPropagationExample() {
  return (
    <div
      className="bg-gray-200 p-4 w-full h-[100px]"
      onClick={() => alert("You clicked on the outer div!")}
    >
      <Button onClick={() => alert("You clicked on the button!")}>
        Click me
      </Button>
    </div>
  );
}
