import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Typewriter displays lines one by one with typing effect and optional per-line delays
const Typewriter = ({
  lines,
  onComplete,
  typingSpeed = 40,
  lineDelay = 700,
  className = '',
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;

    const typeLine = (text) => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i += 1;
        if (i >= text.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            if (currentLineIndex < lines.length - 1) {
              setCurrentLineIndex((idx) => idx + 1);
              setDisplayed('');
            } else {
              setCompleted(true);
              onComplete && onComplete();
            }
          }, lineDelay);
        }
      }, typingSpeed);
    };

    typeLine(lines[currentLineIndex] || '');

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLineIndex, lines]);

  return (
    <div className={`space-y-4 ${className}`}>
      {lines.slice(0, currentLineIndex).map((text, idx) => (
        <div key={`line-${idx}`} className="text-lg md:text-xl text-white/90">
          {text}
        </div>
      ))}
      <AnimatePresence>
        {!completed && (
          <motion.div
            key={`typing-${currentLineIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg md:text-xl text-white"
          >
            {displayed}
            <span className="inline-block w-1.5 h-5 bg-white ml-1 animate-pulse align-baseline" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
