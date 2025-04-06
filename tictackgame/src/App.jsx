import React, { useState } from "react"
import Header from "./components/Header"
import Tictac from "./components/Tictac";
function App() {
  const [click, setClick] = useState(false);
  const handleclick = () =>{
    setClick(!click)
  }
  
  return (
    <>
    <div className="relative w-screen h-screen main bg-slate-600">
        <Header />
        <Tictac/>
      </div>
    </>
  );
}

export default App;
