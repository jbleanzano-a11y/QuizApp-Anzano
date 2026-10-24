import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { QuizProvider } from './context/QuizContext';
import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { NotFound } from './pages/NotFound';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <QuizProvider>
      <BrowserRouter>
        {/* Ambient Moving Aurora Mesh Background */}
        <AnimatedBackground />

        {/* Global Application Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <AnimatedRoutes />
        </main>

        {/* Elegant Footer */}
        <footer
          style={{
            borderTop: '1px solid #1E2D4E',
            backgroundColor: 'rgba(8, 13, 28, 0.7)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 0',
            marginTop: 'auto'
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontFamily: 'var(--font-sub)',
              fontSize: '0.825rem',
              color: '#64748B'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#F8FAFC', fontWeight: 700, letterSpacing: '-0.02em' }}>QUIZORA</span>
              <span>•</span>
              <span>Aurora Learning Studio</span>
            </div>

            <div>
              <span>Frontend Development Fundamentals Quiz Experience</span>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </QuizProvider>
  );
};

export default App;
