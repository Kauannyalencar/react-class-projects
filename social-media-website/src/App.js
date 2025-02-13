import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home';
// import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar';
import { Contact } from './pages/Contact';
import { Music} from './pages/Music'
// import { useState, createContext } from 'react';


function App(params) {
  return ( 
    <div className='App'>
      <h1>My Space </h1>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/music' element={<Music/>}/>
        </Routes>
      </Router>
    </div>
  )
}

// export const AppContext = createContext();

// function App(){
//   const [username, setUsername] = useState("Allen");

//   return (
//     <div className='App'>
//      <AppContext.Provider value={{username, setUsername}}>
//       {/* Provem dados  */}
//      <Router>
//    
//       <Routes>
//         <Route path="/" element={<Home  />} />
//         <Route path="/profile" element={<Profile  />} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path='*' element={<h1>Page not found</h1>} />
//       </Routes>
//      </Router>
//      </AppContext.Provider>
//     </div>
//   )
// }



// function App(){
//   const [name, setName] = useState("")
//   const [predictedAge, setPredictedAge] = useState(0);

//  const fetchData = () =>{
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
//      setPredictedAge(res.data);
      
//     });
//   }

//   return (
//     <div className='App'>
//       <input placeholder='Ex. Allen' onChange={(event) => {setName(event.target.value);

//       }}/>
//      <button onClick={fetchData}> Predict Age </button>
    
//     <h1> Name: {predictedAge?.name} </h1>
//     <h1> Predicted Age: {predictedAge?.age}</h1>
//     <h1>  Count: {predictedAge?.count}</h1>

//     </div>


//   )
// }




// Cat facts api
// function App() {
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () =>{
//     Axios.get("https://catfact.ninja/fact").then((res) =>{
//       setCatFact(res.data.fact);
       
//      })
//   }
//   useEffect(() =>{
//    fetchCatFact();
//   },[]);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}> Generate Cat Fact </button>
//       <p>{catFact}</p>
//     </div>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = ()=>{
//     setCount(count + 1);
//   }

//   const decrease = ()=>{
//     setCount(count - 1);
//   }
//   const setTozero = ()=>{
//     setCount(0);
//   }
//   return (
//     <div className='App'>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={setTozero}>Set to zero</button>

//       {count}
//     </div>
//   )
// }



// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus",isGasPlanet: false },
//     { name: "Neptune",isGasPlanet: true },
//     { name: "Uranus",isGasPlanet: true },
//   ]

//   return (
//     <div className='App'>
//       {planets.map((planet, key) =>{
//         return <Planet gas={planet.isGasPlanet} name={planet.name}  key={planet.key}/>

//       })}
//     </div>
//   )
// }

// function App() {
//   const users = [
//     { name: "Allen", age: 21 },
//     { name: "Jason", age: 28 },
//     { name: "Diana", age: 24 },
//     { name: "Scott", age: 23 },
//   ]

//   return (
//     <div className='App'>
//       {users.map((user, key) => {
//         return <User key={key} name={user.name} age={user.age} />
//       })}
//     </div>
//   )
// }






// function App() {
//   const age = 18;
//   const isGreen = false;

//   return (
//     <div className="App">
//   {age >= 18 ? <h1 style={{color: isGreen ? "green" : "red", backgroundColor:"pink"}}>Over Age</h1> : <h1>Under Age</h1>} 

//   {isGreen && <button>Enter</button>}
//     </div>
//   );
// }

export default App;
