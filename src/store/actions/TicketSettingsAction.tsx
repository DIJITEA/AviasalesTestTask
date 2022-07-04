import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TiketsSettingsState {
    fromWhere: string;
    toWhere: string;
    when: Date;
    whenBack: Date;
    transplants: Array<number>;
    company: string;
}

const initialState: TiketsSettingsState = {
    fromWhere: '',
    toWhere: '',
    when: null,
    whenBack: null,
    transplants: null,
    company: null,
};

export const TiketsSettingsLogic = createSlice({
    name: "TiketsSettingsLogic",
    initialState,
    reducers: {
        fromWhereUpdate: (state, action: PayloadAction<string>) => {
            state.fromWhere = action.payload;
        },
        toWhereUpdate: (state, action: PayloadAction<string>) => {
            state.toWhere = action.payload;
        },
        fromToChange: (state)=>{
            const temp = state.fromWhere
            state.fromWhere = state.toWhere
            state.toWhere = temp
        },
        whenUpdate: (state, action: PayloadAction<Date>) => {
            state.when = action.payload;
        },
        whenBackUpdate: (state, action: PayloadAction<Date>) => {
            state.when = action.payload;
        },
        transplantsUpdate: (state, action: PayloadAction<Array<number>>) => {
            state.transplants = action.payload;
        },
        companyUpdate: (state, action: PayloadAction<string>) => {
            state.company = action.payload;
        },
    },
});

export const {
    fromWhereUpdate,
    toWhereUpdate,
    fromToChange,
    whenUpdate,
    whenBackUpdate,
    transplantsUpdate,
    companyUpdate
    } = TiketsSettingsLogic.actions;

export default TiketsSettingsLogic.reducer;