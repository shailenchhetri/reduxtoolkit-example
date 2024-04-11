// todoSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { createApi } from "@reduxjs/toolkit/query";

// Simulated asynchronous function to add a todo
const addTodoAsync = createAsyncThunk(
    'todo/addTodoAsync',
    async (text) => {
        // Simulate an asynchronous operation, e.g., making an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { id: Date.now(), text };
    }
);

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
    },
    // createSlice also accepts an extraReducers option, where we can have the same slice reducer listen for other action types.
    extraReducers: (builder) => {
        builder
            .addCase(addTodoAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.tasks.push(action.payload);
            })
            .addCase(addTodoAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    }
});

export const { deleteTodo } = todoSlice.actions;

export { addTodoAsync }; // Exporting async thunk

export default todoSlice.reducer;


// ///
// // // Thunk function
// export const simpleAsyncThunk = (text) => {
//     return async (dispatch, getState) => {
//         try {
//             // dispatch(loadingState("loading"));
//             const todoState = getState().todo;
//             await new Promise(resolve => setTimeout(resolve, 1000));
//             dispatch(addTodo(text))
//             //  dispatch(loadingState('idle'));
//         } catch (err) {
//             // dispatch(loadingState("error",{message: "Error loading data"}));

//         }

//     }
// }