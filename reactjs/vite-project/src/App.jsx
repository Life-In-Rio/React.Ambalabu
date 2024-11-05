function App() {
const title = "coba JSX{}";
const paragraph = "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia." ;
const tema = {
  paragraph: {
    color: 'green',
    background: 'yellow'
  }
}
const pesawat = {
  nama: "ambalabu",
}

  return (
   <>
   <h1>{title}</h1>
   <h1 style={{ color: 'red' }}>{pesawat.nama}</h1>
   <p className="testing" style={tema.paragraph}>{paragraph}</p>
   </>
  );
}

export default App;
