import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Tikets {
    value: number
    maxValue: number
    valueStatus: string
}

const initialState: Tikets = {
    value: 6,
    maxValue: undefined,
    valueStatus: 'notFull'
}

export const TiketsLogic = createSlice({
    name: 'Tikets',
    initialState,
    reducers: {
        TiketsUpdate: (state) => {
            if ((state.value + 5) < state.maxValue) {
                state.value += 5
                state.valueStatus = 'notFull'
            } else {
                state.value = state.maxValue
                state.valueStatus = 'full'
            }
        },
        TiketsMaxValueUpdate: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload
            if (state.value >= state.maxValue) {
                state.value = state.maxValue
                state.valueStatus = 'full'
            } else if (state.value < state.maxValue && state.value < 6){
                if(state.maxValue < 6){
                    state.value = state.maxValue
                    state.valueStatus = 'full'
                }
                else{
                    state.value = 6
                    state.valueStatus = 'notFull'
                }
            }
        },
        TiketsErrorUpdate: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    }
})
export const { TiketsUpdate, TiketsMaxValueUpdate, TiketsErrorUpdate } = TiketsLogic.actions

export default TiketsLogic.reducer