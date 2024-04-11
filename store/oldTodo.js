// Action Types
export const ADD_TODO = 'todo/ADD_TODO';
export const DELETE_TODO = 'todo/DELETE_TODO';

//Action
// Action Creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

export const deleteTodo = (taskId) => ({
    type: DELETE_TODO,
    payload: taskId
});

// Reducer
const initialState = {
    tasks: [{ a: [a] }],
};


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { id: Date.now(), text: action.payload }
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state;
    }
};

// // const initialState = {
//   count: 0
// };
// function counterReducer(state = initialState, action) {
//   switch(action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }


export default todoReducer;