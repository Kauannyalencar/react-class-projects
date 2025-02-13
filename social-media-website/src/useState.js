import { useState } from "react";

function App1() {
    const [textColor, setTextColor] = useState("green");
  
    //  const handleInputChange = (event) =>{
    //   steInputValue(event.target.value); 
    //  };
  
    return (
      <div className='App'>
        <button
          onClick={() => {
            setTextColor(textColor === "green" ? "red" : "green")
          }}>
          Show/Hide
        </button>
         <h3 style={{color: textColor}}>HI I'M ALLEN</h3>
      </div>
    )
}

// function App() {
//     const [age, setAge] = useState(0);
  
//     const increaseAge = () => {
//       setAge(age+ 1)
//     }
//     return (
//       <div className='App'>
//        {age} <button onClick={increaseAge}> Increase Age</button>
//       </div>
//     )
//   }