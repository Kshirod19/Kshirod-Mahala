import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = isMobile ? [0.8, 1] : [1.05, 1];
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex items-center justify-center h-auto p-2 md:p-20 font-bodyfont"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-40"
        style={{
          perspective: "1000px",
          transition: "transform 1s ease-in-out",
        }}
      >
        <Header translate={translate}>{titleComponent}</Header>
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, children }) => (
  <motion.div
    style={{
      translateY: translate,
      transition: "transform 1s ease-in-out",
    }}
    className="max-w-5xl mx-auto text-center"
  >
    {children}
  </motion.div>
);

const Card = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      transition: "transform 1s ease-in-out, box-shadow 0.5s ease-in-out",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[41rem] md:h-[35rem] lg:h-[30rem] w-full border-4 border-[#6C6C6C] p-5 md:p-5 bg-zinc-900 rounded-[30px] shadow-2xl"
  >
    <div className="w-full h-full overflow-hidden rounded-2xl md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);

export default ContainerScroll;
