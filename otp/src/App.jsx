import React from 'react'
import { useState ,useEffect,useRef} from 'react';
import { useNavigate ,Outlet} from "react-router-dom";
import Home from './components/Home';

const App = () => {
  const [input, setInput] = useState(new Array(4).fill(""));
  const ref =[useRef(),useRef(),useRef(),useRef()]
  const nav = useNavigate();
  // console.log(input);
  const handleinp = (e,ind)=>{
    const value = e.target.value;
    if(!Number(value)) return;
    const copyarr =[...input]
    copyarr[ind]=value
    setInput(copyarr)

    if(ind<input.length-1 ){
      ref[ind+1].current.focus();
    }
  }
  const handleKeyDown = (e,ind) => {
    if (e.key === "Backspace") {
       const copyarr = [...input];
       copyarr[ind] = "";
       setInput(copyarr);
      if(ind>0){
       
        ref[ind-1].current.focus();
      }
    }
    if (e.keyCode === 39) {
      if(ind<input.length-1){
        ref[ind+1].current.focus();
      }
    }
  };
    useEffect(() => {
      ref[0].current.focus();
    }, []);
    
    const handlesubmit = () => {  
    if (input.some(data => data === "")) {
      alert("Please fill all the fields");
      return;
    }
    else{
      nav("/home");
      return alert("OTP Verified");
    }
  
  };
  
  const handlepaste = (e)=>{
    const data = e.clipboardData.getData("text")
    const arr = data.split("");
    const copyarr = [...arr];
    setInput(copyarr);
  }
  return (
    <>
      <div className="container mx-auto mt-5 text-center ">
        <h1>OTP Verification</h1>
        {/* <Outlet/> */}
        {input.map((data, index) => (
          <input
            key={index}
            type="text"
            className="p-2 m-2 border-2 border-black outline-none w-11 h-11 focus:border-blue-500 focus:border-[2px]"
            maxLength="1"
            value={input[index]}
            ref={ref[index]}
            onPaste={(e)=>handlepaste(e)}
            onKeyDown={(e) => handleKeyDown(e,index)}
            onChange={(e)=>handleinp(e,index)}
          />
        ))}
        <br />
        <button onClick={handlesubmit} 
        className='p-2 text-center text-white bg-blue-500 rounded-lg'>submit</button>
      </div>
    </>
  );
}

export default App