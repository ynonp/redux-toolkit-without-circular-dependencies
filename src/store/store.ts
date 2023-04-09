import {
  AsyncThunkPayloadCreator,
  AsyncThunkOptions,
  AsyncThunk,
  configureStore,
  combineReducers
} from "@reduxjs/toolkit";
import * as rtk from "@reduxjs/toolkit";

import todos from "./todos";

const rootReducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export function createAsyncThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArg,
    { state: AppState }
  >,
  options?: AsyncThunkOptions<ThunkArg, { state: AppState }>
): AsyncThunk<Returned, ThunkArg, { state: AppState }> {
  return rtk.createAsyncThunk(typePrefix, payloadCreator, options);
}

export default store;
