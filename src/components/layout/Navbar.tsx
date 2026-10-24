import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BrainCircuit, Sparkles, LogOut, RotateCcw } from 'lucide-react';
import { useQuiz } from '../../context/QuizContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentQuestionIndex, questions, score, resetQuiz, retakeQuiz } = useQuiz();

  const isQuizPage = location.pathname === '/quiz';
  const isResultsPage = location.pathname === '/results';

  const handleExitQuiz = () => {
    if (window.confirm('Are you sure you want to exit the quiz? Your current progress will be lost.')) {
      resetQuiz();
      navigate('/');
    }
  };

  const handleRestart = () => {
    if (window.confirm('Restart quiz from the beginning?')) {
      retakeQuiz();
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        backgroundColor: 'rgba(8, 13, 28, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #293650',
        transition: 'all 0.25s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.25rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit'
          }}
          aria-label="QUIZORA Home"
        >
          <div
            style={{
              position: 'relative',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
            }}
          >
            <BrainCircuit size={22} color="#FFFFFF" strokeWidth={2.2} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #F8FAFC 30%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                QUIZORA
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.4rem',
                  borderRadius: '4px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38BDF8',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                STUDIO
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.7rem',
                color: '#A9B4CC',
                letterSpacing: '0.02em'
              }}
            >
              Aurora Learning Experience
            </span>
          </div>
        </Link>

        {/* Dynamic Center / Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {isQuizPage && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Question pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  background: '#17223B',
                  borderRadius: '9999px',
                  border: '1px solid #293650',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-sub)',
                  color: '#F8FAFC'
                }}
              >
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>Q{currentQuestionIndex + 1}</span>
                <span style={{ color: '#64748B' }}>/</span>
                <span style={{ color: '#A9B4CC' }}>{questions.length}</span>
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#64748B',
                    marginLeft: '0.2rem',
                    marginRight: '0.2rem'
                  }}
                />
                <span style={{ color: '#A78BFA', fontWeight: 600 }}>Score: {score}</span>
              </div>

              {/* Quick restart */}
              <button
                type="button"
                onClick={handleRestart}
                title="Restart quiz"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'transparent',
                  border: '1px solid #293650',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '10px',
                  color: '#A9B4CC',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F8FAFC';
                  e.currentTarget.style.borderColor = '#8B5CF6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#A9B4CC';
                  e.currentTarget.style.borderColor = '#293650';
                }}
              >
                <RotateCcw size={15} />
                <span className="hidden-mobile">Restart</span>
              </button>

              {/* Exit Quiz Button */}
              <button
                type="button"
                onClick={handleExitQuiz}
                title="Exit Quiz"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '10px',
                  color: '#EF4444',
                  cursor: 'pointer',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                }}
              >
                <LogOut size={15} />
                <span>Exit</span>
              </button>
            </div>
          )}

          {!isQuizPage && !isResultsPage && (
            <Link
              to="/quiz"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(56, 189, 248, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: '#F8FAFC',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.borderColor = '#8B5CF6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
              }}
            >
              <Sparkles size={16} color="#38BDF8" />
              <span>Launch Quiz</span>
            </Link>
          )}

          {isResultsPage && (
            <Link
              to="/quiz"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                color: '#F8FAFC',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <RotateCcw size={15} />
              <span>Retake Quiz</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

