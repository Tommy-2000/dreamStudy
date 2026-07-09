import { notesQueryApi } from '@/api/notesQueryApi';
import { revisionContentQueryApi } from '@/api/revisionContentQueryApi';
import { testQueryApi } from '@/api/testQueryApi';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const appStore = configureStore({
  reducer: {
    [testQueryApi.reducerPath]: testQueryApi.reducer,
    [revisionContentQueryApi.reducerPath]: revisionContentQueryApi.reducer,
    [notesQueryApi.reducerPath]: notesQueryApi.reducer
  }
});

export const homeStore = configureStore({
  reducer: {}
});

export const revisionStore = configureStore({
  reducer: {}
});

export const notesStore = configureStore({
  reducer: {}
});

export const journeyStore = configureStore({
  reducer: {}
});

export const supportStore = configureStore({
  reducer: {}
});

export const userStore = configureStore({
  reducer: {}
});

export type RootState = ReturnType<typeof appStore.getState>;
export type RootDispatch = typeof appStore.dispatch;
export type RootThunk = ThunkAction<void, RootState, unknown, Action>;

export type HomeState = ReturnType<typeof homeStore.getState>;
export type HomeDispatch = typeof homeStore.dispatch;
export type HomeThunk = ThunkAction<void, HomeState, unknown, Action>;

export type RevisionState = ReturnType<typeof revisionStore.getState>;
export type RevisionDispatch = typeof revisionStore.dispatch;
export type RevisionThunk = ThunkAction<void, RevisionState, unknown, Action>;

export type NotesState = ReturnType<typeof notesStore.getState>;
export type NotesDispatch = typeof notesStore.dispatch;
export type NotesThunk = ThunkAction<void, NotesState, unknown, Action>;

export type JourneyState = ReturnType<typeof journeyStore.getState>;
export type JourneyDispatch = typeof journeyStore.dispatch;
export type JourneyThunk = ThunkAction<void, JourneyState, unknown, Action>;

export type SupportState = ReturnType<typeof supportStore.getState>;
export type SupportDispatch = typeof supportStore.dispatch;
export type SupportThunk = ThunkAction<void, SupportState, unknown, Action>;

export type UserState = ReturnType<typeof userStore.getState>;
export type UserDispatch = typeof userStore.dispatch;
export type UserThunk = ThunkAction<void, UserState, unknown, Action>;

// Enable refreshOnMount and refetchOnReconnect behaviour
setupListeners(appStore.dispatch);
setupListeners(homeStore.dispatch);
setupListeners(revisionStore.dispatch);
setupListeners(notesStore.dispatch);
setupListeners(journeyStore.dispatch);
setupListeners(supportStore.dispatch);
setupListeners(userStore.dispatch);
