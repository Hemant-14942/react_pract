import React from 'react'
import { useRef, useState, useEffect } from "react";
const Home = () => {
  const [index, setIndex] = useState(0); // State to track the index
    const intervalRef = useRef(null);
  
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex + 1) % 5); // Cycle through 0-4
    };
  
    const startInterval = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(handleNext, 1000); // Start the interval
        console.log("Interval started with ID:", intervalRef.current);
      }
    };
  
    const stopInterval = () => {
      clearInterval(intervalRef.current); // Clear the interval
      console.log("Interval cleared with ID:", intervalRef.current);
      intervalRef.current = null; // Reset the reference
    };
  
    useEffect(() => {
      startInterval();
  
      // Cleanup on component unmount
      return () => stopInterval();
    }, []);
  
    return (
      <div>
        <h1>Slide {index + 1}</h1>
        <button onClick={stopInterval}>Stop Interval</button>
        <button onClick={startInterval}>Start Interval</button>
      </div>
    );
}

export default Home