/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";


const AnimateOnView = ({ children }) => {
  const ref = useRef(null);

  const isVisible = useInView(ref, { once: true });

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      mainControlls.start("visible");
    } else {
      mainControlls.start("hidden");
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControlls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnView
