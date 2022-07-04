import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const GetTikets = createAsyncThunk('actions/GetTikets', async () => {
    return fetch('https://api.npoint.io/163b5e66df9f2741243e').then((res: Response) => res.json())
})


interface TiketsState {
    value: object;
    status: string;
    fromWhere: string;
    toWhere: string;
    transplants: number;
    company: string;
}

const initialState: TiketsState = {
    value: [],
    status: null,
    fromWhere: null,
    toWhere:null,
    transplants:null,
    company: null,
};

export const TiketsStateLogic = createSlice({
    name: "TiketsState",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(GetTikets.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(GetTikets.fulfilled, (state, {payload}) => {
            state.value = payload
            state.status = 'succes'
        })
        builder.addCase(GetTikets.rejected, (state) => {
            state.status = 'failed'
        })
    },
});

// export const { TiketsStateUpdate } = TiketsStateLogic.actions;

export default TiketsStateLogic.reducer;