export const schema = `
type Question {
  id: Int!
  questionTitle: String!
  answers: [String!]!
  correctAnswers: [Int!]!
  reward: Int!
}

type GameConfig {
  currency: String!
  questions: [Question!]!
}

type Query {
  getGameConfig: GameConfig
  getQuestion(id: Int!): Question
}

schema {
  query: Query
}`;
