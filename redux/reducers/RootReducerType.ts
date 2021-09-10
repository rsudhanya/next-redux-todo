import reducers from ".";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>