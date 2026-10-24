import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Flame, LogOut, BrainCircuit } from 'lucide-react';
import { ProgressBar } from './ProgressBar';

export interface QuizHeaderProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  streak: number;
  completedQuestions: number;
  onExit?: () => void;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentQuestionIndex,
  totalQuestions,
  score,
  streak,
  completedQuestions,
  onExit
}) => {
  const navigate = useNavigate();

  const handleExit = () => {
    if (onExit) {
      onExit();
    } else {
      if (window.confirm('Do you really want to leave? Your current quiz session will reset.')) {
        navigate('/');
      }
    }
  };

  const formattedQuestionNumber = String(currentQuestionIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalQuestions).padStart(2, '0');

  return (
    <div
      className="quiz-header-bar"
      style={{
        width: '100%',
        maxWidth: '820px',
        marginBottom: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      {/* Top Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}
      >
        {/* Left: Question counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '12px',
              backgroundColor: '#17223B',
              border: '1px solid #293650',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38BDF8'
            }}
          >
            <BrainCircuit size={20} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#F8FAFC',
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.35rem'
              }}
            >
              <span>Question {formattedQuestionNumber}</span>
              <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>of {formattedTotal}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-sub)', fontSize: '0.775rem', color: '#A9B4CC' }}>
              Frontend Development Fundamentals
            </div>
          </div>
        </div>

        {/* Right: Metrics & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Streak Indicator */}
          {streak > 1 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: '#F59E0B',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.825rem',
                fontWeight: 700
              }}
            >
              <Flame size={15} />
              <span>{streak} Streak!</span>
            </div>
          )}

          {/* Current Score Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '12px',
              backgroundColor: '#17223B',
              border: '1px solid #293650',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem'
            }}
          >
            <Sparkles size={16} color="#A78BFA" />
            <span style={{ color: '#A9B4CC' }}>Score:</span>
            <span style={{ color: '#F8FAFC', fontWeight: 800 }}>{score}</span>
          </div>

          {/* Exit Button */}
          <button
            type="button"
            onClick={handleExit}
            aria-label="Exit quiz session"
            title="Exit Quiz"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.75rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(23, 34, 59, 0.5)',
              border: '1px solid #293650',
              color: '#A9B4CC',
              fontSize: '0.825rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#EF4444';
              e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#A9B4CC';
              e.currentTarget.style.borderColor = '#293650';
              e.currentTarget.style.backgroundColor = 'rgba(23, 34, 59, 0.5)';
            }}
          >
            <LogOut size={15} />
            <span style={{ fontWeight: 600 }}>Exit</span>
          </button>
        </div>
      </div>

      {/* Integrated Smooth Progress Bar */}
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        completedQuestions={completedQuestions}
        showDetails={true}
      />
    </div>
  );
};

