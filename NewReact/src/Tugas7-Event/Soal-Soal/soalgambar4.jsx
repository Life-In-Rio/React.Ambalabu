export default function Tombol() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button 
      className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-5 ml-20"
      onClick={handleClick}>
        Click me
      </button>
    );
  }