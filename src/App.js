
import './App.css';
import Axios from "axios";
import {useState, useEffect} from "react";

function App() {
  // FETCH METHOD
  // fetch("https://catfact.ninja/fact").then((res)=>res.json()).then((data)=>{
  //   console.log(data);
  // });

  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
  });

  }

  useEffect(() =>{
     fetchCatFact();
   }, []);

  return (
    <div className="App">
     <button onClick={fetchCatFact}> Generate cat fact </button>
     <p>{catFact}</p>
    </div>
  );
}

export default App;
