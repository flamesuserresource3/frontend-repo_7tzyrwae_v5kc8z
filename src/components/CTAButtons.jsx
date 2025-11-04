import React from 'react';
import { motion } from 'framer-motion';

export const PrimaryButton = ({ children, onClick, className = '' }) => (
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className={`w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 font-medium shadow hover:bg-white/90 transition ${className}`}
  >
    {children}
  </motion.button>
);

export const SecondaryButton = ({ children, onClick, className = '' }) => (
  <motion.button
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className={`w-full md:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition ${className}`}
  >
    {children}
  </motion.button>
);

const CTAButtons = ({
  primaryLabel,
  onPrimary,
  secondaryLabel,
  onSecondary,
}) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:flex md:items-center gap-3">
      {primaryLabel && (
        <PrimaryButton onClick={onPrimary}>{primaryLabel}</PrimaryButton>
      )}
      {secondaryLabel && (
        <SecondaryButton onClick={onSecondary}>{secondaryLabel}</SecondaryButton>
      )}
    </div>
  );
};

export default CTAButtons;
