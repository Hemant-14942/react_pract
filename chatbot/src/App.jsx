import React from "react";
import axios from 'axios'
const App = () => {
  const [input, setInput] = React.useState("");
  const [ans, setans] = React.useState("");
  const [qsn, setqsn] = React.useState("");
  const APIkey = "AIzaSyBaexXtHbcPm1wkLv7rUOvR4LNsJccytZY";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIkey}`; 
  const sending_data =
  { 
    "contents": [{
      "parts":[{"text": ""}]
    }]
  }
  const handleInput = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
    const inp_val = e.target.value;
    sending_data.contents[0].parts[0].text = inp_val;
  };
  const getData = ()=>{
    const data = axios.post(`${url}`,sending_data)
    .then((res)=>{
      // console.log(res.data.candidates[0].content.parts[0].text);
      console.log(res.data.candidates[0].content.parts[0].text);
      const otp = res.data.candidates[0].content.parts[0].text;
      setans(otp);
      setqsn(input);
    }).catch((err)=>{
      console.log(err);
    })  
  }
  return (
    <div className="container w-screen h-screen flex flex-col items-center justify-center bg-gray-900 px-5 py-4">
      <div className="upr w-full max-w-3xl h-[80%] bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col justify-between">
        <div className="qsn h-[10%] bg-gray-700 p-3 text-lg font-semibold rounded-md flex items-center text-white shadow">
          {qsn || "Your Question Will Appear Here..."}
        </div>
        <div className="ans h-[90%] bg-gray-600 p-4 text-white rounded-md overflow-auto shadow">
          {ans || "Chatbot Answer Will"}
          Appear Here...
        </div>
      </div>

      <div className="low bg-gray-800 h-[20%] w-full max-w-3xl mt-5 p-4 rounded-2xl shadow-lg flex flex-col items-center">
        <div className="inp w-full h-[70%] bg-gray-700 rounded-md flex items-center shadow">
          <input
            type="text"
            className="w-full h-full text-lg px-4 py-2 bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            placeholder="Enter your question..."
            value={input}
            onChange={handleInput}
          />
        </div>
        <button
          onClick={getData} 
          className="mt-3 px-6 py-2 text-white font-semibold uppercase rounded-lg bg-blue-600 hover:bg-blue-500 transition-all"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default App;
