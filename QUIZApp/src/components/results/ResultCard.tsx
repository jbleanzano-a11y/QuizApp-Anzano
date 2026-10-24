import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCcw,
  House,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Trophy,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  Timer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { QuizStats, UserAnswer, Question } from '../../types/quiz';
import { ScoreCircle } from './ScoreCircle';
import { StatCard } from './StatCard';
import { QuizButton } from '../ui/QuizButton';

export interface ResultCardProps {
  stats: QuizStats;
  userAnswers: UserAnswer[];
  questions: Question[];
  onRetakeQuiz: () => void;
  onReturnHome: () => void;
}

const letterLabels = ['A', 'B', 'C', 'D'];

export const ResultCard: React.FC<ResultCardProps> = ({
  stats,
  userAnswers,
  questions,
  onRetakeQuiz,
  onReturnHome
}) => {
  const [showReview, setShowReview] = useState<boolean>(false);

  // Trigger celebration confetti if score is high (>= 70%)
  useEffect(() => {
    if (stats.percentage >= 70) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#8B5CF6', '#38BDF8', '#22C55E', '#A78BFA'],
          disableForReducedMotion: true
        });
      } catch {
        // graceful fallback if canvas-confetti is unsupported
      }
    }
  }, [stats.percentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel"
      style={{
        width: '100%',
        maxWidth: '860px',
        padding: '2.5rem',
        borderRadius: '28px',
        border: '1px solid #293650',
        backgroundColor: 'rgba(23, 34, 59, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}
    >
      {/* Top Header Block */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(139, 92, 246, 0.14)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            color: '#A78BFA',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}
        >
          <Trophy size={16} />
          <span>QUIZ COMPLETED</span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#F8FAFC',
            letterSpacing: '-0.025em',
            marginTop: '0.25rem'
          }}
        >
          Here&apos;s How You Performed
        </h1>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: '#A9B4CC', maxWidth: '560px' }}>
          {stats.performanceMessage}
        </p>
      </div>

      {/* Main Score Gauge & Performance Badge */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.5rem',
          borderRadius: '22px',
          backgroundColor: 'rgba(17, 26, 48, 0.6)',
          border: '1px solid #1E2D4E'
        }}
      >
        <ScoreCircle
          percentage={stats.percentage}
          score={stats.finalScore}
          total={stats.totalQuestions}
          size={190}
          strokeWidth={13}
        />

        {/* Performance Grade Pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            backgroundColor:
              stats.percentage >= 90
                ? 'rgba(34, 197, 94, 0.16)'
                : stats.percentage >= 70
                ? 'rgba(56, 189, 248, 0.16)'
                : stats.percentage >= 50
                ? 'rgba(245, 158, 11, 0.16)'
                : 'rgba(239, 68, 68, 0.16)',
            border: `1.5px solid ${
              stats.percentage >= 90
                ? 'rgba(34, 197, 94, 0.4)'
                : stats.percentage >= 70
                ? 'rgba(56, 189, 248, 0.4)'
                : stats.percentage >= 50
                ? 'rgba(245, 158, 11, 0.4)'
                : 'rgba(239, 68, 68, 0.4)'
            }`,
            color:
              stats.percentage >= 90
                ? '#22C55E'
                : stats.percentage >= 70
                ? '#38BDF8'
                : stats.percentage >= 50
                ? '#F59E0B'
                : '#EF4444',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.01em'
          }}
        >
          <Sparkles size={18} />
          <span>{stats.performanceGrade}</span>
        </div>
      </div>

      {/* Mandatory 3 Statistics Cards + Bonus Metrics */}
      <div
        className="results-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          width: '100%'
        }}
      >
        {/* 1. Total Questions */}
        <StatCard
          label="Total Questions"
          value={stats.totalQuestions}
          icon={<HelpCircle size={18} />}
          accentColor="#38BDF8"
          subtext="Standard Curriculum"
          delay={0.1}
        />

        {/* 2. Correct Answers */}
        <StatCard
          label="Correct Answers"
          value={stats.correctAnswers}
          icon={<CheckCircle2 size={18} />}
          accentColor="#22C55E"
          subtext={`Earned ${stats.finalScore} Points`}
          delay={0.15}
        />

        {/* 3. Incorrect Answers */}
        <StatCard
          label="Incorrect Answers"
          value={stats.incorrectAnswers}
          icon={<XCircle size={18} />}
          accentColor="#EF4444"
          subtext="Areas for Improvement"
          delay={0.2}
        />

        {/* Bonus Time Spent */}
        <StatCard
          label="Time Spent"
          value={stats.timeSpentFormatted}
          icon={<Timer size={18} />}
          accentColor="#A78BFA"
          subtext="Total duration"
          delay={0.25}
        />
      </div>

      {/* Toggle Detailed Answers Review */}
      <div style={{ width: '100%' }}>
        <button
          type="button"
          onClick={() => setShowReview(!showReview)}
          style={{
            width: '100%',
            padding: '0.85rem 1.25rem',
            backgroundColor: '#111A30',
            border: '1px solid #293650',
            borderRadius: '16px',
            color: '#F8FAFC',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.95rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#8B5CF6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#293650';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <BookOpen size={18} color="#38BDF8" />
            <span>Review All Questions & Explanations ({questions.length})</span>
          </div>
          {showReview ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        <AnimatePresence>
          {showReview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem'
              }}
            >
              {questions.map((q, idx) => {
                const userAns = userAnswers.find((a) => a.questionId === q.id);
                const isCorrect = userAns ? userAns.isCorrect : false;
                const userSelectedIdx = userAns ? userAns.selectedOption : -1;

                return (
                  <div
                    key={q.id}
                    style={{
                      padding: '1.25rem',
                      borderRadius: '16px',
                      backgroundColor: '#111A30',
                      border: `1px solid ${isCorrect ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          color: '#A78BFA'
                        }}
                      >
                        Question {idx + 1} • {q.category}
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: isCorrect ? '#22C55E' : '#EF4444'
                        }}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 size={16} />
                            <span>Correct (+1)</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} />
                            <span>Incorrect (0)</span>
                          </>
                        )}
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1rem', color: '#F8FAFC', fontWeight: 600 }}>{q.question}</h4>

                    {/* Answers Summary */}
                    <div
                      style={{
                        fontSize: '0.875rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(8, 13, 28, 0.5)',
                        borderRadius: '10px'
                      }}
                    >
                      <div style={{ color: isCorrect ? '#22C55E' : '#EF4444' }}>
                        <strong>Your answer:</strong>{' '}
                        {userSelectedIdx >= 0
                          ? `(${letterLabels[userSelectedIdx]}) ${q.options[userSelectedIdx]}`
                          : 'Not answered'}
                      </div>
                      {!isCorrect && (
                        <div style={{ color: '#22C55E' }}>
                          <strong>Correct answer:</strong> ({letterLabels[q.correctAnswer]}){' '}
                          {q.options[q.correctAnswer]}
                        </div>
                      )}
                      <div style={{ color: '#A9B4CC', marginTop: '0.25rem', lineHeight: 1.5 }}>
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mandatory Action Buttons: Retake Quiz & Return Home */}
      <div
        className="action-bar-mobile"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid #293650'
        }}
      >
        {/* Retake Quiz Button */}
        <QuizButton
          variant="primary"
          size="lg"
          onClick={onRetakeQuiz}
          leftIcon={<RotateCcw size={20} />}
        >
          Retake Quiz
        </QuizButton>

        {/* Return Home Button */}
        <QuizButton
          variant="outline"
          size="lg"
          onClick={onReturnHome}
          leftIcon={<House size={20} />}
        >
          Return Home
        </QuizButton>
      </div>
    </motion.div>
  );
};
