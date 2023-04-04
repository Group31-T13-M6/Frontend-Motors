import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AddressState {
}

const initialState: AddressState = {

} 

const AdressSlice = createSlice({
    name: "Adress",
    initialState,
    reducers: {}
})

export const { } = AdressSlice.actions
export default AdressSlice.reducer