import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Check } from 'lucide-react';

export interface AnswerOptionProps {
  index: number;
  label: string; // 'A', 'B', 'C', 'D'
  text: string;
  isSelected: boolean;
  isAnswerChecked: boolean;
  isCorrectOption: boolean;
  onSelect: (index: number) => void;
  disabled?: boolean;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  index,
  label,
  text,
  isSelected,
  isAnswerChecked,
  isCorrectOption,
  onSelect,
  disabled = false
}) => {
  // Determine card appearance status
  let cardBg = '#17223B';
  let borderColor = '#293650';
  let letterBg = 'rgba(255, 255, 255, 0.05)';
  let letterColor = '#A9B4CC';
  let glowShadow = 'none';

  if (!isAnswerChecked) {
    if (isSelected) {
      cardBg = 'rgba(139, 92, 246, 0.15)';
      borderColor = '#8B5CF6';
      letterBg = '#8B5CF6';
      letterColor = '#FFFFFF';
      glowShadow = '0 0 20px rgba(139, 92, 246, 0.3)';
    }
  } else {
    // Answer is checked
    if (isCorrectOption) {
      // Always highlight correct answer in green
      cardBg = 'rgba(34, 197, 94, 0.14)';
      borderColor = '#22C55E';
      letterBg = '#22C55E';
      letterColor = '#FFFFFF';
      glowShadow = '0 0 24px rgba(34, 197, 94, 0.35)';
    } else if (isSelected && !isCorrectOption) {
      // Selected incorrect answer in red
      cardBg = 'rgba(239, 68, 68, 0.14)';
      borderColor = '#EF4444';
      letterBg = '#EF4444';
      letterColor = '#FFFFFF';
      glowShadow = '0 0 24px rgba(239, 68, 68, 0.35)';
    } else {
      // Other unselected options fade slightly
      cardBg = 'rgba(23, 34, 59, 0.4)';
      borderColor = '#1E2D4E';
      letterColor = '#64748B';
    }
  }

  const handleClick = () => {
    if (!disabled && !isAnswerChecked) {
      onSelect(index);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled && !isAnswerChecked) {
      e.preventDefault();
      onSelect(index);
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={isAnswerChecked ? -1 : 0}
      aria-pressed={isSelected}
      aria-label={`Option ${label}: ${text}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      whileHover={!isAnswerChecked ? { scale: 1.012, y: -2 } : {}}
      whileTap={!isAnswerChecked ? { scale: 0.99 } : {}}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1.05rem 1.25rem',
        borderRadius: '16px',
        backgroundColor: cardBg,
        border: `1.5px solid ${borderColor}`,
        boxShadow: glowShadow,
        cursor: isAnswerChecked ? 'default' : 'pointer',
        transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        userSelect: 'none',
        outline: 'none',
        position: 'relative'
      }}
      className="option-card-inner"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        {/* Letter Identifier (A, B, C, D) */}
        <div
          style={{
            width: '2.4rem',
            height: '2.4rem',
            borderRadius: '10px',
            backgroundColor: letterBg,
            color: letterColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '0.95rem',
            flexShrink: 0,
            transition: 'all 0.2s ease',
            border: isSelected && !isAnswerChecked ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent'
          }}
        >
          {label}
        </div>

        {/* Answer Text */}
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.975rem',
            fontWeight: isSelected ? 600 : 500,
            color: isSelected || (isAnswerChecked && isCorrectOption) ? '#F8FAFC' : '#D1D5DB',
            lineHeight: 1.5,
            wordBreak: 'break-word'
          }}
        >
          {text}
        </span>
      </div>

      {/* Right Indicator / Status Icon */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        {!isAnswerChecked && (
          <div
            style={{
              width: '1.35rem',
              height: '1.35rem',
              borderRadius: '50%',
              border: isSelected ? '2px solid #8B5CF6' : '2px solid #293650',
              backgroundColor: isSelected ? '#8B5CF6' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            {isSelected && <Check size={12} color="#FFFFFF" strokeWidth={3.5} />}
          </div>
        )}

        {isAnswerChecked && isCorrectOption && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#22C55E' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              className="hidden-mobile"
            >
              Correct
            </span>
            <CheckCircle2 size={22} color="#22C55E" />
          </div>
        )}

        {isAnswerChecked && isSelected && !isCorrectOption && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#EF4444' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              className="hidden-mobile"
            >
              Incorrect
            </span>
            <XCircle size={22} color="#EF4444" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

