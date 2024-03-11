import { createSelector } from 'reselect';

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

export const getInCompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.completed),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.completed),
);

