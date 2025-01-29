import { ExtractVariables, GameConfig } from '@/helpers/types';
import { GET_GAME_CONFIG_QUERY } from './query/get-game-config';

export async function graphqlFetch<T>({
  query,
  variables,
  headers,
  cache,
}: {
  query: string;
  variables?: ExtractVariables<T>;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T }> {
  try {
    const result = await fetch(`${process.env.API_URL}/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      next: !cache ? { revalidate: 900 } : undefined, // 15 min
    });

    if (!result.ok) {
      throw {
        status: result.status,
        message: result.statusText,
      };
    }

    const body = await result.json();

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}

export async function getGameConfig() {
  const { body } = await graphqlFetch<{ gameConfig: GameConfig }>({
    query: GET_GAME_CONFIG_QUERY,
    // variables
    // cache: 'no-cache',
  });
  return body;
}
