import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Sparkles,
  BookOpen,
  Lightbulb,
  Trophy,
  ArrowRight,
  HelpCircle,
  Zap,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { QuizButton } from '../components/ui/QuizButton';
import { PageTransition } from '../components/ui/PageTransition';
import { useQuiz } from '../context/QuizContext';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { retakeQuiz } = useQuiz();

  const handleStartQuiz = () => {
    retakeQuiz();
    navigate('/quiz');
  };

  const infoBadges = [
    { label: '10 Questions', icon: <HelpCircle size={15} /> },
    { label: 'Multiple Choice', icon: <BookOpen size={15} /> },
    { label: 'Instant Feedback', icon: <Zap size={15} /> },
    { label: 'Final Score', icon: <Trophy size={15} /> }
  ];

  return (
    <PageTransition>
      <div
        className="container"
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '4rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '4.5rem'
        }}
      >
        {/* Split-Screen Hero Section */}
        <section
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            alignItems: 'center',
            gap: '2.5rem',
            minHeight: '72vh'
          }}
        >
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Small Introductory Label */}
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
              <Sparkles size={16} color="#38BDF8" />
              <span>AURORA LEARNING STUDIO • QUIZORA</span>
            </div>

            {/* Large Animated Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.6rem',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.035em'
              }}
            >
              Think Fast. <br />
              <span className="text-gradient-aurora">Learn More.</span> <br />
              Challenge Yourself.
            </h1>

            {/* Short Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.2rem',
                color: '#A9B4CC',
                lineHeight: 1.6,
                maxWidth: '560px'
              }}
            >
              Put your knowledge to the test with an interactive quiz experience designed to make
              learning engaging, rewarding, and fun.
            </p>

            {/* Prominent Start Quiz Button */}
            <div className="hero-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
              <QuizButton
                variant="primary"
                size="lg"
                onClick={handleStartQuiz}
                rightIcon={<ArrowRight size={22} />}
                style={{
                  fontSize: '1.15rem',
                  padding: '1.05rem 2.4rem',
                  boxShadow: '0 8px 30px rgba(139, 92, 246, 0.45)'
                }}
              >
                Start Quiz
              </QuizButton>
            </div>

            {/* Quiz Information Badges */}
            <div
              className="hero-badges-wrapper"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '1.25rem'
              }}
            >
              {infoBadges.map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '12px',
                    backgroundColor: '#17223B',
                    border: '1px solid #293650',
                    fontFamily: 'var(--font-sub)',
                    fontSize: '0.825rem',
                    color: '#E2E8F0',
                    fontWeight: 600
                  }}
                >
                  <span style={{ color: '#38BDF8' }}>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual"
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '420px'
            }}
          >
            {/* Center Glowing Disc */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
                filter: 'blur(35px)',
                pointerEvents: 'none'
              }}
            />

            {/* Main Interactive Floating Mockup Card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'rgba(23, 34, 59, 0.9)',
                borderRadius: '24px',
                border: '1px solid #293650',
                padding: '1.75rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(16px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Mockup Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <BrainCircuit size={16} color="#FFFFFF" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC' }}>
                    Active Challenge
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    color: '#22C55E',
                    border: '1px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  LIVE
                </span>
              </div>

              {/* Mockup Question */}
              <div>
                <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  QUESTION 07 OF 10
                </span>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F8FAFC', marginTop: '0.25rem' }}>
                  What is the primary role of the dependency array in React&apos;s useEffect hook?
                </p>
              </div>

              {/* Mockup Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid #22C55E',
                    fontSize: '0.8rem',
                    color: '#F8FAFC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>B. Controls re-execution upon state change</span>
                  <span style={{ color: '#22C55E', fontWeight: 800 }}>✓</span>
                </div>
                <div
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    backgroundColor: '#111A30',
                    border: '1px solid #293650',
                    fontSize: '0.8rem',
                    color: '#94A3B8'
                  }}
                >
                  A. Lists external CSS libraries
                </div>
              </div>
            </motion.div>

            {/* Floating Satellite 1: Lightbulb Badge */}
            <motion.div
              animate={{ y: [8, -10, 8], rotate: [-2, 4, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '-5%',
                right: '0%',
                backgroundColor: '#17223B',
                borderRadius: '16px',
                border: '1px solid #293650',
                padding: '0.85rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F59E0B'
                }}
              >
                <Lightbulb size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#F8FAFC' }}>Instant Insights</div>
                <div style={{ fontSize: '0.725rem', color: '#A9B4CC' }}>Clear explanations</div>
              </div>
            </motion.div>

            {/* Floating Satellite 2: Trophy Score Badge */}
            <motion.div
              animate={{ y: [-8, 10, -8], rotate: [2, -3, 2] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-5%',
                left: '-5%',
                backgroundColor: '#17223B',
                borderRadius: '16px',
                border: '1px solid #293650',
                padding: '0.85rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
                zIndex: 3
              }}
            >
              <div
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#A78BFA'
                }}
              >
                <Trophy size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.825rem', fontWeight: 700, color: '#F8FAFC' }}>Accuracy Rating</div>
                <div style={{ fontSize: '0.725rem', color: '#38BDF8', fontWeight: 700 }}>100% Top Tier</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Feature Highlights Section */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            borderTop: '1px solid #293650',
            paddingTop: '3.5rem'
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: '20px',
              backgroundColor: '#17223B',
              border: '1px solid #293650',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                color: '#8B5CF6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Code2 size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC' }}>Frontend Fundamentals</h3>
            <p style={{ fontSize: '0.925rem', color: '#A9B4CC', lineHeight: 1.5 }}>
              Curated questions spanning HTML5 semantic architecture, CSS layout models, Modern
              JavaScript closures, and React component mechanics.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: '20px',
              backgroundColor: '#17223B',
              border: '1px solid #293650',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Zap size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC' }}>Instant Deep Feedback</h3>
            <p style={{ fontSize: '0.925rem', color: '#A9B4CC', lineHeight: 1.5 }}>
              Receive immediate feedback on every selection with thorough explanations and code
              context so you learn why each answer is correct.
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              borderRadius: '20px',
              backgroundColor: '#17223B',
              border: '1px solid #293650',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                color: '#22C55E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC' }}>Detailed Performance Review</h3>
            <p style={{ fontSize: '0.925rem', color: '#A9B4CC', lineHeight: 1.5 }}>
              Review your accuracy score, completion time, streak count, and detailed breakdown
              after completing all questions with full retake capability.
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

