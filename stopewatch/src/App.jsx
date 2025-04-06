import { useState } from "react";

function App(){
   const [time , setTime] = useState({hr:0 , min:0 , sec:0 , milli:0});
   const [status , setStatus] = useState(null);

   let updhr =time.hr;
   let updmin =time.min;
   let updsec =time.sec;
   let updmilli = time.milli;
   const start = ()=>{
    setStatus(setInterval(myfun,10))
   }
   const stop = ()=>{
    clearInterval(status);
   }
   const reset = ()=>{
    clearInterval(status);
    setTime({hr:0 , min:0 , sec:0 , milli:0})
   }
   
   const myfun = () =>{
       
       if(updmilli==100){
           updsec++;
           updmilli=0
        }
        if(updsec==60){
            updmin++;
            updsec=0;
        }
        if(updmin==60){
            updhr++;
            updmin=0;
        }
        updmilli++;
        return setTime({hr:updhr , min:updmin , sec:updsec , milli:updmilli})
    }

    return(
        <>
        <h1>{time.hr + ":" + time.min + ":" + time.sec + ":"+ time.milli}</h1>
        
        <button onClick={start}  className="p-2 font-serif text-2xl bg-red-400 rounded-full">Start</button>
        <button onClick={stop}  className="p-2 font-serif text-2xl bg-red-400 rounded-full">stop</button>
        <button  onClick={reset}  className="p-2 font-serif text-2xl bg-red-400 rounded-full">reset</button>
        </>
    )
}
export default App; 