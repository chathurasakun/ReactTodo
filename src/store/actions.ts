import { Todo } from '../shared-types/todo-type';

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = (todo: Todo) => ({
    type: CREATE_TODO,
    payload: { todo },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: { id },
});

export const MARK_COMPLETED = 'MARK_COMPLETED';
export const markCompleted = (todo: Todo) => ({
    type: MARK_COMPLETED,
    payload: { todo },
});

export const LOAD_TODOS_INPROGRESS = 'LOAD_TODOS_INPROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_INPROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos: [Todo]) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});
