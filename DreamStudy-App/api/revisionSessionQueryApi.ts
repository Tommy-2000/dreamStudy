import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RevisionLevel, RevisionSession, RevisionSubject } from './models';

export const revisionSessionQueryApi = createApi({
  reducerPath: 'revisionSessionQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PLACEHOLDER_QUERY_API }),
  endpoints: build => ({
    getRevisionSessionById: build.query<RevisionSession, number>({
      query: sessionId => `pokemon/${sessionId}`
    }),
    getRevisionSessionsByTitle: build.query<RevisionSession[], string>({
      query: sessionTitle => `pokemon/${sessionTitle}`
    }),
    getRevisionSessionsByOverview: build.query<RevisionSession[], string>({
      query: sessionOverview => `pokemon/${sessionOverview}`
    }),
    getRevisionSessionsBySubject: build.query<
      RevisionSession[],
      RevisionSubject
    >({
      query: revisionSubject => `pokemon/${revisionSubject}`
    }),
    getRevisionSessionsByLevel: build.query<RevisionSession[], RevisionLevel>({
      query: revisionLevel => `pokemon/${revisionLevel}`
    })
  })
});

// Export auto-generated hooks for each query made to each endpoint to the Api
export const {
  useGetRevisionSessionByIdQuery,
  useGetRevisionSessionsByTitleQuery,
  useGetRevisionSessionsByOverviewQuery,
  useGetRevisionSessionsBySubjectQuery,
  useGetRevisionSessionsByLevelQuery
} = revisionSessionQueryApi;
