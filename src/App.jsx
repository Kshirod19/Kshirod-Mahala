import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlendedPreloader from "./Components/BlendedPreloader";
import Maincomponent from "./Components/Maincomponent";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App relative w-full h-screen bg-black">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(8px)", // Apply blur before disappearing (without enlarging)
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <BlendedPreloader setShowSplash={setShowSplash} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Maincomponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
