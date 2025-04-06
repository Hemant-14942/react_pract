// import React from 'react';
// import { useState } from 'react';
// // const imgaddr = ["https://images.unsplash.com/photo-1737229940875-293ed0c4e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1737051561948-a325f9a143ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
// //     "https://images.unsplash.com/photo-1737200473221-55883c1fddc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
// //      "https://images.unsplash.com/photo-1737200473221-55883c1fddc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
// //    "https://plus.unsplash.com/premium_photo-1737175447636-ac602781aeef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
// // ];

// const App = () => {
//   const [index, setIndex] = useState(0);
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen con">
//         <div className="relative w-1/2 mx-auto  overflow-hidden bg-gray-300 imgcon h-96 top-[6px]">
//           {imgaddr.map((img, ind) => (
//             <img
//               className="absolute left-0 object-contain object-top w-full h-full"
//               key={ind}
//               src={imgaddr[index]}
//               alt="placeholder"
//             />
//           ))}
//         </div>
//         <div className="flex gap-5 mt-3 btn">
//           <button
//             className="p-2 text-white rounded-md btn bg-slate-700 "
//             onClick={() => setIndex((prev) => (prev + 1) % imgaddr.length)}
//           >
//             Next
//           </button>
//           <button
//             className="p-2 text-white rounded-md btn bg-slate-700"
//             onClick={() =>
//               setIndex((prev) => (prev - 1 + imgaddr.length) % imgaddr.length)
//             }
//           >
//             Previous
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App
import React, { useRef, useState, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 5); // Cycles through 0-4
  };

  useEffect(() => {
    // Start the interval on mount or re-render
    intervalRef.current = setInterval(handleNext, 1000);
    console.log("Interval started with ID:", intervalRef.current);

    // Cleanup when the component re-renders or unmounts
    return () => {
      console.log("Interval cleared with ID:", intervalRef.current);
      clearInterval(intervalRef.current);
    };
  }, []); // Dependency array causes useEffect to run on every state change

  return (
    <div>
      <h1>Slide {index + 1}</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;

