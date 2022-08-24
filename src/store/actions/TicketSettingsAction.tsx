import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TiketsSettingsState {
    fromWhere: string;
    toWhere: string;
    when: Date;
    whenBack: Date;
    transplants: Array<Number>;
    company: string;
}

const initialState: TiketsSettingsState = {
    fromWhere: '',
    toWhere: '',
    when: null,
    whenBack: null,
    transplants: new Array(),
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
        fromToChange: (state) => {
            const temp = state.fromWhere
            state.fromWhere = state.toWhere
            state.toWhere = temp
        },
        whenUpdate: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.when = new Date(action.payload);
        },
        whenBackUpdate: (state, action: PayloadAction<Date>) => {
            state.when = action.payload;
        },
        transplantsPush: (state, action: PayloadAction<Number>) => {
            state.transplants.push(action.payload);
        },
        transplantsSplice: (state, action: PayloadAction<Number>) => {
            state.transplants.splice(state.transplants.indexOf(action.payload), 1)
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
    transplantsPush,
    transplantsSplice,
    companyUpdate
} = TiketsSettingsLogic.actions;

export default TiketsSettingsLogic.reducer;