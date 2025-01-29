import { GAME_CONFIG_FRAGMENT } from './fragments';

export const GET_GAME_CONFIG_QUERY = `#graphql
    ${GAME_CONFIG_FRAGMENT}
    query GetGameConfig {
    getGameConfig {
        ...GameConfigFragment
    }
    }
`;
