function Button({ onClick, children }) {
    return (
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[30px] mt-[20px]"
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div className="p-4 bg-gray-200" onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <Button onClick={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onClick={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }