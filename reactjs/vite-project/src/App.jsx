// export default function App() {
//   const title = "coba JSX{}";
//   const paragraph =
//     "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.";
//   const tema = {
//     paragraph: {
//       color: "green",
//       background: "yellow",
//     },
//   };
//   const pesawat = {
//     nama: "ambalabu",
//   };

//   return (
//     <>
//       <h1>{title}</h1>
//       <h1 style={{ color: "red" }}>{pesawat.nama}</h1>
//       <p className="testing" style={tema.paragraph}>
//         {paragraph}
//       </p>
//       <ChildComponent />
//     </>
//   );
// }

// function ChildComponent({
//   title = "Coba Judul",
//   description = " coba deskripsi",
//   age = "24",
// }) {
//   return (
//     <>
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <p>Age: {age}</p>
//     </>
//   );
// }

// import React from 'react';



// function Image({src, alt, size}){
//   return (
//       <img src={src} alt={alt}style={{width:{size}, height:{size}}}   />
//   )

// }

// function ChildrenComponent({title, description, age, ...props}) {
// return (
//   <div>
//     <h1>{title}</h1>
//     <p>{description}</p>
//     <p>Age: {age}</p>
//     <Image {...props}/>
//   </div>
// )
// }

// export default function ParentComponent() {
//   return (
//       <>
//     <ChildrenComponent
//       title="Coba Judul"
//       description="coba deskripsi"
//       age="24"
//       src="https://reactjs.org/logo-og.png"
//       alt="cobaReact"
//       size="100px"
//     />
//     </>
//   )
// }


// Soal no 1

// // Komponen Greeting
// function Greeting({ name, message }) {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>{message}</p>
//     </div>
//   );
// }

// // Komponen utama App
// function App() {
//   return (
//     <div>
//       <Greeting name="Alice" message="Welcome to React!" />
//     </div>
//   );
// }

// export default App;

// batas


// Soal no 2

// import React from 'react';

// // Komponen UserProfile
// function UserProfile({ username, age, location }) {
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>Username: {username}</p>
//       <p>Age: {age}</p>
//       <p>Location: {location}</p>
//     </div>
//   );
// }

// // Komponen utama App
// function App() {
//   const userInfo = { username: "johndoe", age: 25, location: "New York" };

//   return (
//     <div>
//       <UserProfile {...userInfo} />
//     </div>
//   );
// }

// export default App;

// batas