export enum Routes {
  Home = '/',
  Quiz = '/game',
  End = '/end',
}

export type Question = {
  id: number;
  questionTitle: string;
  answers: string[];
  correctAnswers: number[];
  reward: number;
};

export type GameConfig = {
  currency: string;
  questions: Question[];
};
