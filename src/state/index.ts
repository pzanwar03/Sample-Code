import { configureStore, /*getDefaultMiddleware*/ } from '@reduxjs/toolkit'
// import { save, load } from 'redux-localstorage-simple'

import { updateVersion } from './global/actions'
import user from './user/reducer'
import modal from './modal/reducer'
import hash from './transaction/reducer'

// const PERSISTED_KEYS: string[] = []

const store = configureStore({
  reducer: {
    user,
    modal,
    hash,
  },
  // middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS })],
  // preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch