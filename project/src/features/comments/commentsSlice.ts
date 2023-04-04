import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommentsState {
}

const initialState: CommentsState = {

} 

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {}
})

export const { } = commentsSlice.actions
export default commentsSlice.reducer