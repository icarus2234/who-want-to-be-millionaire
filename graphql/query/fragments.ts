export const QUESTIONS_FRAGMENT = `
fragment QuestionFragment on Question {
  id
  questionTitle
  answers
  correctAnswers
  reward
}`;

export const GAME_CONFIG_FRAGMENT = `
fragment GameConfigFragment on GameConfig {
  currency
  questions {
    ...QuestionFragment
  }
}`;
