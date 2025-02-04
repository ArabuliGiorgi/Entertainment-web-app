import { combineReducers, createStore } from "redux";
import userReducer from "./features/accountSlice";
import errorReducer from "./features/errorsSlice";

const rootReducer = combineReducers({
    userReducer,
    errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
const store = createStore(rootReducer);
export default store;