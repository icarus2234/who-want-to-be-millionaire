import { QUESTIONS_FRAGMENT } from './fragments';

export const GET_QUESTIONS_QUERY = `#graphql
    ${QUESTIONS_FRAGMENT}
    query GetQuestion($id: Int!) {
    getQuestion(id: $id) {
        ...QuestionFragment
    }
    }
`;
