import React, {useEffect} from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { loadTodos, deleteTodoRequest, markTodoCompletedRequest } from '../store/thunks';
import { getTodosLoading, getCompletedTodos, getInCompleteTodos } from '../store/selecters';
import styled from 'styled-components';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, inCompletedTodos, onRemoveTodo, isLoading, startLoadingTodos, markCompleted }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
                startLoadingTodos();
            }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const loadingMessage = <div>Loading Todos...</div>;
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>In Complete</h3>
            {inCompletedTodos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    onMarkCompleted={markCompleted}
                />
            )}
            <h3>Completed</h3>
            {completedTodos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemoveTodo={onRemoveTodo}
                    onMarkCompleted={markCompleted}
                />
            )}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    inCompletedTodos: getInCompleteTodos(state),
    isLoading: getTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onRemoveTodo: id => dispatch(deleteTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),
    markCompleted: (id) => dispatch(markTodoCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);