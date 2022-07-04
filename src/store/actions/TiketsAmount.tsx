import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Tikets {
    value: number
}

const initialState: Tikets = {
    value: 6
}

export const TiketsLogic = createSlice({
    name: 'Tikets',
    initialState,
    reducers: {
        TiketsUpdate: (state) => {
            state.value+=5
        }
    }
})
export const { TiketsUpdate } = TiketsLogic.actions

export default TiketsLogic.reducer