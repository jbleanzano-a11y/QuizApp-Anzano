import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { ResultCard } from '../components/results/ResultCard';
import { PageTransition } from '../components/ui/PageTransition';
import { QuizButton } from '../components/ui/QuizButton';
import { useQuiz } from '../context/QuizContext';

export const Results: React.FC = () => {
  const navigate = useNavigate();
  const { stats, userAnswers, questions, retakeQuiz, resetQuiz } = useQuiz();

  const handleRetake = () => {
    retakeQuiz();
    navigate('/quiz');
  };

  const handleReturnHome = () => {
    resetQuiz();
    navigate('/');
  };

  // Guard: If user visited /results directly without answering questions
  if (userAnswers.length === 0) {
    return (
      <PageTransition>
        <div
          className="container"
          style={{
            paddingTop: '4rem',
            paddingBottom: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '65vh'
          }}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '520px',
              width: '100%',
              padding: '2.5rem',
              borderRadius: '24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem'
            }}
          >
            <div
              style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#A78BFA'
              }}
            >
              <HelpCircle size={28} />
            </div>

            <h2 style={{ fontSize: '1.6rem', color: '#F8FAFC' }}>No Quiz Results Found</h2>
            <p style={{ color: '#A9B4CC', fontSize: '0.95rem', lineHeight: 1.5 }}>
              You haven&apos;t taken the quiz yet! Jump in to test your frontend skills and earn your
              score badge.
            </p>

            <QuizButton
              variant="primary"
              size="lg"
              onClick={handleRetake}
              rightIcon={<ArrowRight size={20} />}
            >
              Start Quiz Now
            </QuizButton>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div
        className="container"
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '4rem',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <ResultCard
          stats={stats}
          userAnswers={userAnswers}
          questions={questions}
          onRetakeQuiz={handleRetake}
          onReturnHome={handleReturnHome}
        />
      </div>
    </PageTransition>
  );
};

