import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SkColor } from '@shopify/react-native-skia';
import { Note } from './models';

export const notesQueryApi = createApi({
  reducerPath: 'notesQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.PLACEHOLDER_QUERY_API }),
  endpoints: build => ({
    getNoteById: build.query<Note, number>({
      query: noteId => `pokemon/${noteId}`
    }),
    getNotesByBackgroundColor: build.query<Note[], SkColor>({
      query: noteBackgroundColor => `pokemon/${noteBackgroundColor}`
    }),
    getNotesByCreationDate: build.query<Note[], string>({
      query: noteCreationDate => `pokemon/${noteCreationDate}`
    }),
    addNote: build.mutation<Note, Note>({
      query: note => ({
        url: `pokemon/${note}`,
        method: 'POST',
        body: note
      })
    }),
    updateNote: build.mutation<Note, Note>({
      query: note => {
        const { noteId, noteSnapshot } = note;
        return {
          url: `pokemon/${noteId}`,
          method: 'PUT',
          body: noteSnapshot
        };
      }
    }),
    deleteNote: build.mutation<Note, Note>({
      query: ({ noteId }) => ({
        url: `pokemon/${noteId}`,
        method: 'DELETE',
        body: noteId
      })
    })
  })
});

// Export auto-generated hooks for each query made to each endpoint to the Api
export const {
  useGetNoteByIdQuery,
  useGetNotesByBackgroundColorQuery,
  useGetNotesByCreationDateQuery
} = notesQueryApi;
