import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testQueryApi = createApi({
  reducerPath: 'testQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PLACEHOLDER_QUERY_API }),
  endpoints: build => ({
    getPokemonById: build.query<string, number>({
      query: pokemonId => `pokemon/${pokemonId}`
    }),
    getAllPokemonByType: build.infiniteQuery<string[], string, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        maxPages: 10,
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
          lastPageParam + 1
      },
      query({ queryArg, pageParam }) {
        return `/type/${queryArg}?page=${pageParam}`;
      }
    })
  })
});

// Export auto-generated hooks for each query made to each endpoint to the Api
export const { useGetPokemonByIdQuery } = testQueryApi;
