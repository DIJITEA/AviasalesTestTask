import { configureStore } from "@reduxjs/toolkit";

import TiketsLogic from "./actions/TiketsAmount";
import TiketsStateLogic from "./actions/TiketsAction";
import TicketSettingsAction from "./actions/TicketSettingsAction";
import LogoStateLogic from "./actions/LogoActions";
const store = configureStore({
  reducer: {
    TiketsAmount: TiketsLogic,
    TiketsState: TiketsStateLogic,
    TiketsSettings: TicketSettingsAction,
    LogoState: LogoStateLogic,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
