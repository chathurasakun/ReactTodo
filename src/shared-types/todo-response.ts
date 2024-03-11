import { Todo } from './todo-type';

export type TodoResponse = {
    todos: [Todo];
    total: number;
    skip: number;
    limit: number;
}