import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 12
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: 'easeIn'
    }
  }
};

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
      }}
    >
      {children}
    </motion.div>
  );
};

