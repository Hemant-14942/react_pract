import React from 'react'
import { useRef,useState } from 'react';
const App = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (value) => { 
    // console.log(value);
    if (value === "=") {
      // showres(true);
      const res = eval (expression);
      // console.log(res);
        setResult(res);
        // alert(`your result is ${res}`);
        setExpression(res); 
    }
   else{
      setExpression((prev) =>{
        const newexp = prev + value;
        return newexp;
      });
   }
   
  };
  
  return (
    <>
      <nav className="w-screen navbar navbar-dark bg-slate-400">
        <h1 className="text-3xl text-center">Calculator</h1>
      </nav>
      <div className="flex items-center justify-center w-screen h-screen calc-body bg-slate-300">
        <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-80 bg-slate-200 ">
          <div className="w-full mb-4 expsion-box">
            {/* <input
              type="text"
              className="w-full p-3 text-lg text-right bg-white border rounded-lg shadow-sm exp focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
              value={expression}
              readOnly
            /> */}
            <textarea
              className="w-full p-3 text-lg text-right bg-white border rounded-lg shadow-sm exp focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
              value={expression}
              readOnly
            />
          </div>
          <div className="grid w-full grid-cols-4 gap-2 btn-box">
            <button className="btn bg-slate-400" onClick={() => handleClick(7)}>
              7
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(8)}>
              8
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(9)}>
              9
            </button>
            <button
              className="text-white bg-orange-400 btn"
              onClick={() => handleClick("/")}
            >
              /
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(4)}>
              4
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(5)}>
              5
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(6)}>
              6
            </button>
            <button
              className="text-white bg-orange-400 btn"
              onClick={() => handleClick("*")}
            >
              *
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(1)}>
              1
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(2)}>
              2
            </button>
            <button className="btn bg-slate-400" onClick={() => handleClick(3)}>
              3
            </button>
            <button
              className="text-white bg-orange-400 btn"
              onClick={() => handleClick("-")}
            >
              -
            </button>
            <button
              className="col-span-2 btn bg-slate-400"
              onClick={() => handleClick(0)}
            >
              0
            </button>
            <button
              className="btn bg-slate-400"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button
              className="text-white bg-orange-400 btn"
              onClick={() => handleClick("+")}
            >
              +
            </button>
            <button
              className="col-span-4 text-white bg-blue-500 btn"
              onClick={() => handleClick("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;