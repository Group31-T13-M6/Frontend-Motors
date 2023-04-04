import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import addressReducer from '../features/address/addressSlice'
import announcementReducer from '../features/announcement/announcementSlice'
import commentsReducer from '../features/comments/commentsSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        address: addressReducer,
        announcement: announcementReducer,
        comments: commentsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>