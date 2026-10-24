import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  completedQuestions: number;
  showDetails?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  totalQuestions,
  completedQuestions,
  showDetails = true
}) => {
  // Formula: Progress = (Completed Questions / Total Questions) * 100
  const progressPercent = totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0;

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {showDetails && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-sub)',
            fontSize: '0.825rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#A9B4CC' }}>
            <span>Progress:</span>
            <span style={{ color: '#F8FAFC', fontWeight: 700 }}>
              {completedQuestions} of {totalQuestions} completed
            </span>
          </div>

          <div
            style={{
              padding: '0.15rem 0.5rem',
              borderRadius: '6px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38BDF8',
              fontWeight: 700,
              fontSize: '0.8rem'
            }}
          >
            {progressPercent}%
          </div>
        </div>
      )}

      {/* Track */}
      <div
        role="progressbar"
        aria-valuenow={progressPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#111A30',
          borderRadius: '9999px',
          overflow: 'hidden',
          border: '1px solid #293650',
          position: 'relative'
        }}
      >
        {/* Animated Fill Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)',
            borderRadius: '9999px',
            boxShadow: '0 0 14px rgba(56, 189, 248, 0.6)',
            position: 'relative'
          }}
        >
          {/* Subtle light shimmer along progress */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '20px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6))',
              filter: 'blur(2px)'
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

