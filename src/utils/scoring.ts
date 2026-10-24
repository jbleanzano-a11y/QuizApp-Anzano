import type { QuizStats, UserAnswer } from '../types/quiz';

/**
 * Calculates quiz statistics based on submitted answers.
 */
export function calculateQuizStats(
  userAnswers: UserAnswer[],
  totalQuestions: number,
  startTime: number | null = null,
  endTime: number | null = null
): QuizStats {
  const correctAnswers = userAnswers.filter((a) => a.isCorrect).length;
  const incorrectAnswers = totalQuestions - correctAnswers;
  const finalScore = correctAnswers;
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  let performanceGrade = '';
  let performanceMessage = '';

  if (percentage >= 90) {
    performanceGrade = 'Outstanding Performance';
    performanceMessage = 'Exceptional mastery! You demonstrated top-tier knowledge across modern frontend technologies and React paradigms.';
  } else if (percentage >= 70) {
    performanceGrade = 'Great Job';
    performanceMessage = 'Solid understanding of core concepts with high proficiency. Review missed questions to reach 100% mastery.';
  } else if (percentage >= 50) {
    performanceGrade = 'Good Effort';
    performanceMessage = 'You have a good foundational grasp. Revisiting React hooks and state lifecycle nuances will help sharpen your skills.';
  } else {
    performanceGrade = 'Keep Practicing';
    performanceMessage = 'Every attempt is an opportunity to learn. Study the detailed question explanations below and take the quiz again!';
  }

  // Calculate elapsed time
  let timeSpentFormatted = '00:00';
  if (startTime) {
    const finish = endTime || Date.now();
    const totalSeconds = Math.max(0, Math.floor((finish - startTime) / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timeSpentFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  // Calculate highest consecutive streak from userAnswers
  let currentStreak = 0;
  let highestStreak = 0;
  for (const answer of userAnswers) {
    if (answer.isCorrect) {
      currentStreak++;
      if (currentStreak > highestStreak) {
        highestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    finalScore,
    percentage,
    performanceGrade,
    performanceMessage,
    timeSpentFormatted,
    highestStreak
  };
}
