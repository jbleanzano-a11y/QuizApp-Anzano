import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, House } from 'lucide-react';
import { PageTransition } from '../components/ui/PageTransition';
import { QuizButton } from '../components/ui/QuizButton';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div
        className="container"
        style={{
          paddingTop: '5rem',
          paddingBottom: '5rem',
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
            padding: '3rem 2rem',
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
              width: '4rem',
              height: '4rem',
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38BDF8'
            }}
          >
            <Compass size={32} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem',
              fontWeight: 800,
              lineHeight: 1,
              background: 'linear-gradient(135deg, #8B5CF6 0%, #38BDF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            404
          </span>

          <h2 style={{ fontSize: '1.5rem', color: '#F8FAFC' }}>Page Not Found</h2>

          <p style={{ color: '#A9B4CC', fontSize: '0.95rem', maxWidth: '380px', lineHeight: 1.5 }}>
            The page you are looking for doesn&apos;t exist or has moved. Return to QUIZORA home to
            continue your learning journey.
          </p>

          <QuizButton
            variant="primary"
            size="md"
            onClick={() => navigate('/')}
            leftIcon={<House size={18} />}
          >
            Return to Home
          </QuizButton>
        </div>
      </div>
    </PageTransition>
  );
};

