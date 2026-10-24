import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizHeader } from '../components/quiz/QuizHeader';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { PageTransition } from '../components/ui/PageTransition';
import { useQuiz } from '../context/QuizContext';

export const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    currentQuestion,
    selectedOption,
    isAnswerChecked,
    score,
    streak,
    userAnswers,
    isCompleted,
    selectOption,
    checkAnswer,
    nextQuestion,
    resetQuiz
  } = useQuiz();

  // If quiz is completed, navigate immediately to /results
  useEffect(() => {
    if (isCompleted) {
      navigate('/results');
    }
  }, [isCompleted, navigate]);

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit the quiz? All current answers will be discarded.')) {
      resetQuiz();
      navigate('/');
    }
  };

  return (
    <PageTransition>
      <div
        className="container"
        style={{
          paddingTop: '2rem',
          paddingBottom: '3.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Quiz Header with Question counter, Score, Streak, & Progress */}
        <QuizHeader
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          score={score}
          streak={streak}
          completedQuestions={userAnswers.length}
          onExit={handleExit}
        />

        {/* Centered Interactive Question Card */}
        <QuestionCard
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          isAnswerChecked={isAnswerChecked}
          onSelectOption={selectOption}
          onCheckAnswer={checkAnswer}
          onNextQuestion={nextQuestion}
        />
      </div>
    </PageTransition>
  );
};

