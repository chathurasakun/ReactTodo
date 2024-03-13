import { createSelector } from 'reselect';
import { ReduxState } from '../shared-types/redux-state';
import { Todo } from '../shared-types/todo-type';

export const getTodos = (state: ReduxState) => state.todos.data;
export const getTodosLoading = (state: ReduxState) => state.todos.isLoading;

export const getInCompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter((todo: Todo) => !todo.completed),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter((todo: Todo) => todo.completed),
);

