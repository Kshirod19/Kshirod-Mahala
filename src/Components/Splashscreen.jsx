import React, { useState, useEffect } from "react";
import "./Splashscreen.css";

const SplashScreen = ({ setShowSplash }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Delay before fade-out starts

    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Duration until splash screen is removed

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [setShowSplash]);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="text-center font-logoname">Kshirod Mahala</h1>
    </div>
  );
};

export default SplashScreen;
