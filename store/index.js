import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";
// import counterSlice from "./counterSlice";
import toDoWithThunkReducer from "./toDoWithThunkslice";
import reactotron from '../ReactotronConfig'


// const store = configureStore({
//     reducer: {
//         todo: todoReducer,
//         counter: counterSlice
//     },
//     enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat([reactotron.createEnhancer()]),
// })

//thunk
const store = configureStore({
    reducer: {
        todo: toDoWithThunkReducer,
    },
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat([reactotron.createEnhancer()]),
});

export default store;