"use client";
import { useState } from "react";
const AboutUs = () => {
  const [increment, setIncrement] = useState(0);

  const handleIncrement = () => {
    setIncrement((prevIncrement) => prevIncrement + 1);
  };
  return (
    <div className="max-w-2xl mx-auto">
      <h1>About Us</h1>
      <p>{increment}</p>
      <button onClick={handleIncrement}
      className="bg-green-600 text-white px-2 rounded "
      >Increment</button>
    </div>
  );
};

export default AboutUs;
