import React from 'react';
import { motion } from 'framer-motion';

const Avatar = () => (
  <motion.div
    initial={{ x: -40, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg flex items-center justify-center text-2xl font-bold"
    aria-label="Putra avatar"
  >
    P
  </motion.div>
);

const Bubble = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white/10 backdrop-blur rounded-2xl p-4 md:p-5 text-white shadow border border-white/10"
  >
    {children}
  </motion.div>
);

const AssistantChat = ({ lines, highlightLexy = false }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4">
      <Avatar />
      <div className="flex-1 space-y-3">
        {lines.map((line, idx) => {
          let content = line;
          if (highlightLexy) {
            const parts = line.split(/(Lexy)/);
            content = (
              <span>
                {parts.map((p, i) =>
                  p === 'Lexy' ? (
                    <motion.strong
                      key={`lexy-${i}`}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="font-semibold text-white"
                    >
                      {p}
                    </motion.strong>
                  ) : (
                    <span key={`part-${i}`}>{p}</span>
                  )
                )}
              </span>
            );
          }
          return (
            <Bubble key={`bubble-${idx}`} delay={idx * 0.35}>
              <span className="text-base md:text-lg text-white/90">{content}</span>
            </Bubble>
          );
        })}
      </div>
    </div>
  );
};

export default AssistantChat;
