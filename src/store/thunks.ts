import {
    createTodo, 
    loadTodosFailure, 
    loadTodosInProgress, 
    loadTodosSuccess, 
    removeTodo,
    markCompleted
} from './actions';
import { Todo } from '../shared-types/todo-type';
import { TodoResponse } from '../shared-types/todo-response';

export const loadTodos = () => async (dispatch: any) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('https://dummyjson.com/todos');
        const jsonResponse = await response.json() as TodoResponse;
        dispatch(loadTodosSuccess(jsonResponse.todos));
    } catch(e: any) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const createTodoRequest = (text: string) => async (dispatch: any) => {
    try {
        const body = JSON.stringify({
            todo: text,
            completed: false,
            userId: 5,
        });
        const response = await fetch('https://dummyjson.com/todos/add', {
            headers: { 'Content-Type': 'application/json' },
            body,
            method: 'POST',
        });
        const todo = await response.json();
        dispatch(createTodo(todo as Todo));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}

export const deleteTodoRequest = (id: number) => async (dispatch: any) => {
    try {
        const response = await fetch(`https://dummyjson.com/todos/${id}`, { method: 'DELETE'});
        const todo = await response.json() as Todo;
        dispatch(removeTodo(todo.id));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}

export const markTodoCompletedRequest = (id: number) => async (dispatch: any) => {
    try {
        const body = JSON.stringify({
            completed: true,
        });
        const response = await fetch(`https://dummyjson.com/todos/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            body,
            method: 'PUT',
        });
        const todo = await response.json() as Todo;
        dispatch(markCompleted(todo));
    } catch (e: any) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text: string) => () => {
    alert(text);
};