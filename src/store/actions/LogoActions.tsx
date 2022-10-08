import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const GetLogoInf = createAsyncThunk('actions/GetLogoInf', async () => {
    return fetch('https://api.npoint.io/a1b1c28b32d9785bb26c').then((res: Response) => res.json())
})

export interface LogoState {
    value: [
        {
            id: string,
            logo: string,
            name: string
        }
    ],
    status: string
}

const initialState: LogoState =
{
    value: [
        {
            id: null,
            logo: null,
            name: null
        }
    ],
    status: null
}
export const LogoStateLogic = createSlice({
    name: "LogoState",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetLogoInf.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(GetLogoInf.fulfilled, (state, { payload }) => {
            state.value = payload
            state.status = 'succes'
        })
        builder.addCase(GetLogoInf.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default LogoStateLogic.reducer;