// import { User } from './User';
// import "./App.css";

// function App() {
//   // passing props, use curly brackets for numbers
//   // 4th user component doesn't display anything
//   return (
//     <div className="App">
//       <User name="Austin" age={21} />
//       <User name="Bob" age={22} />
//       <User name="Carter" age={23} />
//       <User />

//       {/* exercise */}
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//       <Job salary={12000} position="Junior SDE" company="Google"/>
//       <Job salary={10000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

// // component, called in App
// const User = (user) => {  // props in bracket
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <h1>{user.age}</h1>
//     </div>
//   )
// }

// // exercise
// const Job = (job) => {
//   return (
//     <div>
//       <h1>{job.salary}</h1>
//       <h1>{job.position}</h1>
//       <h1>{job.company}</h1>
//     </div>
//   )
// }

// export default App;

// function App() {
//   const age = 19;
//   const isGreen = true;

//   return (
//     <div className="App">
//       {age >= 18 ? <h1>overage</h1> : <h1>underage</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}>this has color</h1>

//       {isGreen && <button>this is a button</button>}
//     </div>
//   );
// }

// export default App;

// function App() {

//   const users = [
//     { name: "Pedro", age: 21 },
//     { name: "Jake", age: 25 },
//     { name: "Jessica", age: 45 },
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return (
//           <User name={user.name} age={user.age} />
//         );
//       })}
//     </div>
//   );
// }

// export default App;

// function App() {

//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venue", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name}</h1>)}
//     </div>
//   )
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [age, setAge] = useState(0) // initial value 0

//   const increaseAge = () => {
//     setAge(age + 1)
//   };

//   return <div className="App">
//     {/* initially, look age value of age, displays it, doesn't rerender even after change*/}
//     {age}
//     <button onClick={increaseAge}> Increase Age </button>

//   </div>;
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//       {inputValue}
//     </div>
//   )
// }

// function App() {
//   const [showText, setShowText] = useState(true);
//   const [textColor, setTextColor] = useState("");

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setShowText(!showText);
//         }}
//       >
//         Show/Hide
//       </button>
//       {showText && <h1>hello</h1>}

//       <button
//         onClick={() => {
//           setTextColor(textColor === "black" ? "red" : "black");
//         }}
//       >
//         <h1 style={{ color: textColor }}> change color</h1>
//       </button>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>

      {count}
    </div>
  );
}

export default App;
