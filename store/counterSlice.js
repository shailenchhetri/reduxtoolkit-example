import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.tasks.push({ id: Date.now(), text: action.payload });
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;