import { 
    CREATE_TODO, 
    REMOVE_TODO, 
    MARK_COMPLETED,
    LOAD_TODOS_INPROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE, 
} from './actions'
import { Todo } from '../shared-types/todo-type';

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return { ...state, data: state.data.concat(todo) };
        }
        case REMOVE_TODO: {
            const { id } = payload;
            const filteredTodos = state.data.filter((todo: Todo) => todo.id !== id);
            return { ...state, data: filteredTodos };
        }
        case MARK_COMPLETED: {
            const { todo: updatedTodo } = payload;
            const updatedTodos = state.data.map((todo: Todo) => {
                if(todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            });
            return { ...state, data: updatedTodos };
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return { ...state, isLoading: false, data: todos};
        }
        case LOAD_TODOS_INPROGRESS:
            return { ...state, isLoading: true};
        case LOAD_TODOS_FAILURE:
            return { ...state, isLoading: false};
        default:
            return state;
    };
};
