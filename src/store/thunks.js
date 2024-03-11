import {
    createTodo, 
    loadTodosFailure, 
    loadTodosInProgress, 
    loadTodosSuccess, 
    removeTodo,
    markCompleted
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('https://dummyjson.com/todos');
        const jsonResponse = await response.json();
        dispatch(loadTodosSuccess(jsonResponse.todos));
    } catch(e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const createTodoRequest = (text) => async dispatch => {
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
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const deleteTodoRequest = (id) => async dispatch => {
    try {
        const response = await fetch(`https://dummyjson.com/todos/${id}`, { method: 'DELETE'});
        const todo = await response.json();
        dispatch(removeTodo(todo.id));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const markTodoCompletedRequest = (id) => async dispatch => {
    try {
        const body = JSON.stringify({
            completed: true,
        });
        const response = await fetch(`https://dummyjson.com/todos/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            body,
            method: 'PUT',
        });
        const todo = await response.json();
        dispatch(markCompleted(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
    alert(text);
};