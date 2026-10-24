import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

export interface FeedbackMessageProps {
  isCorrect: boolean;
  correctOptionLetter: string;
  correctOptionText: string;
  explanation: string;
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  isCorrect,
  correctOptionLetter,
  correctOptionText,
  explanation
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        width: '100%',
        padding: '1.15rem 1.35rem',
        borderRadius: '16px',
        backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)',
        border: `1.5px solid ${isCorrect ? 'rgba(34, 197, 94, 0.45)' : 'rgba(239, 68, 68, 0.45)'}`,
        boxShadow: isCorrect ? '0 0 20px rgba(34, 197, 94, 0.2)' : '0 0 20px rgba(239, 68, 68, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem'
      }}
    >
      {/* Title Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {isCorrect ? (
          <CheckCircle2 size={24} color="#22C55E" style={{ flexShrink: 0 }} />
        ) : (
          <XCircle size={24} color="#EF4444" style={{ flexShrink: 0 }} />
        )}

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.05rem',
              color: isCorrect ? '#22C55E' : '#EF4444'
            }}
          >
            {isCorrect ? 'Correct Answer! Outstanding.' : 'Incorrect Selection'}
          </span>
          {!isCorrect && (
            <span style={{ fontSize: '0.85rem', color: '#F8FAFC', fontWeight: 500 }}>
              The correct answer is Option {correctOptionLetter}: <strong>{correctOptionText}</strong>
            </span>
          )}
        </div>
      </div>

      {/* Explanation Note */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.55rem',
          padding: '0.65rem 0.85rem',
          backgroundColor: 'rgba(8, 13, 28, 0.45)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.875rem',
          color: '#CBD5E1',
          lineHeight: 1.55
        }}
      >
        <Lightbulb size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
        <span style={{ fontFamily: 'var(--font-body)' }}>{explanation}</span>
      </div>
    </motion.div>
  );
};

