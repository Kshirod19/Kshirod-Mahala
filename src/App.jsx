import './App.css'
import React, { useState } from 'react';
import SplashScreen from './Components/Splashscreen'
import Maincomponent from './Components/Maincomponent';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
    <div className="App">
      {showSplash ? (
        <SplashScreen setShowSplash={setShowSplash} />
      ) : (
        <Maincomponent/>
         
      )}
    </div>

    </>
  
  );
};

export default App
