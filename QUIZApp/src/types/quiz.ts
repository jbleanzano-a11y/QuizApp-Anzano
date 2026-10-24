export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index: 0 = A, 1 = B, 2 = C, 3 = D
  category: string;
  explanation: string;
  codeSnippet?: string;
}

export interface UserAnswer {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export interface QuizStats {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  finalScore: number;
  percentage: number;
  performanceGrade: string;
  performanceMessage: string;
  timeSpentFormatted: string;
  highestStreak: number;
}

export interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  currentQuestion: Question;
  selectedOption: number | null;
  isAnswerChecked: boolean;
  score: number;
  userAnswers: UserAnswer[];
  isCompleted: boolean;
  streak: number;
  highestStreak: number;
  stats: QuizStats;
  selectOption: (index: number) => void;
  checkAnswer: () => void;
  nextQuestion: () => void;
  retakeQuiz: () => void;
  resetQuiz: () => void;
}

