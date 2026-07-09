import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RevisionContent, RevisionLevel, RevisionSubject } from './models';

export const revisionContentQueryApi = createApi({
  reducerPath: 'revisionContentQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PLACEHOLDER_QUERY_API }),
  endpoints: build => ({
    getRevisionContentByContentId: build.query<RevisionContent, number>({
      query: contentId => `pokemon/${contentId}`
    }),
    getRevisionContentByRevisionTitle: build.query<RevisionContent[], string>({
      query: revisionTitle => `pokemon/${revisionTitle}`
    }),
    getRevisionContentByRevisionOverview: build.query<
      RevisionContent[],
      string
    >({
      query: revisionOverview => `pokemon/${revisionOverview}`
    }),
    getRevisionContentByRevisionSubject: build.query<
      RevisionContent[],
      RevisionSubject
    >({
      query: revisionSubject => `pokemon/${revisionSubject}`
    }),
    getRevisionContentByRevisionLevel: build.query<
      RevisionContent[],
      RevisionLevel
    >({
      query: revisionLevel => `pokemon/${revisionLevel}`
    }),
    getRevisionContentWithSupportAvailable: build.query<
      RevisionContent[],
      boolean
    >({
      query: hasSupportAvailable => `pokemon/${hasSupportAvailable}`
    }),
    addRevisionContent: build.mutation<RevisionContent, RevisionContent>({
      query: message => ({
        url: `pokemon/${message}`,
        method: 'POST',
        body: message
      })
    }),
    updateRevisionContent: build.mutation<RevisionContent, RevisionContent>({
      query: revisionContent => {
        const { contentId, revisionOverview } = revisionContent;
        return {
          url: `pokemon/${contentId}`,
          method: 'PUT',
          body: revisionOverview
        };
      }
    }),
    deleteRevisionContent: build.mutation<RevisionContent, RevisionContent>({
      query: ({ contentId }) => ({
        url: `pokemon/${contentId}`,
        method: 'DELETE',
        body: contentId
      })
    })
  })
});

// Export auto-generated hooks for each query made to each endpoint to the Api
export const {
  useGetRevisionContentByContentIdQuery,
  useGetRevisionContentByRevisionTitleQuery,
  useGetRevisionContentByRevisionOverviewQuery,
  useGetRevisionContentByRevisionSubjectQuery,
  useGetRevisionContentByRevisionLevelQuery,
  useGetRevisionContentWithSupportAvailableQuery
} = revisionContentQueryApi;
