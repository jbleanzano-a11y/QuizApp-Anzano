import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface ScoreCircleProps {
  percentage: number;
  score: number;
  total: number;
  size?: number;
  strokeWidth?: number;
}

export const ScoreCircle: React.FC<ScoreCircleProps> = ({
  percentage,
  score,
  total,
  size = 200,
  strokeWidth = 14
}) => {
  const [displayCount, setDisplayCount] = useState<number>(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Animated counter effect
  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepIncrement = percentage / totalSteps;

    if (percentage === 0) {
      setDisplayCount(0);
      return;
    }

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= percentage) {
        setDisplayCount(percentage);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
      }}
    >
      <svg
        width={size}
        height={size}
        style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="scoreAuroraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8B5CF6" />
            <stop offset="60%" stop-color="#38BDF8" />
            <stop offset="100%" stop-color="#22C55E" />
          </linearGradient>
          <filter id="scoreGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#111A30"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Secondary subtle guide border */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#293650"
          strokeWidth={1}
          fill="none"
        />

        {/* Animated fill arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scoreAuroraGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          strokeLinecap="round"
          fill="none"
          filter="url(#scoreGlow)"
        />
      </svg>

      {/* Center Label Content */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1,
            color: '#F8FAFC',
            letterSpacing: '-0.03em'
          }}
        >
          {displayCount}%
        </span>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#A9B4CC',
            marginTop: '0.35rem'
          }}
        >
          {score} / {total}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.725rem',
            color: '#64748B',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            fontWeight: 700
          }}
        >
          Accuracy
        </span>
      </div>
    </div>
  );
};

