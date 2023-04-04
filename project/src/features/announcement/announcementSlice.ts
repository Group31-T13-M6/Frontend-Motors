import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface announcementState {
}

const initialState: announcementState = {

} 

const announcementSlice = createSlice({
    name: "announcement",
    initialState,
    reducers: {}
})

export const { } = announcementSlice.actions
export default announcementSlice.reducer