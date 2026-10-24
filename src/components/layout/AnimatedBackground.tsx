import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#080D1C'
      }}
    >
      {/* Deep subtle grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.6
        }}
      />

      {/* Primary Aurora Glow Orb (Purple) */}
      <motion.div
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.22, 0.32, 0.2, 0.22]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '580px',
          height: '580px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8B5CF6 0%, rgba(139, 92, 246, 0) 70%)',
          filter: 'blur(90px)'
        }}
      />

      {/* Secondary Aurora Glow Orb (Cyan) */}
      <motion.div
        animate={{
          x: [0, -55, 35, 0],
          y: [0, 60, -45, 0],
          scale: [1, 0.9, 1.2, 1],
          opacity: [0.18, 0.28, 0.16, 0.18]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '620px',
          height: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #38BDF8 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Center Ambient Indigo Core */}
      <motion.div
        animate={{
          scale: [1, 1.08, 0.96, 1],
          opacity: [0.15, 0.22, 0.15]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '35%',
          left: '40%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #A78BFA 0%, rgba(167, 139, 250, 0) 65%)',
          filter: 'blur(110px)'
        }}
      />

      {/* Floating geometric diamond 1 */}
      <motion.div
        animate={{
          y: [-10, 15, -10],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.12, 0.25, 0.12]
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '18%',
          width: '32px',
          height: '32px',
          border: '1px solid rgba(167, 139, 250, 0.35)',
          borderRadius: '6px'
        }}
      />

      {/* Floating geometric circle 2 */}
      <motion.div
        animate={{
          y: [12, -18, 12],
          opacity: [0.08, 0.2, 0.08]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '12%',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px dashed rgba(56, 189, 248, 0.3)'
        }}
      />
    </div>
  );
};

