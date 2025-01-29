export enum Routes {
  Home = '/',
  Quiz = '/quiz',
  EndGame = '/end-game',
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

export type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never;

export enum RewordStepStatus {
  Active = 'active',
  Pass = 'pass',
  Upcoming = 'upcoming',
}

export interface RewardStep {
  status: RewordStepStatus;
  reward: number;
  currencySign: string;
}
