import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { cloneDeep, values } from "lodash";

export const GetTikets = createAsyncThunk('actions/GetTikets', async () => {
    return fetch('https://api.npoint.io/163b5e66df9f2741243e').then((res: Response) => res.json())
})


export interface TiketsState {
    value: [{
        companyId: string,
        id: string,
        info: {
            dateEnd: number
            dateStart: number
            destination: string
            duration: number
            origin: string
            stops: Array<string>
        },
        price: number
    }
    ]
    status: string;
    // fromWhere: string;
    // toWhere: string;
    // transplants: number;
    // company: string;
}

const initialState: TiketsState = {
    value: [{
        companyId: null,
        id: null,
        info: {
            dateEnd: null,
            dateStart: null,
            destination: null,
            duration: null,
            origin: null,
            stops: null,
        },
        price: null
    }
    ],
    status: null
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
        builder.addCase(GetTikets.fulfilled, (state, { payload }) => {
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