import React, { createContext, useContext, useState, useMemo, useEffect, useCallback } from 'react';
import { questions } from '../data/questions';
import type { Question, UserAnswer, QuizStats, QuizContextType } from '../types/quiz';
import { calculateQuizStats } from '../utils/scoring';

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  // Initialize start time on first question interaction
  useEffect(() => {
    if (!startTime && currentQuestionIndex === 0) {
      setStartTime(Date.now());
    }
  }, [startTime, currentQuestionIndex]);

  const currentQuestion: Question = useMemo(() => {
    return questions[currentQuestionIndex] || questions[0];
  }, [currentQuestionIndex]);

  // Select an option (only allowed before checking answer)
  const selectOption = useCallback((index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
  }, [isAnswerChecked]);

  // Check the currently selected answer
  const checkAnswer = useCallback(() => {
    if (selectedOption === null || isAnswerChecked) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswerChecked(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => {
        const nextStreak = prev + 1;
        setHighestStreak((h) => Math.max(h, nextStreak));
        return nextStreak;
      });
    } else {
      setStreak(0);
    }

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOption,
      isCorrect
    };

    setUserAnswers((prev) => [...prev, newAnswer]);
  }, [selectedOption, isAnswerChecked, currentQuestion]);

  // Move to next question or complete quiz
  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      // Completed last question
      setIsCompleted(true);
      setEndTime(Date.now());
    }
  }, [currentQuestionIndex]);

  // Retake quiz completely: resets all values, clears answers and scores
  const retakeQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
    setStreak(0);
    setHighestStreak(0);
    setStartTime(Date.now());
    setEndTime(null);
  }, []);

  // Complete reset to uninitialized state
  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setScore(0);
    setUserAnswers([]);
    setIsCompleted(false);
    setStreak(0);
    setHighestStreak(0);
    setStartTime(null);
    setEndTime(null);
  }, []);

  // Computed summary stats
  const stats: QuizStats = useMemo(() => {
    return calculateQuizStats(userAnswers, questions.length, startTime, endTime);
  }, [userAnswers, startTime, endTime]);

  const value: QuizContextType = {
    questions,
    currentQuestionIndex,
    currentQuestion,
    selectedOption,
    isAnswerChecked,
    score,
    userAnswers,
    isCompleted,
    streak,
    highestStreak,
    stats,
    selectOption,
    checkAnswer,
    nextQuestion,
    retakeQuiz,
    resetQuiz
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
