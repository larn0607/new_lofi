import { configureStore } from '@reduxjs/toolkit'

import SessionModule from './modules/session'

const store = configureStore({
  reducer: {
    session: SessionModule
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store