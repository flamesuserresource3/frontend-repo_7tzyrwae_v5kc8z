import React from 'react';
import { motion } from 'framer-motion';

const SceneWrapper = ({ children, keyId }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <motion.div
        key={keyId}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex h-full w-full items-center justify-center p-4"
      >
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">{children}</div>
      </motion.div>
    </div>
  );
};

export default SceneWrapper;
