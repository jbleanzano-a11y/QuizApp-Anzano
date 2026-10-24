import React from 'react';
import { motion } from 'framer-motion';

export interface StatCardProps {
  label: string;
  value: number | string;
  icon: React.ReactNode;
  accentColor?: string;
  subtext?: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  accentColor = '#8B5CF6',
  subtext,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      style={{
        flex: 1,
        minWidth: '180px',
        backgroundColor: '#17223B',
        borderRadius: '18px',
        border: '1px solid #293650',
        padding: '1.25rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle accent corner glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60px',
          height: '60px',
          background: `radial-gradient(circle at top right, ${accentColor}25, transparent 70%)`,
          pointerEvents: 'none'
        }}
      />

      {/* Header with Icon and Label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.825rem',
            fontWeight: 600,
            color: '#A9B4CC',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}
        >
          {label}
        </span>

        <div
          style={{
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '10px',
            backgroundColor: `${accentColor}18`,
            border: `1px solid ${accentColor}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: accentColor
          }}
        >
          {icon}
        </div>
      </div>

      {/* Main Value Display */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 800,
            lineHeight: 1,
            color: '#F8FAFC',
            letterSpacing: '-0.02em'
          }}
        >
          {value}
        </span>
      </div>

      {subtext && (
        <span style={{ fontFamily: 'var(--font-sub)', fontSize: '0.775rem', color: '#64748B' }}>
          {subtext}
        </span>
      )}
    </motion.div>
  );
};

