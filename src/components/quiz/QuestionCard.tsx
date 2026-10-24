import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Code2, Tag } from 'lucide-react';
import type { Question } from '../../types/quiz';
import { AnswerOption } from './AnswerOption';
import { FeedbackMessage } from './FeedbackMessage';
import { QuizButton } from '../ui/QuizButton';

export interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  isAnswerChecked: boolean;
  onSelectOption: (index: number) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
}

const letterLabels = ['A', 'B', 'C', 'D'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isAnswerChecked,
  onSelectOption,
  onCheckAnswer,
  onNextQuestion
}) => {
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isSelectedCorrect = selectedOption === question.correctAnswer;

  // Keyboard shortcut listener for fast, accessible interaction
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Avoid firing if focused on an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();

      // Number keys 1, 2, 3, 4
      if (['1', '2', '3', '4'].includes(e.key) && !isAnswerChecked) {
        onSelectOption(parseInt(e.key, 10) - 1);
      }
      // Letter keys A, B, C, D
      else if (['A', 'B', 'C', 'D'].includes(key) && !isAnswerChecked) {
        const idx = letterLabels.indexOf(key);
        if (idx !== -1) onSelectOption(idx);
      }
      // Enter key: either check answer or proceed
      else if (e.key === 'Enter') {
        if (!isAnswerChecked && selectedOption !== null) {
          e.preventDefault();
          onCheckAnswer();
        } else if (isAnswerChecked) {
          e.preventDefault();
          onNextQuestion();
        }
      }
    },
    [isAnswerChecked, selectedOption, onSelectOption, onCheckAnswer, onNextQuestion]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel quiz-card-padding"
      style={{
        width: '100%',
        maxWidth: '820px',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
        position: 'relative',
        border: '1px solid #293650',
        backgroundColor: 'rgba(23, 34, 59, 0.82)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px'
      }}
    >
      {/* Category & Badge Meta Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.8rem',
            borderRadius: '9999px',
            background: 'rgba(139, 92, 246, 0.14)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            color: '#A78BFA',
            fontSize: '0.825rem',
            fontFamily: 'var(--font-sub)',
            fontWeight: 600
          }}
        >
          <Tag size={14} />
          <span>{question.category}</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-sub)',
            fontSize: '0.825rem',
            color: '#64748B',
            fontWeight: 500
          }}
        >
          Shortcuts: [1-4] or [A-D] • [Enter]
        </div>
      </div>

      {/* Main Question Text */}
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#F8FAFC',
            lineHeight: 1.45,
            letterSpacing: '-0.015em'
          }}
        >
          {question.question}
        </h2>
      </div>

      {/* Code Snippet Box (if available for high-tech frontend feel) */}
      {question.codeSnippet && (
        <div
          style={{
            backgroundColor: '#0B1120',
            borderRadius: '14px',
            border: '1px solid #293650',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(23, 34, 59, 0.6)',
              borderBottom: '1px solid #1E2D4E',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#38BDF8'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Code2 size={14} />
              <span>code_preview.tsx</span>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
            </div>
          </div>
          <pre
            style={{
              padding: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: '#E2E8F0',
              overflowX: 'auto',
              lineHeight: 1.55,
              margin: 0
            }}
          >
            <code>{question.codeSnippet}</code>
          </pre>
        </div>
      )}

      {/* Answer Options Grid */}
      <div
        className="options-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.85rem',
          width: '100%'
        }}
      >
        {question.options.map((optionText, idx) => (
          <AnswerOption
            key={idx}
            index={idx}
            label={letterLabels[idx]}
            text={optionText}
            isSelected={selectedOption === idx}
            isAnswerChecked={isAnswerChecked}
            isCorrectOption={idx === question.correctAnswer}
            onSelect={onSelectOption}
            disabled={isAnswerChecked}
          />
        ))}
      </div>

      {/* Immediate Feedback Container */}
      <AnimatePresence>
        {isAnswerChecked && (
          <FeedbackMessage
            isCorrect={isSelectedCorrect}
            correctOptionLetter={letterLabels[question.correctAnswer]}
            correctOptionText={question.options[question.correctAnswer]}
            explanation={question.explanation}
          />
        )}
      </AnimatePresence>

      {/* Action Footer Button */}
      <div
        className="action-bar-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '0.5rem',
          paddingTop: '1.25rem',
          borderTop: '1px solid #1E2D4E'
        }}
      >
        <div style={{ fontFamily: 'var(--font-sub)', fontSize: '0.85rem', color: '#A9B4CC' }}>
          {!isAnswerChecked ? (
            selectedOption === null ? (
              <span>Select an answer above to continue</span>
            ) : (
              <span style={{ color: '#A78BFA' }}>Selected Option {letterLabels[selectedOption]}</span>
            )
          ) : (
            <span style={{ color: isSelectedCorrect ? '#22C55E' : '#EF4444' }}>
              {isSelectedCorrect ? '+1 Point added' : '0 Points added'}
            </span>
          )}
        </div>

        <div>
          {!isAnswerChecked ? (
            <QuizButton
              variant="primary"
              size="md"
              disabled={selectedOption === null}
              onClick={onCheckAnswer}
              rightIcon={<CheckCircle size={18} />}
            >
              Check Answer
            </QuizButton>
          ) : (
            <QuizButton
              variant="secondary"
              size="md"
              onClick={onNextQuestion}
              rightIcon={<ArrowRight size={18} />}
            >
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </QuizButton>
          )}
        </div>
      </div>
    </motion.div>
  );
};
