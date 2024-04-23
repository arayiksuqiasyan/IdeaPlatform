import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/root.reducer.ts'

export const store = configureStore({
    reducer: {
        root: rootReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
