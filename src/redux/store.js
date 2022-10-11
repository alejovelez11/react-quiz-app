const { configureStore } = require("@reduxjs/toolkit");
const { reducer } = require("./reducer");

export const store = configureStore({ reducer: reducer });
