// import { createContext, useReducer } from 'react';

// export const TodoContext = createContext({});

// const initialState = {
//     todos: []
// };

// const todoReducer = (state, action) => {
//     switch (action.type) {
//         case "Add_New_Todo":
//             return {...state, todos: [...state.todos, action.value]};
//         case "Remove_Todo":
//             const todoList = state.todos.filter((todo) => todo.id !== action.value.id)
//             return {...state, todos: todoList};
//         case "Completed":
//             const index = state.todos.findIndex(todo => { return todo.id === action.value.id });
//             const newTodoList = state.todos.slice();
//             newTodoList[index].completed = true;
//             return {...state, todos: newTodoList};
//     };
// };

// const TodoProvider = ({ children }) => {
//     const [contextState, dispatch] = useReducer(todoReducer, initialState);
//     return(
//         <TodoContext.Provider value={[contextState, dispatch]}>
//             {children}
//         </TodoContext.Provider>
//     )
// };

// export default TodoProvider;
